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
      <div className="site-container mb-12 sm:mb-16 lg:mb-20">
        <div className="contact-hero w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-stretch lg:h-[clamp(460px,32vw,520px)] relative overflow-x-clip">
          {/* Left Column: Image */}
          <div
            className="contact-hero-image relative overflow-hidden rounded-t-3xl sm:rounded-t-4xl lg:rounded-tr-none lg:rounded-l-4xl h-[clamp(280px,82vw,340px)] sm:h-[clamp(340px,45vw,400px)] lg:h-full"
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

          {/* Right Column: Red Content Panel */}
          <div className="contact-hero-panel relative bg-[#b10017] text-white rounded-b-3xl sm:rounded-b-4xl lg:rounded-bl-none lg:rounded-r-4xl overflow-hidden flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-10 sm:py-12 lg:py-0">
            <div className="contact-hero-panel-content max-w-lg space-y-3 sm:space-y-4">
              <Eyebrow color="white">
                {eyebrow}
              </Eyebrow>
              <Heading level={1} variant="hero" color="white" className="text-3xl sm:text-4xl lg:text-5xl">
                {title}
              </Heading>
              {description && (
                <Lead variant="article" className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                  {description}
                </Lead>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
