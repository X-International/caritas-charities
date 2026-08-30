"use client";

import Link from "next/link";
import { Heading } from "@/components/ui/Typography";

export default function ContactInteractiveSection() {
  const handleContactAction = (subjectValue: string) => {
    const subjectSelect = document.getElementById("subject") as HTMLSelectElement;
    if (subjectSelect) {
      subjectSelect.value = subjectValue;
      subjectSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const formBox = document.getElementById("contact-form-section");
    if (formBox) {
      formBox.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.getElementById("name") as HTMLInputElement;
      if (nameInput) {
        nameInput.focus();
      }
    }
  };

  return (
    <section className="space-y-8 sm:space-y-10">
      <div>
        <Heading level={2} variant="subsection" color="red">Other Ways We Can Help</Heading>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Choose the option that best matches your enquiry or find information that may answer your question before contacting the office.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Card 1: General Enquiries */}
        <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl shadow-sm shadow-gray-200/60 flex flex-col justify-between">
          <div>
            <h3 className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl mb-3">
              General Enquiries
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              For general questions about the Charity Office, our programmes, events, or how to get involved, use the contact form or reach us through the main office details above.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5">
            <button
              type="button"
              onClick={() => handleContactAction("General Enquiry")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b10017] hover:underline cursor-pointer"
              aria-label="Send a message for General Enquiries"
            >
              SEND A MESSAGE →
            </button>
          </div>
        </div>

        {/* Card 2: Safeguarding & Complaints */}
        <div className="bg-[#ebe3d7] p-6 sm:p-8 rounded-3xl shadow-sm shadow-gray-200/60 flex flex-col justify-between">
          <div>
            <h3 className="font-serif font-bold text-[#b10017] text-xl sm:text-2xl mb-3">
              Safeguarding &amp; Complaints
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you need to raise a safeguarding concern, complaint, or concern about the conduct of a staff member, volunteer, partner, or activity connected with the Charity Office, please contact us so the matter can be handled appropriately and confidentially.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5">
            <button
              type="button"
              onClick={() => handleContactAction("Safeguarding Concern")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b10017] hover:underline cursor-pointer"
              aria-label="Contact the office regarding Safeguarding and Complaints"
            >
              CONTACT THE OFFICE →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Help Links Row */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
        <h3 className="font-serif font-bold text-gray-900 text-lg sm:text-xl">
          Quick Help
        </h3>
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm font-medium">
          <Link href="/resources/faqs" className="text-[#b10017] hover:bg-[#b10017] hover:text-white bg-[#ebe3d7]/60 px-3.5 py-2 rounded-xl transition-colors">
            FAQs
          </Link>
          <Link href="/donate" className="text-[#b10017] hover:bg-[#b10017] hover:text-white bg-[#ebe3d7]/60 px-3.5 py-2 rounded-xl transition-colors">
            Donate
          </Link>
          <Link href="/get-involved/volunteer" className="text-[#b10017] hover:bg-[#b10017] hover:text-white bg-[#ebe3d7]/60 px-3.5 py-2 rounded-xl transition-colors">
            Volunteer
          </Link>
          <Link href="/get-involved/partnerships" className="text-[#b10017] hover:bg-[#b10017] hover:text-white bg-[#ebe3d7]/60 px-3.5 py-2 rounded-xl transition-colors">
            Partnerships
          </Link>
          <Link href="/get-involved/charity-shop" className="text-[#b10017] hover:bg-[#b10017] hover:text-white bg-[#ebe3d7]/60 px-3.5 py-2 rounded-xl transition-colors">
            Charity Shop
          </Link>
          <Link href="/our-programmes" className="text-[#b10017] hover:bg-[#b10017] hover:text-white bg-[#ebe3d7]/60 px-3.5 py-2 rounded-xl transition-colors">
            Our Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
