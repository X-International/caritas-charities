"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminTopBar from "./AdminTopBar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If on login, unauthorized, or reset-password page, render full screen without dashboard shell
  if (
    pathname === "/admin/login" ||
    pathname === "/admin/unauthorized" ||
    pathname === "/admin/reset-password"
  ) {
    return <div className="min-h-screen bg-[#f9f6f0]">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <AdminTopBar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
      />

      <div className="flex-1 flex overflow-hidden relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 shrink-0">
          <AdminSidebar />
        </div>

        {/* Mobile Menu Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative w-64 bg-gray-900 z-10 h-full">
              <AdminSidebar onNavClick={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}

        {/* Main Content Workspace Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
