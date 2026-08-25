"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";

export default function SpotlightSection() {
  const [activeTab, setActiveTab] = useState("look-back");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoCloseRef = useRef<HTMLButtonElement>(null);
  const videoModalRef = useRef<HTMLDivElement>(null);
  const videoTriggerRef = useRef<HTMLButtonElement>(null);
  const videoHasOpenedRef = useRef(false);

  useEffect(() => {
    if (!isVideoModalOpen) {
      if (videoHasOpenedRef.current) videoTriggerRef.current?.focus();
      return;
    }
    videoHasOpenedRef.current = true;

    videoCloseRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoModalOpen(false);
        return;
      }
      if (event.key !== "Tab" || !videoModalRef.current) return;
      const focusable = Array.from(videoModalRef.current.querySelectorAll<HTMLElement>("button, iframe, [href], [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isVideoModalOpen]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 section-md">
      {/* Deep Emerald Teal Container */}
      <div className="bg-[#006b5d] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
        {/* Section Heading & Tabs */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-6">
          <Heading level={2} variant="section" color="white">
            Spotlight
          </Heading>

          {/* Toggle Pills */}
          <div className="inline-flex rounded-full border border-teal-600/50 bg-[#005247] p-1" role="tablist" aria-label="Spotlight sections">
            <button
              type="button"
              role="tab"
              onClick={() => setActiveTab("look-back")}
              aria-selected={activeTab === "look-back"}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === "look-back"
                  ? "bg-white text-[#006b5d] shadow"
                  : "text-teal-100 hover:text-white"
              }`}
            >
              TAKE A LOOK BACK
            </button>
            <button
              type="button"
              role="tab"
              onClick={() => setActiveTab("confederations")}
              aria-selected={activeTab === "confederations"}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                activeTab === "confederations"
                  ? "bg-white text-[#006b5d] shadow"
                  : "text-teal-100 hover:text-white"
              }`}
            >
              160+ CONFEDERATIONS
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Video Thumbnail Card */}
          <div className="lg:col-span-6">
            <button
              type="button"
              ref={videoTriggerRef}
              onClick={() => setIsVideoModalOpen(true)}
              aria-label="Play video Ordinary People. Extraordinary Love."
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group h-72 sm:h-80 lg:h-96 border-4 border-white/20 text-left block"
            >
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
                alt="Ordinary People. Extraordinary Love."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-caritas-red text-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xl sm:text-2xl font-extrabold font-serif block">
                  Ordinary People. Extraordinary Love.
                </span>
                <span className="text-xs text-teal-100 font-light block">
                  Stories & Reflections
                </span>
              </div>
            </button>
          </div>

          {/* Right Details */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <Heading level={3} variant="subsection" color="white" className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Ordinary People. Extraordinary Love.
            </Heading>
            <p className="text-sm sm:text-base text-teal-100 font-light leading-relaxed">
              Stories & Reflections from Caritas Secretariat staff and field workers worldwide. In the spirit of love and solidarity, Caritas staff and volunteers accompany, support, and rebuild communities in need across every continent.
            </p>
            <div className="pt-2">
              <Button
                href="/resources/news"
                variant="secondary"
                size="md"
              >
                READ STORY
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-black/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="caritas-video-title">
          <div ref={videoModalRef} className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              ref={videoCloseRef}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-[#b10017] flex items-center justify-center transition-colors"
              aria-label="Close Video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 id="caritas-video-title" className="sr-only">Caritas video</h2>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Caritas Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
