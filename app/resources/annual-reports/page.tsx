import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "Annual Reports | Caritas Kampala Charities Office",
  description: "View reports on our work, progress, and organisational activities.",
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
            { label: "Resources", href: "/resources" },
            { label: "Annual Reports" },
          ]}
          description="View reports on our work, progress, and organisational activities."
        />

        {/* Coming Soon Panel */}
        <section className="site-container pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          <div className="max-w-[950px] mx-auto bg-[#f4efe6] px-6 sm:px-10 py-8 sm:py-12 rounded-2xl border border-amber-200 text-center space-y-4">
            <Heading level={2} variant="card" color="red">Annual Reports Coming Soon</Heading>
            <div className="text-gray-700 max-w-2xl mx-auto space-y-3 text-sm sm:text-base leading-relaxed">
              <p>
                Our annual reports will be published here as they become available. These reports will provide an overview of the Charities Office&apos;s work, activities, and accountability.
              </p>
              <p>
                Please check back for future publications.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 pt-2">
                For questions about reports or organisational information, please contact the Charities Office (<Link href="/contact-us" className="text-gray-700 underline hover:text-gray-900 font-medium">Contact Us</Link>).
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
