import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/ui/Card";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

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
        <section className="bg-[#b10017] text-white section-lg">
          <div className="site-container space-y-4">
            <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider font-semibold text-red-200">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:underline text-white">HOME</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/resources/news" className="hover:underline text-white">RESOURCES</Link>
                </li>
                <li>/</li>
                <li aria-current="page" className="text-red-200">FAQS</li>
              </ol>
            </nav>
            <Heading level={1} variant="page" color="white">
              Frequently Asked Questions
            </Heading>
            <Lead variant="hero">
              Clear answers to help you get involved, contribute, and support our mission.
            </Lead>
          </div>
        </section>

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
