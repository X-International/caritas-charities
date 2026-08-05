import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
      <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
        {items.map((item, index) => (
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
  );
}
