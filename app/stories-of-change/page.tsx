import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = {
  title: "Stories of Change | Caritas Kampala",
  description:
    "Read inspiring stories of transformation, hope, and resilience from beneficiaries of Caritas Kampala.",
};

const stories = [
  {
    title: "Overcoming Drought in Karamoja: A Family's Journey",
    category: "Emergency Relief",
    date: "24 July 2026",
    summary: "How direct food assistance provided by Caritas Kampala restored hope to families facing famine in Kotido.",
    image: "/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg",
  },
  {
    title: "Empowering Youth Through Vocational Skills",
    category: "Livelihoods",
    date: "12 June 2026",
    summary: "Young men and women gain practical carpentry, tailoring, and agricultural skills to support their households.",
    image: "/images/Main Slider/Caritas_Kampala_18.jpg",
  },
  {
    title: "A Safe Haven for Abandoned Children",
    category: "Child Protection",
    date: "05 May 2026",
    summary: "Inside one of the Chaconet partner homes providing love, rehabilitation, and education to vulnerable children.",
    image: "/images/Charities/Caritas_Kampala_83.jpg",
  },
];

export default function StoriesOfChangePage() {
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
                <li aria-current="page" className="text-red-200">STORIES OF CHANGE</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Stories of Change
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Real testimonies of hope, dignity, and positive transformation across our communities.
            </p>
          </div>
        </section>

        {/* Stories List */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <article key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="relative h-52 w-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-[#b10017] bg-red-50 px-2.5 py-1 rounded-full uppercase tracking-wider">{story.category}</span>
                      <span className="text-gray-400">{story.date}</span>
                    </div>
                    <h2 className="text-lg font-serif font-bold text-gray-900 leading-snug">{story.title}</h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{story.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
