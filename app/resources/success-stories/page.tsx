import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import AppealVideo from "@/components/AppealVideo";
import { getVideoObjectSchema } from "@/lib/seo/schemas";

export const metadata = buildPageMetadata({
  title: "Success Stories | Caritas Kampala Charity Office",
  description:
    "Read real stories and watch video impact accounts that show how practical support from the Charity Office affects community lives.",
  path: "/resources/success-stories",
});

export default function SuccessStoriesPage() {
  const videoSchemas = [
    getVideoObjectSchema({
      videoId: "jivgMtRzjJU",
      name: "From Senior Six to Makerere University | Caritas Kampala Success Story",
      description:
        "When school fees became difficult to afford during her daughter's final year of secondary school, a mother living in Kabowa came to Caritas Kampala Charity Office for support.",
      uploadDate: "2026-09-07",
    }),
    getVideoObjectSchema({
      videoId: "S-vIJGVgk9A",
      name: "Supporting a P7 Student Towards His Final Exams | Caritas Kampala Success Story",
      description:
        "Perepetwa Nakaliisa and her son, Sebalanzi Mark, came to the Charity Office of Caritas Kampala seeking help with school fees.",
      uploadDate: "2026-09-07",
    }),
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchemas) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        <SplitPageHeader
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "#" },
            { label: "Success Stories" },
          ]}
          eyebrow="STORIES FROM OUR WORK"
          title="Success Stories"
          description="Read real stories that show how practical support has affected the lives of people and communities we work alongside."
          image="/images/Charities/Caritas_Kampala_86.jpg"
          imageAlt="Community members and participants in Caritas Kampala programmes"
          imagePosition="center 20%"
        />

        {/* Video Stories Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="site-container max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
              <Heading level={2} variant="section" color="red">
                Watch Our Stories
              </Heading>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Discover the real impact of Caritas Kampala’s charity initiatives through the voices and experiences of the communities we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <AppealVideo
                videoId="jivgMtRzjJU"
                title="Caritas Kampala Impact Story 1"
              />
              <AppealVideo
                videoId="S-vIJGVgk9A"
                title="Caritas Kampala Impact Story 2"
              />
            </div>

            <p className="text-xs sm:text-sm text-gray-500 text-center pt-10 max-w-xl mx-auto leading-relaxed">
              Stories are shared with care and with appropriate attention to consent, privacy, and safeguarding.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
