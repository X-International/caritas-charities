import Image from "next/image";
import Link from "next/link";

export default function SidebarCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-gray-200">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/images/Charities/Caritas_Kampala_83.jpg"
          alt="Caritas Kampala outreach"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="bg-[#b10017] p-8 text-white">
        <h3 className="text-2xl font-serif font-bold mb-4">Faith Put Into Practice</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-8">
          Our story is one of showing up, again and again, for the people who need it most. Every programme we run is one more way that story continues.
        </p>
        <Link
          href="/our-programmes"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#b10017] font-bold text-xs px-7 py-3 rounded-full uppercase tracking-wider border-2 border-white transition-all duration-200 hover:bg-[#b10017] hover:text-white hover:-translate-y-0.5"
        >
          See What We Do
        </Link>
      </div>
    </div>
  );
}
