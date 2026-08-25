import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import Card from "@/components/ui/Card";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Chaconet Partners | Caritas Kampala Charities Office",
  description:
    "The Charities Office works within Chaconet, a network of nine charity homes across the Archdiocese of Kampala.",
  path: "/about-us/chaconet-partners",
});

export default function ChaconetPartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <Breadcrumb
              items={[
                { label: "HOME", href: "/" },
                { label: "ABOUT US", href: "/about-us" },
                { label: "CHACONET PARTNERS" },
              ]}
            />
            <Heading level={1} variant="page" color="white">
              Partners &mdash; Chaconet Network
            </Heading>
            <Lead variant="hero">
              Uniting Catholic charity homes and care institutions across Kampala Archdiocese.
            </Lead>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
          <div className="max-w-4xl space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <Heading level={2} variant="subsection" color="red">
              What is Chaconet?
            </Heading>
            <p>
              Chaconet (Catholic Charity Homes Network) is an initiative under Caritas Kampala bringing together registered Catholic orphanages, disability centers, elderly homes, and rehabilitation facilities across the Archdiocese.
            </p>
            <p>
              By coordinating resources, policy compliance, and fundraising support, Chaconet ensures that every home meets high standards of care and protection for all residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <Card variant="info" className="space-y-3">
              <Heading level={3} variant="card" color="red">Child &amp; Youth Care Homes</Heading>
              <p className="text-sm text-gray-700 leading-relaxed">
                Providing shelter, education, nutrition, and psychological support for orphaned and vulnerable children.
              </p>
            </Card>
            <Card variant="info" className="space-y-3">
              <Heading level={3} variant="card" color="red">Elderly &amp; Special Needs Facilities</Heading>
              <p className="text-sm text-gray-700 leading-relaxed">
                Offering medical care, dignity, and family-style shelter to seniors and individuals with severe disabilities.
              </p>
            </Card>
          </div>

          <DonateOnlineCard />
        </section>
      </main>

      <Footer />
    </div>
  );
}
