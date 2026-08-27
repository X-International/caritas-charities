import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heading, Text } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import Image from "next/image";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/PageHeader";

export const metadata = buildPageMetadata({
  title: "Upcoming Events | Caritas Kampala Charities Office",
  description:
    "Discover upcoming events, meetings and activities from the Caritas Kampala Charities Office and find opportunities to connect, collaborate and support our work.",
  path: "/resources/events",
});

const events = [
  {
    title: "Breakfast Meeting",
    category: "Meeting",
    description:
      "Join us for our breakfast meeting as we share ideas, strengthen partnerships, and plan impactful initiatives for the community.",
    date: new Date("2025-11-13T08:00:00"),
    endTime: "10:00 AM",
    location: "Caritas Kampala Offices",
    image: "/images/Event 01/Caritas_Kampala_01.jpg",
    alt: "Breakfast meeting table setup",
  },
  {
    title: "Chaconet Meeting",
    category: "Meeting",
    description:
      "A strategic meeting for Chaconet partners to review progress, share updates, and strengthen collaboration across the network.",
    date: new Date("2025-12-10T09:00:00"),
    endTime: "12:00 PM",
    location: "Caritas Kampala Offices",
    image: "/images/Event 01/Caritas_Kampala_02.jpg",
    alt: "Chaconet partners meeting",
  },
];

const formatDate = (date: Date) => ({
  dayOfWeek: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
  day: date.getDate(),
  month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
  year: date.getFullYear(),
});

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Banner */}
        <PageHeader
          title="Upcoming Events"
          breadcrumbs={[
            { label: "HOME", href: "/" },
            { label: "RESOURCES", href: "/resources" },
            { label: "UPCOMING EVENTS" },
          ]}
          description="Join us at our upcoming events as we work together to bring hope and dignity to those in need."
        />

        {/* Introduction Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
          <div className="site-container max-w-3xl space-y-6">
            <Heading level={2} variant="section" color="red">
              Our Upcoming Events
            </Heading>
            <div className="mx-auto w-16 h-1 bg-[#b10017]" aria-hidden="true" />
            <Text size="lg" color="muted" className="leading-relaxed">
              Mark your calendar and be part of meaningful conversations, collaborations, and actions that transform lives.
            </Text>
          </div>
        </section>

        {/* Event List */}
        <section className="site-container pb-20 sm:pb-24 lg:pb-32 space-y-12">
          {events.map((event, i) => {
            const date = formatDate(event.date);
            return (
              <div key={i} className="flex flex-col md:flex-row rounded-lg border border-gray-100 shadow-sm overflow-hidden bg-white">
                {/* Image & Date Badge */}
                <div className="relative md:w-[45%] aspect-[16/9] md:aspect-[3/2]">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-[#b10017] text-white p-3 rounded-md text-center shadow-md">
                    <div className="text-xs font-bold">{date.dayOfWeek}</div>
                    <div className="text-2xl font-extrabold">{date.day}</div>
                    <div className="text-xs font-bold">{date.month}</div>
                    <div className="text-xs">{date.year}</div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between md:w-[55%]">
                  <div className="space-y-4">
                    <div className="flex items-center text-[#b10017] space-x-2 font-semibold text-sm tracking-wide uppercase">
                      <Users className="h-4 w-4" />
                      <span>{event.category}</span>
                    </div>
                    <Heading level={3} variant="subsection" color="dark">
                      {event.title}
                    </Heading>
                    <Text size="base" color="muted">
                      {event.description}
                    </Text>
                    <div className="space-y-2 pt-4">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.date.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })} – {event.endTime}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                      <Link href={`/resources/events/${event.title.toLowerCase().replace(/ /g, "-")}`}>
                          <Button variant="outline" size="sm" className="border-[#b10017] text-[#b10017] hover:bg-[#b10017] hover:text-white">
                              VIEW DETAILS
                          </Button>
                      </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
