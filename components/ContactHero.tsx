import Image from "next/image";

export default function ContactHero() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 mb-8 sm:mb-12 lg:relative">
      {/* Left Column: Image */}
      <div className="order-1 lg:order-1 relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[500px] rounded-t-2xl sm:rounded-t-[32px] lg:rounded-none lg:rounded-r-[32px] overflow-hidden">
        <Image
          src="/images/Event 01/Caritas_Kampala_72.jpg"
          alt="Caritas Kampala community outreach"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Spacer keeps grid height on large screens while the panel animates absolutely */}
      <div
        className="hidden lg:block lg:order-2 h-[500px]"
        aria-hidden="true"
      />

      {/* Right Column: Red Content Panel */}
      <div className="contact-hero-panel order-2 relative h-[300px] sm:h-[400px] md:h-[480px] lg:h-[500px] bg-[#b10017] text-white rounded-b-2xl sm:rounded-b-[32px] lg:rounded-none overflow-hidden flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-lg">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/90 mb-4 sm:mb-5">
            WE&apos;D LIKE TO HEAR FROM YOU
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-white tracking-tight mb-6 sm:mb-8">
            CONTACT US
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[26px] font-serif text-white leading-snug mb-4 sm:mb-6">
            Whether you have a question, want to support our current appeal, or would like to get involved, we&apos;re here to help.
          </p>
          <p className="text-sm sm:text-base text-white/90 font-sans">
            &mdash; The Charities Department, Caritas Kampala
          </p>
        </div>
      </div>
    </div>
  );
}
