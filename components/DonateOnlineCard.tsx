"use client";

import { ArrowRight, Heart } from "lucide-react";
import { useId } from "react";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";

export default function DonateOnlineCard() {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="pt-5 sm:pt-7 pb-2 sm:pb-4">
      <Card variant="info" className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8 text-center md:text-left">
        <div
          aria-hidden="true"
          className="w-16 h-16 sm:w-20 sm:h-20 bg-caritas-red rounded-pill flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xs"
        >
          <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-white" strokeWidth={2.25} />
        </div>

        <div className="min-w-0 space-y-2 md:flex-1">
          <Heading
            level={2}
            variant="subsection"
            color="red"
            id={headingId}
            className="md:text-[28px] leading-tight"
          >
            Support Our Work
          </Heading>
          <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-2xl font-sans">
            Your gift helps the Charities Office provide practical support to vulnerable individuals and families across the Kampala Archdiocese.
          </p>
        </div>

        <div className="w-full md:w-auto md:pl-4 flex justify-center md:justify-end">
          <Button
            href="/donate"
            onClick={() => trackEvent(ANALYTICS_EVENTS.ctaClick, { placement: "gift_card", destination: "/donate" })}
            aria-label="Donate to support the work of the Charities Office"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
            className="w-full max-w-sm sm:w-auto min-w-45"
          >
            DONATE
          </Button>
        </div>
      </Card>
    </section>
  );
}
