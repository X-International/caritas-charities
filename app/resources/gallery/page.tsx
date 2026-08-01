import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Photo Gallery | Caritas Kampala",
  description:
    "View photo highlights of Caritas Kampala's humanitarian relief, community empowerment, and parish programs.",
};

const photos = [
  { src: "/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg", title: "Famine Relief Distribution in Karamoja" },
  { src: "/images/Main Slider/Caritas_Kampala_18.jpg", title: "Field Team Community Engagement" },
  { src: "/images/Charities/Caritas_Kampala_83.jpg", title: "Child Support and Education Outreach" },
  { src: "/images/Main Slider/Caritas_Kampala_91.jpg", title: "Sustainable Agriculture Training" },
  { src: "/images/Main Slider/Caritas_Kampala_70.jpg", title: "Parish Volunteer Mobilization" },
  { src: "/images/Main Slider/Caritas_Kampala_07.jpg", title: "Archdiocese Leadership Support" },
];

export default function GalleryPage() {
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
                <li aria-current="page" className="text-red-200">GALLERY</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Photo Gallery
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Capturing moments of hope, relief, and community solidarity across the Archdiocese.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((item, index) => (
              <div key={index} className="relative group h-64 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs sm:text-sm font-medium leading-snug">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
