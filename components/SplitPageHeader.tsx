import Image from "next/image";
import Link from "next/link";
import { Heading, Eyebrow, Lead } from "@/components/ui/Typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SplitPageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  imagePositionDesktop?: string;
  imagePositionTablet?: string;
  imagePositionMobile?: string;
}

export default function SplitPageHeader({
  breadcrumbs,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition,
  imagePositionDesktop,
  imagePositionTablet,
  imagePositionMobile,
}: SplitPageHeaderProps) {
  const desktopPos = imagePositionDesktop || imagePosition || "center center";
  const tabletPos = imagePositionTablet || imagePosition || desktopPos;
  const mobilePos = imagePositionMobile || tabletPos || desktopPos;

  const imagePosStyle = {
    "--image-pos-mobile": mobilePos,
    "--image-pos-tablet": tabletPos,
    "--image-pos-desktop": desktopPos,
  } as React.CSSProperties;

  return (
    <section aria-label={`${title} Header`} className="w-full">
      {/* Breadcrumbs — remain inside normal site-container with keyboard focus styles */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="site-container pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-4">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-wider font-semibold"
          >
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex items-center">
                  {index > 0 && <span className="text-gray-400 mr-2" aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href === "#" ? "#" : item.href}
                      aria-disabled={item.href === "#" ? "true" : undefined}
                      tabIndex={item.href === "#" ? -1 : undefined}
                      className={`text-[#b10017] rounded px-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b10017] ${
                        item.href === "#" ? "cursor-default pointer-events-none select-none" : "hover:underline"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-600" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}

      {/* Split Hero — mobile: contained with overlap; desktop: full-bleed viewport-width */}
      <div className="split-hero-bleed-wrapper mb-14 sm:mb-18 lg:mb-22">

        {/* ── Mobile & Tablet (< 1024px): stacked, overlapping, contained ── */}
        <div className="lg:hidden site-container">
          <div className="contact-hero relative">
            {/* Image */}
            <div
              className="contact-hero-image relative overflow-hidden rounded-[22px] sm:rounded-[24px] h-[clamp(380px,95vw,520px)] sm:h-[clamp(420px,55vw,540px)] shadow-sm"
              style={imagePosStyle}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="100vw"
                className="contact-hero-image-media object-cover"
              />
            </div>

            {/* Overlapping Red Panel */}
            <div className="contact-hero-panel-wrap relative z-10 -mt-[60px] sm:-mt-[72px] mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-40px)]">
              <div className="contact-hero-panel relative bg-[#b10017] text-white rounded-[22px] sm:rounded-[24px] overflow-hidden flex flex-col justify-center split-hero-mobile-padding shadow-xl">
                {/* Subtle radial depth gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none" aria-hidden="true" />

                <div className="contact-hero-panel-content relative z-10 space-y-[12px] sm:space-y-[16px]">
                  <Eyebrow color="white" className="!text-[11px] !tracking-[0.12em] !leading-[1.4]">
                    {eyebrow}
                  </Eyebrow>
                  <Heading level={1} variant="hero" color="white" className="!text-[clamp(2.25rem,9.5vw,2.625rem)] sm:!text-[clamp(2.75rem,6vw,3.25rem)] !leading-[1.1]">
                    {title}
                  </Heading>
                  {description && (
                    <Lead variant="article" className="!text-white/95 !text-[clamp(1.0625rem,4.5vw,1.1875rem)] sm:!text-[clamp(1.1875rem,2.5vw,1.375rem)] !leading-[1.5] !font-normal">
                      {description}
                    </Lead>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Desktop (≥ 1024px): full-bleed viewport-width split ── */}
        <div className="hidden lg:block split-hero-full-bleed overflow-x-clip">
          <div className="contact-hero w-full grid grid-cols-[55fr_45fr] gap-[10px] items-stretch min-h-[clamp(540px,42vw,620px)]">
            {/* Left Column: Image (55% width) — flush to left viewport edge */}
            <div
              className="contact-hero-image relative overflow-hidden rounded-r-[20px] h-full"
              style={imagePosStyle}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="55vw"
                className="contact-hero-image-media object-cover"
              />
            </div>

            {/* Right Column: Red Panel — flush to right viewport edge */}
            <div className="contact-hero-panel relative bg-[#b10017] text-white rounded-l-[20px] overflow-hidden flex flex-col justify-center px-14 xl:px-18 2xl:px-22 py-16">
              {/* Subtle depth overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20 pointer-events-none" aria-hidden="true" />

              <div className="contact-hero-panel-content relative z-10 max-w-[560px] space-y-4">
                <Eyebrow color="white">
                  {eyebrow}
                </Eyebrow>
                <Heading level={1} variant="hero" color="white" className="text-[46px] xl:text-[54px] leading-[1.12]">
                  {title}
                </Heading>
                {description && (
                  <Lead variant="article" className="text-white/95 text-xl leading-relaxed font-normal">
                    {description}
                  </Lead>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
