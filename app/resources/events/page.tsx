import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/metadata-utils";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";
import ClientEvents from "./ClientEvents";

export const metadata = buildPageMetadata({
  title: "Events | Caritas Kampala Charities Office",
  description:
    "See upcoming meetings, gatherings, and activities connected with the work of the Charities Office.",
  path: "/resources/events",
});

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
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
          description="See upcoming meetings, gatherings, and activities connected with the work of the Charities Office."
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
