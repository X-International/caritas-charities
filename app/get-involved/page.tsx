import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Get Involved | Caritas Kampala",
  description:
    "Partner with Caritas Kampala, volunteer with parish teams, or organize community fundraising initiatives.",
};

export default function GetInvolvedPage() {
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
                <li aria-current="page" className="text-red-200">GET INVOLVED</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Get Involved
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Join hands with Caritas Kampala as a volunteer, parish champion, or corporate partner.
            </p>
          </div>
        </section>

        {/* Options */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl space-y-3 shadow-sm shadow-gray-200/60">
              <h2 className="text-xl font-serif font-bold text-[#b10017]">Volunteer With Us</h2>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Assist in logistics, food packaging, parish collections, and community outreach.
              </p>
            </div>
            <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl space-y-3 shadow-sm shadow-gray-200/60">
              <h2 className="text-xl font-serif font-bold text-[#b10017]">Fundraise for Us</h2>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Organize parish drives, school collections, or corporate fundraisers for our relief appeals.
              </p>
            </div>
            <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl space-y-3 shadow-sm shadow-gray-200/60">
              <h2 className="text-xl font-serif font-bold text-[#b10017]">Institutional Partnership</h2>
              <p className="text-sm text-gray-900 leading-relaxed font-sans">
                Partner your company, foundation, or international agency with Caritas Kampala programmes.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
