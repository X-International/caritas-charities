"use client";

import Image from "next/image";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useAppealsState } from "@/lib/useAppealsState";

export default function CurrentCrises() {
  const { featuredAppeal, featuredStatus } = useAppealsState();

  if (!featuredAppeal || !featuredStatus) {
    return null;
  }

  const isActive = featuredStatus === "active";

  if (isActive) {
    return (
      <section
        aria-labelledby="appeal-title"
        className="w-full bg-[#b10017] text-white section-lg relative overflow-hidden"
      >
        <div className="site-container">
          {/* Header */}
          <div className="max-w-3xl xl:max-w-4xl mb-8 xl:mb-10 space-y-3 text-center lg:text-left mx-auto lg:mx-0">
            <Heading
              level={2}
              variant="section"
              color="white"
              id="appeal-title"
              className="xl:text-[3.25rem] text-balance"
            >
              Current Appeal
            </Heading>
            <p className="text-sm sm:text-base xl:text-lg text-white/90 font-normal leading-relaxed">
              Drought has brought famine to Karamoja. Kampala Archdiocese is rallying the Church in Uganda to respond, and the call is open to everyone, Catholic and non-Catholic alike.
            </p>
          </div>

          {/* Inner Crisis Featured Card Container */}
          <div className="bg-white text-gray-900 p-5 sm:p-8 lg:p-10 xl:p-12 2xl:p-14 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-10 items-center">
              {/* Left Image - Responsive aspect ratios */}
              <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[5/4] max-h-[280px] sm:max-h-[320px] lg:max-h-[400px] xl:max-h-[460px] overflow-hidden rounded-xl">
                <Image
                  src={featuredAppeal.image}
                  alt="Families receiving famine relief support in Karamoja"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Right Details */}
              <div className="lg:col-span-6 space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-left">
                <Heading
                  level={3}
                  variant="subsection"
                  color="red"
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] text-balance"
                >
                  Famine in Kotido and Moroto
                </Heading>
                <p className="text-gray-700 text-sm sm:text-base xl:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0">
                  {featuredAppeal.homepageSummary}
                </p>
                <div className="pt-1 sm:pt-2 flex justify-center lg:justify-start">
                  <Button
                    href={featuredAppeal.detailHref}
                    variant="primary"
                    size="md"
                    aria-label="See how to help families facing famine in Kotido and Moroto"
                  >
                    See How to Help
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // CONCLUDED STATE
  return (
    <section
      aria-labelledby="appeal-title"
      className="w-full bg-[#f4efe6] text-gray-900 section-lg relative overflow-hidden"
    >
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl xl:max-w-4xl mb-8 xl:mb-10 space-y-3 text-center lg:text-left mx-auto lg:mx-0">
          <Heading
            level={2}
            variant="section"
            color="red"
            id="appeal-title"
            className="xl:text-[3.25rem] text-balance"
          >
            Recent Emergency Response
          </Heading>
          <p className="text-sm sm:text-base xl:text-lg text-gray-700 font-normal leading-relaxed">
            See how the Charity Office responded to urgent needs in Kotido and Moroto during the emergency appeal.
          </p>
        </div>

        {/* Inner Concluded Featured Card Container */}
        <div className="bg-white text-gray-900 p-5 sm:p-8 lg:p-10 xl:p-12 2xl:p-14 rounded-2xl shadow-xl border border-gray-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-10 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[5/4] max-h-[280px] sm:max-h-[320px] lg:max-h-[400px] xl:max-h-[460px] overflow-hidden rounded-xl">
              <Image
                src={featuredAppeal.image}
                alt="Families receiving famine relief support in Karamoja"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-left">
              <div>
                <span className="inline-block bg-[#b10017]/10 text-[#b10017] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                  APPEAL CONCLUDED
                </span>
                <Heading
                  level={3}
                  variant="subsection"
                  color="red"
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] text-balance"
                >
                  {featuredAppeal.title}
                </Heading>
              </div>
              <p className="text-gray-700 text-sm sm:text-base xl:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0">
                {featuredAppeal.summary}
              </p>
              <div className="pt-1 sm:pt-2 flex justify-center lg:justify-start">
                <Button
                  href={featuredAppeal.detailHref}
                  variant="primary"
                  size="md"
                  aria-label="View appeal and response for Kotido and Moroto"
                >
                  VIEW APPEAL &amp; RESPONSE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
