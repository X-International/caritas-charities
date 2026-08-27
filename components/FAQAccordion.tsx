"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const num = (i + 1).toString().padStart(2, "0");
        return (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-[#b10017] font-bold text-lg">{num}.</span>
                <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
              </div>
              <span className="text-2xl text-[#b10017] font-light">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed text-base">
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
