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
      "Provides practical assistance to people and communities affected by disasters, displacement, food insecurity, and other emergencies.",
    serves: "FAMILIES & COMMUNITIES AFFECTED BY EMERGENCIES",
    locations: ["KAMPALA", "WAKISO", "MPIGI"],
    image: "/images/Event 01/Caritas_Kampala_75.jpg",
  },
  {
    id: "older-persons",
    title: "Support for Older Persons",
    category: "SENIOR CARE",
    description:
      "Provides visits, essential supplies, wellbeing support, and practical care for older people experiencing hardship, isolation, or limited family support.",
    serves: "OLDER PERSONS ACROSS THE ARCHDIOCESE",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_84.jpg",
  },
  {
    id: "family-child",
    title: "Family & Child Support",
    category: "HOUSEHOLD CARE",
    description:
      "Supports vulnerable children and families through practical assistance, education support, safeguarding, psychosocial care, and referrals.",
    serves: "FAMILIES & CHILDREN FACING HARDSHIP",
    locations: ["ARCHDIOCESE"],
    image: "/images/Event 01/Caritas_Kampala_03.jpg",
  },
  {
    id: "refugee",
    title: "Refugee & Asylum Seeker Support",
    category: "HUMANITARIAN AID",
    description:
      "Provides practical assistance, referrals, and support to refugees and asylum seekers as they navigate displacement and rebuild greater stability.",
    serves: "REFUGEES & ASYLUM SEEKERS",
    locations: ["KAMPALA"],
    image: "/images/Event 02/Caritas_Kampala_05.jpg",
  },
  {
    id: "disability",
    title: "Disability & Special Needs Support",
    category: "INCLUSION & CARE",
    description:
      "Supports people with disabilities through practical assistance, accessibility, inclusion, referrals, advocacy, and collaboration with specialist services.",
    serves: "PEOPLE WITH DISABILITIES & SPECIAL NEEDS",
    locations: ["ARCHDIOCESE"],
    image: "/images/Charities/Caritas_Kampala_87.jpg",
  },
  {
    id: "livelihoods",
    title: "Livelihoods & Poverty Reduction",
    category: "ECONOMIC EMPOWERMENT",
    description:
      "Supports individuals and families to strengthen livelihoods through skills development, savings initiatives, income-generating activities, and practical guidance.",
    serves: "INDIVIDUALS & FAMILIES FACING ECONOMIC HARDSHIP",
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

        <div className="relative z-10 pt-3 sm:pt-4 flex items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
          <span className="truncate">{area.serves}</span>
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
          href="/our-programmes"
          variant="secondary"
          size="md"
          rightIcon={<ArrowUpRight className="w-4 h-4" aria-hidden="true" />}
          aria-label={`Explore ${area.title}`}
        >
          EXPLORE THIS PROGRAMME
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
        <div className="mb-6 sm:mb-10 text-balance">
          <Heading
            level={2}
            variant="section"
            color="red"
            id="core-pillars-title"
            className="mb-4"
          >
            Our Core Pillars of Support
          </Heading>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
            Our programmes respond to urgent needs while helping individuals, families, and communities build greater stability, dignity, and resilience.
          </p>
        </div>

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
