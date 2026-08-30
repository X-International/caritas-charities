"use client";

import { useState, useMemo, useRef, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { ZoomIn } from "lucide-react";
import {
  ALL_CATEGORY_ID,
  GALLERY_CATEGORIES,
  type GalleryImage,
} from "./gallery/gallery-config";
import { Card } from "@/components/ui/Card";

type Props = { images: GalleryImage[] };

const IMAGES_PER_PAGE = 9;

const THUMB_FOCUS_CLASSES =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const BTN_BASE =
  "inline-flex items-center justify-center min-h-11 px-3 sm:px-4 py-2 text-sm font-medium rounded-lg border border-[#eadfce] bg-white text-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#faf7f2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2";

const BTN_PRIMARY =
  "inline-flex items-center justify-center min-h-11 min-w-11 px-4 py-2 text-sm font-semibold rounded-lg bg-[#b10017] text-white transition-colors hover:bg-[#8f0012] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2";

const LABEL_CLASSES =
  "text-[#585858] uppercase tracking-[0.18em] text-[10px] xs:text-[11px] sm:text-xs";

function getPageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, "...", total];
  }
  if (current >= total - 3) {
    return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function ClientGallery({ images }: Props) {
  return (
    <Suspense fallback={<div className="py-12 text-center text-gray-500">Loading gallery...</div>}>
      <ClientGalleryInner images={images} />
    </Suspense>
  );
}

function ClientGalleryInner({ images }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryFromUrl = searchParams.get("category") || ALL_CATEGORY_ID;
  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);

  const [categoryFilter, setCategoryFilter] = useState(categoryFromUrl);
  const [page, setPage] = useState(pageFromUrl);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lastFocusRef = useRef<HTMLElement | null>(null);
  const filterScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cat = searchParams.get("category") || ALL_CATEGORY_ID;
    const p = parseInt(searchParams.get("page") || "1", 10);
    setCategoryFilter(cat);
    setPage(isNaN(p) || p < 1 ? 1 : p);
  }, [searchParams]);

  const updateUrl = useCallback(
    (newCat: string, newPage: number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newCat === ALL_CATEGORY_ID) {
        params.delete("category");
      } else {
        params.set("category", newCat);
      }
      if (newPage <= 1) {
        params.delete("page");
      } else {
        params.set("page", newPage.toString());
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [searchParams, router, pathname]
  );

  const filteredImages = useMemo(() => {
    if (categoryFilter === ALL_CATEGORY_ID) return images;
    return images.filter((img) => img.categoryId === categoryFilter);
  }, [images, categoryFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / IMAGES_PER_PAGE));

  const pageImages = useMemo(() => {
    const start = (page - 1) * IMAGES_PER_PAGE;
    return filteredImages.slice(start, start + IMAGES_PER_PAGE);
  }, [filteredImages, page]);

  const lightboxSlides = useMemo(
    () =>
      filteredImages.map((img) => ({
        src: img.src,
        alt: img.alt,
        title: "Photo Gallery",
        description: `${img.caption} | ${img.categoryLabel}`,
      })),
    [filteredImages]
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { [ALL_CATEGORY_ID]: images.length };
    for (const cat of GALLERY_CATEGORIES) {
      counts[cat.id] = images.filter((img) => img.categoryId === cat.id).length;
    }
    return counts;
  }, [images]);

  useEffect(() => {
    if (!open && lastFocusRef.current) {
      lastFocusRef.current.focus();
    }
  }, [open]);

  const openAt = useCallback((globalIndex: number, e: React.MouseEvent<HTMLButtonElement>) => {
    lastFocusRef.current = e.currentTarget;
    setIndex(globalIndex);
    setOpen(true);
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setCategoryFilter(categoryId);
    setPage(1);
    updateUrl(categoryId, 1);
    filterScrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    updateUrl(categoryFilter, newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (images.length === 0) {
    return (
      <div className="rounded-3xl border border-[#eadfce] bg-[#faf7f2] px-6 py-12 sm:py-16 text-center">
        <p className="font-serif text-xl sm:text-2xl text-[#b10017]">No photos yet</p>
        <p className="mt-3 text-sm sm:text-base text-[#4f4f4f] max-w-md mx-auto">
          Check back soon for highlights from our programmes and community work.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Category filters — horizontal scroll on small screens */}
      <div
        ref={filterScrollRef}
        className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto overscroll-x-contain no-scrollbar"
        role="group"
        aria-label="Filter gallery by collection"
      >
        <div className="flex w-max sm:w-auto sm:flex-wrap gap-2 sm:gap-2.5 pb-1 sm:pb-0">
          <FilterPill
            active={categoryFilter === ALL_CATEGORY_ID}
            label="All"
            count={categoryCounts[ALL_CATEGORY_ID]}
            onClick={() => handleCategoryChange(ALL_CATEGORY_ID)}
          />
          {GALLERY_CATEGORIES.filter((cat) => (categoryCounts[cat.id] || 0) > 0).map((cat) => (
            <FilterPill
              key={cat.id}
              active={categoryFilter === cat.id}
              label={cat.label}
              count={categoryCounts[cat.id] || 0}
              onClick={() => handleCategoryChange(cat.id)}
            />
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="text-sm text-[#585858]" aria-live="polite">
        Showing{" "}
        <span className="font-semibold text-gray-900">{filteredImages.length}</span>{" "}
        {filteredImages.length === 1 ? "photo" : "photos"}
        {categoryFilter !== ALL_CATEGORY_ID && (
          <>
            {" "}
            in{" "}
            <span className="font-semibold text-gray-900">
              {GALLERY_CATEGORIES.find((c) => c.id === categoryFilter)?.label}
            </span>
          </>
        )}
      </p>

      {filteredImages.length === 0 ? (
        <div className="rounded-3xl border border-[#eadfce] bg-[#faf7f2] px-6 py-10 sm:py-12 text-center">
          <p className="font-serif text-lg sm:text-xl text-[#b10017]">No photos in this collection</p>
          <button
            type="button"
            onClick={() => handleCategoryChange(ALL_CATEGORY_ID)}
            className={`mt-4 ${BTN_PRIMARY}`}
          >
            View all photos
          </button>
        </div>
      ) : (
        <>
          {/* Responsive grid: 1 → 2 → 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {pageImages.map((img, i) => {
              const globalIndex = (page - 1) * IMAGES_PER_PAGE + i;
              return (
                <article
                  key={img.src}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    type="button"
                    onClick={(e) => openAt(globalIndex, e)}
                    className={`relative w-full aspect-[4/3] overflow-hidden bg-caritas-beige block ${THUMB_FOCUS_CLASSES}`}
                    aria-label={`View photo: ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={globalIndex < 3}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.02]"
                    />

                    {/* Subtle hover overlay */}
                    <span className="absolute inset-0 bg-black/0 motion-safe:transition-colors motion-safe:duration-200 group-hover:bg-black/10 group-focus-visible:bg-black/10" />

                    <span className="absolute inset-0 flex items-center justify-center opacity-0 motion-safe:transition-opacity motion-safe:duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <span className="flex items-center gap-1.5 rounded-lg bg-[#b10017] px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                        <ZoomIn className="h-3.5 w-3.5 shrink-0" aria-hidden />
                        View Photo
                      </span>
                    </span>

                    <span
                      className={`absolute left-2.5 top-2.5 ${LABEL_CLASSES} text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm max-w-[calc(100%-1.25rem)] truncate font-semibold`}
                    >
                      {img.categoryLabel}
                    </span>
                  </button>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4"
              aria-label="Gallery pagination"
            >
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, page - 1))}
                disabled={page === 1}
                aria-disabled={page === 1}
                className={BTN_BASE}
              >
                Previous
              </button>

              {/* Mobile page info */}
              <p className="sm:hidden text-sm text-[#585858]" aria-current="page">
                Page <span className="font-semibold text-gray-900">{page}</span> of{" "}
                <span className="font-semibold text-gray-900">{totalPages}</span>
              </p>

              {/* Desktop page numbers with ellipsis */}
              <div className="hidden sm:flex items-center gap-1.5">
                {getPageNumbers(page, totalPages).map((p, idx) => {
                  if (p === "...") {
                    return (
                      <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  const pageNum = p as number;
                  const isCurrent = pageNum === page;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => handlePageChange(pageNum)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`min-w-10 min-h-10 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isCurrent
                          ? "bg-[#b10017] text-white shadow-sm"
                          : "bg-white text-gray-800 border border-[#eadfce] hover:bg-[#faf7f2]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                aria-disabled={page === totalPages}
                className={BTN_BASE}
              >
                Next
              </button>
            </nav>
          )}
        </>
      )}

      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        plugins={[Counter, Captions, Zoom]}
        counter={{
          container: {
            style: {
              top: "unset",
              bottom: "1rem",
              left: "1.5rem",
              transform: "none",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "#fff",
              padding: "0.25rem 0.75rem",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
            },
          },
        }}
        captions={{ descriptionTextAlign: "center" }}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        on={{
          view: ({ index: i }) => setIndex(i),
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.94)" },
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}

function FilterPill({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex shrink-0 items-center gap-1.5 min-h-11 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b10017] focus-visible:ring-offset-2 ${
        active
          ? "bg-[#b10017] text-white shadow-md"
          : "bg-white text-[#585858] border border-[#eadfce] hover:border-[#b10017]/50 hover:bg-[#faf7f2] hover:text-gray-900"
      }`}
    >
      {label}
      <span
        className={`tabular-nums text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ${
          active ? "bg-white/30 text-white" : "bg-[#f5efe6] text-[#585858]"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
