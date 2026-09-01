import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { Heading } from "@/components/ui/Typography";

export default function AdminEventsPage() {
  return (
    <div className="space-y-6 py-2">
      <div className="flex items-center gap-3">
        <Link
          href="/admin"
          className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <Heading level={1} variant="article" color="dark" className="text-2xl font-bold">
            Events Management
          </Heading>
          <p className="text-gray-600 text-sm">
            Manage upcoming meetings, community gatherings, and parish activities.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center space-y-4 max-w-2xl mx-auto">
        <div className="w-12 h-12 bg-red-50 text-[#b10017] rounded-2xl flex items-center justify-center mx-auto">
          <Calendar className="w-6 h-6" />
        </div>
        <Heading level={2} variant="card" color="dark" className="text-xl">
          Events Content Management
        </Heading>
        <p className="text-gray-600 text-sm leading-relaxed max-w-lg mx-auto">
          This section will be connected to the website content management system in a later phase, allowing approved staff to publish and manage event schedules and venues.
        </p>
        <div className="pt-2">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
