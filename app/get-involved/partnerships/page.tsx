import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Partnerships | Caritas Kampala Charities Office",
  description:
    "Work with the Charities Office to support practical, coordinated responses to the needs of vulnerable communities across the Kampala Archdiocese.",
  path: "/get-involved/partnerships",
});

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Get Involved", href: "#" },
            { label: "Partnerships" },
          ]}
          eyebrow="WORK WITH US"
          title="Partnerships"
          description="Work with the Charities Office to support practical, coordinated responses to the needs of vulnerable communities across the Kampala Archdiocese."
          image="/images/Event 02/Caritas_Kampala_01.jpg"
          imageAlt="Partners and community representatives working together with Caritas Kampala"
        />

        {/* Section 1: Working Together in Service */}
        <section className="site-container pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-[820px] mx-auto space-y-6">
            <Heading level={2} variant="section" color="red">
              Working Together in Service
            </Heading>
            <div className="w-16 h-1 bg-[#b10017]" aria-hidden="true" />
            <p className="text-gray-700 text-base sm:text-lg lg:text-[18px] leading-relaxed">
              The Charities Office, under Caritas Kampala, works with organisations, institutions, professionals, parish communities, and other partners who share a commitment to serving people facing hardship.
            </p>
            <p className="text-gray-700 text-base sm:text-lg lg:text-[18px] leading-relaxed">
              Partnerships may support areas such as emergency response, family and child support, care for older people, refugee assistance, disability support, livelihoods, safeguarding, training, and community outreach.
            </p>
            <p className="text-gray-700 text-base sm:text-lg lg:text-[18px] leading-relaxed">
              We welcome practical collaboration that brings together resources, expertise, networks, and local knowledge in ways that strengthen the quality and reach of our work.
            </p>
            <div className="pt-6">
              <Button href="/contact-us?subject=Partnership%20Enquiry" variant="primary" size="lg">
                DISCUSS A PARTNERSHIP
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
