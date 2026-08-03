import Image from "next/image";
import Link from "next/link";

export default function SidebarCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-lg border border-gray-100">
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
        <h3 className="text-2xl font-serif font-bold mb-4">Serving out of Love</h3>
        <p className="text-sm text-white/90 leading-relaxed mb-8">
          This publication presents the mission of Caritas in the Church. Rooted in Scripture and Catholic Social Teaching, it shows how Caritas serves the poor, responds to emergencies, empowers communities, and advocates for justice.
        </p>
        <Link
          href="/donate"
          className="inline-block bg-white text-[#b10017] px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-gray-100 transition-colors"
        >
          DOWNLOAD
        </Link>
      </div>
    </div>
  );
}
