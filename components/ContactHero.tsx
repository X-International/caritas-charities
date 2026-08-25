import Image from "next/image";
import { Heading, Eyebrow, Lead } from "@/components/ui/Typography";

export default function ContactHero() {
  return (
    <div className="contact-hero w-full grid grid-cols-1 mb-8 sm:mb-12 relative overflow-hidden lg:h-125">
      {/* Left Column: Image */}
      <div className="contact-hero-image order-1 relative h-75 sm:h-100 md:h-120 lg:h-full rounded-t-2xl sm:rounded-t-4xl lg:rounded-none lg:rounded-r-4xl overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:w-[calc(50%-0.5rem)]">
        <Image
          src="/images/Event 01/Caritas_Kampala_72.jpg"
          alt="Caritas Kampala community outreach"
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
            WE&apos;D LIKE TO HEAR FROM YOU
          </Eyebrow>
          <Heading level={1} variant="hero" color="white">
            CONTACT US
          </Heading>
          <Lead variant="article" className="text-white">
            Whether you have a question, want to support our current appeal, or would like to get involved, we&apos;re here to help.
          </Lead>
        </div>
      </div>
    </div>
  );
}
