import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { Heading, Lead } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import { searchSite } from "@/lib/search/search-engine";
import { SITE_DOMAIN } from "@/lib/search/search-index";

export const metadata = buildPageMetadata({
  title: "Search Results | Caritas Kampala’s Charity Office",
  description: "Search results across all programmes, news, resources, and services of the Charity Office of Caritas Kampala.",
  path: "/search",
  robots: { index: false, follow: true },
});

const labelTextClasses = "inline-block text-[#585858] uppercase tracking-[0.18em] text-[11px] font-semibold bg-gray-100 px-2.5 py-1 rounded";
const headlineLinkClasses =
  "inline-block font-serif text-[20px] sm:text-[22px] lg:text-[24px] leading-snug text-[#b10017] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; search?: string }>;
}) {
  const params = await searchParams;
  const rawQuery = params.q ?? params.search ?? "";
  const query = rawQuery.trim();
  const results = query ? searchSite(query) : [];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#b10017] text-white section-lg">
          <div className="site-container space-y-4">
            <Breadcrumb
              items={[
                { label: "HOME", href: "/" },
                { label: "SEARCH RESULTS" },
              ]}
            />
            <Heading level={1} variant="page" color="white">
              Search Results
            </Heading>
            <Lead variant="hero">
              {query
                ? `Showing results for "${query}" across the Charity Office website.`
                : "Search across programmes, news articles, resources, and services."}
            </Lead>
          </div>
        </section>

        {/* Results Metadata Bar */}
        {query && (
          <div className="site-container pt-8" aria-live="polite">
            <p className="text-sm text-[#585858]">
              Found <strong className="text-gray-900">{results.length}</strong> result
              {results.length === 1 ? "" : "s"} for <strong className="text-gray-900">&ldquo;{query}&rdquo;</strong>.
            </p>
          </div>
        )}

        {/* Results Container */}
        <section className="site-container section-md space-y-6">
          {!query ? (
            <Card variant="info" className="px-6 py-12 text-center space-y-3">
              <Heading level={2} variant="card" color="red">
                Enter a search term
              </Heading>
              <p className="text-sm text-[#585858] max-w-md mx-auto">
                Use the search bar above to search for programmes, Kotido famine relief appeal, volunteer opportunities, charity shop, or annual reports.
              </p>
            </Card>
          ) : results.length === 0 ? (
            <Card variant="info" className="px-6 py-12 text-center space-y-3">
              <Heading level={2} variant="card" color="red">
                No results found
              </Heading>
              <p className="text-sm text-[#585858]">
                No results found. Try a different search term.
              </p>
            </Card>
          ) : (
            <div className="space-y-6">
              {results.map((result) => {
                const fullUrl = result.url.startsWith("http")
                  ? result.url
                  : `${SITE_DOMAIN}${result.url}`;

                return (
                  <Card key={result.id} variant="info" className="p-6 sm:p-8 md:p-10 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={labelTextClasses}>{result.category}</span>
                      <span className="text-[11px] font-mono text-gray-400 truncate max-w-full sm:max-w-xs">
                        {fullUrl}
                      </span>
                    </div>

                    <h2 className="max-w-2xl">
                      <Link href={result.url} className={headlineLinkClasses}>
                        {result.title}
                      </Link>
                    </h2>

                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#4f4f4f] max-w-2xl">
                      {result.snippet}
                    </p>

                    <div className="pt-1">
                      <Link
                        href={result.url}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#b10017]"
                      >
                        <span>View page</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
