import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Annual Reports | Caritas Kampala",
  description:
    "Financial accountability statements and annual progress publications of the Caritas Kampala Charities Office.",
  alternates: { canonical: "/resources/annual-reports" },
};

export default function AnnualReportsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/resources" className="hover:underline text-white">RESOURCES</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">ANNUAL REPORTS</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Annual Reports
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Transparent financial auditing and yearly impact reviews for our supporters and partners.
            </p>
          </div>
        </section>

        {/* Reports Archive */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
          <div className="bg-[#f4efe6] p-8 rounded-2xl border border-amber-200 text-center space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#b10017]">Annual Publications Archive</h2>
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
