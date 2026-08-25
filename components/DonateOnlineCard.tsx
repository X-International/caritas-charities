"use client";

import { ArrowRight, Heart } from "lucide-react";
import { useId } from "react";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";

export default function DonateOnlineCard() {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="pt-5 sm:pt-7 pb-2 sm:pb-4">
      <div className="bg-[#f4efe6] rounded-card p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8 text-center md:text-left shadow-sm shadow-gray-200/60 border border-[#e8dfd1]">
        <div
          aria-hidden="true"
          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#b10017] rounded-pill flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xs"
        >
          <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-white" strokeWidth={2.25} />
        </div>

        <div className="min-w-0 space-y-2 md:flex-1">
          <h2
            id={headingId}
            className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl md:text-[28px] leading-tight"
          >
            Make a Gift Today
          </h2>
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-2xl font-sans">
            Every gift, however given, reaches families who need it most. Contact our office to confirm the current official payment route before sending money.
          </p>
        </div>

        <div className="w-full md:w-auto md:pl-4 flex justify-center md:justify-end">
          <Button
            href="/contact-us"
            onClick={() => trackEvent(ANALYTICS_EVENTS.ctaClick, { placement: "gift_card", destination: "/contact-us" })}
            aria-label="Contact Caritas Kampala to confirm donation details"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            className="w-full max-w-sm sm:w-auto min-w-45"
          >
            Confirm Giving Details
          </Button>
        </div>
      </div>
    </section>
  );
}
