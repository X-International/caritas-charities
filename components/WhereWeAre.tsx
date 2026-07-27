"use client";

import { useState } from "react";
import Image from "next/image";

interface RegionItem {
  id: number;
  name: string;
  members: string;
  staff: string;
  image: string;
  link: string;
}

const regions: RegionItem[] = [
  {
    id: 1,
    name: "Middle East & North Africa",
    members: "14",
    staff: "7,500",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    link: "#mena",
  },
  {
    id: 2,
    name: "North America",
    members: "3",
    staff: "350,000",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    link: "#north-america",
  },
  {
    id: 3,
    name: "Africa",
    members: "46",
    staff: "450,000",
    image:
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800&auto=format&fit=crop",
    link: "#africa",
  },
  {
    id: 4,
    name: "Latin America & Caribbean",
    members: "22",
    staff: "180,000",
    image:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop",
    link: "#latin-america",
  },
  {
    id: 5,
    name: "Asia",
    members: "25",
    staff: "300,000",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
    link: "#asia",
  },
  {
    id: 6,
    name: "Europe",
    members: "49",
    staff: "520,000",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    link: "#europe",
  },
];

export default function WhereWeAre() {
  const [activeOffset, setActiveOffset] = useState(0);

  const nextGroup = () => {
    setActiveOffset((prev) => (prev + 2 >= regions.length ? 0 : prev + 2));
  };

  const prevGroup = () => {
    setActiveOffset((prev) => (prev - 2 < 0 ? regions.length - 2 : prev - 2));
  };

  const visibleRegions = regions.slice(activeOffset, activeOffset + 2);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Ocean Blue Container */}
      <div className="bg-[#38a3ca] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
            Where we are
          </h2>
          <p className="text-sm sm:text-base text-blue-100 font-light leading-relaxed">
            The Caritas Confederation is present in almost all regions: humanitarian and development action by our 162 members responds to challenges facing local communities.
          </p>
        </div>

        {/* Regions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleRegions.map((region) => (
            <a
              key={region.id}
              href={region.link}
              className="relative rounded-2xl overflow-hidden h-80 sm:h-96 shadow-lg group block border border-white/20"
            >
              {/* Background Image */}
              <Image
                src={region.image}
                alt={region.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
                {/* Stats */}
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-serif leading-none">
                      {region.members}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                      Members
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold font-serif leading-none">
                      {region.staff}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gray-300">
                      Staff & Volunteers
                    </div>
                  </div>
                </div>

                {/* Bottom Region Title & Circle Arrow Icon */}
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-serif leading-tight">
                    {region.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-[#be0f2e] text-white flex items-center justify-center transition-colors backdrop-blur-sm shadow">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Controls & Pagination Dots */}
        <div className="flex justify-between items-center mt-8 pt-4">
          <button
            onClick={prevGroup}
            aria-label="Previous regions"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-[#38a3ca] text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-2">
            {[0, 2, 4].map((offsetIdx) => (
              <button
                key={offsetIdx}
                onClick={() => setActiveOffset(offsetIdx)}
                aria-label={`Region set ${offsetIdx / 2 + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  activeOffset === offsetIdx ? "w-8 bg-white" : "w-2.5 bg-blue-200 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextGroup}
            aria-label="Next regions"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white hover:text-[#38a3ca] text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
