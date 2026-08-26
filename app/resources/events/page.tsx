import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Events | Caritas Kampala Charities Office",
  description: "Discover upcoming events and opportunities to engage with our work at the Charities Office of Caritas Kampala.",
  path: "/resources/events",
});

export default function EventsPage() {
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
                <li aria-current="page" className="text-red-200">EVENTS</li>
              </ol>
            </nav>
            <Heading level={1} variant="page" color="white">
              Events
            </Heading>
            <Lead variant="hero">
              Discover upcoming events and opportunities to engage with our work.
            </Lead>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Coming soon: Stay updated on our upcoming events and find ways to engage with our work in the community.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
