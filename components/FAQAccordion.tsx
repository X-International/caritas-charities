"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[940px] mx-auto space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const num = (i + 1).toString().padStart(2, "0");
        return (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white transition-colors">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50/80 hover:border-gray-300 focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex items-center gap-3 sm:gap-4 pr-4">
                <span className="text-[#b10017] font-bold text-base sm:text-lg">{num}.</span>
                <span className="text-base sm:text-lg font-semibold text-gray-900">{faq.q}</span>
              </div>
              <span className="text-xl sm:text-2xl text-[#b10017] font-light flex-shrink-0">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`grid transition-all duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-6 pt-0 text-gray-700 leading-[1.65] text-sm sm:text-[17px]">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
