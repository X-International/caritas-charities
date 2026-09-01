"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Calendar,
  AlertTriangle,
  Image as ImageIcon,
  FileText,
  ExternalLink,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "News & Updates", href: "/admin/news", icon: Newspaper },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Emergency Appeals", href: "/admin/appeals", icon: AlertTriangle },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Annual Reports", href: "/admin/reports", icon: FileText },
];

interface AdminSidebarProps {
  onNavClick?: () => void;
}

export default function AdminSidebar({ onNavClick }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between h-full border-r border-gray-800 shrink-0">
      {/* Top Section: Navigation Links */}
      <div className="p-4 space-y-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-3 block mb-3">
            CONTENT MANAGEMENT
          </span>
          <nav aria-label="Admin Navigation" className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onNavClick}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#b10017] text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Section: View Public Site */}
      <div className="p-4 border-t border-gray-800">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-400 hover:text-white hover:bg-gray-800 transition-colors group"
        >
          <span>View Website</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </aside>
  );
}
