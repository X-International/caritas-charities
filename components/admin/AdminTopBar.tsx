"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X, User, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

interface AdminTopBarProps {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export default function AdminTopBar({
  mobileMenuOpen,
  onToggleMobileMenu,
}: AdminTopBarProps) {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const supabase = createClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user?.email) {
          setUserEmail(user.email);
        }
      } catch {
        // Fallback for offline or client init delay
      }
    };
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    setLoggingOut(true);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 h-16 flex items-center px-4 sm:px-6 justify-between">
      {/* Left: Mobile Menu Toggle & Brand */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#b10017]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <Link href="/admin" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logos/Caritas_Kampala.png"
            alt="Caritas Kampala Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b10017] block leading-none">
              Caritas Kampala
            </span>
            <span className="text-sm font-semibold text-gray-900 leading-tight block">
              Charity Office Dashboard
            </span>
          </div>
        </Link>
      </div>

      {/* Right: Authenticated Account & Sign Out */}
      <div className="flex items-center gap-3">
        {userEmail && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700">
            <User className="w-3.5 h-3.5 text-gray-500" />
            <span className="max-w-[160px] truncate">{userEmail}</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleSignOut}
          disabled={loggingOut}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:text-[#b10017] hover:bg-red-50 transition-colors disabled:opacity-60"
          title="Sign Out"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{loggingOut ? "Signing Out..." : "Sign Out"}</span>
        </button>
      </div>
    </header>
  );
}
