"use client";

import Image from "next/image";

export default function HumanitarianAppeal() {
  return (
    <section className="site-container py-8 sm:py-10">
      <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/Event 04/Caritas_Kampala_20.jpg"
          alt="Humanitarian relief water distribution"
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover object-center"
        />

        {/* Soft Vignette Overlay on right side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Left Floating Red Card */}
        <div className="relative z-10 p-4 sm:p-10 lg:p-12 w-full max-w-xl">
          <div className="bg-[#b10017] text-white p-6 sm:p-10 rounded-2xl shadow-2xl space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-serif leading-tight italic">
                &quot;Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.&quot;
              </h2>
              <p className="text-sm sm:text-base text-red-100 font-semibold uppercase tracking-widest opacity-90">
                — Matthew 25:40
              </p>
            </div>
            <div className="pt-2">
              <a
                href="/donate"
                className="inline-block bg-white text-[#b10017] hover:bg-transparent hover:text-white border-2 border-white text-xs font-bold px-7 py-3.5 rounded-full tracking-wider uppercase transition-all duration-200"
              >
                DONATE NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
