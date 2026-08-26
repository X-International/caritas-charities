import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";

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
                <li aria-current="page" className="text-red-200">SUCCESS STORIES</li>
              </ol>
            </nav>
            <Heading level={1} variant="page" color="white">
              Success Stories
            </Heading>
            <Lead variant="hero">
              Inspiring stories of transformation and hope from the lives we have impacted together.
            </Lead>
          </div>
        </section>

        {/* Content placeholder */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 section-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Coming soon: Read inspiring stories of how our collective efforts are making a difference in the lives of vulnerable individuals and communities.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
