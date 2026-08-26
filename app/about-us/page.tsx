import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import { Heading, Lead } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "About Us | Caritas Kampala Charities Office",
  description:
    "Learn about the mission, vision and values of the Charities Office, part of Caritas Kampala, serving the Kampala Archdiocese.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white section-lg">
          <div className="site-container space-y-4">
            <Breadcrumb items={[
                { label: "HOME", href: "/" },
                { label: "ABOUT US" }
            ]} />
            <Heading level={1} variant="page" color="white">
              About Caritas Kampala
            </Heading>
            <Lead variant="hero">
              Serving the Kampala Archdiocese through compassion, dignity, and practical support for those who need it most.
            </Lead>
          </div>
        </section>

        {/* Content Section */}
        <section className="site-container section-md space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Heading level={2} variant="subsection" color="red">
                Who We Are
              </Heading>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Caritas Kampala is the socio-pastoral ministry of the Catholic Church in the Kampala Archdiocese. Established to put the gospel message of love and charity into concrete action, we serve all individuals regardless of religious, ethnic, or political background.
                </p>
                <p>
                  Our Charities Office works directly with vulnerable communities, orphanages, elderly care homes, healthcare initiatives, and emergency relief efforts throughout the Archdiocese.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  href="/about-us/our-story"
                  variant="primary"
                  size="md"
                >
                  Read Our Full Story
                </Button>
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
