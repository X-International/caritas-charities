import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

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
        <section className="bg-[#b10017] text-white section-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/resources/news" className="hover:underline text-white">RESOURCES</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">ANNUAL REPORTS</li>
              </ol>
            </nav>
            <Heading level={1} variant="page" color="white">
              Annual Reports
            </Heading>
            <Lead variant="hero">
              Transparent financial auditing and yearly impact reviews for our supporters and partners.
            </Lead>
          </div>
        </section>

        {/* Reports Archive */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-8">
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
