import Image from "next/image";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";

export default function SidebarCard() {
  return (
    <div className="flex flex-col rounded-subcard overflow-hidden border border-gray-200">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/images/Charities/Caritas_Kampala_83.jpg"
          alt="Caritas Kampala outreach"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="bg-caritas-red p-8 text-white">
        <Heading level={3} variant="subsection" color="white" className="mb-4">
          Faith Put Into Practice
        </Heading>
        <p className="text-sm text-white/90 leading-relaxed mb-8 font-sans">
          Our work is rooted in practical service, responding to real needs with compassion, dignity, and responsibility.
        </p>
        <Button href="/our-programmes" variant="secondary" size="md">
          See Our Programmes
        </Button>
      </div>
    </div>
  );
}
