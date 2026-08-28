import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedNewsCarousel from "@/components/RelatedNewsCarousel";
import { getNewsArticle, newsArticles } from "@/lib/content/news";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Heading } from "@/components/ui/Typography";
import { buildPageMetadata } from "@/lib/metadata-utils";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {};
  }

  return buildPageMetadata({
    title: `${article.title} | Caritas Kampala Charities Office`,
    description: article.snippet,
    path: `/resources/news/${article.slug}`,
    image: article.image,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.snippet,
    "image": [
      article.image.startsWith("http")
        ? article.image
        : `${siteConfig.domain}${article.image.startsWith("/") ? article.image : `/${article.image}`}`
    ],
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "Caritas Kampala Charities Office",
      "url": siteConfig.domain
    },
    "publisher": {
      "@type": "NGO",
      "name": "Caritas Kampala Charities Office",
      "url": siteConfig.domain
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.domain}/resources/news/${article.slug}`
    }
  };

  const dateObj = new Date(article.date);
  const datetimeStr = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split("T")[0] : article.date;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        <div className="site-container section-sm">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#b10017] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources/news" className="text-[#b10017] hover:underline">
                  NEWS &amp; UPDATES
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Main Two-Column Layout (~70% / ~30%) */}
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 items-start">
            {/* Left Column: Main Article Content */}
            <article className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Hero Image - full width of main column */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#f5efe6]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Inner reading width container for professional editorial rhythm */}
              <div className="max-w-[750px] mx-auto space-y-6">
                <Heading level={1} variant="article" color="red" className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.15]">
                  {article.title}
                </Heading>

                {/* Article Meta directly under title */}
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-gray-500">
                  <span className="text-[#b10017]">{article.category}</span>
                  <span className="text-gray-300">•</span>
                  <time dateTime={datetimeStr} className="font-mono text-[#7b7b7b] tracking-normal">
                    {article.date.toUpperCase()}
                  </time>
                  {article.region && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-600">{article.region}</span>
                    </>
                  )}
                </div>

                {/* Optional Article Intro / Deck */}
                {article.snippet && (
                  <p className="text-lg sm:text-xl font-serif text-gray-700 leading-relaxed pt-1">
                    {article.snippet}
                  </p>
                )}

                <hr className="border-gray-200 my-6" />

                {/* Article Body */}
                <div className="space-y-5 text-[17px] sm:text-[18px] leading-[1.75] text-[#4f4f4f]">
                  {article.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {article.helpSection && (
                  <Card variant="info" className="space-y-6 mt-8 p-6 sm:p-8 rounded-2xl shadow-none border border-gray-200">
                    <Heading level={2} variant="card" color="red">
                      {article.helpSection.title}
                    </Heading>
                    <div className="space-y-2 text-[#4f4f4f] text-[16px] leading-relaxed">
                      {article.helpSection.content.map((line, index) => {
                        const phoneMatch = line.match(/(\+256[\d\s]+)/);
                        if (phoneMatch) {
                          const rawNum = phoneMatch[1].replace(/\s+/g, "");
                          const displayNum = phoneMatch[1];
                          const prefix = line.replace(phoneMatch[1], "").trim();
                          return (
                            <p key={index} className="text-[#4f4f4f]">
                              {prefix && <span className="font-semibold text-gray-800">{prefix} </span>}
                              <a href={`tel:${rawNum}`} className="text-[#b10017] hover:underline font-mono font-medium">
                                {displayNum}
                              </a>
                            </p>
                          );
                        }
                        if (index === 0) {
                          return <p key={index} className="text-[#4f4f4f] font-medium">{line}</p>;
                        }
                        if (["Caritas Kampala Office", "Old Ggaba Road, Nsambya", "(next to the American Embassy)", "Kampala, Uganda"].includes(line)) {
                          return <p key={index} className={line === "Caritas Kampala Office" ? "font-semibold text-gray-900 pt-1" : "text-[#4f4f4f]"}>{line}</p>;
                        }
                        return <p key={index} className="text-[#4f4f4f]">{line}</p>;
                      })}
                    </div>
                    <Button
                      href={article.helpSection.buttonLink}
                      variant="primary"
                      size="md"
                    >
                      {article.helpSection.buttonText}
                    </Button>
                  </Card>
                )}

                {article.closingPrompt && (
                  <Card variant="info" className="space-y-6 mt-8 p-6 sm:p-8 rounded-2xl shadow-none border border-gray-200">
                    <p className="text-[17px] sm:text-[18px] leading-[1.7] text-[#4f4f4f]">
                      {article.closingPrompt.body}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {article.closingPrompt.buttons.map((button) => (
                        <Button
                          key={button.text}
                          href={button.link}
                          variant="primary"
                          size="md"
                        >
                          {button.text}
                        </Button>
                      ))}
                    </div>
                  </Card>
                )}

                {/* End-of-Article Navigation */}
                <div className="pt-10 sm:pt-12 pb-6">
                  <Link
                    href="/resources/news"
                    className="text-[#b10017] hover:underline font-semibold text-base inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] rounded"
                  >
                    ← Back to News &amp; Updates
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Column: Sidebar (~30%) */}
            <aside aria-label="Article sidebar" className="lg:col-span-3 space-y-8 lg:sticky lg:top-28 mt-8 lg:mt-0">
              {/* Article Details */}
              <div className="bg-[#f5efe6] p-6 sm:p-7 rounded-xl space-y-4">
                <h2 className="text-sm font-extrabold uppercase tracking-widest text-[#585858]">
                  Article Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <span className="text-[#585858] uppercase tracking-[0.12em] text-xs font-semibold">
                      Category
                    </span>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 font-semibold text-white text-[11px] ${
                      article.category === "Emergency Appeal"
                        ? "bg-category-emergency"
                        : article.category === "Announcement"
                          ? "bg-category-announcement"
                          : "bg-category-partnership"
                    }`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200">
                    <span className="text-[#585858] uppercase tracking-[0.12em] text-xs font-semibold">
                      Date
                    </span>
                    <span className="font-mono text-gray-700 text-xs font-medium uppercase tracking-normal">
                      {article.date}
                    </span>
                  </div>
                  {article.region && (
                    <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200">
                      <span className="text-[#585858] uppercase tracking-[0.12em] text-xs font-semibold">
                        Region
                      </span>
                      <span className="text-gray-700 text-xs font-medium uppercase tracking-normal">
                        {article.region}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Content */}
              <RelatedNewsCarousel currentArticleSlug={article.slug} allArticles={newsArticles} />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
