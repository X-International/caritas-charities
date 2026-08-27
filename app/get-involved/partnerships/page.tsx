import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Heading, Text } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Partnerships | Caritas Kampala Charities Office",
  description:
    "Partner with us to support vulnerable communities in the Kampala Archdiocese through expertise, resources, and collaboration.",
  path: "/get-involved/partnerships",
});

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Partnerships"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "GET INVOLVED", href: "/get-involved" },
            { label: "PARTNERSHIPS" },
          ]}
          description="Partner with us to support vulnerable communities in the Kampala Archdiocese through expertise, resources, and collaboration."
        />

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-6">
          <Heading level={2} variant="section" color="red">Working Together for Change</Heading>
          <Text size="lg" className="leading-relaxed text-gray-700">
            The Charities Office, under Caritas Kampala, welcomes partnerships with businesses, healthcare institutions, professional volunteers, organisations, and other institutions that share a commitment to serving vulnerable people in our communities.
          </Text>
          <Text size="lg" className="leading-relaxed text-gray-700">
            We identify opportunities for collaboration in key areas, including education, healthcare, economic empowerment, and the provision of essential services. By combining resources, professional expertise, and practical support, we can create more sustainable and impactful solutions for the vulnerable.
          </Text>
          
          <div className="pt-6">
            <Button href="/contact-us" variant="primary" size="lg">
              Talk to Us About Partnership
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
