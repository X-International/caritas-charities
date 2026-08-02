import Image from "next/image";

export default function DonateHero() {
  return (
    <div className="contact-hero w-full grid grid-cols-1 mb-8 sm:mb-12 relative overflow-hidden lg:h-125">
      {/* Left Column: Image */}
      <div className="contact-hero-image order-1 relative h-75 sm:h-100 md:h-120 lg:h-full rounded-t-2xl sm:rounded-t-4xl lg:rounded-none lg:rounded-r-4xl overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:w-[calc(50%-0.5rem)]">
        <Image
          src="/images/Event 04/Caritas_Kampala_18.jpg"
          alt="Caritas Kampala donation and support"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="contact-hero-image-media object-cover"
        />
      </div>

      {/* Right Column: Red Content Panel */}
      <div className="contact-hero-panel order-2 relative h-75 sm:h-100 md:h-120 lg:h-full bg-[#b10017] text-white rounded-b-2xl sm:rounded-b-4xl lg:rounded-none lg:rounded-l-4xl overflow-hidden flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="contact-hero-panel-content max-w-lg">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/90 mb-4 sm:mb-5">
            GIVE WITH CONFIDENCE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-white tracking-tight mb-6 sm:mb-8">
            DONATE
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[26px] font-serif text-white leading-snug mb-4 sm:mb-6">
            Your gift reaches families across the Archdiocese of Kampala. Every contribution counts, whatever its size.
          </p>
        </div>
      </div>
    </div>
  );
}