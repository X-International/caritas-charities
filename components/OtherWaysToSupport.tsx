"use client";

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
        {/* Ways to Give Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-14 space-y-3 sm:space-y-4">
          <Heading level={2} variant="section" color="red" id="ways-to-give" className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight">
            Ways to Give
          </Heading>
          <p className="text-base sm:text-lg leading-relaxed text-[#4d4338] max-w-2xl mx-auto">
            Choose the giving method that is most convenient for you. Please use only the official payment details shown or confirmed by the Charities Office.
          </p>
        </div>

        {/* Giving Cards Grid: 1. Mobile Money, 2. Bank Transfer, 3. Give Online */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7.5">
          {/* 1. Mobile Money Card */}
          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Smartphone className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4 w-full">
                <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight">
                  Mobile Money
                </Heading>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto">
                  Send your gift using one of the official Mobile Money numbers below.
                </p>
                <div className="space-y-2 w-full pt-1">
                  {MOBILE_NUMBERS.map((number) => (
                    <button
                      key={number}
                      type="button"
                      onClick={() => copyToClipboard(number, number)}
                      className="w-full inline-flex items-center justify-between gap-3 rounded-full border border-[#e6d7c6] bg-[#faf7f1] px-4 py-3 text-[#2c2c2c] transition-colors hover:border-[#cfbca6] hover:text-[#b10017] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      aria-label={`Copy mobile number ${number}`}
                    >
                      <span className="font-bold font-mono">{number}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        {copiedKey === number ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-600" aria-hidden="true" />
                            <span className="text-green-600 font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Copy</span>
                          </>
                        )}
                      </span>
                    </button>
                  ))}
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

          {/* 2. Bank Transfer Card */}
          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Landmark className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight">
                  Bank Transfer
                </Heading>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto">
                  Send your gift directly to the official Charities Office bank account.
                </p>
                <div className="text-[#2c2c2c] text-sm sm:text-base space-y-1 font-medium pt-1">
                  <p>{siteConfig.giving.bank.name}</p>
                  <p>{siteConfig.giving.bank.branch}</p>
                  <div className="my-2.5 inline-flex items-center justify-center rounded-full bg-[#f7f2ea] border border-[#e6d7c6] px-4 py-2 text-lg sm:text-xl font-mono font-bold tracking-[0.12em] text-[#2c2c2c]">
                    {BANK_ACCOUNT}
                  </div>
                  <p className="font-semibold text-gray-900">{siteConfig.giving.bank.accountName}</p>
                </div>
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

          {/* 3. Give Online Card (centered on tablet 2-column layout) */}
          <div className={`${cardClassName} md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0`}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Heart className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight">
                  Give Online
                </Heading>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto">
                  For secure online giving instructions, contact the Charities Office to confirm the current approved payment route.
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
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Payment Safety Note */}
        <div className="mt-8 sm:mt-10 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed">
            For your security, please use only the payment details published on this page or confirmed directly by the Charities Office.
          </p>
        </div>
      </div>
    </section>
  );
}
