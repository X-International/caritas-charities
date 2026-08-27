import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

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
            { label: "HOME", href: "/" },
            { label: "RESOURCES", href: "/resources" },
            { label: "ANNUAL REPORTS" },
          ]}
          description="Transparent financial auditing and yearly impact reviews for our supporters and partners."
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
      </main>

      <Footer />
    </div>
  );
}
