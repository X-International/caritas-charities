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
      "Supporting vulnerable children, families, and communities across the Archdiocese of Kampala through faith, dignity, and love.",
    buttonText: "Donate Today",
    buttonLink: "/donate",
    image: "/images/Main Slider/Caritas_Kampala_87.jpg",
  },
  {
    id: 2,
    title: "Transforming Lives Together",
    subtitle:
      "Providing emergency relief, community support, and lasting hope for people facing hardship every day.",
    buttonText: "Our Programmes",
    buttonLink: "/our-programmes",
    image: "/images/Main Slider/Caritas_Kampala_07.jpg",
  },
  {
    id: 3,
    title: "Hope Begins With Us",
    subtitle:
      "Together we can bring care, opportunity, and hope to those who need it most.",
    buttonText: "Learn More",
    buttonLink: "/about-us",
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
    <div className="site-container pt-4 sm:pt-5 lg:pt-6 xl:pt-8 2xl:pt-10 pb-0 sm:pb-4 lg:pb-6">
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
        className="hero-slider relative w-full h-[clamp(420px,52vh,720px)] lg:h-[clamp(520px,62vh,880px)] xl:h-[clamp(580px,68vh,1000px)] 2xl:h-[clamp(580px,60vh,850px)] overflow-hidden touch-pan-y select-none bg-black text-white rounded-2xl sm:rounded-3xl shadow-2xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-4px] group"
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
                className="hero-slider-image object-cover object-top transform scale-105 transition-transform duration-10000"
              />

              {/* Perfectly Balanced Overlay for Bright Image + Crisp Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" aria-hidden="true" />
            </div>
          );
        })}

        {/* Content Container — absolute fill so flex centering works against full hero height */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-10 lg:px-12 xl:px-14 text-center">
          <div key={currentIndex} className="hero-slider-content max-w-3xl xl:max-w-4xl space-y-5 animate-in fade-in zoom-in-95 duration-300">
            {/* Title — font-serif kept, scales through xl/2xl */}
            <h1 className="text-[35px] sm:text-[47px] md:text-[59px] xl:text-[64px] 2xl:text-[68px] font-extrabold font-serif leading-[1.12] text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              {slides[currentIndex].title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-white/95 font-medium max-w-2xl xl:max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              {slides[currentIndex].subtitle}
            </p>

            <div className="pt-3">
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-[#b10017] focus-visible:bg-[#b10017] focus-visible:outline-2 focus-visible:outline-white text-white flex items-center justify-center transition-[opacity,background-color] backdrop-blur-md border border-white/10 shadow-lg cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
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
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-[#b10017] focus-visible:bg-[#b10017] focus-visible:outline-2 focus-visible:outline-white text-white flex items-center justify-center transition-[opacity,background-color] backdrop-blur-md border border-white/10 shadow-lg cursor-pointer opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
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
            className="text-white hover:text-[#b10017] focus-visible:outline-2 focus-visible:outline-white rounded cursor-pointer p-0.5"
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
                    ? "w-8 bg-[#b10017]"
                    : "w-2.5 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        <p id="hero-slider-status" className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].title}. {slides[currentIndex].subtitle}
        </p>
      </section>
    </div>
  );
}
