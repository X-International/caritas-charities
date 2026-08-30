import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Success Stories | Caritas Kampala’s Charity Office",
  description:
    "Read real stories that show how practical support has affected the lives of people and communities we work alongside.",
  path: "/resources/success-stories",
});

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
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

        {/* Empty State Section */}
        <section className="pt-[72px] sm:pt-20 lg:pt-[88px] pb-16 sm:pb-20 lg:pb-[88px] bg-white text-center">
          <div className="site-container max-w-[720px] mx-auto space-y-4">
            <Heading level={2} variant="section" color="red">
              Stories Coming Soon
            </Heading>
            <div className="text-gray-700 max-w-2xl mx-auto space-y-3 text-base sm:text-lg leading-relaxed">
              <p>
                We are preparing stories that reflect the experiences, progress, and dignity of the people and communities we work alongside.
              </p>
              <p>
                New stories will be published here as they become available.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 pt-5 max-w-xl mx-auto leading-relaxed">
              Stories are shared with care and with appropriate attention to consent, privacy, and safeguarding.
            </p>
            <div className="pt-4">
              <Link
                href="/our-programmes"
                className="text-[#b10017] hover:underline font-semibold text-sm sm:text-base inline-flex items-center gap-1.5"
              >
                Explore Our Programmes →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
