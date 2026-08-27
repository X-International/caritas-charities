import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplitPageHeader from "@/components/SplitPageHeader";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Success Stories | Caritas Kampala Charities Office",
  description:
    "Read real success stories and impact reports from the programmes of the Charities Office under Caritas Kampala.",
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
            { label: "Resources", href: "/resources/news" },
            { label: "Success Stories" },
          ]}
          eyebrow="STORIES FROM OUR WORK"
          title="Success Stories"
          description="Read real stories that show how practical support has affected the lives of people and communities we work alongside."
          image="/images/Event 01/Caritas_Kampala_02.jpg"
          imageAlt="Community members and beneficiaries of Caritas Kampala programmes"
        />

        {/* Content placeholder */}
        <section className="site-container section-md">
          <p className="text-gray-600 text-center">Success stories and impact reports coming soon.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
