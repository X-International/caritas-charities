-- Migration: Create staff_profiles table for role-based admin authorization
-- Description: Establishes staff profiles, owner/editor roles, and RLS policies for Caritas Kampala Charity Office.

-- 1. Create staff_profiles table
create table if not exists public.staff_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  role text not null check (role in ('owner', 'editor')),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Enable Row Level Security
alter table public.staff_profiles enable row level security;

-- 3. Grants for authenticated users
grant select on public.staff_profiles to authenticated;

-- 4. RLS Policy: Users can read their own staff profile
create policy "Users can read own staff profile"
  on public.staff_profiles
  for select
  to authenticated
  using (auth.uid() = id);

-- 5. Updated_at timestamp trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create or replace trigger on_staff_profiles_updated
  before update on public.staff_profiles
  for each row
  execute function public.handle_updated_at();
