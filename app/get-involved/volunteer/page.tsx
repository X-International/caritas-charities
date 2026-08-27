import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Lead, Text } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "Volunteer With Us | Caritas Kampala Charities Office",
  description:
    "See how you can offer your time and skills to support the Charities Office's work across the Kampala Archdiocese.",
  path: "/get-involved/volunteer",
});

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Volunteer"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "GET INVOLVED", href: "/get-involved" },
            { label: "VOLUNTEER" },
          ]}
        />

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-8">
          <div className="space-y-4">
            <Heading level={2} variant="section" color="red">Give Your Time, Make a Difference</Heading>
            <Lead variant="article">
              Volunteers are at the heart of our mission. Whether you can give a few hours a week or contribute to specific projects, your support directly impacts the lives of vulnerable communities across the Kampala Archdiocese.
            </Lead>
          </div>

          <div className="bg-[#f4efe6] p-8 rounded-2xl space-y-4">
            <Heading level={2} variant="section" color="red">Share Your Skills</Heading>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <Text size="lg">Volunteering is not limited to programme activities. Professional skills can also strengthen our work.</Text>
              <Text size="lg">Depending on current needs, the Charities Office may welcome people who can contribute experience in areas such as communications, healthcare, administration, technology, training, fundraising and other professional services.</Text>
              <Text size="lg">If you have a skill you would like to offer, tell us about it when you get in touch.</Text>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
