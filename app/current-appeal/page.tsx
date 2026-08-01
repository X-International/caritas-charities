import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Emergency Appeal for Kotido and Moroto | Caritas Kampala",
  description:
    "Standing with the people of Karamoja, together with the whole Church in Uganda. Caritas Kampala emergency appeal for famine relief in Kotido and Moroto.",
};

export default function CurrentAppealPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Main Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#be0f2e] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600" aria-current="page">
                CURRENT APPEAL
              </li>
            </ol>
          </nav>

          {/* Top Hero Image Header with Tag Badge */}
          <div className="relative w-full h-[280px] sm:h-[420px] md:h-[480px] lg:h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl mb-8 sm:mb-12">
            <Image
              src="/images/current appeal/Caritas_Kampala_Current_Appeal_details.jpg"
              alt="Emergency Appeal for Kotido and Moroto"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span className="inline-block bg-[#be0f2e] text-white text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg border border-white/20">
                KOTIDO &amp; MOROTO, KARAMOJA
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-[11px] sm:text-sm font-light">
              <p className="bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-lg inline-block text-white/95 leading-relaxed">
                The famine in Kotido and Moroto has left many families struggling to meet their most basic needs.
              </p>
            </div>
          </div>

          {/* Main Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 sm:mb-20 items-start">
            {/* Left Column: Main Appeal Sections */}
            <div className="lg:col-span-8 space-y-7 sm:space-y-8">
              {/* Header Title & Subline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold font-serif text-[#be0f2e] leading-[1.18] tracking-tight">
                  Emergency Appeal for Kotido and Moroto
                </h1>
                <p className="text-[18px] sm:text-[21px] lg:text-[24px] font-serif text-gray-700 font-semibold leading-snug">
                  Standing with the people of Karamoja, together with the whole Church in Uganda.
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* The Situation */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#be0f2e]">
                  The Situation
                </h2>
                <div className="space-y-4 text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
                  <p>
                    Climate change has brought drought to the Karamoja region, and that drought has now become famine in the Kotido and Moroto dioceses. Families across the region are struggling to find enough food, and the need is urgent.
                  </p>
                  <p>
                    The government has put aside some funding to help those affected. We acknowledge and appreciate that support. But it is not enough on its own. As a Church, we believe we have a responsibility to stand alongside the government, not replace it, in responding to the needs of our people.
                  </p>
                </div>
              </section>

              {/* Our Response */}
              <section className="space-y-4 pt-1 sm:pt-2">
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#be0f2e]">
                  Our Response
                </h2>
                <div className="space-y-4 text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
                  <p>
                    As the Kampala Archdiocese, we are calling on the entire Church in Uganda to come together for the people of Kotido and Moroto. This effort began in July and will continue through September.
                  </p>
                  <p>
                    In July, we sent the first batch of support, money and household items, to Caritas Uganda, who then delivered it to families in Kotido and Moroto. Collection continues now through August and September, and we are asking parishes, communities, and individuals across the Archdiocese to take part.
                  </p>
                </div>

                {/* Food Items Card (Beige style) */}
                <div className="bg-[#f2ebe3] p-6 sm:p-8 rounded-2xl space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#be0f2e]">
                    We are focused on food and basic household essentials, including:
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-[#be0f2e] text-[15px] sm:text-base lg:text-lg leading-relaxed font-medium">
                    <li>Rice</li>
                    <li>Posho</li>
                    <li>Maize</li>
                    <li>Beans</li>
                    <li>Sugar</li>
                    <li>Cooking oil</li>
                  </ul>
                </div>

                <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed pt-2">
                  Whatever you are able to give, whether food, household items, or a financial contribution, all of it helps. No contribution is too small.
                </p>
              </section>

              {/* Open to Everyone */}
              <section className="space-y-4 pt-1 sm:pt-2">
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#be0f2e]">
                  Open to Everyone
                </h2>
                <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
                  This appeal is not only for Catholics. Caritas does not discriminate based on religion, because hunger affects everyone the same way, regardless of their faith. While the Catholic Church is leading this initiative, the help itself is for anyone in Kotido and Moroto who needs it.
                </p>
              </section>

              {/* Scripture Pullquote */}
              <section className="space-y-4 pt-1 sm:pt-2">
                <div className="bg-red-50/90 p-5 sm:p-6 rounded-2xl space-y-3">
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif text-[#be0f2e] font-bold italic leading-snug">
                    &ldquo;For I was hungry and you gave me food.&rdquo;
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-widest">
                    Matthew 25:35
                  </p>
                </div>
                <p className="text-gray-700 text-[15px] sm:text-base lg:text-lg leading-relaxed font-normal">
                  This is the same passage that guides the wider mission of the Charities Department, and it is why we see responding to hunger, wherever we find it, as central to who we are.
                </p>
              </section>
            </div>

            {/* Right Column: How to Help & Direct Contact Cards (Sticky Sidebar) */}
            <div className="lg:col-span-4 space-y-5 sm:space-y-6 lg:sticky lg:top-28">
              {/* Card 1: Collection Point & Address */}
              <div className="bg-[#be0f2e] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-4">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-red-200">
                  JULY – SEPTEMBER APPEAL
                </p>
                <h2 className="text-xl sm:text-2xl font-extrabold font-serif leading-snug">
                  How to Help
                </h2>
                <p className="text-xs sm:text-sm text-red-100 font-normal leading-relaxed">
                  The Kampala Archdiocese has designated the <strong className="text-white font-semibold">Caritas Kampala Office</strong> as the collection point for this appeal. Donations of food, essential relief items, and other support materials can be dropped off at:
                </p>
                <div className="bg-white/10 p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm space-y-1 font-sans">
                  <p className="font-bold text-white">
                    <a
                      href="https://www.caritaskampala.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-2"
                    >
                      Caritas Kampala Office
                    </a>
                  </p>
                  <p className="text-red-100">Old Ggaba Road, Nsambya</p>
                  <p className="text-red-100">(next to the American Embassy)</p>
                  <p className="text-red-100">Kampala, Uganda</p>
                </div>
              </div>

              {/* Card 2: Direct Contact (Matching Screenshot 3 design) */}
              <div className="bg-[#be0f2e] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-red-200 mb-1">
                    DIRECT CONTACT
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-serif leading-snug">
                    Need More Information?
                  </h3>
                  <p className="text-xs sm:text-sm text-red-100 font-normal leading-relaxed mt-2">
                    Questions about this appeal? Our team is ready to help with donations, collections, and enquiries.
                  </p>
                </div>

                <hr className="border-white/15" />

                {/* Contact items with icons */}
                <div className="space-y-2.5">
                  {/* Item 1: Donation Hotline */}
                  <a
                    href="tel:+256762506906"
                    className="flex items-center justify-between bg-white/10 p-3 sm:p-3.5 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#be0f2e] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11l-2.3 2.3z" />
                        </svg>
                      </div>
                      <span className="font-bold text-white text-xs sm:text-sm">Donation Hotline</span>
                    </div>
                    <span className="font-mono text-white text-xs sm:text-sm font-bold">+256 762 506 906</span>
                  </a>

                  {/* Item 2: WhatsApp */}
                  <a
                    href="https://wa.me/256792176443"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/10 p-3 sm:p-3.5 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.18 8.18 0 01-5.82 2.42c-1.44 0-2.86-.38-4.11-1.11l-.3-.18-3.05.8.81-2.97-.19-.31A8.2 8.2 0 013.7 11.91c0-4.54 3.7-8.24 8.35-8.24zm4.55 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.66.81-.81.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.21-.18-.46-.31z" />
                        </svg>
                      </div>
                      <span className="font-bold text-white text-xs sm:text-sm">WhatsApp</span>
                    </div>
                    <span className="font-mono text-white text-xs sm:text-sm font-bold">+256 792 176 443</span>
                  </a>

                  {/* Item 3: Main Office */}
                  <a
                    href="tel:+256392176443"
                    className="flex items-center justify-between bg-white/10 p-3 sm:p-3.5 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#be0f2e] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                        </svg>
                      </div>
                      <span className="font-bold text-white text-xs sm:text-sm">Main Office</span>
                    </div>
                    <span className="font-mono text-white text-xs sm:text-sm font-bold">+256 392 176 443</span>
                  </a>
                </div>

                {/* Support Button with Ghost Button hover effect */}
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="flex items-center justify-between w-full bg-white text-[#be0f2e] hover:bg-transparent hover:text-white border-2 border-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full tracking-wider uppercase transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>SUPPORT THIS APPEAL</span>
                    </div>
                    <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                {/* Heart subtext */}
                <div className="pt-2 text-center space-y-3 border-t border-white/15">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px bg-white/20 flex-1" />
                    <svg className="w-4 h-4 text-red-200 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <div className="h-px bg-white/20 flex-1" />
                  </div>
                  <p className="text-xs text-red-100 font-normal leading-relaxed">
                    Every contribution brings hope to families affected by famine in Kotido and Moroto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Featured Callout Banner - Drop shadows removed & Ghost Button hover applied */}
          <div className="relative pt-8 sm:pt-10 pb-10 sm:pb-16">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
              {/* Overlapping Crimson Callout Box - shadow removed */}
              <div className="lg:col-span-5 z-20 lg:-mr-12">
                <div className="bg-[#be0f2e] text-white p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif leading-snug">
                    Each year, Caritas Kampala supports thousands of vulnerable families through food security, emergency relief, and community resilience programmes.
                  </h2>
                  <div>
                    <Link
                      href="/contact-us"
                      className="inline-block bg-white text-[#be0f2e] hover:bg-transparent hover:text-white border-2 border-white text-xs font-bold px-7 py-3.5 rounded-full tracking-wider uppercase transition-all duration-200"
                    >
                      Contact Us to Contribute
                    </Link>
                  </div>
                </div>
              </div>

              {/* Background Image - shadow removed */}
              <div className="lg:col-span-7 relative h-[300px] sm:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src="/images/Main Slider/Caritas_Kampala_70.jpg"
                  alt="Caritas Kampala field team supporting community development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
