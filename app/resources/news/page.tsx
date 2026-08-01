import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "News & Updates | Caritas Kampala",
  description:
    "The latest news, press releases, and operational updates from Caritas Kampala.",
};

const newsItems = [
  {
    title: "Kotido & Moroto Famine Relief Drive Mobilizes Parishes",
    date: "28 July 2026",
    category: "Emergency Appeal",
    snippet: "Parishes across Kampala Archdiocese coordinate food and relief items collection for Karamoja families.",
    image: "/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg",
  },
  {
    title: "Caritas Kampala Launches New Agro-Ecology Training Initiative",
    date: "15 June 2026",
    category: "Livelihoods",
    snippet: "Smallholder farmers in Mpigi district receive organic farming equipment and climate adaptation mentorship.",
    image: "/images/Main Slider/Caritas_Kampala_91.jpg",
  },
  {
    title: "Chaconet Annual Leadership Summit Concludes in Nsambya",
    date: "02 May 2026",
    category: "Partnership",
    snippet: "Directors of 14 Catholic charity homes convene to review safeguarding guidelines and medical care protocols.",
    image: "/images/Main Slider/Caritas_Kampala_18.jpg",
  },
];

export default function NewsPage() {
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
                <li aria-current="page" className="text-red-200">NEWS &amp; UPDATES</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              News &amp; Updates
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Stay informed with press statements, campaign launches, and operational progress.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, i) => (
              <article key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#b10017] font-bold uppercase tracking-wider bg-red-50 px-2.5 py-0.5 rounded">{news.category}</span>
                    <span className="text-gray-400 font-mono">{news.date}</span>
                  </div>
                  <h2 className="text-lg font-serif font-bold text-gray-900 leading-snug">{news.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{news.snippet}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
