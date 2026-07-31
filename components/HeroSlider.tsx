"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

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
    title: "Standing With Those in Need",
    subtitle:
      "Serving vulnerable children, families, and communities across the Archdiocese of Kampala with compassion, dignity, and lasting hope.",
    buttonText: "Donate Now",
    buttonLink: "#",
    image: "/images/Main Slider/Caritas_Kampala_87.jpg",
  },
  {
    id: 2,
    title: "Transforming Lives Together",
    subtitle:
      "From emergency response to long-term community development, we empower people to build brighter futures.",
    buttonText: "See What We Do",
    buttonLink: "#",
    image: "/images/Main Slider/Caritas_Kampala_91.jpg",
  },
  {
    id: 3,
    title: "Stronger as One Family",
    subtitle:
      "Part of a network of charity homes across the Archdiocese, working together for those who need it most.",
    buttonText: "Get Involved",
    buttonLink: "#",
    image: "/images/Main Slider/Caritas_Kampala_92.jpg",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  /* Auto-play timer with pause control */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  /* Touch / Swipe Navigation */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
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

  return (
    <section
      aria-label="Featured Emergency Appeals and Humanitarian Initiatives"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[540px] sm:h-[600px] lg:h-[650px] overflow-hidden bg-black text-white focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-4px]"
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
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              className="object-cover object-top transform scale-105 transition-transform duration-10000"
            />
            {/* Dark Overlay Vignette for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
          </div>
        );
      })}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center items-center text-center">
        <div key={currentIndex} className="max-w-3xl space-y-5 animate-in fade-in zoom-in-95 duration-300">
          <h1 className="text-[35px] sm:text-[47px] md:text-[59px] font-extrabold font-serif leading-tight drop-shadow-md">
            {slides[currentIndex].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            {slides[currentIndex].subtitle}
          </p>
          <div className="pt-3">
            <a
              href={slides[currentIndex].buttonLink}
              onClick={(e) => e.preventDefault()}
              className="inline-block bg-[#be0f2e] text-white hover:bg-white hover:text-[#be0f2e] border-2 border-[#be0f2e] text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full tracking-wider uppercase transition-colors duration-200 shadow-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              {slides[currentIndex].buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#be0f2e] focus-visible:bg-[#be0f2e] focus-visible:outline-2 focus-visible:outline-white text-white flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#be0f2e] focus-visible:bg-[#be0f2e] focus-visible:outline-2 focus-visible:outline-white text-white flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination & Auto-play Pause Control Row */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3 bg-black/40 backdrop-blur-xs px-4 py-2 rounded-full border border-white/10">
        {/* Pause/Play Toggle Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play slide animation" : "Pause slide animation"}
          className="text-white hover:text-[#be0f2e] focus-visible:outline-2 focus-visible:outline-white rounded cursor-pointer p-0.5"
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
        <div className="flex items-center space-x-2" role="tablist" aria-label="Slide Selection">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-white ${
                index === currentIndex
                  ? "w-8 bg-[#be0f2e]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
