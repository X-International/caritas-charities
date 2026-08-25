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

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
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
              <li className="text-gray-600" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Main Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Column: Article Content */}
            <article className="lg:col-span-8 space-y-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-[#f5efe6]">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <Heading level={1} variant="article" color="red">
                  {article.title}
                </Heading>
                {article.subtitle && (
                  <p className="text-xl sm:text-2xl font-serif text-gray-700 leading-snug">
                    {article.subtitle}
                  </p>
                )}
                <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.7] text-[#4f4f4f]">
                  {article.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {article.helpSection && (
                  <Card variant="info" className="space-y-6 mt-8">
                    <Heading level={2} variant="card" color="red">
                      {article.helpSection.title}
                    </Heading>
                    <div className="space-y-2 text-[#4f4f4f] text-[16px] leading-relaxed">
                      {article.helpSection.content.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
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
                  <Card variant="info" className="space-y-6 mt-8">
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
              </div>
            </article>

            {/* Right Column: Metadata */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              <Card variant="info" className="p-6 sm:p-7 space-y-4">
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
              </Card>

              <RelatedNewsCarousel currentArticleSlug={article.slug} allArticles={newsArticles} />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
