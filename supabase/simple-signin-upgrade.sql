-- Simple sign-in upgrade: learners enter name, email and role and go straight in (Supabase anonymous sign-in),
-- with no emailed link. Learners can confirm or correct the certificate address, and admins can resend a certificate.
-- Run this once in the Supabase SQL editor, then turn on
-- Authentication > Sign In / Providers > "Allow anonymous sign-ins". Safe to run more than once.

alter table public.profiles add column if not exists certificate_email_confirmed boolean not null default false;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into public.profiles(id,full_name,email) values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),lower(coalesce(new.email,new.raw_user_meta_data->>'email'))); insert into public.learner_progress(user_id) values(new.id); return new; end; $$;

-- Learners with progress and no emailed certificate for their current role. The certificate goes to profiles.email
-- (the address the learner typed or confirmed, or an admin's correction). Anonymous learners are included once they
-- confirm the address, or a day after their last activity. Only the service role may call it.
create or replace function public.learners_for_certificates() returns table(user_id uuid,full_name text,email text,work_role text,scores jsonb,completed_modules jsonb) language sql stable security definer set search_path=public as $$
  select p.id,p.full_name,coalesce(nullif(p.email,''),u.email),u.raw_user_meta_data->>'work_role',coalesce(lp.scores,'{}'::jsonb),coalesce(lp.completed_modules,'[]'::jsonb)
  from public.profiles p join auth.users u on u.id=p.id join public.learner_progress lp on lp.user_id=p.id
  where (u.email_confirmed_at is not null or (u.is_anonymous and coalesce(p.email,'')<>'' and (p.certificate_email_confirmed or lp.last_activity<now()-interval '1 day')))
    and u.raw_user_meta_data->>'work_role' is not null
    and jsonb_array_length(coalesce(lp.completed_modules,'[]'::jsonb))>0
    and not exists (select 1 from public.certificates c where c.user_id=p.id and c.work_role=u.raw_user_meta_data->>'work_role' and c.emailed_at is not null);
$$;
revoke all on function public.learners_for_certificates() from public, anon, authenticated;
grant execute on function public.learners_for_certificates() to service_role;

-- A learner confirms or corrects their certificate address. Not allowed once the certificate for their role is emailed.
create or replace function public.set_certificate_email(new_email text) returns text language plpgsql security definer set search_path=public as $$
declare e text := lower(trim(new_email));
begin
  if auth.uid() is null then raise exception 'Sign in first.'; end if;
  if e !~ '^[^\s@]+@[^\s@]+\.[^\s@]+$' then raise exception 'Enter a valid email address.'; end if;
  if exists (select 1 from public.certificates c join auth.users u on u.id=c.user_id where c.user_id=auth.uid() and c.work_role=u.raw_user_meta_data->>'work_role' and c.emailed_at is not null) then
    raise exception 'Your certificate has already been emailed. Ask your administrator to resend it to a different address.';
  end if;
  update public.profiles set email=e, certificate_email_confirmed=true where id=auth.uid();
  return e;
end; $$;
revoke all on function public.set_certificate_email(text) from public, anon;
grant execute on function public.set_certificate_email(text) to authenticated;

-- An admin corrects a learner's address and queues their certificate to be emailed again on the next job run.
create or replace function public.admin_resend_certificate(target uuid, target_role text, new_email text) returns void language plpgsql security definer set search_path=public as $$
declare e text := lower(trim(new_email));
begin
  if not public.is_admin() then raise exception 'Only administrators can resend certificates.'; end if;
  if e !~ '^[^\s@]+@[^\s@]+\.[^\s@]+$' then raise exception 'Enter a valid email address.'; end if;
  update public.certificates set emailed_at=null where user_id=target and work_role=target_role;
  if not found then raise exception 'No certificate found for this learner and role.'; end if;
  update public.profiles set email=e, certificate_email_confirmed=true where id=target;
end; $$;
revoke all on function public.admin_resend_certificate(uuid,text,text) from public, anon;
grant execute on function public.admin_resend_certificate(uuid,text,text) to authenticated;

-- Fill in the profile email for anyone who signed in anonymously before this upgrade.
update public.profiles p set email=lower(u.raw_user_meta_data->>'email') from auth.users u where u.id=p.id and coalesce(p.email,'')='' and u.raw_user_meta_data->>'email' is not null;
