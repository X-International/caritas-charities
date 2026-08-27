import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = buildPageMetadata({
  title: "Annual Reports | Caritas Kampala Charities Office",
  description: "Annual impact reviews and financial accountability reports from the Charities Office of Caritas Kampala.",
  path: "/resources/annual-reports",
  robots: { index: true, follow: true },
});

export default function AnnualReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Annual Reports"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources/news" },
            { label: "Annual Reports" },
          ]}
          description="View reports on our work, progress, and organisational activities."
        />

        {/* Reports Archive */}
        <section className="site-container section-md space-y-8">
          <div className="bg-[#f4efe6] p-8 rounded-2xl border border-amber-200 text-center space-y-3">
            <Heading level={2} variant="card" color="red">Annual Publications Archive</Heading>
            <p className="text-sm text-gray-700 max-w-lg mx-auto">
              Our 2025/2026 Annual Impact &amp; Financial Accountability Report is currently being compiled and will be available for PDF download shortly.
            </p>
          </div>
        </section>
        <div className="site-container py-4 sm:py-6">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
