import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">DONATE</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Support Our Mission
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Every contribution helps us bring food, shelter, and medical care to vulnerable families.
            </p>
          </div>
        </section>

        {/* Donation Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
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
      </main>

      <Footer />
    </div>
  );
}
