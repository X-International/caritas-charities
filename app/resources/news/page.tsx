import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
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
        <PageHeader
          title="News & Updates"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "#" },
            { label: "News & Updates" },
          ]}
          description="Read the latest news, announcements, and updates from the work of the Charities Office."
        />

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

        {/* Latest News Section Intro */}
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 bg-white text-center">
          <div className="site-container max-w-[760px] space-y-4">
            <Heading level={2} variant="section" color="red">
              Latest News
            </Heading>
            <div className="mx-auto w-16 h-1 bg-[#b10017]" aria-hidden="true" />
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-[700px] mx-auto">
              Updates from our programmes, events, partnerships, and community work.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="site-container pb-[72px] sm:pb-[80px] lg:pb-[88px]">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                {filteredArticles.map((news) => {
                  const dateObj = new Date(news.date);
                  const datetimeStr = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split("T")[0] : news.date;
                  return (
                    <Link
                      key={news.slug}
                      href={`/resources/news/${news.slug}`}
                      className="flex flex-col h-full rounded-xl border border-gray-200 bg-white overflow-hidden shadow-none transition-all duration-200 ease-out group hover:border-[#b10017]/30 hover:bg-[#fcfbf9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-caritas-beige rounded-t-xl">
                        <Image
                          src={news.image}
                          alt={news.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                          <span className="text-[#585858] uppercase tracking-[0.18em] text-[11px] sm:text-xs font-semibold">{news.category}</span>
                          <time dateTime={datetimeStr} className="whitespace-nowrap text-[#7b7b7b] font-mono tracking-normal uppercase text-[11px] sm:text-xs">
                            {news.date.toUpperCase()}
                          </time>
                        </div>
                        <h2 className="mt-5 font-serif text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.2] text-[#b10017] transition-colors duration-200 group-hover:text-[#8e0a20] group-hover:underline">
                          {news.title}
                        </h2>
                        <p className="mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.6] text-[#4f4f4f]">
                          {news.snippet}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )
          )}
        </section>
        <div className="site-container pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6">
          <DonateOnlineCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
