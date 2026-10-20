-- Upgrade for an existing V3 database: adds each learner's role to the admin summary.
-- Learners' roles are stored in their auth user metadata (work_role); no table changes are needed.
drop function if exists public.admin_learning_summary();
create function public.admin_learning_summary() returns table(user_id uuid,full_name text,email text,work_role text,completed_count integer,average_score numeric,scores jsonb,study_minutes integer,last_activity timestamptz) language sql stable security definer set search_path=public as $$ select p.id,p.full_name,p.email,u.raw_user_meta_data->>'work_role',jsonb_array_length(coalesce(lp.completed_modules,'[]'::jsonb)),(select avg(value::numeric) from jsonb_each_text(coalesce(lp.scores,'{}'::jsonb))),coalesce(lp.scores,'{}'::jsonb),coalesce(lp.study_minutes,0),lp.last_activity from public.profiles p left join auth.users u on u.id=p.id left join public.learner_progress lp on lp.user_id=p.id where public.is_admin() order by lp.last_activity desc nulls last; $$;
revoke all on function public.admin_learning_summary() from public; grant execute on function public.admin_learning_summary() to authenticated;

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

-- Verified learners with progress and no emailed certificate for their current role. Only the service role may call it.
create or replace function public.learners_for_certificates() returns table(user_id uuid,full_name text,email text,work_role text,scores jsonb,completed_modules jsonb) language sql stable security definer set search_path=public as $$
  select p.id,p.full_name,u.email,u.raw_user_meta_data->>'work_role',coalesce(lp.scores,'{}'::jsonb),coalesce(lp.completed_modules,'[]'::jsonb)
  from public.profiles p join auth.users u on u.id=p.id join public.learner_progress lp on lp.user_id=p.id
  where u.email_confirmed_at is not null and u.raw_user_meta_data->>'work_role' is not null
    and jsonb_array_length(coalesce(lp.completed_modules,'[]'::jsonb))>0
    and not exists (select 1 from public.certificates c where c.user_id=p.id and c.work_role=u.raw_user_meta_data->>'work_role' and c.emailed_at is not null);
$$;
revoke all on function public.learners_for_certificates() from public, anon, authenticated;
grant execute on function public.learners_for_certificates() to service_role;
