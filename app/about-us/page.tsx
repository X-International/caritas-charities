import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = {
  title: "About Us | Caritas Kampala",
  description:
    "The Charities Department is one of Caritas Kampala's core departments, serving the Archdiocese of Kampala through compassion, dignity, and practical support.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <Breadcrumb items={[
                { label: "HOME", href: "/" },
                { label: "ABOUT US" }
            ]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              About Caritas Kampala
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Serving the Archdiocese of Kampala through compassion, dignity, and practical support for those who need it most.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#b10017]">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Caritas Kampala is the socio-pastoral ministry of the Catholic Church in the Archdiocese of Kampala. Established to put the gospel message of love and charity into concrete action, we serve all individuals regardless of religious, ethnic, or political background.
                </p>
                <p>
                  Our Charities Department works directly with vulnerable communities, orphanages, elderly care homes, healthcare initiatives, and emergency relief efforts throughout the Archdiocese.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/about-us/our-story"
                  className="inline-block bg-[#b10017] text-white hover:bg-white hover:text-[#b10017] border-2 border-[#b10017] text-xs font-bold px-7 py-3 rounded-full tracking-wider uppercase transition-colors"
                >
                  Read Our Full Story
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-105 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/images/Main Slider/Caritas_Kampala_18.jpg"
                alt="Caritas Kampala outreach team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Link
              href="/about-us/our-story"
              className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h3 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                Our Story &amp; Values &rarr;
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Discover our history, mission, and the Catholic social teachings that inspire our daily work.
              </p>
            </Link>

            <Link
              href="/about-us/our-team"
              className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h3 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                Our Team &rarr;
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Meet the dedicated leaders, coordinators, and field teams bringing hope to communities.
              </p>
            </Link>

            <Link
              href="/about-us/chaconet-partners"
              className="bg-[#f4efe6] p-6 sm:p-8 rounded-2xl space-y-3 hover:bg-red-50 transition-colors group"
            >
              <h3 className="text-xl font-serif font-bold text-[#b10017] group-hover:underline">
                Chaconet Partners &rarr;
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Explore our network of charity homes and institutional partners across Kampala Archdiocese.
              </p>
            </Link>
          </div>

          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
