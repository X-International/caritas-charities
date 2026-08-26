import Image from "next/image";
import { Heading, Eyebrow, Lead } from "@/components/ui/Typography";

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
        <div className="contact-hero-panel-content max-w-lg space-y-4">
          <Eyebrow color="white">
            GIVE WITH CONFIDENCE
          </Eyebrow>
          <Heading level={1} variant="hero" color="white">
            DONATE
          </Heading>
          <Lead variant="article" className="text-white">
            Your gift reaches families across the Kampala Archdiocese. Every contribution counts, whatever its size.
          </Lead>
        </div>
      </div>
    </div>
  );
}