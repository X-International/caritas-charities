"use client";

import Link from "next/link";
import Image from "next/image";
import AppealCalloutBanner from "@/components/AppealCalloutBanner";
import AppealPageHero from "@/components/AppealPageHero";
import AppealVideo from "@/components/AppealVideo";
import { Heading, Eyebrow } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useAppealsState } from "@/lib/useAppealsState";
import { emergencyAppeals } from "@/lib/content/appeals";

export default function CurrentAppealClient() {
  const { getAppealStatus } = useAppealsState();
  const karamojaAppeal = emergencyAppeals.find(
    (a) => a.id === "karamoja-kotido-moroto-2026"
  ) || emergencyAppeals[0];

  const status = getAppealStatus(karamojaAppeal);
  const isConcluded = status === "concluded";

  return (
    <div className="site-container section-sm">
      {/* Dynamic Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
          <li>
            <Link href="/" className="text-[#b10017] hover:underline">
              HOME
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          {isConcluded ? (
            <>
              <li>
                <Link href="/appeals" className="text-[#b10017] hover:underline">
                  EMERGENCY APPEALS
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                KOTIDO &amp; MOROTO
              </li>
            </>
          ) : (
            <li className="text-gray-600" aria-current="page">
              CURRENT APPEAL
            </li>
          )}
        </ol>
      </nav>

      <AppealPageHero />

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-20 items-start">
        {/* Left Column: Main Appeal Sections */}
        <div className="lg:col-span-8 space-y-7 sm:space-y-8">
          {/* Header Title & Subline */}
          <div className="space-y-3 sm:space-y-4">
            {isConcluded && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block bg-[#b10017]/10 text-[#b10017] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  APPEAL CONCLUDED
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {karamojaAppeal.periodLabel}
                </span>
              </div>
            )}
            <Heading level={1} variant="article" color="red">
              {karamojaAppeal.title}
            </Heading>
            <p className="text-[18px] sm:text-[21px] lg:text-[24px] font-serif text-gray-700 font-semibold leading-snug">
              Standing with the people of Karamoja, together with the whole Church in Uganda.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* The Situation */}
          <section aria-labelledby="situation-heading" className="space-y-4">
            <Heading level={2} variant="card" color="red" id="situation-heading" className="text-balance">
              The Situation
            </Heading>
            <div className="space-y-4 text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
              <p>
                Climate change has brought drought to the Karamoja region, and that drought has now become famine in Kotido and Moroto dioceses. Families across the region are struggling to find enough food, and the need is urgent.
              </p>
              <p>
                The government has put aside some funding to help those affected. We acknowledge and appreciate that support. But it is not enough on its own. As a Church, we believe we have a responsibility to stand alongside the government, not replace it, in responding to the needs of our people.
              </p>
            </div>
          </section>

          {/* The Appeal Begins (campaign launch video) */}
          <section aria-labelledby="appeal-begins-heading" className="space-y-4 pt-1 sm:pt-2">
            <Heading level={2} variant="card" color="red" id="appeal-begins-heading" className="text-balance">
              The Appeal Begins
            </Heading>
            <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
              Watch the launch of the emergency appeal for families affected by famine in Kotido and Moroto.
            </p>
            <AppealVideo
              videoId="VzuIYOEmBwc"
              title="Emergency Appeal for Kotido and Moroto campaign launch"
            />
          </section>

          {/* Our Response */}
          <section aria-labelledby="response-heading" className="space-y-4 pt-1 sm:pt-2">
            <Heading level={2} variant="card" color="red" id="response-heading" className="text-balance">
              Our Response
            </Heading>
            <div className="space-y-4 text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
              {isConcluded ? (
                <>
                  <p>
                    During the appeal, the Charity Office joined the wider Church in Uganda in responding to the needs of families in Kotido and Moroto.
                  </p>
                  <p>
                    Support, including financial contributions and household items, was sent to Caritas Uganda for delivery to families in Kotido and Moroto. Collections continued through August and September with support from parishes, communities, and individuals across the Archdiocese.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    As Kampala Archdiocese, we are calling on the entire Church in Uganda to come together for the people of Kotido and Moroto. This effort began in July and will continue through September.
                  </p>
                  <p>
                    In July, we sent the first batch of support, money and household items, to Caritas Uganda, who then delivered it to families in Kotido and Moroto. Collection continues now through August and September, and we are asking parishes, communities, and individuals across the Archdiocese to take part.
                  </p>
                </>
              )}
            </div>

            {/* Food Support in Action (consignment video) */}
            <div className="space-y-4 pt-1 sm:pt-2">
              <Heading level={3} variant="card" color="red" className="text-balance">
                Food Support in Action
              </Heading>
              <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
                Watch the Charity Office flag off a food consignment for communities affected by the emergency in Karamoja.
              </p>
              <AppealVideo
                videoId="7OwjO4ZO3v4"
                title="Flagging off the second consignment of food for Karamoja"
              />
            </div>

            {/* Food Items Card (Beige style) */}
            <div className="bg-[#f2ebe3] p-6 sm:p-8 rounded-2xl space-y-5">
              <Heading level={3} variant="card" color="red" className="text-balance">
                {isConcluded
                  ? "The appeal focused on food and basic household essentials, including:"
                  : "We are focused on food and basic household essentials, including:"}
              </Heading>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-[#b10017] text-[15px] sm:text-base lg:text-lg font-medium">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#b10017]" /> Rice
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#b10017]" /> Posho
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#b10017]" /> Maize
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#b10017]" /> Beans
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#b10017]" /> Sugar
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#b10017]" /> Cooking oil
                </li>
              </ul>
            </div>

            {!isConcluded && (
              <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed pt-2">
                Whatever you are able to give, whether food, household items, or a financial contribution, all of it helps. No contribution is too small.
              </p>
            )}
          </section>

          {/* Open to Everyone */}
          <section aria-labelledby="open-to-everyone-heading" className="space-y-4 pt-1 sm:pt-2">
            <Heading level={2} variant="card" color="red" id="open-to-everyone-heading" className="text-balance">
              Open to Everyone
            </Heading>
            <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
              {isConcluded
                ? "The appeal was open to everyone, Catholic and non-Catholic alike. Caritas does not discriminate based on religion, because hunger affects everyone in the same way, regardless of faith. While the Catholic Church led the initiative, the support was intended for anyone in Kotido and Moroto who needed it."
                : "This appeal is not only for Catholics. Caritas does not discriminate based on religion, because hunger affects everyone the same way, regardless of their faith. While the Catholic Church is leading this initiative, the help itself is for anyone in Kotido and Moroto who needs it."}
            </p>
          </section>

          {/* Scripture Pullquote */}
          <section className="space-y-4 pt-1 sm:pt-2">
            <div className="bg-red-50/90 p-5 sm:p-6 rounded-2xl space-y-3">
              <p className="text-lg sm:text-xl lg:text-2xl font-serif text-[#b10017] font-bold italic leading-snug">
                &ldquo;For I was hungry and you gave me something to eat.&rdquo;
              </p>
              <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-widest">
                Matthew 25:35
              </p>
            </div>
            <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
              This is the same passage that guides the wider mission of the Charity Office, and it is why we see responding to hunger, wherever we find it, as central to who we are.
            </p>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside aria-label="Appeal sidebar" className="lg:col-span-4 space-y-5 sm:space-y-6 lg:sticky lg:top-28">
          {/* Sidebar Top Card */}
          {isConcluded ? (
            <div className="bg-gray-900 text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-4">
              <div>
                <Eyebrow color="white" className="text-red-300 mb-1 block">
                  APPEAL CONCLUDED
                </Eyebrow>
                <Heading level={3} variant="subsection" color="white" className="text-xl sm:text-2xl leading-snug">
                  Appeal Concluded
                </Heading>
                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mt-2">
                  The Kotido and Moroto emergency appeal concluded at the end of September 2026. This page remains available as a record of the Charity Office’s response.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-[#b10017] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5">
              <div>
                <Eyebrow color="white" className="text-red-200 mb-1 block">
                  JULY – SEPTEMBER APPEAL
                </Eyebrow>
                <Heading level={3} variant="subsection" color="white" className="text-xl sm:text-2xl leading-snug">
                  How to Help
                </Heading>
                <p className="text-xs sm:text-sm text-red-100 font-normal leading-relaxed mt-2">
                  Kampala Archdiocese has designated the <strong className="text-white font-semibold">Caritas Kampala Office</strong> as the collection point for this appeal. Donations of food, essential relief items, and other support materials can be dropped off at:
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl text-xs sm:text-sm space-y-1 font-sans border border-white/10">
                <p className="font-bold text-white">
                  <a
                    href="https://www.caritaskampalacharities.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit the Caritas Kampala website (opens in a new tab)"
                    className="text-white hover:underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    Caritas Kampala Office
                  </a>
                </p>
                <p className="text-red-100">Old Ggaba Road, Nsambya</p>
                <p className="text-red-100">(next to the American Embassy)</p>
                <p className="text-red-100">Kampala, Uganda</p>
              </div>
            </div>
          )}

          {/* Campaign Poster Image Card */}
          <div className="relative aspect-[4/5] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/images/Miscellany/banner.png"
              alt="Caritas Kampala emergency relief appeal banner"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            {isConcluded && (
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-center">
                <span className="text-[11px] text-white/90 font-medium">
                  Campaign appeal poster, July – September 2026
                </span>
              </div>
            )}
          </div>

          {/* Direct Contact & CTA Card */}
          <div className="bg-gray-50 border border-gray-100 text-gray-900 p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5">
            <div>
              <Eyebrow color="red" className="mb-1 block">
                DIRECT CONTACT
              </Eyebrow>
              <Heading level={3} variant="subsection" color="dark" className="text-xl sm:text-2xl leading-snug">
                {isConcluded ? "Questions About This Response?" : "Need More Information?"}
              </Heading>
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mt-2">
                {isConcluded
                  ? "Our team can help with information about the concluded appeal and the Charity Office’s ongoing work."
                  : "Questions about this appeal? Our team is ready to help with donations, collections, and enquiries."}
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Contact items */}
            <div className="space-y-2.5">
              <a
                href="tel:+256762506906"
                className="flex items-center justify-between bg-white hover:bg-gray-100 p-3 sm:p-3.5 rounded-2xl transition-colors motion-reduce:transition-none border border-gray-100 focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-2"
              >
                <span className="font-bold text-gray-900 text-xs sm:text-sm">Donation Hotline</span>
                <span className="font-mono text-[#b10017] text-xs sm:text-sm font-bold">+256 762 506 906</span>
              </a>

              <a
                href="https://wa.me/256792176443"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message the appeal team on WhatsApp at +256 792 176 443 (opens in a new tab)"
                className="flex items-center justify-between bg-white hover:bg-gray-100 p-3 sm:p-3.5 rounded-2xl transition-colors motion-reduce:transition-none border border-gray-100 focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-2"
              >
                <span className="font-bold text-gray-900 text-xs sm:text-sm">WhatsApp</span>
                <span className="font-mono text-[#b10017] text-xs sm:text-sm font-bold">+256 792 176 443</span>
              </a>

              <a
                href="tel:+256392176443"
                className="flex items-center justify-between bg-white hover:bg-gray-100 p-3 sm:p-3.5 rounded-2xl transition-colors motion-reduce:transition-none border border-gray-100 focus-visible:outline-2 focus-visible:outline-[#b10017] focus-visible:outline-offset-2"
              >
                <span className="font-bold text-gray-900 text-xs sm:text-sm">Main Office</span>
                <span className="font-mono text-[#b10017] text-xs sm:text-sm font-bold">+256 392 176 443</span>
              </a>
            </div>

            {/* Support Button */}
            <div className="pt-2">
              <Button
                href="/donate"
                variant="primary"
                size="lg"
                className="w-full justify-center text-center"
                aria-label={isConcluded ? "Support our ongoing work" : "Support this appeal by donating"}
              >
                {isConcluded ? "SUPPORT OUR ONGOING WORK" : "SUPPORT THIS APPEAL"}
              </Button>
            </div>

            {/* Subtext */}
            <div className="pt-2 text-center space-y-3 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3">
                <div className="h-px bg-gray-200 flex-1" />
                <svg aria-hidden="true" className="w-4 h-4 text-[#b10017] fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="h-px bg-gray-200 flex-1" />
              </div>
              <p className="text-xs text-gray-600 font-normal leading-relaxed">
                {isConcluded
                  ? "This emergency appeal is now concluded. Thank you to everyone who supported the response. You can continue supporting the wider work of the Charity Office through our main Donate page."
                  : "Every contribution brings hope to families affected by famine in Kotido and Moroto."}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <AppealCalloutBanner />
    </div>
  );
}
