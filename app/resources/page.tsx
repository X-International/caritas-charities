import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/ui/Card";
import { Heading } from "@/components/ui/Typography";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata-utils";

export const metadata = buildPageMetadata({
  title: "Resources | Caritas Kampala Charities Office",
  description:
    "Explore news, events, stories, photos, reports, and practical information from the work of the Charities Office of Caritas Kampala.",
  path: "/resources",
});

export default function ResourcesHubPage() {
  const resourceSections = [
    { title: "News & Updates", href: "/resources/news", description: "Read the latest news, announcements, and updates from the work of the Charities Office." },
    { title: "Events", href: "/resources/events", description: "See upcoming meetings, gatherings, and opportunities to engage with our work." },
    { title: "Success Stories", href: "/resources/success-stories", description: "Read real stories that show how practical support has affected the lives of people and communities we work alongside." },
    { title: "Photo Gallery", href: "/resources/gallery", description: "Explore photos from our programmes, events, and community activities across the Archdiocese of Kampala." },
    { title: "Annual Reports", href: "/resources/annual-reports", description: "View reports on our work, progress, and organisational activities." },
    { title: "FAQs", href: "/resources/faqs", description: "Find clear answers to common questions about our work and how to get involved." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="Resources"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources" }
          ]}
          description="Explore news, events, stories, photos, reports, and practical information from the work of the Charities Office."
        />

        <section className="site-container section-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceSections.map((section) => (
              <Link key={section.href} href={section.href} className="block group">
                <Card variant="info" className="h-full space-y-3 transition-shadow group-hover:shadow-md">
                  <Heading level={2} variant="card" className="text-xl font-bold text-[#b10017] group-hover:underline">
                    {section.title}
                  </Heading>
                  <p className="text-sm text-gray-700 leading-relaxed font-sans">
                    {section.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
