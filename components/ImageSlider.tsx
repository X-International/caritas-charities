"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export type SliderSlide = {
  id: number | string;
  image: string;
  alt: string;
};

export interface ImageSliderProps {
  slides: SliderSlide[];
  /** Responsive height classes for the slider frame. */
  heightClassName?: string;
  sizes?: string;
  label?: string;
}

export default function ImageSlider({
  slides,
  heightClassName = "h-[320px] sm:h-[380px] lg:h-[420px]",
  sizes = "(max-width: 1024px) 100vw, 45vw",
  label = "Image slider",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  /* Auto-play timer */
  useEffect(() => {
    if (isFocused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isFocused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className={`relative w-full ${heightClassName} overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-none group`}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes={sizes}
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover object-top"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 flex items-center justify-center transition opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 flex items-center justify-center transition opacity-0 group-hover:opacity-100 focus:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Pagination */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex space-x-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-5 bg-white shadow-sm" : "w-1.5 bg-white/60 hover:bg-white"}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
