"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Serving with Compassion",
    subtitle:
      "The Charities Office serves vulnerable people and communities across Kampala Archdiocese with practical support, dignity, and care.",
    buttonText: "OUR PROGRAMMES",
    buttonLink: "/our-programmes",
    image: "/images/Miscellany/Caritas_Kampala_39.jpg",
  },
  {
    id: 2,
    title: "Responding to Need",
    subtitle:
      "From emergency response to family support, elderly care, livelihoods, and assistance for refugees and people with disabilities, our programmes respond to real needs across our communities.",
    buttonText: "SEE OUR WORK",
    buttonLink: "/our-programmes",
    image: "/images/Miscellany/Caritas_Kampala_43.jpg",
  },
  {
    id: 3,
    title: "Be Part of the Work",
    subtitle:
      "Volunteer your time, offer your skills, partner with us, or support the work in other practical ways.",
    buttonText: "GET INVOLVED",
    buttonLink: "#",
    image: "/images/Main Slider/Caritas_Kampala_70.jpg",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  /* Auto-play timer with pause control */
  useEffect(() => {
    if (isPaused || isFocused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isFocused, isPaused, nextSlide, prefersReducedMotion]);

  /* Touch / Swipe Navigation */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSlide();
    }
  };

  return (
      <section
        aria-roledescription="carousel"
        aria-label="Featured emergency appeals and humanitarian initiatives"
        aria-describedby="hero-slider-status"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsFocused(false);
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className="hero-slider relative w-full h-[clamp(620px,74svh,700px)] sm:h-[clamp(700px,76vh,780px)] lg:h-[clamp(740px,80vh,840px)] xl:h-[clamp(780px,82vh,840px)] min-h-[620px] sm:min-h-[700px] lg:min-h-[740px] overflow-hidden touch-pan-y select-none bg-black text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-4px] group -mt-[106px] sm:-mt-[114px] lg:-mt-[120px]"
      >
        {/* Background Image Carousel */}
        {slides.map((slide, index) => {
          const isCurrent = index === currentIndex;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.title}`}
              aria-hidden={!isCurrent}
              className={`hero-slider-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="hero-slider-image object-cover object-top origin-top transform scale-105 transition-transform duration-10000"
              />

              {/* Directional Gradient Overlay for Readability */}
              <div 
                className="absolute inset-0" 
                style={{
                  background: "linear-gradient(90deg, rgba(0,0,0,0.64) 0%, rgba(0,0,0,0.45) 32%, rgba(0,0,0,0.20) 62%, rgba(0,0,0,0.06) 100%)"
                }}
                aria-hidden="true" 
              />
            </div>
          );
        })}

        {/* Content Container — absolute fill, centered on mobile, left-aligned on sm+, site-container alignment */}
        <div className="absolute inset-0 z-20 flex items-center site-container px-4 sm:px-10 lg:px-12 xl:px-14 pt-[106px] sm:pt-[114px] lg:pt-[120px]">
          <div key={currentIndex} className="hero-slider-content max-w-[340px] mx-auto sm:mx-0 sm:max-w-[560px] lg:max-w-[600px] xl:max-w-[640px] space-y-4 sm:space-y-5 max-sm:text-center max-sm:items-center sm:text-left sm:items-start animate-in fade-in zoom-in-95 duration-300">
            {/* Title */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[64px] font-extrabold font-serif leading-[1.1] text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              {slides[currentIndex].title}
            </h1>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white/95 font-medium max-w-[340px] sm:max-w-[560px] lg:max-w-[600px] mx-auto sm:mx-0 leading-[1.5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {slides[currentIndex].subtitle}
            </p>

            <div className="pt-3 max-sm:flex max-sm:justify-center">
              <Button
                href={slides[currentIndex].buttonLink}
                onKeyDown={handleKeyDown}
                onClick={() => trackEvent(ANALYTICS_EVENTS.ctaClick, {
                  placement: "hero",
                  slide: slides[currentIndex].id,
                  destination: slides[currentIndex].buttonLink,
                })}
                variant="primary"
                size="lg"
              >
                {slides[currentIndex].buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          onKeyDown={handleKeyDown}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-caritas-red focus-visible:bg-caritas-red focus-visible:outline-2 focus-visible:outline-white text-white flex items-center justify-center transition-[opacity,background-color] backdrop-blur-md border border-white/10 shadow-lg cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={nextSlide}
          onKeyDown={handleKeyDown}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-caritas-red focus-visible:bg-caritas-red focus-visible:outline-2 focus-visible:outline-white text-white flex items-center justify-center transition-[opacity,background-color] backdrop-blur-md border border-white/10 shadow-lg cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination & Auto-play Pause Control Row */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-xl">
          {/* Pause/Play Toggle Button */}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            onKeyDown={handleKeyDown}
            aria-label={isPaused ? "Play slide animation" : "Pause slide animation"}
            className="text-white hover:text-caritas-red focus-visible:outline-2 focus-visible:outline-white rounded cursor-pointer p-0.5"
          >
            {isPaused ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>

          <span className="w-px h-3 bg-white/30" aria-hidden="true" />

          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-2" role="group" aria-label="Choose a slide">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                onKeyDown={handleKeyDown}
                aria-current={index === currentIndex ? "true" : undefined}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={`h-2.5 rounded-full transition-[width,background-color] cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                  index === currentIndex
                    ? "w-8 bg-caritas-red"
                    : "w-2.5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        <p id="hero-slider-status" className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].title}. {slides[currentIndex].subtitle}
        </p>
      </section>
  );
}
