"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ImpactArea {
  id: string;
  title: string;
  category: string;
  description: string;
  serves: string;
  locations: string[];
  image: string;
}

const IMPACT_AREAS: ImpactArea[] = [
  {
    id: "emergency",
    title: "Emergency & Disaster Response",
    category: "RELIEF & CRISIS",
    description:
      "Provides immediate assistance to families and communities affected by disasters, fires, and other emergencies.",
    serves: "FAMILIES & COMMUNITIES AFFECTED BY EMERGENCIES",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_75.jpg",
  },
  {
    id: "elderly",
    title: "Support for the Elderly",
    category: "SENIOR CARE",
    description:
      "Provides ongoing practical support to elderly people across the Archdiocese.",
    serves: "ELDERLY PEOPLE ACROSS THE ARCHDIOCESE",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_84.jpg",
  },
  {
    id: "family-child",
    title: "Family & Child Support",
    category: "HOUSEHOLD CARE",
    description:
      "Supports families and children facing hardship, helping stabilise households in need.",
    serves: "FAMILIES & CHILDREN FACING HARDSHIP",
    locations: ["ARCHDIOCESE"],
    image: "/images/Event 01/Caritas_Kampala_03.jpg",
  },
  {
    id: "refugee",
    title: "Refugee & Asylum Seeker Support",
    category: "HUMANITARIAN AID",
    description:
      "Provides practical assistance to urban refugees and asylum seekers.",
    serves: "URBAN REFUGEES & ASYLUM SEEKERS",
    locations: ["KAMPALA"],
    image: "/images/Event 02/Caritas_Kampala_05.jpg",
  },
  {
    id: "disability",
    title: "Disability & Special Needs Support",
    category: "INCLUSION & CARE",
    description:
      "Supports people living with disabilities and special medical needs.",
    serves: "PEOPLE WITH DISABILITIES & SPECIAL NEEDS",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_87.jpg",
  },
  {
    id: "livelihoods",
    title: "Poverty Alleviation & Livelihoods",
    category: "ECONOMIC EMPOWERMENT",
    description:
      "Works with individuals and families to help build sustainable livelihoods.",
    serves: "INDIVIDUALS & FAMILIES FACING POVERTY",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_71.jpg",
  },
];

export default function WhereWeServe() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f4efe6] relative overflow-hidden" aria-labelledby="core-pillars-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <h2
          id="core-pillars-title"
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#b10017] tracking-tight mb-8 sm:mb-12"
        >
          Our Core Pillars of Support
        </h2>

        {/* 3-Column Equal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IMPACT_AREAS.map((area) => (
            <div
              key={area.id}
              className="group bg-white rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xs border border-gray-200/50 relative overflow-hidden min-h-[380px] sm:min-h-[410px] transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              {/* DEFAULT CARD CONTENT (UNHOVERED STATE) */}
              <div className="flex flex-col justify-between h-full w-full z-0">
                {/* Top Metadata Row with quiet Details Coming Soon badge */}
                <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-widest gap-2">
                  <span className="truncate">{area.category}</span>
                  <span className="shrink-0 text-[10px] font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md normal-case tracking-normal">
                    Details coming soon
                  </span>
                </div>

                {/* Main Content */}
                <div className="my-4 flex-1">
                  <h3 className="text-xl sm:text-[22px] font-serif font-bold text-[#b10017] leading-snug mb-3 group-hover:underline">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#4d4338] leading-relaxed font-sans line-clamp-4">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Metadata Row */}
                <div className="pt-4 border-t border-gray-100/80 flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-widest gap-2">
                  <span className="truncate">{area.serves}</span>
                  <span className="shrink-0 text-[#b10017]">CARITAS</span>
                </div>
              </div>

              {/* HOVER OVERLAY LAYER (REVEALS THE RED PHOTO OVERLAY CARD FROM SCREENSHOT) */}
              <div className="absolute inset-0 z-10 p-6 sm:p-7 flex flex-col justify-between bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                {/* Photo Background */}
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Crimson Red Multiply Overlay */}
                <div className="absolute inset-0 bg-[#b10017]/85 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Top Metadata in White with quiet Details Coming Soon indicator */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-semibold text-white/90 uppercase tracking-widest gap-2">
                  <span className="truncate">{area.category}</span>
                  <span className="shrink-0 text-[10px] font-normal text-white/70 bg-white/10 px-2 py-0.5 rounded-md normal-case tracking-normal backdrop-blur-xs">
                    Details coming soon
                  </span>
                </div>

                {/* Middle Content in White */}
                <div className="relative z-10 my-4 flex-1 space-y-2">
                  <h3 className="text-2xl sm:text-[25px] font-serif font-bold text-white leading-tight">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans line-clamp-3">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Row: Amber Tag + Outline Button */}
                <div className="relative z-10 pt-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 truncate">
                    {area.serves}
                  </span>
                  <Link
                    href="/donate"
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/90 text-white text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#b10017] transition-all duration-200"
                  >
                    SUPPORT THIS CAUSE
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
