"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Heading } from "@/components/ui/Typography";

export default function AppealCalloutBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="appeal-callout-heading" className="relative pt-8 sm:pt-10 pb-10 sm:pb-16">
      <div
        className={`appeal-callout relative overflow-hidden grid grid-cols-1 gap-6 lg:block lg:h-[500px]${
          isVisible ? " appeal-callout--visible" : ""
        }`}
      >
        {/* Red callout panel — full-width animation wrapper on desktop */}
        <div className="appeal-callout-panel z-20 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <div className="appeal-callout-panel-inner bg-[#b10017] text-white p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6 lg:w-[41.667%]">
            <div className="appeal-callout-panel-content space-y-5 sm:space-y-6">
              <Heading
                level={2}
                variant="subsection"
                color="white"
                id="appeal-callout-heading"
                className="text-xl sm:text-2xl lg:text-3xl leading-snug text-balance"
              >
                Each year, Caritas Kampala supports thousands of vulnerable families through food security, emergency relief, and community resilience programmes.
              </Heading>
              <div className="appeal-callout-panel-cta">
                <Link
                  href="/contact-us"
                  className="inline-block bg-white text-[#b10017] hover:bg-transparent hover:text-white border-2 border-white text-xs font-bold px-7 py-3.5 rounded-full tracking-wider uppercase transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                >
                  Contact Us to Contribute
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Background image */}
        <div className="appeal-callout-image relative h-[320px] sm:h-[420px] lg:absolute lg:top-0 lg:bottom-0 lg:left-[calc(41.667%-3rem)] lg:right-0 rounded-2xl sm:rounded-3xl overflow-hidden">
          <Image
            src="/images/Charities/Caritas_Kampala_83.jpg"
            alt="Caritas Kampala field team supporting community development"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="appeal-callout-image-media object-cover"
          />
        </div>
      </div>
    </section>
  );
}
