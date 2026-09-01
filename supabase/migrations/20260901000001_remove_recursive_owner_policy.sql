-- Migration: Remove recursive owner read-all policy on staff_profiles
-- Description: Ensures public.staff_profiles enforces least-privilege self-read policy without recursion.

drop policy if exists "Owners can read all staff profiles" on public.staff_profiles;
