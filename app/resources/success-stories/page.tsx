import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = buildPageMetadata({
  title: "Success Stories | Caritas Kampala Charities Office",
  description: "Read inspiring stories of transformation and hope from the lives we have impacted together through the Charities Office of Caritas Kampala.",
  path: "/resources/success-stories",
});

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Success Stories"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "RESOURCES", href: "/resources" },
            { label: "SUCCESS STORIES" },
          ]}
          description="Inspiring stories of transformation and hope from the lives we have impacted together."
        />

        {/* Content placeholder */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Coming soon: Read inspiring stories of how our collective efforts are making a difference in the lives of vulnerable individuals and communities.
          </p>
        </section>
        <div className="site-container py-4 sm:py-6">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
