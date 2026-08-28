import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Volunteer With Us | Caritas Kampala Charities Office",
  description:
    "Offer your time, skills, and experience to support the work of the Charities Office.",
  path: "/get-involved/volunteer",
});

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Get Involved", href: "/get-involved" },
            { label: "Volunteer" },
          ]}
          eyebrow="GIVE YOUR TIME"
          title="Volunteer With Us"
          description="Offer your time, skills, and experience to support the work of the Charities Office."
          image="/images/Event 01/Caritas_Kampala_01.jpg"
          imageAlt="Volunteers supporting Caritas Kampala community activities"
        />

        <section className="site-container py-16 sm:py-20 lg:py-24 space-y-16 sm:space-y-20 lg:space-y-24">
          <div className="max-w-[820px] mx-auto space-y-6">
            <Heading level={2} variant="section" color="red" className="text-3xl sm:text-4xl font-serif">
              Volunteer With Purpose
            </Heading>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg lg:text-[18px]">
              <p>
                Volunteers can strengthen the work of the Charities Office in practical ways. Depending on current needs, opportunities may involve programme activities, community outreach, events, administration, communications, professional support, or other areas of service.
              </p>
              <p>
                Some opportunities may require specific experience, availability, safeguarding requirements, or prior orientation. Our team will help determine where your time and skills can be most useful.
              </p>
              <p>
                Volunteer opportunities vary according to current programmes and activities. Programme and community support involves helping with approved programme activities, community outreach, distributions, events, or other practical tasks where volunteer support is needed. Professional skills involve offering relevant experience in areas such as healthcare, communications, administration, technology, training, finance, legal support, or other professional services. Events and activities support the preparation and delivery of meetings, workshops, community activities, campaigns, or special events. Office support assists with appropriate administrative, organisational, documentation, or coordination tasks where additional support is useful.
              </p>
              <p>
                Volunteer roles depend on current needs and may require an initial conversation with the Charities Office. Some activities may also require orientation, safeguarding checks, or other appropriate requirements before participation.
              </p>
              <p>
                Volunteers are expected to respect the dignity, privacy, safety, and wellbeing of the people and communities involved in our work.
              </p>
            </div>
          </div>

          {/* Final Volunteer CTA */}
          <div className="max-w-4xl mx-auto bg-[#f4efe6] p-8 sm:p-12 rounded-2xl text-center space-y-6">
            <div className="space-y-3 max-w-2xl mx-auto">
              <Heading level={2} variant="section" color="red" className="text-2xl sm:text-3xl font-serif">
                Interested in Volunteering?
              </Heading>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Contact the Charities Office and tell us a little about your availability, experience, and the kind of support you would like to offer.
              </p>
            </div>

            <div className="pt-2 flex flex-col items-center justify-center">
              <Button href="/contact-us?subject=Volunteer%20Enquiry" variant="primary" size="lg">
                CONTACT US ABOUT VOLUNTEERING
              </Button>
            </div>

            <div className="pt-2">
              <Link href="/our-programmes" className="text-sm font-semibold text-[#b10017] hover:underline inline-flex items-center gap-1">
                Explore Our Programmes &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
