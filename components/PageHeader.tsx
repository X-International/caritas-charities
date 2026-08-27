import Image from "next/image";
import Link from "next/link";
import { Heading, Lead } from "@/components/ui/Typography";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  description?: string;
}

export default function PageHeader({ title, breadcrumbs, description }: PageHeaderProps) {
  return (
    <section className="relative w-full bg-gray-900 py-16 sm:py-20 lg:py-24">
      <Image
        src="/images/Headers/header_Caritas_Kampala.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="site-container relative z-10 space-y-4">
        <nav
          aria-label="Breadcrumb"
          className="text-[10px] xs:text-xs uppercase tracking-wide font-semibold text-red-200"
        >
          <ol className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && <span>→</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Heading level={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white">
          {title}
        </Heading>
        {description && (
          <Lead className="text-lg sm:text-xl text-white/90 max-w-2xl">
            {description}
          </Lead>
        )}
      </div>
    </section>
  );
}
