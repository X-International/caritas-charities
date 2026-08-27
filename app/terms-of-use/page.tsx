import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Terms of Use | Caritas Kampala Charities Office",
  description: "The terms governing use of this website.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader 
          title="Terms of Use"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "TERMS OF USE" }
          ]}
        />

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to the official website of the Caritas Kampala Charities Office. By accessing or using this website, you agree to comply with and be bound by the following terms.
          </p>
          <Heading level={2} variant="card" color="red">Use of Materials</Heading>
          <p>
            All content, images, articles, and brand logos on this website are the property of Caritas Kampala unless otherwise stated. Materials may be downloaded or shared for non-commercial, educational, and awareness purposes with proper attribution.
          </p>
          <Heading level={2} variant="card" color="red">External Links</Heading>
          <p>
            This website may contain links to external third-party sites. Caritas Kampala is not responsible for the content or privacy practices of external web platforms.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
