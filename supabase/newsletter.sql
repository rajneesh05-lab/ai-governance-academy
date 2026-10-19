create extension if not exists pgcrypto;

create table if not exists public.newsletter_subscribers (
  email text primary key check (
    email = lower(email)
    and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ),
  unsubscribe_token uuid not null unique default gen_random_uuid(),
  is_active boolean not null default true,
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

alter table public.newsletter_subscribers enable row level security;
revoke all on public.newsletter_subscribers from anon, authenticated;

create or replace function public.subscribe_newsletter(p_email text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.newsletter_subscribers as existing (email)
  values (pg_catalog.lower(pg_catalog.btrim(p_email)))
  on conflict (email) do update
  set is_active = true,
      subscribed_at = now(),
      unsubscribed_at = null,
      unsubscribe_token = gen_random_uuid()
  where not existing.is_active;
end;
$$;
revoke all on function public.subscribe_newsletter(text) from public;
grant execute on function public.subscribe_newsletter(text) to anon, authenticated;

create or replace function public.unsubscribe_newsletter(p_token uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  changed integer;
begin
  update public.newsletter_subscribers
  set is_active = false, unsubscribed_at = pg_catalog.now()
  where unsubscribe_token = p_token and is_active;
  get diagnostics changed = row_count;
  return changed = 1;
end;
$$;
revoke all on function public.unsubscribe_newsletter(uuid) from public;
grant execute on function public.unsubscribe_newsletter(uuid) to anon, authenticated;
