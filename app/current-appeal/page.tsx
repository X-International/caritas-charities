import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "A Call to Action: Famine in Kotido and Moroto | Caritas Kampala",
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
              src="/images/current appeal/Caritas_Kampala_Current_Appeal.jpg"
              alt="Caritas Kampala famine relief response for Kotido and Moroto"
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
              <p className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg inline-block text-white/90">
                Caritas Kampala emergency relief response team supporting communities in Karamoja. Credit: Caritas Kampala
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
                  A Call to Action: Famine in Kotido and Moroto
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

                {/* Food Items Card (Beige style matching screenshot) */}
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

            {/* Right Column: How to Help (Sticky Sidebar Cards) */}
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
                  <p className="font-bold text-white">Caritas Kampala Office</p>
                  <p className="text-red-100">Old Ggaba Road, Nsambya</p>
                  <p className="text-red-100">(next to the American Embassy)</p>
                  <p className="text-red-100">Kampala, Uganda</p>
                </div>
              </div>

              {/* Card 2: Contact Phone Numbers */}
              <div className="bg-[#be0f2e] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl space-y-4">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-red-200">
                  DIRECT CONTACT LINES
                </p>
                <h3 className="text-base sm:text-lg font-extrabold font-serif leading-snug">
                  Reach Us Directly
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <a
                    href="tel:+256762506906"
                    className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors font-mono font-semibold"
                  >
                    <svg className="w-4 h-4 text-red-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +256 762 506 906
                  </a>
                  <a
                    href="tel:+256792176443"
                    className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors font-mono font-semibold"
                  >
                    <svg className="w-4 h-4 text-red-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +256 792 176 443
                  </a>
                  <a
                    href="tel:+256392176443"
                    className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors font-mono font-semibold"
                  >
                    <svg className="w-4 h-4 text-red-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +256 392 176 443 <span className="text-[10px] text-red-200 font-normal font-sans">(Main Office)</span>
                  </a>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact-us"
                    className="inline-block w-full text-center bg-white text-[#be0f2e] hover:bg-red-50 text-xs font-bold px-6 py-3.5 rounded-full tracking-wider uppercase transition-colors"
                  >
                    Contact Us to Contribute
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Featured Callout Banner */}
          <div className="relative pt-8 sm:pt-10 pb-10 sm:pb-16">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-0">
              {/* Overlapping Crimson Callout Box */}
              <div className="lg:col-span-5 z-20 lg:-mr-12">
                <div className="bg-[#be0f2e] text-white p-7 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl space-y-5 sm:space-y-6 border border-red-700">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif leading-snug">
                    Each year, Caritas Kampala supports thousands of vulnerable families through food security, emergency relief, and community resilience programmes.
                  </h2>
                  <div>
                    <Link
                      href="/contact-us"
                      className="inline-block bg-white text-[#be0f2e] hover:bg-red-50 text-xs font-bold px-7 py-3.5 rounded-full tracking-wider uppercase transition-colors"
                    >
                      Contact Us to Contribute
                    </Link>
                  </div>
                </div>
              </div>

              {/* Background Image */}
              <div className="lg:col-span-7 relative h-[300px] sm:h-[400px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
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
