import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function DonateOnlineCard() {
  return (
    <section aria-labelledby="make-a-gift-heading" className="pt-5 sm:pt-7 pb-2 sm:pb-4">
      <div className="bg-[#ebe3d7] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8 text-center md:text-left shadow-sm shadow-gray-200/60 border border-[#e2d8ca]">
        <div
          aria-hidden="true"
          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b10017] rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xs"
        >
          <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-white" strokeWidth={2.25} />
        </div>

        <div className="min-w-0 space-y-2 md:flex-1">
          <h2
            id="make-a-gift-heading"
            className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl md:text-[28px] leading-tight"
          >
            Make a Gift Today
          </h2>
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-2xl font-sans">
            Every gift, however given, reaches families who need it most. You&apos;ll be taken to a secure page to complete your donation.
          </p>
        </div>

        <div className="w-full md:w-auto md:pl-4 flex justify-center md:justify-end">
          <Link
            href="/donate"
            aria-label="Donate Now — Make a gift to support families in need"
            className="group w-full max-w-sm sm:w-auto min-w-45 inline-flex items-center justify-center gap-2 bg-[#b10017] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full uppercase tracking-wider border-2 border-[#b10017] transition-all duration-200 motion-reduce:transition-none hover:bg-white hover:text-[#b10017] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#ebe3d7] focus-visible:bg-white focus-visible:text-[#b10017]"
          >
            <span>Donate Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}