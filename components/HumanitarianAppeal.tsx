import Image from "next/image";
import Link from "next/link";

export default function HumanitarianAppeal() {
  return (
    <section aria-labelledby="humanitarian-appeal-heading" className="site-container py-8 sm:py-10">
      <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/Event 04/Caritas_Kampala_20.jpg"
          alt="Humanitarian relief water distribution"
          fill
          loading="eager"
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(100vw - 3rem), (max-width: 1279px) calc(100vw - 4rem), 80rem"
          className="object-cover object-center"
        />

        {/* Soft Vignette Overlay on right side */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Left Floating Red Card */}
        <div className="relative z-10 p-4 sm:p-10 lg:p-12 w-full max-w-xl">
          <div className="bg-[#b10017] text-white p-6 sm:p-10 rounded-2xl shadow-2xl space-y-4 sm:space-y-6">
            <div className="space-y-4 sm:space-y-6">
              <h2 id="humanitarian-appeal-heading" className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-serif leading-tight italic text-balance">
                &ldquo;Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.&rdquo;
              </h2>
              <p className="text-sm sm:text-base text-red-100 font-semibold uppercase tracking-widest opacity-90">
                — Matthew 25:40
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/donate"
                aria-label="Donate to support Caritas Kampala humanitarian work"
                className="inline-block bg-white text-[#b10017] hover:bg-transparent hover:text-white border-2 border-white text-xs font-bold px-7 py-3.5 rounded-full tracking-wider uppercase transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                DONATE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
