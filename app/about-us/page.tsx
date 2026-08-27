import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import SidebarCard from "@/components/SidebarCard";
import VisionQuote from "@/components/VisionQuote";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "About Us | Caritas Kampala Charities Office",
  description:
    "Learn about the mission, vision, and values of the Charities Office of Caritas Kampala, serving the Archdiocese since its founding.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="About Caritas Kampala"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "ABOUT US" }
          ]}
          description="Serving the Kampala Archdiocese through compassion, dignity, and practical support for those who need it most."
        />

        {/* Content Section */}
        <section className="site-container section-md space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                <Heading level={2} variant="subsection" color="red">
                  Our Role
                </Heading>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    The Charities Office, under Caritas Kampala, serves people and communities experiencing poverty, vulnerability and marginalisation across the Kampala Archdiocese.
                  </p>
                  <p>
                    Our work combines practical support with compassionate accompaniment. We also respond when emergencies and disasters affect communities, helping people meet urgent needs and begin recovering from crisis.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
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
              </div>

              <div className="space-y-6">
                <Heading level={2} variant="subsection" color="red">
                  Dignity, Solidarity and Shared Responsibility
                </Heading>
                <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  <p>
                    We believe charity is more than responding to immediate need. It begins with recognising the dignity of every person, listening to people's experiences and responding through practical action.
                  </p>
                  <p>
                    Our work seeks to bring people together — communities, charity homes, volunteers, partners and supporters — around a shared responsibility to care for those experiencing hardship and to address the conditions that keep people vulnerable.
                  </p>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t border-gray-200">
                <Heading level={2} variant="section" color="red">
                  The Journey and Mission of Caritas Kampala
                </Heading>
                <div className="space-y-8">
                  <Text size="lg" className="leading-loose text-gray-800">
                    At the Caritas Kampala Charities Office, we are dedicated to alleviating poverty, promoting social justice, and fostering community solidarity within the Kampala Archdiocese. Inspired by the Gospel and Catholic Social Teaching, our work is driven by compassion and love, serving the most vulnerable, including the poor, marginalized groups, persons with disabilities, and orphans, by reaching out with care to help them live fulfilling lives.
                  </Text>
                  <Text size="lg" className="leading-loose text-gray-800">
                    Our office responds to emergencies and disasters, providing vital assistance to affected communities to help them cope with tragedy. We strive to save lives, relieve suffering, and rebuild livelihoods and communities. We serve all people, regardless of gender, sex, religion, or ethnicity.
                  </Text>
                  <Text size="lg" className="leading-loose text-gray-800">
                    We are committed to sustaining vital programs and services for the most needy, such as the elderly, challenged families and children, urban refugees and asylum seekers, and those living with medical and special needs. All these efforts are carried out by energizing Catholic communities and all people of good will to stand in solidarity with their brothers and sisters in the Kampala Archdiocese.
                  </Text>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <SidebarCard />
            </div>
          </div>

          <VisionQuote />

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
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
