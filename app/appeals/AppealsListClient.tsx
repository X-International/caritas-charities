"use client";

import Image from "next/image";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useAppealsState } from "@/lib/useAppealsState";

export default function AppealsListClient() {
  const { activeAppeals, concludedAppeals } = useAppealsState();

  return (
    <div className="w-full">
      {/* Current Appeals Section */}
      <section aria-labelledby="current-appeals-heading" className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="site-container">
          <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
            <Heading level={2} variant="section" color="red" id="current-appeals-heading">
              Current Appeals
            </Heading>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Active emergency relief drives requiring immediate community support.
            </p>
          </div>

          {activeAppeals.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {activeAppeals.map((appeal) => (
                <div
                  key={appeal.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] max-h-[320px] rounded-xl overflow-hidden">
                      <Image
                        src={appeal.image}
                        alt={appeal.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="bg-[#b10017] text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                          ACTIVE APPEAL
                        </span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {appeal.location}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {appeal.periodLabel}
                        </span>
                      </div>

                      <Heading level={3} variant="subsection" color="dark" className="text-2xl sm:text-3xl">
                        {appeal.title}
                      </Heading>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {appeal.homepageSummary || appeal.summary}
                      </p>

                      <div className="pt-2">
                        <Button href={appeal.detailHref} variant="primary" size="md">
                          SEE HOW TO HELP
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center border border-gray-200 max-w-3xl mx-auto space-y-3">
              <Heading level={3} variant="card" color="dark" className="text-lg sm:text-xl">
                There are no active emergency appeals at this time.
              </Heading>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Explore previous appeals and responses below to see how the Charity Office has supported communities during times of crisis.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Appeals & Responses Section */}
      <section aria-labelledby="past-appeals-heading" className="py-12 sm:py-16 bg-[#f4efe6]">
        <div className="site-container">
          <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
            <Heading level={2} variant="section" color="red" id="past-appeals-heading">
              Past Appeals &amp; Responses
            </Heading>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Historical record of emergency relief campaigns and documented responses.
            </p>
          </div>

          {concludedAppeals.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {concludedAppeals.map((appeal) => (
                <div
                  key={appeal.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-md overflow-hidden p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] max-h-[320px] rounded-xl overflow-hidden">
                      <Image
                        src={appeal.image}
                        alt={appeal.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="bg-gray-100 text-gray-700 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-gray-200">
                          CONCLUDED
                        </span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {appeal.location}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {appeal.periodLabel}
                        </span>
                      </div>

                      <Heading level={3} variant="subsection" color="red" className="text-2xl sm:text-3xl">
                        {appeal.title}
                      </Heading>

                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {appeal.summary}
                      </p>

                      <div className="pt-2">
                        <Button href={appeal.detailHref} variant="primary" size="md">
                          VIEW APPEAL &amp; RESPONSE
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 text-gray-600 text-sm">
              No concluded emergency appeals recorded.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
