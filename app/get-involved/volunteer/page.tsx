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
          image="/images/Event 06/Caritas_Kampala_52.jpg"
          imageAlt="Volunteers participating in Caritas Kampala community outreach and programme activities"
          imagePositionDesktop="center 40%"
          imagePositionMobile="center 30%"
        />

        <section className="site-container py-12 sm:py-16 lg:py-20 space-y-14 sm:space-y-18 lg:space-y-20">
          {/* Main Introduction */}
          <div className="max-w-[800px] mx-auto space-y-6">
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
            </div>
          </div>

          {/* Ways You Can Help */}
          <div className="max-w-[800px] mx-auto space-y-8 sm:space-y-10">
            <div className="space-y-3">
              <Heading level={2} variant="section" color="red" className="text-2xl sm:text-3xl font-serif">
                Ways You Can Help
              </Heading>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Volunteer opportunities vary according to current programmes and activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#b10017]">
                  PROGRAMME &amp; COMMUNITY SUPPORT
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Help with approved programme activities, community outreach, distributions, events, or other practical tasks where volunteer support is needed.
                </p>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#b10017]">
                  PROFESSIONAL SKILLS
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Offer relevant experience in areas such as healthcare, communications, administration, technology, training, finance, legal support, or other professional services.
                </p>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#b10017]">
                  EVENTS &amp; ACTIVITIES
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Support the preparation and delivery of meetings, workshops, community activities, campaigns, and special events.
                </p>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#b10017]">
                  OFFICE SUPPORT
                </h3>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  Assist with appropriate administrative, organisational, documentation, or coordination tasks where additional help is useful.
                </p>
              </div>
            </div>
          </div>

          {/* Before You Volunteer */}
          <div className="max-w-[800px] mx-auto space-y-6">
            <Heading level={2} variant="section" color="red" className="text-2xl sm:text-3xl font-serif">
              Before You Volunteer
            </Heading>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg lg:text-[18px]">
              <p>
                Volunteer roles depend on current needs and may begin with a conversation with the Charities Office. Some activities may require orientation, safeguarding checks, specific skills, or other appropriate requirements before participation.
              </p>
              <p>
                Volunteers are expected to respect the dignity, privacy, safety, and wellbeing of the people and communities involved in our work.
              </p>
            </div>
          </div>

          {/* Final Volunteer CTA */}
          <div className="max-w-[800px] mx-auto bg-[#f4efe6] px-8 sm:px-12 py-10 sm:py-12 rounded-2xl text-center space-y-6">
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
