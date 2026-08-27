import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs, getAnswerText } from "@/lib/faq-data";

export const metadata = buildPageMetadata({
  title: "FAQs | Caritas Kampala Charities Office",
  description:
    "Find answers to common questions about the Charities Office, including donations, volunteering, services, partnerships, transparency, and how to get involved.",
  path: "/resources/faqs",
});

export default function FAQsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Frequently Asked Questions"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "FAQs" },
          ]}
          description="Find clear answers to common questions about our work and how to get involved."
        />

        {/* Intro Section */}
        <section className="site-container py-16 sm:py-20 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
                <Heading level={2} className="text-3xl font-bold font-serif text-gray-900">
                    How Can We Help?
                </Heading>
                <div className="w-16 h-1 bg-[#b10017] mx-auto" />
                <p className="text-lg text-gray-700">
                    Below are some of the questions we are most often asked about the Charities Office under Caritas Kampala.
                </p>
            </div>
        </section>

        {/* FAQs Accordion */}
        <section className="site-container pb-20">
            <div className="max-w-3xl mx-auto">
                <FAQAccordion />
            </div>
        </section>

      </main>

      <Footer />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: getAnswerText(faq.a),
              },
            })),
          }),
        }}
      />
    </div>
  );
}
