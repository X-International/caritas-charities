import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Programmes | Caritas Kampala",
  description:
    "Explore Caritas Kampala's programmes in emergency relief, food security, livelihoods, healthcare, and social welfare.",
};

const programmes = [
  {
    title: "Emergency & Disaster Relief",
    desc: "Providing food, household essentials, and medical aid to communities struck by famine, flood, or crisis.",
    image: "/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg",
  },
  {
    title: "Food Security & Livelihoods",
    desc: "Empowering rural and peri-urban farmers with sustainable agricultural tools, seeds, and climate resilience training.",
    image: "/images/Main Slider/Caritas_Kampala_91.jpg",
  },
  {
    title: "Child Protection & Education Support",
    desc: "Partnering with charity homes to fund school fees, scholastic materials, and child safeguarding policies.",
    image: "/images/Charities/Caritas_Kampala_83.jpg",
  },
  {
    title: "Elderly Care & Community Support",
    desc: "Delivering monthly food rations and healthcare support to destitute seniors across parishes in Kampala Archdiocese.",
    image: "/images/Main Slider/Caritas_Kampala_70.jpg",
  },
];

export default function OurProgrammesPage() {
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
                <li aria-current="page" className="text-red-200">OUR PROGRAMMES</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Our Programmes
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Transforming lives through structured humanitarian, pastoral, and community development initiatives.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((prog, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-56 w-full">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h2 className="text-xl font-serif font-bold text-[#b10017]">{prog.title}</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">{prog.desc}</p>
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
