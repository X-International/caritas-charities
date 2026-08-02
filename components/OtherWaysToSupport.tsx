"use client";

import Image from "next/image";
import { ArrowRight, Check, Copy, Heart, Landmark, LockKeyhole, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const BANK_ACCOUNT = "3010309657";
const MOBILE_NUMBERS = ["+256 762 506 906", "+256 792 176 443"];

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
    }
  };

  const cardClassName =
    "bg-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col h-full border border-[#efe3d2] shadow-[0px_1px_20px_0px_rgba(0,0,0,0.04)]";

  const copyAllMobileNumbers = async () => {
    await copyToClipboard(MOBILE_NUMBERS.join("\n"), "mobile-all");
  };

  return (
    <section className="w-full bg-[#f4efe6] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <h3 className="text-[#b10017] text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-serif text-center mb-6 sm:mb-8 md:mb-10">
          Ways to Give
        </h3>

        <div className="w-full mb-8 sm:mb-10 md:mb-12 overflow-hidden rounded-3xl">
          <Image
            src="/images/Event%2001/Caritas_Kampala_71.jpg"
            alt="Community members receiving support from Caritas Kampala"
            width={1340}
            height={550}
            className="w-full h-50 sm:h-70 md:h-95 lg:h-112.5 xl:h-125 2xl:h-137.5 object-cover"
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
                <h4 className="text-[#b10017] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-normal leading-tight">
                  Give Online
                </h4>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto">
                  Give securely through our online payment partner. It only takes a minute, and every gift goes directly to support this work.
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 flex flex-col items-center gap-3">
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 border border-[#b10017] bg-[#b10017] text-white text-xs sm:text-[13px] md:text-[14px] font-bold uppercase tracking-wider rounded-full px-6 sm:px-7 md:px-7.5 py-3 sm:py-3.25 md:py-3.5 transition-all duration-200 hover:bg-white hover:text-[#b10017]"
              >
                Donate Now
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
              <p className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wide text-[#6c6c6c]">
                <LockKeyhole className="w-3.5 h-3.5 text-[#b10017]" aria-hidden="true" />
                Secure payment
              </p>
            </div>
          </div>

          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Landmark className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#b10017] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-normal leading-tight">
                  Bank Transfer
                </h4>
                <p className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto whitespace-pre-line">
                  {"Send your gift directly to our account.\n\nCentenary Bank\nEntebbe Road Branch\nAccount No. "}
                  <span className="font-bold text-[#2c2c2c]">3010309657</span>
                  {"\nCaritas Kampala"}
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 flex justify-center">
              <button
                type="button"
                onClick={() => copyToClipboard(BANK_ACCOUNT, "bank")}
                className="group inline-flex items-center justify-center gap-2 border border-[#b10017] bg-[#b10017] text-white text-xs sm:text-[13px] md:text-[14px] font-bold uppercase tracking-wider rounded-full px-6 sm:px-7 md:px-7.5 py-3 sm:py-3.25 md:py-3.5 transition-all duration-200 hover:bg-white hover:text-[#b10017]"
              >
                {copiedKey === "bank" ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span>{copiedKey === "bank" ? "Copied" : "Copy Account Number"}</span>
              </button>
            </div>
          </div>

          <div className={cardClassName}>
            <div className="flex-1 flex flex-col items-center text-center gap-5">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#b10017] rounded-full flex items-center justify-center text-white shrink-0">
                <Smartphone className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-[#b10017] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-serif font-normal leading-tight">
                  Mobile Money
                </h4>
                <div className="text-[#2c2c2c] text-base sm:text-[17px] md:text-[18px] leading-relaxed max-w-md mx-auto space-y-3">
                  <p>Give directly using Mobile Money.</p>
                  <div className="space-y-2">
                    {MOBILE_NUMBERS.map((number) => (
                      <button
                        key={number}
                        type="button"
                        onClick={() => copyToClipboard(number, number)}
                        className="w-full inline-flex items-center justify-center gap-2 text-[#2c2c2c] hover:text-[#b10017] transition-colors group"
                        aria-label={`Copy mobile number ${number}`}
                      >
                        <span className="font-bold">{number}</span>
                        <Copy className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                  <p>Reference: &quot;Caritas Cause&quot;</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-7 md:pt-8 flex justify-center">
              <button
                type="button"
                onClick={copyAllMobileNumbers}
                className="group inline-flex items-center justify-center gap-2 border border-[#b10017] bg-[#b10017] text-white text-xs sm:text-[13px] md:text-[14px] font-bold uppercase tracking-wider rounded-full px-6 sm:px-7 md:px-7.5 py-3 sm:py-3.25 md:py-3.5 transition-all duration-200 hover:bg-white hover:text-[#b10017]"
              >
                {copiedKey === "mobile-all" ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span>{copiedKey === "mobile-all" ? "Copied" : "Copy Numbers"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
