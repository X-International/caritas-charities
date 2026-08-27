import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "FAQs | Caritas Kampala Charities Office",
  description: "Answers to common questions about donation drop-offs, volunteering, and supporting the Charities Office of Caritas Kampala.",
  path: "/resources/faqs",
});

const faqs = [
  {
    q: "Where is the collection point for donation items?",
    a: "All physical items (food, clothing, household goods) can be dropped off directly at the Caritas Kampala Office on Old Ggaba Road, Nsambya (next to the American Embassy), Kampala, Uganda.",
  },
  {
    q: "Does Caritas assist people regardless of religion?",
    a: "Yes. Caritas Kampala serves everyone in need without discrimination based on religion, ethnicity, gender, or political affiliation.",
  },
  {
    q: "How can I make a financial contribution?",
    a: "You can make a direct bank transfer or mobile money donation. Contact our offices or visit our Contact Us page for direct lines.",
  },
  {
    q: "Can I volunteer with Caritas Kampala?",
    a: "Yes! We welcome volunteers across our parish networks, youth initiatives, and emergency relief distribution teams.",
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Frequently Asked Questions"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "RESOURCES", href: "/resources" },
            { label: "FAQS" },
          ]}
          description="Clear answers to help you get involved, contribute, and support our mission."
        />

        {/* FAQs Accordion/List */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-6">
          {faqs.map((faq, i) => (
            <Card key={i} variant="content" className="space-y-2">
              <Heading level={2} variant="card" color="red">{faq.q}</Heading>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.a}</p>
            </Card>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
