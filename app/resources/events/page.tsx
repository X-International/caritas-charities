import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Text } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = buildPageMetadata({
  title: "Events | Caritas Kampala Charities Office",
  description:
    "See upcoming meetings, gatherings, and opportunities to engage with our work.",
  path: "/resources/events",
});

interface EventItem {
  title: string;
  category: string;
  description: string;
  date: Date;
  timeString: string;
  location: string;
  image: string;
  imageAlt: string;
}

const events: EventItem[] = [
  {
    title: "Breakfast Meeting",
    category: "Meeting",
    description:
      "A morning meeting to share updates, strengthen collaboration, and discuss priorities for the work ahead.",
    date: new Date("2025-11-13T08:00:00"),
    timeString: "8:00 AM – 10:00 AM",
    location: "Caritas Kampala Offices",
    image: "/images/Event 06/Caritas_Kampala_54.jpg",
    imageAlt: "Participants gathered around a meeting table during the Charities Office breakfast meeting",
  },
  {
    title: "Chaconet Meeting",
    category: "Meeting",
    description:
      "A meeting for Chaconet partners to review progress, share updates, and strengthen coordination across the network.",
    date: new Date("2025-12-10T09:00:00"),
    timeString: "9:00 AM – 12:00 PM",
    location: "Caritas Kampala Offices",
    image: "/images/Event 05/Caritas_Kampala_28.jpg",
    imageAlt: "Chaconet partner representatives attending a coordination meeting at Caritas Kampala",
  },
];

const formatDate = (date: Date) => ({
  dayOfWeek: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
  day: date.getDate(),
  month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
  year: date.getFullYear(),
});

export default function EventsPage() {
  const now = new Date();
  const hasUpcomingEvents = events.some((e) => e.date >= now);
  const sectionHeading = hasUpcomingEvents ? "Our Upcoming Events" : "Recent Events";
  const sectionDescription = hasUpcomingEvents
    ? "Find upcoming meetings and gatherings connected with the work of the Charities Office."
    : "Review recent meetings and gatherings connected with the work of the Charities Office.";

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Events"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Events" },
          ]}
          description="See upcoming meetings, gatherings, and opportunities to engage with our work."
        />

        {/* Introduction Section */}
        <section className="pt-10 sm:pt-12 pb-8 sm:pb-10 lg:pb-12 bg-white text-center">
          <div className="site-container max-w-3xl space-y-4">
            <Heading level={2} variant="section" color="red">
              {events.length === 0 ? "No Upcoming Events" : sectionHeading}
            </Heading>
            <div className="mx-auto w-16 h-1 bg-[#b10017]" aria-hidden="true" />
            <Text size="lg" color="muted" className="leading-relaxed">
              {events.length === 0
                ? "There are no upcoming events listed at the moment. Please check back for future updates."
                : sectionDescription}
            </Text>
          </div>
        </section>

        {/* Event List */}
        {events.length > 0 && (
          <section className="site-container max-w-[1120px] pb-[72px] sm:pb-[80px] lg:pb-[88px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
              {events.map((event, i) => {
                const date = formatDate(event.date);
                return (
                  <div
                    key={i}
                    className="flex flex-col h-full rounded-xl border border-gray-200 bg-white overflow-hidden transition-colors hover:border-gray-300"
                  >
                    {/* Image & Date Badge */}
                    <div className="relative w-full h-[230px] sm:h-[250px] shrink-0 bg-caritas-beige rounded-t-xl overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.imageAlt}
                        fill
                        className="object-cover"
                      />
                      {/* Date Badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#b10017] text-white py-2 px-3 sm:py-2.5 sm:px-3.5 rounded-md text-center shadow-none w-[68px] sm:w-[76px]">
                        <div className="text-[10px] sm:text-xs font-bold tracking-wider">{date.dayOfWeek}</div>
                        <div className="text-xl sm:text-2xl font-extrabold leading-none my-0.5">{date.day}</div>
                        <div className="text-[10px] sm:text-xs font-bold tracking-wider">{date.month}</div>
                        <div className="text-[10px] sm:text-xs tracking-tight">{date.year}</div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-[#b10017] space-x-1.5 font-semibold text-[11px] sm:text-xs tracking-widest uppercase">
                          <Users className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{event.category}</span>
                        </div>
                        <h3 className="font-serif text-[26px] sm:text-[28px] lg:text-[30px] font-bold text-gray-900 leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-3 border-t border-gray-100">
                        <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400 shrink-0" aria-hidden="true" />
                          <span>
                            {event.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                          <Clock className="h-4 w-4 mr-2 text-gray-400 shrink-0" aria-hidden="true" />
                          <span>{event.timeString}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400 shrink-0" aria-hidden="true" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="site-container py-4 sm:py-6">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
