-- AI Governance Academy V3 database, authorization, and admin reporting
create extension if not exists pgcrypto;
create table if not exists public.profiles (id uuid primary key references auth.users(id) on delete cascade, full_name text, email text, role text not null default 'learner' check (role in ('learner','admin')), created_at timestamptz not null default now());
create table if not exists public.learner_progress (user_id uuid primary key references auth.users(id) on delete cascade, scores jsonb not null default '{}'::jsonb, completed_modules jsonb not null default '[]'::jsonb, attempts jsonb not null default '{}'::jsonb, study_minutes integer not null default 0 check(study_minutes>=0), started_at timestamptz not null default now(), last_activity timestamptz not null default now());
create table if not exists public.activity_events (id bigint generated always as identity primary key, user_id uuid not null references auth.users(id) on delete cascade, event_type text not null, module_index integer, event_data jsonb not null default '{}'::jsonb, created_at timestamptz not null default now());
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$ begin insert into public.profiles(id,full_name,email) values(new.id,coalesce(new.raw_user_meta_data->>'full_name',''),new.email); insert into public.learner_progress(user_id) values(new.id); return new; end; $$;
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
