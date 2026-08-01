import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Resources | Caritas Kampala",
  description:
    "Explore news, photo gallery, annual publications, and FAQs from Caritas Kampala Charities Department.",
};

export default function ResourcesPage() {
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
                <li aria-current="page" className="text-red-200">RESOURCES</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Resources &amp; Publications
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              News, media galleries, report archives, and answers to common questions about our work.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/resources/news"
              className="bg-[#f4efe6] p-6 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h2 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                News &amp; Updates &rarr;
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Stay updated with press releases, emergency notices, and operational reports.
              </p>
            </Link>

            <Link
              href="/resources/gallery"
              className="bg-[#f4efe6] p-6 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h2 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                Photo Gallery &rarr;
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Browse images capturing community interventions, aid delivery, and parish activities.
              </p>
            </Link>

            <Link
              href="/resources/annual-reports"
              className="bg-[#f4efe6] p-6 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h2 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                Annual Reports &rarr;
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Access official financial statements, accountability documents, and yearly reviews.
              </p>
            </Link>

            <Link
              href="/resources/faqs"
              className="bg-[#f4efe6] p-6 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h2 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                FAQs &rarr;
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Find clear answers regarding donation drop-offs, volunteering, and partner support.
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
