import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getNewsArticle, newsArticles } from "../news-data";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Caritas Kampala`,
    description: article.snippet,
  };
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Navbar />

      <main id="main-content" className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2">
          <nav aria-label="Breadcrumb" className="mb-2 sm:mb-4">
            <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold">
              <li>
                <Link href="/" className="text-[#b10017] hover:underline">
                  HOME
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/resources" className="text-[#b10017] hover:underline">
                  RESOURCES
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
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="overflow-hidden rounded-[28px] border border-[#eadfce] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <div className="relative aspect-video bg-[#f5efe6]">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="flex items-center justify-between gap-4 text-[11px] sm:text-xs uppercase tracking-[0.18em]">
                <span className="text-[#585858]">News</span>
                <span className="text-[#7b7b7b] font-mono tracking-normal uppercase">{article.date}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-[#b10017]">
                {article.title}
              </h1>
              <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.7] text-[#4f4f4f]">
                {article.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 pt-6 text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#5d5d5d]">
                <span className={`inline-flex min-w-40 items-center justify-center rounded-full px-3 py-1.5 font-semibold text-white ${
                  article.category === "Emergency Appeal"
                    ? "bg-[#b10017]"
                    : article.category === "Announcement"
                      ? "bg-[#7a5b1d]"
                      : "bg-[#0f6d67]"
                }`}>
                  {article.category}
                </span>
                <span>{article.region}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
