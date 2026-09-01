import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AdminRole = "owner" | "editor";

export interface AuthorizedAdminUser {
  id: string;
  email: string;
  displayName: string | null;
  role: AdminRole;
  isActive: boolean;
}

/**
 * Server-side helper to query and verify the authenticated staff user against public.staff_profiles.
 * Returns sanitized staff profile object if authenticated, active, and authorized (owner/editor).
 * Returns null if unauthenticated or unauthorized.
 */
export async function getAuthorizedAdminUser(): Promise<AuthorizedAdminUser | null> {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return null;
    }

    const { data: profile, error: profileError } = await supabase
      .from("staff_profiles")
      .select("id, email, display_name, role, is_active")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError || !profile) {
      return null;
    }

    if (!profile.is_active) {
      return null;
    }

    if (profile.role !== "owner" && profile.role !== "editor") {
      return null;
    }

    return {
      id: profile.id,
      email: profile.email || user.email || "",
      displayName: profile.display_name,
      role: profile.role as AdminRole,
      isActive: profile.is_active,
    };
  } catch {
    return null;
  }
}

/**
 * Server-side requirement helper. Guarantees authorized staff user object or performs server-side redirect.
 */
export async function requireAdminUser(): Promise<AuthorizedAdminUser> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const staffUser = await getAuthorizedAdminUser();

  if (!staffUser) {
    redirect("/admin/unauthorized");
  }

  return staffUser;
}
