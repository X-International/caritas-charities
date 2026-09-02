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
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="site-container pt-4 sm:pt-6 lg:pt-8 pb-3 sm:pb-4">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-wider font-semibold"
          >
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex items-center">
                  {index > 0 && <span className="text-gray-400 mr-2">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href === "#" ? "#" : item.href}
                      aria-disabled={item.href === "#" ? "true" : undefined}
                      tabIndex={item.href === "#" ? -1 : undefined}
                      className={`text-[#b10017] ${
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
      <div className="site-container mb-14 sm:mb-18 lg:mb-22">
        <div className="split-hero-outer relative w-full overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]">
          <div className="contact-hero w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch min-h-[440px] sm:min-h-[500px] lg:min-h-[clamp(540px,42vw,620px)] relative">
            {/* Left Column: Image */}
            <div
              className="contact-hero-image relative overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] h-[clamp(380px,95vw,520px)] sm:h-[clamp(420px,55vw,540px)] lg:h-full z-0"
              style={imagePosStyle}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="contact-hero-image-media object-cover"
              />
            </div>

            {/* Right Column: Sliding Red Content Panel */}
            <div className="contact-hero-panel-wrap relative z-10 -mt-16 sm:-mt-20 lg:mt-0 px-3 sm:px-6 lg:px-0">
              <div className="contact-hero-panel relative bg-[#b10017] text-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-14 xl:px-18 py-10 sm:py-14 lg:py-16 h-full min-h-[280px]">
                <div className="contact-hero-panel-content max-w-lg space-y-3 sm:space-y-4">
                  <Eyebrow color="white">
                    {eyebrow}
                  </Eyebrow>
                  <Heading level={1} variant="hero" color="white" className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[54px] leading-[1.12]">
                    {title}
                  </Heading>
                  {description && (
                    <Lead variant="article" className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
                      {description}
                    </Lead>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
