import Image from "next/image";
import { Heading } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

export default function CurrentCrises() {
  const expiryDate = new Date("2026-09-30T23:59:59");
  if (new Date() > expiryDate) {
    return null;
  }

  return (
    <section 
      aria-labelledby="appeal-title"
      className="w-full bg-[#b10017] text-white section-lg relative overflow-hidden mt-8 sm:mt-12 lg:mt-16"
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
            Drought has brought famine to Karamoja. The Kampala Archdiocese is rallying the Church in Uganda to respond, and the call is open to everyone, Catholic and non-Catholic alike.
          </p>
        </div>

        {/* Inner Crisis Featured Card Container */}
        <div className="bg-white text-gray-900 p-5 sm:p-8 lg:p-10 xl:p-12 2xl:p-14 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-10 items-center">
            {/* Left Image - Responsive aspect ratios */}
            <div className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[5/4] max-h-[280px] sm:max-h-[320px] lg:max-h-[400px] xl:max-h-[460px] overflow-hidden rounded-xl">
              <Image
                src="/images/current appeal/Caritas_Kampala_Current_Appeal.jpg"
                alt="Families receiving famine relief support in Karamoja"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right Details */}
            <div className="lg:col-span-6 space-y-4 lg:space-y-5 xl:space-y-6 text-center lg:text-left">
              <Heading level={3} variant="subsection" color="red" className="text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] text-balance">
                Famine in Kotido and Moroto
              </Heading>
              <p className="text-gray-700 text-sm sm:text-base xl:text-lg leading-relaxed max-w-prose mx-auto lg:mx-0">
                Climate change has driven drought and famine across the Kotido and Moroto dioceses. The government has provided some relief, but it isn&apos;t enough. From July through September, the Archdiocese is collecting food such as posho, maize flour, rice, beans, and cooking oil to send to families in Karamoja. Every contribution counts, whatever its size.
              </p>
              <div className="pt-1 sm:pt-2 flex justify-center lg:justify-start">
                <Button
                  href="/current-appeal"
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
