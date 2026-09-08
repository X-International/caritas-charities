'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsArticle } from '@/lib/content/news';
import { Heading } from '@/components/ui/Typography';

export default function RelatedNewsCarousel({ currentArticleSlug, allArticles }: { currentArticleSlug: string, allArticles: NewsArticle[] }) {
    const relatedArticles = useMemo(() => allArticles
        .filter(a => a.slug !== currentArticleSlug)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [allArticles, currentArticleSlug]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => setCurrentIndex(prev => (prev + 1) % relatedArticles.length), [relatedArticles.length]);
    const prev = useCallback(() => setCurrentIndex(prev => (prev - 1 + relatedArticles.length) % relatedArticles.length), [relatedArticles.length]);

    // Autoplay removed per editorial requirements (no autoplay / aggressive animation)

    if (relatedArticles.length === 0) return null;

    const article = relatedArticles[currentIndex];

    return (
        <section className="space-y-4" aria-live="polite" aria-atomic="true">
            <Heading level={2} variant="card" color="red">
              Related Content
            </Heading>
            <div className="relative group">
                <div className="overflow-hidden bg-white border-[2px] border-[#e2d8ca] rounded-[20px]">
                    <Link href={`/resources/news/${article.slug}`} className="flex flex-col h-full group/card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ebe4d9]">
                        <Image
                            src={article.image}
                            alt={article.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-center"
                        />
                    </div>
                    <div className="px-4.5 pb-4.5 pt-5 sm:px-5 sm:pb-5 sm:pt-6 lg:px-[22px] lg:pb-[22px] lg:pt-6 flex flex-col flex-1 text-left bg-white">
                        <div className="flex items-center justify-between gap-3 mb-2.5 text-[11px] font-semibold uppercase tracking-[0.06em] font-sans">
                            <span className="text-gray-500 truncate">{article.category.toUpperCase()}</span>
                            <span className="text-gray-400 font-medium shrink-0 whitespace-nowrap">
                              {(() => {
                                const d = new Date(article.date);
                                if (isNaN(d.getTime())) return article.date.toUpperCase();
                                const day = d.getDate();
                                const month = d.toLocaleString('en-GB', { month: 'short' }).toUpperCase();
                                const year = d.getFullYear();
                                return `${day} ${month} ${year}`;
                              })()}
                            </span>
                        </div>
                        <Heading level={3} variant="card" color="red" className="font-serif font-bold text-[#b10017] text-[19px] sm:text-[20.5px] leading-[1.25] mb-2.5 sm:mb-3 line-clamp-2 group-hover/card:underline">
                            {article.title}
                        </Heading>
                        <p className="font-sans text-[13.5px] sm:text-[14px] text-gray-600 leading-[1.55] font-normal line-clamp-3">
                            {article.snippet}
                        </p>
                        <div className="mt-auto pt-5 border-t border-gray-200/60 flex items-center justify-end text-[11px] font-bold uppercase tracking-[0.06em] font-sans">
                            <span className="text-[#b10017] font-semibold flex items-center gap-1 shrink-0">
                                <span className="group-hover/card:underline">READ ARTICLE</span>
                                <span aria-hidden="true">&rarr;</span>
                            </span>
                        </div>
                    </div>
                    </Link>
                </div>

                {relatedArticles.length > 1 && (
                    <>
                        <button type="button" onClick={prev} aria-label="Previous related article" className="absolute left-2 top-1/3 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caritas-red z-10">
                            <ChevronLeft className="w-5 h-5 text-caritas-red" />
                        </button>
                        <button type="button" onClick={next} aria-label="Next related article" className="absolute right-2 top-1/3 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caritas-red z-10">
                            <ChevronRight className="w-5 h-5 text-caritas-red" />
                        </button>
                    </>
                )}
            </div>

            {relatedArticles.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                    {relatedArticles.map((_, index) => (
                        <button
                            type="button"
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-caritas-red' : 'bg-gray-300'}`}
                            aria-label={`Go to article ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
