-- AI Governance Academy V3 database, authorization, and admin reporting
create extension if not exists pgcrypto;
create table if not exists public.profiles (id uuid primary key references auth.users(id) on delete cascade, full_name text, email text, role text not null default 'learner' check (role in ('learner','admin')), created_at timestamptz not null default now());
create table if not exists public.learner_progress (user_id uuid primary key references auth.users(id) on delete cascade, scores jsonb not null default '{}'::jsonb, completed_modules jsonb not null default '[]'::jsonb, attempts jsonb not null default '{}'::jsonb, study_minutes integer not null default 0 check(study_minutes>=0), started_at timestamptz not null default now(), last_activity timestamptz not null default now());
create table if not exists public.activity_events (id bigint generated always as identity primary key, user_id uuid not null references auth.users(id) on delete cascade, event_type text not null, module_index integer, event_data jsonb not null default '{}'::jsonb, created_at timestamptz not null default now());
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into public.profiles(id,full_name,email) values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),lower(coalesce(new.email,new.raw_user_meta_data->>'email'))); insert into public.learner_progress(user_id) values(new.id); return new; end; $$;
drop trigger if exists on_auth_user_created on auth.users; create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
create or replace function public.is_admin() returns boolean language sql stable security definer set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and role='admin'); $$;
alter table public.profiles enable row level security; alter table public.learner_progress enable row level security; alter table public.activity_events enable row level security;
create policy "read own profile" on public.profiles for select to authenticated using(id=auth.uid() or public.is_admin());
create policy "read own progress" on public.learner_progress for select to authenticated using(user_id=auth.uid() or public.is_admin());
create policy "insert own progress" on public.learner_progress for insert to authenticated with check(user_id=auth.uid());
create policy "update own progress" on public.learner_progress for update to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid());
create policy "insert own events" on public.activity_events for insert to authenticated with check(user_id=auth.uid());
create policy "admins read events" on public.activity_events for select to authenticated using(public.is_admin());
drop function if exists public.admin_learning_summary();
create function public.admin_learning_summary() returns table(user_id uuid,full_name text,email text,work_role text,completed_count integer,average_score numeric,scores jsonb,study_minutes integer,last_activity timestamptz) language sql stable security definer set search_path=public as $$ select p.id,p.full_name,p.email,u.raw_user_meta_data->>'work_role',jsonb_array_length(coalesce(lp.completed_modules,'[]'::jsonb)),(select avg(value::numeric) from jsonb_each_text(coalesce(lp.scores,'{}'::jsonb))),coalesce(lp.scores,'{}'::jsonb),coalesce(lp.study_minutes,0),lp.last_activity from public.profiles p left join auth.users u on u.id=p.id left join public.learner_progress lp on lp.user_id=p.id where public.is_admin() order by lp.last_activity desc nulls last; $$;
revoke all on function public.admin_learning_summary() from public; grant execute on function public.admin_learning_summary() to authenticated;
revoke all on function public.is_admin() from public; grant execute on function public.is_admin() to authenticated;
grant usage on schema public to authenticated;
grant select on public.profiles to authenticated;
grant select,insert,update on public.learner_progress to authenticated;
grant select,insert on public.activity_events to authenticated;
-- After registering your owner account, run this with your email:
-- update public.profiles set role='admin' where email='YOUR_EMAIL@example.com';

-- Completion certificates. Rows are written only by the completion email job (service role);
-- learners can read their own, admins can read all.
create table if not exists public.certificates (
  user_id uuid not null references auth.users(id) on delete cascade,
  work_role text not null,
  certificate_id text not null unique,
  average_score numeric,
  issued_at timestamptz not null default now(),
  emailed_at timestamptz,
  primary key (user_id, work_role)
);
alter table public.certificates enable row level security;
drop policy if exists "read own certificates" on public.certificates;
create policy "read own certificates" on public.certificates for select to authenticated using (user_id=auth.uid() or public.is_admin());
revoke all on public.certificates from anon, authenticated;
grant select on public.certificates to authenticated;

-- Simple sign-in (anonymous) and certificate email management.
alter table public.profiles add column if not exists certificate_email_confirmed boolean not null default false;

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
