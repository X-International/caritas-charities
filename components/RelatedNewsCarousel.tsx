'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NewsArticle } from '@/lib/content/news';
import Card from '@/components/ui/Card';
import { Heading, Eyebrow } from '@/components/ui/Typography';

export default function RelatedNewsCarousel({ currentArticleSlug, allArticles }: { currentArticleSlug: string, allArticles: NewsArticle[] }) {
    const relatedArticles = useMemo(() => allArticles
        .filter(a => a.slug !== currentArticleSlug)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [allArticles, currentArticleSlug]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = useCallback(() => setCurrentIndex(prev => (prev + 1) % relatedArticles.length), [relatedArticles.length]);
    const prev = useCallback(() => setCurrentIndex(prev => (prev - 1 + relatedArticles.length) % relatedArticles.length), [relatedArticles.length]);

    useEffect(() => {
        if (relatedArticles.length <= 1) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next, relatedArticles.length]);

    if (relatedArticles.length === 0) return null;

    const article = relatedArticles[currentIndex];

    return (
        <section className="space-y-4" aria-live="polite" aria-atomic="true">
            <Heading level={2} variant="card" color="red">
              Related Content
            </Heading>
            <div className="relative group">
                <Card variant="content" className="overflow-hidden p-0 sm:p-0">
                    <Link href={`/resources/news/${article.slug}`} className="block">
                    <div className="relative aspect-video w-full overflow-hidden bg-[#f5efe6]">
                        <Image
                            src={article.image}
                            alt={article.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    <div className="px-5 py-5 sm:px-6 sm:py-6">
                        <div className="flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-widest text-[#585858]">
                            <Eyebrow color="muted">{article.category}</Eyebrow>
                            <span className="font-mono text-[#7b7b7b] tracking-normal">{article.date}</span>
                        </div>
                        <Heading level={3} variant="card" color="red" className="mt-4 text-[18px] sm:text-[20px] leading-[1.2] line-clamp-2">
                            {article.title}
                        </Heading>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#4f4f4f] line-clamp-2">
                            {article.snippet}
                        </p>
                        <div className="mt-4 flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-widest text-[#585858]">
                            <Eyebrow color="muted">{article.category}</Eyebrow>
                            <span>{article.region || ''}</span>
                        </div>
                    </div>
                    </Link>
                </Card>

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
