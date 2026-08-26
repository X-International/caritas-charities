import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NewsHero from "@/components/NewsHero";
import { newsArticles } from "@/lib/content/news";
import { buildPageMetadata } from "@/lib/metadata-utils";
import { Card } from "@/components/ui/Card";

export const metadata = buildPageMetadata({
  title: "News & Updates | Caritas Kampala Charities Office",
  description:
    "The latest updates and stories from the work of the Charities Office across the Archdiocese of Kampala.",
  path: "/resources/news",
});

const labelTextClasses = "text-[#585858] uppercase tracking-[0.18em] text-[11px] sm:text-xs";
const headlineLinkClasses =
  "inline-block font-serif text-[22px] sm:text-[24px] lg:text-[26px] leading-[1.15] text-[#b10017] transition-colors duration-200 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; q?: string }>;
}) {
  const params = await searchParams;
  const query = (params.search ?? params.q)?.trim() ?? "";
  const filteredArticles = query
    ? newsArticles.filter((article) =>
        [article.title, article.snippet, article.category, article.region]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(query.toLowerCase()))
      )
    : newsArticles;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <Breadcrumb items={[
            { label: "HOME", href: "/" },
            { label: "NEWS & UPDATES" }
          ]} />
        </div>

        <NewsHero />

        {query && (
          <div className="site-container pt-8 space-y-3" aria-live="polite">
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="text-sm text-[#585858]">
                Showing {filteredArticles.length} news article{filteredArticles.length === 1 ? "" : "s"} matching <strong className="text-gray-900">&ldquo;{query}&rdquo;</strong>.
              </p>
              <Link
                href={`/search?q=${encodeURIComponent(query)}`}
                className="text-xs font-semibold text-[#b10017] hover:underline inline-flex items-center gap-1"
              >
                <span>Search all site content for &ldquo;{query}&rdquo;</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* News Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-md space-y-10">
          {filteredArticles.length === 0 ? (
            <Card variant="info" className="px-6 py-12 text-center">
              <h2 className="font-serif text-2xl text-caritas-red">No matching updates</h2>
              <p className="mt-2 text-sm text-[#585858]">Try a different search term.</p>
            </Card>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredArticles.map((news) => (
              <Card key={news.slug} as="article" variant="content" className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative aspect-video w-full overflow-hidden bg-caritas-beige">
                  <Image
                    src={news.image}
                    alt={news.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                    <span className={labelTextClasses}>{news.category}</span>
                    <span className="whitespace-nowrap text-[#7b7b7b] font-mono tracking-normal uppercase">{news.date}</span>
                  </div>
                  <h2 className="mt-6">
                    <Link href={`/resources/news/${news.slug}`} className={headlineLinkClasses}>
                      {news.title}
                    </Link>
                  </h2>
                  <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.72] text-[#4f4f4f]">
                    {news.snippet}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
