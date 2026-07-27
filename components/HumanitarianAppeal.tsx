"use client";

import Image from "next/image";

export default function HumanitarianAppeal() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop"
          alt="Humanitarian relief water distribution"
          fill
          className="object-cover object-center"
        />

        {/* Soft Vignette Overlay on right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Left Floating Red Card */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 w-full max-w-xl">
          <div className="bg-[#be0f2e] text-white p-8 sm:p-10 rounded-2xl shadow-2xl space-y-6 transform hover:-translate-y-1 transition-transform">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif leading-tight">
              Caritas appeals to bring urgent relief to people facing humanitarian crises
            </h2>
            <p className="text-sm sm:text-base text-red-100 font-light">
              See how you can help support communities facing emergency hardships around the world.
            </p>
            <div className="pt-2">
              <a
                href="#explore-humanitarian"
                className="inline-block bg-white text-[#be0f2e] hover:bg-red-50 text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full tracking-wider uppercase shadow-lg transition-all transform hover:scale-105"
              >
                EXPLORE HUMANITARIAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
