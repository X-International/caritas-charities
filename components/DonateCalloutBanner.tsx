import Image from "next/image";

export default function DonateCalloutBanner() {
  return (
    <div className="relative pt-8 sm:pt-10 pb-10 sm:pb-16">
      <div className="appeal-callout relative overflow-hidden grid grid-cols-1 gap-6 lg:block lg:h-140">
        <div className="appeal-callout-panel z-20 lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-start">
          <div className="appeal-callout-panel-inner bg-[#b10017] text-white p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6 text-center lg:text-left lg:w-[37%] lg:max-w-130">
            <div className="appeal-callout-panel-content space-y-5 sm:space-y-6 flex flex-col items-center lg:items-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif leading-tight max-w-[14ch] sm:max-w-[15ch] lg:max-w-none">
                &ldquo;Whatever you did for one of the least of these brothers and sisters of mine, you did for me.&rdquo;
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/95 max-w-md">
                &mdash; Matthew 25:40.
              </p>
            </div>
          </div>
        </div>

        <div className="appeal-callout-image relative h-96 sm:h-130 lg:absolute lg:top-0 lg:bottom-0 lg:left-[26%] lg:right-0 rounded-2xl sm:rounded-3xl overflow-hidden">
          <Image
            src="/images/Event 03/Caritas_Kampala_16.jpg"
            alt="Caritas Kampala community support"
            fill
            sizes="(max-width: 1024px) 100vw, 74vw"
            className="appeal-callout-image-media object-cover"
          />
        </div>
      </div>
    </div>
  );
}