import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = {
  title: "Our Story & Values | Caritas Kampala",
  description:
    "Learn about the history, vision, mission, and Catholic Social Teaching values that guide Caritas Kampala's work.",
};

export default function OurStoryPage() {
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
                  <Link href="/about-us" className="hover:underline text-white">ABOUT US</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">OUR STORY &amp; VALUES</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Our Story &amp; Values
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Guided by Matthew 25:35, we bring love, compassion, and human dignity to all people in need.
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#b10017]">
              Rooted in Faith and Compassion
            </h2>
            <p>
              Caritas Kampala was established as the official charitable arm of the Catholic Archdiocese of Kampala. For decades, our department has responded to humanitarian emergencies, socio-economic challenges, and the everyday needs of vulnerable individuals across urban and rural communities in central Uganda.
            </p>
            <p>
              Our inspiration stems directly from Gospel principles and the tradition of Catholic Social Teaching: promoting human dignity, the common good, solidarity, and preferential option for the poor.
            </p>

            <div className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl border-l-4 border-[#b10017] my-8 space-y-3">
              <h3 className="text-xl font-serif font-bold text-[#b10017] italic">
                &ldquo;Amen, I say to you, whatever you did for one of these least brothers of mine, you did for me.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-widest">
                Matthew 25:40
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#b10017] pt-4">
              Core Principles That Define Us
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 pl-2">
              <li><strong className="text-gray-900">Human Dignity:</strong> Every person is created in the image of God and possesses inherent worth.</li>
              <li><strong className="text-gray-900">Non-Discrimination:</strong> We serve all people in need regardless of religion, ethnicity, gender, or status.</li>
              <li><strong className="text-gray-900">Solidarity &amp; Stewardship:</strong> Standing united with communities to build lasting resilience.</li>
              <li><strong className="text-gray-900">Integral Development:</strong> Empowering individuals physically, socially, and spiritually.</li>
            </ul>
          </div>

          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
