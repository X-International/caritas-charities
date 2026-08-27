import Image from "next/image";
import Link from "next/link";
import { Heading } from "@/components/ui/Typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BrandedPageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  description?: string;
}

export default function BrandedPageHeader({ title, breadcrumbs, description }: BrandedPageHeaderProps) {
  return (
    <section className="relative w-full bg-[#8c1d2c] sm:bg-gray-900 min-h-[250px] sm:min-h-[280px] lg:min-h-[330px] flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      <Image
        src="/images/Headers/header_Caritas_Kampala.png"
        alt=""
        fill
        className="object-cover object-[68%_center] sm:object-[center_right]"
        priority
      />
      <div className="site-container relative z-10 w-full">
        <div className="max-w-4xl space-y-4 sm:space-y-5 text-left">
          <nav
            aria-label="Breadcrumb"
            className="text-xs uppercase tracking-wider font-semibold text-white/85"
          >
            <ol className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2 sm:gap-2.5">
                  {index > 0 && <span aria-hidden="true" className="text-white/60">→</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:underline transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white font-bold">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <Heading 
            level={1} 
            className="text-[38px] sm:text-[46px] lg:text-[56px] font-bold font-serif text-white tracking-tight leading-[1.15]"
          >
            {title}
          </Heading>

          {description && (
            <p className="text-base sm:text-lg lg:text-[20px] text-white/95 max-w-[560px] sm:max-w-[620px] leading-[1.55] font-sans">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
