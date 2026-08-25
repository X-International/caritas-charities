import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Frequently Asked Questions | Caritas Kampala",
  description:
    "Find answers to common questions about Caritas Kampala donation drop-offs, aid distribution, and volunteering.",
  alternates: { canonical: "/resources/faqs" },
};

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
        <section className="bg-[#b10017] text-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-red-100 max-w-2xl font-light leading-relaxed">
              Clear answers to help you get involved, contribute, and support our mission.
            </p>
          </div>
        </section>

        {/* FAQs Accordion/List */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#b10017]">{faq.q}</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
