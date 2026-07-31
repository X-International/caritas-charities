"use client";

import Image from "next/image";

export default function CurrentCrises() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Outer Crimson Card Container */}
      <div className="bg-[#be0f2e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight">
            Current Appeal
          </h2>
          <p className="text-sm sm:text-base text-red-100 font-light leading-relaxed">
            As the Kampala Archdiocese, we're calling on everyone, both Catholic and non-Catholic, to stand with the people of Karamoja facing famine.
          </p>
        </div>

        {/* Inner Crisis Featured Card Container */}
        <div className="bg-white text-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-inner">
              <Image
                src="/images/current appeal/Caritas_Kampala_Current_Appeal.jpg"
                alt="Famine in Karamoja"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#be0f2e] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow">
                KOTIDO & MOROTO, KARAMOJA
              </span>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#be0f2e]">
                Famine in Karamoja
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Drought driven by climate change has brought famine to the Kotido and Moroto dioceses. From July through September, the Kampala Archdiocese is collecting food and essential relief items to send to families in need, and every contribution helps, no matter the size.
              </p>
              <div className="pt-2">
                <a
                  href="#how-to-help"
                  className="inline-block bg-[#be0f2e] hover:bg-[#8e0a20] text-white text-xs font-bold px-7 py-3 rounded-full tracking-wider uppercase shadow-md transition-transform transform hover:-translate-y-0.5"
                >
                  See How to Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
