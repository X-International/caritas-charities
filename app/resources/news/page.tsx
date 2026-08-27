import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import NewsHero from "@/components/NewsHero";
import { newsArticles } from "@/lib/content/news";
import { buildPageMetadata } from "@/lib/metadata-utils";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import { ArrowRight, Search as SearchIcon } from "lucide-react";
import DonateOnlineCard from "@/components/DonateOnlineCard";

export const metadata = buildPageMetadata({
  title: "News & Updates | Caritas Kampala Charities Office",
  description:
    "The latest updates and stories from the work of the Charities Office across the Kampala Archdiocese.",
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
  const sortedArticles = [...newsArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredArticles = query
    ? sortedArticles.filter((article) =>
        [article.title, article.snippet, article.category, article.region]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(query.toLowerCase()))
      )
    : sortedArticles;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <div className="site-container pt-4 sm:pt-6 lg:pt-8 pb-2">
          <Breadcrumb items={[
            { label: "HOME", href: "/" },
            { label: "NEWS & UPDATES" }
          ]} />
        </div>

        <NewsHero />

        {/* Search Results Banner (Make a Gift style) */}
        {query && (
          <section className="pt-5 sm:pt-7 pb-2 sm:pb-4" aria-labelledby="search-results-heading">
            <Card
              variant="info"
              className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8 text-center md:text-left site-container"
            >
              <div
                aria-hidden="true"
                className="w-16 h-16 sm:w-20 sm:h-20 bg-caritas-red rounded-pill flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xs"
              >
                <SearchIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" strokeWidth={2.25} />
              </div>

              <div className="min-w-0 space-y-2 md:flex-1">
                <Heading
                  level={2}
                  variant="subsection"
                  color="red"
                  id="search-results-heading"
                  className="md:text-[28px] leading-tight"
                >
                  Search Results
                </Heading>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-2xl font-sans">
                  Found <strong>{filteredArticles.length}</strong> news article{filteredArticles.length === 1 ? "" : "s"} matching your search for <strong>&ldquo;{query}&rdquo;</strong>.
                  Can&apos;t find what you&apos;re looking for? Try a simpler search term, search all site content, or browse all updates.
                </p>
              </div>

              <div className="w-full md:w-auto md:pl-4 flex flex-col items-center md:items-end gap-2 sm:gap-3">
                <Button
                  href="/resources/news"
                  aria-label="Clear search and view all news and updates"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                  className="w-full max-w-sm sm:w-auto min-w-45"
                >
                  View All Updates
                </Button>
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  className="text-xs font-semibold text-[#b10017] hover:underline underline-offset-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 px-2 py-1 inline-flex items-center gap-1"
                >
                  <span>Search all site content for &ldquo;{query}&rdquo;</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          </section>
        )}

        {/* News Grid */}
        <section className="site-container section-md space-y-10">
          {query && filteredArticles.length === 0 ? (
            <Card
              variant="info"
              className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-5 sm:gap-6 md:gap-8 text-center md:text-left"
            >
              <div
                aria-hidden="true"
                className="w-16 h-16 sm:w-20 sm:h-20 bg-caritas-red rounded-pill flex items-center justify-center shrink-0 mx-auto md:mx-0 shadow-xs"
              >
                <SearchIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" strokeWidth={2.25} />
              </div>

              <div className="min-w-0 space-y-2 md:flex-1">
                <Heading
                  level={2}
                  variant="subsection"
                  color="red"
                  className="md:text-[28px] leading-tight"
                >
                  No Matching Updates
                </Heading>
                <p className="text-sm sm:text-base text-gray-900 leading-relaxed max-w-2xl font-sans">
                  We couldn&apos;t find any updates matching <strong>&ldquo;{query}&rdquo;</strong>.
                  Try a different search term, search all site content, or browse all updates below.
                </p>
              </div>

              <div className="w-full md:w-auto md:pl-4 flex flex-col items-center md:items-end gap-2 sm:gap-3">
                <Button
                  href="/resources/news"
                  aria-label="Clear search and browse all news and updates"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                  className="w-full max-w-sm sm:w-auto min-w-45"
                >
                  Browse All Updates
                </Button>
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  className="text-xs font-semibold text-[#b10017] hover:underline underline-offset-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 px-2 py-1 inline-flex items-center gap-1"
                >
                  <span>Search all site content for &ldquo;{query}&rdquo;</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ) : (
            filteredArticles.length > 0 && (
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
            )
          )}
        </section>
        <div className="site-container py-4 sm:py-6">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
