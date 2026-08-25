"use client";

import Image from "next/image";
import { ArrowRight, Check, Copy, Heart, Landmark, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

const BANK_ACCOUNT = siteConfig.giving.bank.accountNumber;
const MOBILE_NUMBERS = [siteConfig.office.phones.appeal, siteConfig.office.phones.appealAlternate];

export default function OtherWaysToSupport() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!copiedKey) return;

    const timeout = window.setTimeout(() => setCopiedKey(null), 2000);
    return () => window.clearTimeout(timeout);
  }, [copiedKey]);

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      trackEvent(ANALYTICS_EVENTS.donationMethodCopy, { method: key });
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedKey(key);
      trackEvent(ANALYTICS_EVENTS.donationMethodCopy, { method: key });
    }
  };

  const cardClassName =
    "bg-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col h-full border border-[#efe3d2]";

  const copyAllMobileNumbers = async () => {
    await copyToClipboard(MOBILE_NUMBERS.join("\n"), "mobile-all");
  };

  return (
    <section className="w-full bg-[#f4efe6] section-lg">
      <div className="site-container">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-10 space-y-3 sm:space-y-4">
          <Heading level={2} variant="section" color="red" id="ways-to-give" className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight">
            Ways to Give
          </Heading>
          <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-[#4d4338]">
            This is the official donation page of the Caritas Kampala Charities Office.{' '}
            <a
              href="https://www.caritaskampalacharities.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold text-[#b10017] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Visit Caritas Kampala →
            </a>
          </p>
        </div>

        <div className="w-full mb-8 sm:mb-10 md:mb-12 overflow-hidden rounded-3xl aspect-1340/550 bg-[#e7ddcf]">
          <Image
            src="/images/Event%2001/Caritas_Kampala_71.jpg"
            alt="Community members receiving support from Caritas Kampala"
            width={1340}
            height={550}
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7.5">
          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Heart className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight">
                  Give Online
                </Heading>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto">
                  For secure online giving instructions, contact our team. We will confirm the current official payment route before you send money.
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 flex flex-col items-center gap-3">
              <Button
                href="/contact-us"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />}
                onClick={() => trackEvent(ANALYTICS_EVENTS.ctaClick, { placement: "donation_methods", destination: "/contact-us" })}
              >
                Donate Now
              </Button>
            </div>
          </div>

          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Landmark className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight">
                  Bank Transfer
                </Heading>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto whitespace-pre-line">
                    {"Send your gift directly to our account.\n\nCentenary Bank\nEntebbe Road Branch\nAccount No."}
                  </p>
                  <div className="inline-flex items-center justify-center rounded-full bg-[#f7f2ea] border border-[#e6d7c6] px-4 py-2 text-lg sm:text-xl font-semibold tracking-[0.12em] text-[#2c2c2c]">
                    3010309657
                  </div>
                  <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto">
                    Caritas Kampala
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 flex justify-center">
              <Button
                type="button"
                variant="primary"
                size="md"
                leftIcon={copiedKey === "bank" ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                onClick={() => copyToClipboard(BANK_ACCOUNT, "bank")}
              >
                {copiedKey === "bank" ? "Copied" : "Copy Account Number"}
              </Button>
            </div>
          </div>

          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Smartphone className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight">
                  Mobile Money
                </Heading>
                <div className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto space-y-3">
                  <p>Give directly using Mobile Money.</p>
                  <div className="space-y-2">
                    {MOBILE_NUMBERS.map((number) => (
                      <button
                        key={number}
                        type="button"
                        onClick={() => copyToClipboard(number, number)}
                        className="w-full inline-flex items-center justify-between gap-3 rounded-full border border-[#e6d7c6] bg-[#faf7f1] px-4 py-3 text-[#2c2c2c] transition-colors hover:border-[#cfbca6] hover:text-[#b10017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        aria-label={`Copy mobile number ${number}`}
                      >
                        <span className="font-bold">{number}</span>
                        <Copy className="w-4 h-4 shrink-0" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                  <p>Reference: &quot;Caritas Cause&quot;</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 flex justify-center">
              <Button
                type="button"
                variant="primary"
                size="md"
                leftIcon={copiedKey === "mobile-all" ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                onClick={copyAllMobileNumbers}
              >
                {copiedKey === "mobile-all" ? "Copied" : "Copy Numbers"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
