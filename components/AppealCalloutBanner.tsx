"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AppealCalloutBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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
    <div ref={sectionRef} className="relative pt-8 sm:pt-10 pb-10 sm:pb-16">
      <div
        className={`appeal-callout relative overflow-hidden grid grid-cols-1 gap-6 lg:block lg:h-[500px]${
          isVisible ? " appeal-callout--visible" : ""
        }`}
      >
        {/* Red callout panel — full-width animation wrapper on desktop */}
        <div className="appeal-callout-panel z-20 lg:absolute lg:inset-0 lg:flex lg:items-center">
          <div className="appeal-callout-panel-inner bg-[#b10017] text-white p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6 lg:w-[41.667%]">
            <div className="appeal-callout-panel-content space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif leading-snug">
                Each year, Caritas Kampala supports thousands of vulnerable families through food security, emergency relief, and community resilience programmes.
              </h2>
              <div className="appeal-callout-panel-cta">
                <Link
                  href="/contact-us"
                  className="inline-block bg-white text-[#b10017] hover:bg-transparent hover:text-white border-2 border-white text-xs font-bold px-7 py-3.5 rounded-full tracking-wider uppercase transition-all duration-200"
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
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="appeal-callout-image-media object-cover"
          />
        </div>
      </div>
    </div>
  );
}
