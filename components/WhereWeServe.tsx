import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

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

/* ── White Card (Standard Mobile & Keyboard Accessible) ── */
function WhiteCard({ area }: { area: ImpactArea }) {
  return (
    <Card
      as="article"
      variant="content"
      aria-labelledby={`pillar-title-${area.id}`}
      className="group relative flex flex-col justify-between overflow-hidden h-full min-h-[300px] sm:min-h-[360px] p-5 sm:p-7 md:p-8 focus-within:ring-2 focus-within:ring-caritas-red focus-within:ring-offset-2"
    >
      {/* DEFAULT UNHOVERED STATE */}
      <div className="flex flex-col justify-between h-full w-full z-0">
        <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest gap-2">
          <span className="truncate">{area.category}</span>
        </div>

        <div className="my-3 sm:mt-4 sm:mb-5 flex-1">
          <Heading
            level={3}
            variant="subsection"
            color="red"
            id={`pillar-title-${area.id}`}
            className="mb-2.5 sm:mb-3.5 leading-snug"
          >
            {area.title}
          </Heading>
          <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-sans">
            {area.description}
          </p>
        </div>

        <div className="pt-3.5 sm:pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">
          <span className="truncate">{area.serves}</span>
        </div>
      </div>

      {/* HOVER / KEYBOARD FOCUS OVERLAY */}
      <div className="absolute inset-0 z-10 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-gray-900 opacity-0 max-lg:opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 motion-reduce:transition-none pointer-events-none max-lg:pointer-events-auto group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
        <Image
          src={area.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#b10017]/90 mix-blend-multiply" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

        <div aria-hidden="true" className="relative z-10 flex items-center justify-start text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest">
          <span>{area.category}</span>
        </div>

        <div aria-hidden="true" className="relative z-10 my-3 sm:mt-4 sm:mb-5 flex-1 space-y-2 sm:space-y-3">
          <Heading level={3} variant="subsection" color="white" className="leading-tight">
            {area.title}
          </Heading>
          <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans">
            {area.description}
          </p>
        </div>

        <div className="relative z-10 pt-3 sm:pt-4 flex items-center justify-center">
          <Button
            href="/donate"
            variant="secondary"
            size="sm"
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />}
            aria-label={`Support ${area.title}`}
          >
            SUPPORT
          </Button>
        </div>
      </div>
    </Card>
  );
}

/* ── Featured Card (Hero Landmark & Accessible) ── */
function FeaturedCard({ area }: { area: ImpactArea }) {
  return (
    <article
      aria-labelledby={`featured-pillar-title-${area.id}`}
      className="group relative rounded-2xl sm:rounded-[28px] overflow-hidden h-full min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-5 sm:p-7 md:p-9 bg-gray-900 shadow-lg border border-gray-200/30 focus-within:ring-2 focus-within:ring-[#b10017] focus-within:ring-offset-2"
    >
      <Image
        src={area.image}
        alt={`Caritas Kampala ${area.title} featured programme`}
        fill
        sizes="(max-width: 1024px) 100vw, 66vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#b10017]/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      {/* Top Metadata */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest gap-2">
        <span>{area.category}</span>
        <span>{area.locations.join(", ")}</span>
      </div>

      {/* Middle Content */}
      <div className="relative z-10 my-4 sm:my-6 flex-1 space-y-2 sm:space-y-4">
        <Heading
          level={3}
          variant="subsection"
          color="white"
          id={`featured-pillar-title-${area.id}`}
          className="text-2xl sm:text-3xl lg:text-[40px] leading-[1.15]"
        >
          {area.title}
        </Heading>
        <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-sans max-w-xl">
          {area.description}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
          {area.serves}
        </span>
        <Button
          href="/donate"
          variant="secondary"
          size="md"
          rightIcon={<ArrowUpRight className="w-4 h-4" aria-hidden="true" />}
          aria-label={`Support ${area.title}`}
        >
          SUPPORT THIS CAUSE
        </Button>
      </div>
    </article>
  );
}

export default function WhereWeServe() {
  const featured = IMPACT_AREAS[0]; // Emergency & Disaster Response
  const rest = IMPACT_AREAS.slice(1);

  return (
    <section
      aria-labelledby="core-pillars-title"
      className="section-lg bg-[#f4efe6] relative overflow-hidden"
    >
      <div className="site-container relative">
        {/* Section Title */}
        <Heading
          level={2}
          variant="section"
          color="red"
          id="core-pillars-title"
          className="mb-6 sm:mb-10 text-balance"
        >
          Our Core Pillars of Support
        </Heading>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {/* Featured card (2 col) */}
          <div className="lg:col-span-2 lg:row-span-2">
            <FeaturedCard area={featured} />
          </div>
          <div>
            <WhiteCard area={rest[0]} />
          </div>
          <div>
            <WhiteCard area={rest[1]} />
          </div>

          {/* Row 2: 3 white cards across */}
          <div>
            <WhiteCard area={rest[2]} />
          </div>
          <div>
            <WhiteCard area={rest[3]} />
          </div>
          <div>
            <WhiteCard area={rest[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
