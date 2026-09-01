import Link from "next/link";
import {
  Newspaper,
  Calendar,
  AlertTriangle,
  Image as ImageIcon,
  FileText,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { Heading } from "@/components/ui/Typography";

const modules = [
  {
    title: "News & Updates",
    description: "Manage website news, articles, and announcements.",
    href: "/admin/news",
    icon: Newspaper,
    badge: "Module Ready",
  },
  {
    title: "Events",
    description: "Manage upcoming meetings, gatherings, and community activities.",
    href: "/admin/events",
    icon: Calendar,
    badge: "Module Ready",
  },
  {
    title: "Emergency Appeals",
    description: "Manage current and future emergency relief campaigns.",
    href: "/admin/appeals",
    icon: AlertTriangle,
    badge: "Module Ready",
  },
  {
    title: "Gallery",
    description: "Manage published photographs and community activity galleries.",
    href: "/admin/gallery",
    icon: ImageIcon,
    badge: "Module Ready",
  },
  {
    title: "Annual Reports",
    description: "Manage annual publications and downloadable report documents.",
    href: "/admin/reports",
    icon: FileText,
    badge: "Module Ready",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8 py-2">
      {/* Header */}
      <div className="space-y-2 border-b border-gray-200 pb-5">
        <Heading level={1} variant="article" color="dark" className="text-2xl sm:text-3xl font-bold">
          Website Dashboard
        </Heading>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage approved content for the Charity Office website.
        </p>
      </div>

      {/* Phase 1 Status Callout Box */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="p-3 bg-amber-100 rounded-xl text-amber-800 shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-1 text-xs sm:text-sm text-amber-900">
          <p className="font-bold">Phase 1 Foundation Complete</p>
          <p className="text-amber-800 leading-relaxed">
            This workspace provides the private admin foundation for Caritas Kampala’s Charity Office. Real authentication and content management tools will be connected in Phase 2/3.
          </p>
        </div>
      </div>

      {/* Overview Module Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {modules.map((mod) => {
          const Icon = mod.icon;

          return (
            <Link
              key={mod.title}
              href={mod.href}
              className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4 hover:border-[#b10017] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-red-50 text-[#b10017] rounded-xl group-hover:bg-[#b10017] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {mod.badge}
                  </span>
                </div>
                <Heading level={3} variant="subsection" color="dark" className="text-lg font-bold">
                  {mod.title}
                </Heading>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div className="pt-2 flex items-center text-xs font-bold text-[#b10017] group-hover:translate-x-1 transition-transform">
                <span>Access Module</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
