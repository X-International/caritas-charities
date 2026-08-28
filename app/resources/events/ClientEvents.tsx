"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Heading, Text } from "@/components/ui/Typography";
import { initialEvents, EventItem } from "./events-data";

const getKampalaDateString = (date: Date = new Date()): string => {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Kampala",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date);
};

const getMsToNextKampalaMidnight = () => {
  const now = new Date();
  const todayKampala = getKampalaDateString(now);
  const [y, m, d] = todayKampala.split("-").map(Number);
  // Kampala is UTC+3 all year round
  const midnightKampalaUtc = Date.UTC(y, m - 1, d + 1, 0, 0, 0) - (3 * 60 * 60 * 1000);
  const diff = midnightKampalaUtc - now.getTime();
  return diff > 0 ? diff : 1000;
};

const formatDateBadge = (dateStr: string) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  return {
    dayOfWeek: date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" }).toUpperCase(),
    day: d,
    month: date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }).toUpperCase(),
    year: y,
  };
};

const formatFullDate = (dateStr: string) => {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d, 12, 0, 0));
  const month = date.toLocaleDateString("en-US", { month: "long", timeZone: "UTC" });
  return `${d} ${month} ${y}`;
};

export default function ClientEvents() {
  const [currentKampalaDate, setCurrentKampalaDate] = useState(() => getKampalaDateString());

  useEffect(() => {
    const scheduleNextRefresh = () => {
      const ms = getMsToNextKampalaMidnight();
      const timer = setTimeout(() => {
        setCurrentKampalaDate(getKampalaDateString());
        scheduleNextRefresh();
      }, ms);
      return timer;
    };

    const timer = scheduleNextRefresh();
    return () => clearTimeout(timer);
  }, []);

  const visibleEvents = initialEvents
    .filter((event) => currentKampalaDate <= event.dateStr)
    .sort((a, b) => a.dateStr.localeCompare(b.dateStr));

  const hasUpcoming = visibleEvents.length > 0;
  const sectionHeading = "Upcoming Events";
  const sectionDescription = "See upcoming meetings and gatherings connected with the work of the Charities Office.";

  return (
    <>
      {/* Introduction Section */}
      <section className="pt-10 sm:pt-12 pb-8 sm:pb-10 lg:pb-12 bg-white text-center">
        <div className="site-container max-w-[720px] space-y-4">
          <Heading level={2} variant="section" color="red">
            {sectionHeading}
          </Heading>
          <div className="mx-auto w-16 h-1 bg-[#b10017]" aria-hidden="true" />
          <Text size="lg" color="muted" className="leading-relaxed">
            {sectionDescription}
          </Text>
        </div>
      </section>

      {/* Event List or Empty State */}
      {hasUpcoming ? (
        <section className="site-container max-w-[1120px] pb-[72px] sm:pb-[80px] lg:pb-[88px]">
          <div
            className={
              visibleEvents.length === 1
                ? "flex justify-center"
                : "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8"
            }
          >
            {visibleEvents.map((event) => {
              const badge = formatDateBadge(event.dateStr);
              const fullDateStr = formatFullDate(event.dateStr);
              return (
                <div
                  key={event.id}
                  className={`flex flex-col h-full rounded-xl border border-gray-200 bg-white overflow-hidden transition-colors hover:border-gray-300 ${
                    visibleEvents.length === 1 ? "w-full md:w-[540px]" : ""
                  }`}
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
                      <div className="text-[10px] sm:text-xs font-bold tracking-wider">{badge.dayOfWeek}</div>
                      <div className="text-xl sm:text-2xl font-extrabold leading-none my-0.5">{badge.day}</div>
                      <div className="text-[10px] sm:text-xs font-bold tracking-wider">{badge.month}</div>
                      <div className="text-[10px] sm:text-xs tracking-tight">{badge.year}</div>
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
                        <time dateTime={event.dateStr}>{fullDateStr}</time>
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
      ) : (
        <section className="site-container max-w-[520px] pb-[72px] sm:pb-[80px] lg:pb-[88px] text-center space-y-3">
          <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-gray-900">
            No Upcoming Events
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            There are no upcoming events listed at the moment. Please check back for future updates.
          </p>
        </section>
      )}
    </>
  );
}
