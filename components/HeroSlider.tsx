"use client";

import { useState, useEffect, useCallback } from "react";
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
    title: "Bangladesh Flood Emergency",
    subtitle:
      "Caritas responds with life-saving support, food, clean water, and shelter for affected communities.",
    buttonText: "READ MORE",
    buttonLink: "#bangladesh-flood",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920&auto=format&fit=crop", // Field relief workers in flood affected zone
  },
  {
    id: 2,
    title: "Sudan Crisis Emergency Response",
    subtitle:
      "Providing urgent medical supplies, clean drinking water, and safe shelter to displaced families in Sudan.",
    buttonText: "DONATE NOW",
    buttonLink: "#sudan-crisis",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop", // Humanitarian aid distribution
  },
  {
    id: 3,
    title: "Gaza Relief & Humanitarian Action",
    subtitle:
      "Caritas teams on the ground delivering food baskets, hygiene kits, and emergency trauma care.",
    buttonText: "SUPPORT OUR APPEAL",
    buttonLink: "#gaza-appeal",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1920&auto=format&fit=crop", // Relief supplies deployment
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-[540px] sm:h-[600px] lg:h-[650px] overflow-hidden bg-black text-white">
      {/* Background Image Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center transform scale-105 transition-transform duration-10000"
          />
          {/* Dark Overlay Vignette for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 sm:px-12 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl space-y-5 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif leading-tight drop-shadow-md">
            {slides[currentIndex].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            {slides[currentIndex].subtitle}
          </p>
          <div className="pt-3">
            <a
              href={slides[currentIndex].buttonLink}
              className="inline-block bg-[#be0f2e] hover:bg-[#8e0a20] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full tracking-wider uppercase shadow-xl transition-all transform hover:scale-105"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#be0f2e] text-white flex items-center justify-center transition-all backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-[#be0f2e] text-white flex items-center justify-center transition-all backdrop-blur-sm"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-[#be0f2e]" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
