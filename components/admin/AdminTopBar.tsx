"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, User } from "lucide-react";

interface AdminTopBarProps {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export default function AdminTopBar({
  mobileMenuOpen,
  onToggleMobileMenu,
}: AdminTopBarProps) {
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

      {/* Right: Account Placeholder (Will connect to Supabase Auth in Phase 2) */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700">
          <User className="w-4 h-4 text-gray-500" />
          <span>Staff Portal (Phase 1)</span>
        </div>
      </div>
    </header>
  );
}
