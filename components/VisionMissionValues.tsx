"use client";

import Image from "next/image";
import { useState } from "react";
import { Heading, Lead, Text } from "@/components/ui/Typography";

const identitySections = [
  {
    id: "vision",
    label: "Our Vision",
    title: "Our Vision",
    image: "/images/Charities/Caritas_Kampala_82.jpg",
    lead: "A just world, transformed to reflect God’s kingdom, where all people in our common home experience love, compassion and the fullness of life.",
    body: "We see a world where every person is heard, valued and treated with dignity and respect. A world where people live in peace, support one another and care for the earth.",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Our Mission",
    image: "/images/Charities/Caritas_Kampala_83.jpg",
    lead: "Inspired by the Gospel and Catholic Social Teaching, we serve people living in poverty and respond to the needs of vulnerable communities.",
    body: "Through compassion, solidarity and practical action, Caritas Kampala works to save lives, relieve suffering, promote justice and restore dignity across Kampala Archdiocese.",
  },
  {
    id: "values",
    label: "Our Values",
    title: "Our Values",
    image: "/images/Charities/Caritas_Kampala_84.jpg",
    lead: "Our work is rooted in dignity, compassion, solidarity and a commitment to justice for every person.",
    body: "We welcome everyone without discrimination and work with communities as partners, protecting creation and building a more peaceful and inclusive society.",
  },
];

export default function VisionMissionValues() {
  const [activeId, setActiveId] = useState(identitySections[0].id);
  const activeSection = identitySections.find((section) => section.id === activeId) ?? identitySections[0];

  return (
    <section aria-labelledby="identity-title" className="site-container py-12 lg:py-16">
      <div className="overflow-hidden rounded-[22px] bg-caritas-red px-6 py-10 text-white sm:px-8 lg:px-10 lg:py-12">
        <Heading id="identity-title" level={2} variant="section" color="white" className="scroll-mt-32 text-center text-4xl font-bold sm:text-5xl lg:text-[52px]">
          Vision, mission and values
        </Heading>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4" role="tablist" aria-label="Our identity">
          {identitySections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="tab"
              id={`identity-tab-${section.id}`}
              aria-selected={activeId === section.id}
              aria-controls={`identity-panel-${section.id}`}
              onClick={() => setActiveId(section.id)}
              className={`rounded-full px-5 py-3 text-sm font-bold uppercase transition-colors focus-visible:outline-2 focus-visible:outline-white sm:px-7 ${activeId === section.id ? "bg-white text-caritas-red" : "text-white hover:bg-white/15"}`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div id={`identity-panel-${activeSection.id}`} role="tabpanel" aria-labelledby={`identity-tab-${activeSection.id}`} tabIndex={0} aria-live="polite" className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] lg:aspect-[16/9]">
            <Image key={activeSection.image} src={activeSection.image} alt={activeSection.title} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="lg:pr-5">
            <Heading level={3} variant="subsection" color="white" className="text-3xl leading-tight sm:text-4xl">
              {activeSection.title}
            </Heading>
            <Lead color="white" className="mt-5 font-serif text-xl leading-[1.3] sm:text-2xl">
              {activeSection.lead}
            </Lead>
            <Text color="white" className="mt-5 text-base leading-relaxed opacity-95 sm:text-lg">
              {activeSection.body}
            </Text>
          </div>
        </div>

      </div>
    </section>
  );
}
