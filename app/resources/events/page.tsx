import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import ClientEvents from "./ClientEvents";
import { initialEvents } from "./events-data";
import { getEventSchema } from "@/lib/seo/schemas";

export const metadata = buildPageMetadata({
  title: "Events | Caritas Kampala Charity Office",
  description:
    "See upcoming meetings, gatherings, and activities connected with the work of the Charity Office of Caritas Kampala.",
  path: "/resources/events",
});

export default function EventsPage() {
  const eventsSchemas = initialEvents.map((evt) =>
    getEventSchema({
      title: evt.title,
      description: evt.description,
      dateStr: evt.dateStr,
      timeString: evt.timeString,
      location: evt.location,
      image: evt.image,
    })
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchemas) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Events"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "#" },
            { label: "Events" },
          ]}
          description="See upcoming meetings, gatherings, and activities connected with the work of the Charity Office."
        />

        <ClientEvents />

        <div className="site-container py-4 sm:py-6">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
