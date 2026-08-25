"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Heading } from "@/components/ui/Typography";

interface NewsCard {
  id: number;
  type: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const topNews: NewsCard[] = [
  {
    id: 1,
    type: "NEWS",
    date: "10.07.2026",
    title: "Aid delivered to remote communities affected by East Bangladesh floods",
    excerpt:
      "Caritas emergency teams have reached isolated villages, distributing dry food rations, clean drinking water, and hygiene kits to over 25,000 survivors.",
    link: "/resources/news",
  },
  {
    id: 2,
    type: "NEWS",
    date: "08.07.2026",
    title: "A child saved is a family restored: how a campus key campaign supports healing",
    excerpt:
      "Through community health centers, Caritas nutrition programs are rehabilitating malnourished infants and empowering mothers with sustainable care techniques.",
    link: "/resources/news",
  },
  {
    id: 3,
    type: "NEWS",
    date: "03.07.2026",
    title: "How access to clean water changed lives in rural villages in Madagascar",
    excerpt:
      "New solar-powered borehole wells constructed by Caritas provide reliable drinking water to over 15,000 rural residents in dry Southern districts.",
    link: "/resources/news",
  },
];

export default function LatestUpdates() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Beige Card Container */}
      <div className="bg-[#f4efe6] text-gray-900 rounded-card p-6 sm:p-10 lg:p-12 shadow-sm border border-[#e8dfd1]">
        {/* Section Heading */}
        <div className="mb-8">
          <Heading level={2} variant="section" color="red">
            Latest updates from Caritas
          </Heading>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topNews.map((card) => (
            <Card
              key={card.id}
              variant="content"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-gray-600 mb-3">
                  <span className="bg-[#f4efe6] text-[#b10017] font-bold px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase">
                    {card.type}
                  </span>
                  <span>{card.date}</span>
                </div>
                <Heading level={3} variant="card" color="dark" className="text-lg leading-snug mb-3 hover:text-[#b10017] transition-colors cursor-pointer">
                  {card.title}
                </Heading>
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                  {card.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <Link
                  href={card.link}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#b10017] text-gray-700 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Read update"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Grid: Featured Red Overlay Card + Right Update Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Large Featured Card */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] text-white flex items-end p-6 sm:p-10 shadow-md group">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
              alt="Caritas Jerusalem"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Deep Red Overlay Tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#b10017]/90 via-[#8e0a20]/80 to-transparent" />

            <div className="relative z-10 max-w-xl space-y-4">
              <Heading level={3} variant="subsection" color="white" className="text-2xl sm:text-3xl md:text-4xl leading-tight">
                A Story from Caritas Jerusalem: Light Amid the Darkness
              </Heading>
              <p className="text-sm text-red-100 font-light leading-relaxed hidden sm:block">
                Amid ongoing crisis, local healthcare workers and Caritas volunteers continue to provide hope, medical relief, and community support.
              </p>
              <div className="pt-2">
                <Button
                  href="/resources/news"
                  variant="secondary"
                  size="sm"
                >
                  READ MORE
                </Button>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <Card variant="content" className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-gray-600 mb-3">
                <span className="bg-[#f4efe6] text-[#b10017] font-bold px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase">
                  NEWS
                </span>
                <span>28.06.2026</span>
              </div>
              <Heading level={3} variant="card" color="dark" className="text-xl leading-snug mb-3 hover:text-[#b10017] transition-colors cursor-pointer">
                Alarming rate of malnutrition in South Sudan: Caritas responds with nutritional support
              </Heading>
              <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                Emergency feeding centers established across high-risk districts offer specialized therapeutic food and infant medical care.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-end">
              <Link
                href="/resources/news"
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#b10017] text-gray-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Read update"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
