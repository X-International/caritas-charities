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
}

export default function SplitPageHeader({
  breadcrumbs,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: SplitPageHeaderProps) {
  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="site-container pt-4 sm:pt-6 lg:pt-8 pb-2">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-wider font-semibold"
          >
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex items-center">
                  {index > 0 && <span className="text-gray-400 mr-2">/</span>}
                  {item.href ? (
                    <Link href={item.href} className="text-[#b10017] hover:underline">
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
      <div className="site-container">
        <div className="contact-hero w-full grid grid-cols-1 mb-8 sm:mb-12 relative overflow-hidden lg:h-125">
          {/* Left Column: Image */}
          <div className="contact-hero-image order-1 relative h-75 sm:h-100 md:h-120 lg:h-full rounded-t-2xl sm:rounded-t-4xl lg:rounded-none lg:rounded-r-4xl overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:w-[calc(50%-0.5rem)]">
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
          <div className="contact-hero-panel order-2 relative h-75 sm:h-100 md:h-120 lg:h-full bg-[#b10017] text-white rounded-b-2xl sm:rounded-b-4xl lg:rounded-none lg:rounded-l-4xl overflow-hidden flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24">
            <div className="contact-hero-panel-content max-w-lg space-y-4">
              <Eyebrow color="white">
                {eyebrow}
              </Eyebrow>
              <Heading level={1} variant="hero" color="white">
                {title}
              </Heading>
              {description && (
                <Lead variant="article" className="text-white">
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
