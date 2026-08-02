import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";

export const metadata = {
  title: "Donate & Support | Caritas Kampala",
  description:
    "Support Caritas Kampala's emergency relief campaigns, orphanages, and food security programmes.",
};

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Breadcrumb Container - Matches Navbar Padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#b10017] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                DONATE
              </li>
            </ol>
          </nav>
        </div>

        <ContactHero />

        {/* Donation Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-12 sm:py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl space-y-4 border border-amber-200/60">
              <h2 className="text-2xl font-serif font-bold text-[#b10017]">Physical Donations &amp; Drop-offs</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                We accept non-perishable food items (rice, posho, maize, beans, sugar, cooking oil), blankets, clothes, and scholastic materials at our main office.
              </p>
              <div className="pt-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
                Location: Caritas Kampala Main Office, Nsambya, Kampala
              </div>
            </div>

            <div className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl space-y-4 border border-amber-200/60">
              <h2 className="text-2xl font-serif font-bold text-[#b10017]">Financial Contributions</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                For bank transfers and mobile money donations, please reach out directly to our finance desk.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+256762506906"
                  className="inline-block bg-[#b10017] text-white font-bold text-xs px-6 py-3 rounded-full uppercase tracking-wider hover:bg-red-900 transition-colors"
                >
                  Call Donation Desk: +256 762 506 906
                </a>
              </div>
            </div>
          </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
