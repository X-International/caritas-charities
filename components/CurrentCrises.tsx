"use client";

import { useState } from "react";
import Image from "next/image";

interface CrisisItem {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  location: string;
}

const crisisData: CrisisItem[] = [
  {
    id: 1,
    title: "Sudan Crisis",
    location: "Sudan & Neighboring Countries",
    description:
      "Caritas is responding to the devastating emergency in Sudan where millions of families have been displaced. Our teams provide clean water, food baskets, emergency shelters, and essential medical supplies to vulnerable refugees.",
    link: "#sudan-crisis",
    image:
      "https://images.unsplash.com/photo-1578357078586-491adf1aa5ab?q=80&w=1000&auto=format&fit=crop", // Humanitarian water distribution camp
  },
  {
    id: 2,
    title: "Gaza Emergency",
    location: "Gaza Strip & Middle East",
    description:
      "Caritas Jerusalem and local partners are providing critical medical aid, warm meals, clean water, and hygiene supplies to displaced families facing severe humanitarian hardship in Gaza.",
    link: "#gaza-emergency",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=1000&auto=format&fit=crop", // Food distribution
  },
  {
    id: 3,
    title: "Ukraine Conflict Response",
    location: "Ukraine & Eastern Europe",
    description:
      "Caritas Ukraine continues to assist millions affected by ongoing conflict, delivering winterization kits, shelter repairs, psychological counseling, and long-term community rehabilitation.",
    link: "#ukraine-response",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop", // Relief supplies delivery
  },
  {
    id: 4,
    title: "Horn of Africa Climate Crisis",
    location: "Somalia, Ethiopia & Kenya",
    description:
      "Severe droughts and flash floods have threatened pastoral communities across the Horn of Africa. Caritas delivers life-saving livestock aid, clean water, and agricultural support.",
    link: "#horn-of-africa",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1000&auto=format&fit=crop", // Drought relief support
  },
];

export default function CurrentCrises() {
  const [activeCrisis, setActiveCrisis] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Outer Crimson Card Container */}
      <div className="bg-[#be0f2e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
            Current crises
          </h2>
          <p className="text-sm sm:text-base text-red-100 font-light leading-relaxed">
            Poverty, conflict, and natural disasters leave millions vulnerable worldwide. Explore how Caritas responds with urgent emergency relief and long-term rehabilitation.
          </p>
        </div>

        {/* Inner Crisis Featured Card Container */}
        <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-inner">
              <Image
                src={crisisData[activeCrisis].image}
                alt={crisisData[activeCrisis].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#be0f2e] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow">
                {crisisData[activeCrisis].location}
              </span>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#be0f2e]">
                {crisisData[activeCrisis].title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {crisisData[activeCrisis].description}
              </p>
              <div className="pt-2">
                <a
                  href={crisisData[activeCrisis].link}
                  className="inline-block bg-[#be0f2e] hover:bg-[#8e0a20] text-white text-xs font-bold px-7 py-3 rounded-full tracking-wider uppercase shadow-md transition-transform transform hover:-translate-y-0.5"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {crisisData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCrisis(index)}
              aria-label={`Show crisis ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeCrisis ? "w-8 bg-white" : "w-2.5 bg-red-300 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
