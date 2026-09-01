import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return supabaseResponse;
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value)
        );
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // Verify server-side user identity securely
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protected admin routes: require both valid Supabase Auth AND active staff_profile (owner / editor)
  // /admin/login, /admin/unauthorized, /admin/reset-password are publicly reachable
  if (
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    pathname !== "/admin/unauthorized" &&
    pathname !== "/admin/reset-password"
  ) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    const { data: profile } = await supabase
      .from("staff_profiles")
      .select("id, role, is_active")
      .eq("id", user.id)
      .maybeSingle();

    if (
      !profile ||
      !profile.is_active ||
      (profile.role !== "owner" && profile.role !== "editor")
    ) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  // Handle /admin/login for already authenticated users
  if (pathname === "/admin/login") {
    if (user) {
      const { data: profile } = await supabase
        .from("staff_profiles")
        .select("id, role, is_active")
        .eq("id", user.id)
        .maybeSingle();

      const isAuthorized =
        profile &&
        profile.is_active &&
        (profile.role === "owner" || profile.role === "editor");

      const url = request.nextUrl.clone();
      url.pathname = isAuthorized ? "/admin" : "/admin/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}
