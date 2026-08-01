import Image from "next/image";

export default function AppealPageHero() {
  return (
    <div className="appeal-hero relative w-full h-[280px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-8 sm:mb-12">
      <Image
        src="/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg"
        alt="Emergency Appeal for Kotido and Moroto"
        fill
        priority
        sizes="100vw"
        className="appeal-hero-media object-cover"
      />
      <div className="appeal-hero-gradient absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <span className="appeal-hero-badge inline-block bg-[#b10017] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg border border-white/20">
          KOTIDO &amp; MOROTO, KARAMOJA
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-[11px] sm:text-sm font-light">
        <p className="appeal-hero-caption bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-lg inline-block text-white/95 leading-relaxed">
          The famine in Kotido and Moroto has left many families struggling to meet their most basic needs.
        </p>
      </div>
    </div>
  );
}
