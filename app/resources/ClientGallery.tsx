"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = { images: string[] };

export default function ClientGallery({ images }: Props) {
  const IMAGES_PER_PAGE = 9;
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const totalPages = Math.max(1, Math.ceil(images.length / IMAGES_PER_PAGE));

  const pageImages = useMemo(() => {
    const start = (page - 1) * IMAGES_PER_PAGE;
    return images.slice(start, start + IMAGES_PER_PAGE);
  }, [images, page]);

  // For lightbox, provide full images list in the same order
  const lightboxSlides = useMemo(() => images.map((src) => ({ src })), [images]);

  // Focus management: store last focused thumbnail
  const lastFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open && lastFocusRef.current) {
      lastFocusRef.current.focus();
    }
  }, [open]);

  const openAt = (globalIndex: number, e?: React.MouseEvent | React.KeyboardEvent) => {
    if (e) e.preventDefault();
    // save focus
    const target = e?.currentTarget as HTMLElement | undefined;
    if (target) lastFocusRef.current = target;
    setIndex(globalIndex);
    setOpen(true);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageImages.map((src, i) => {
          const globalIndex = (page - 1) * IMAGES_PER_PAGE + i;
          const alt = src.split("/").pop() || "Charities Department community photo";
          return (
            <button
              key={src}
              onClick={(e) => openAt(globalIndex, e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") openAt(globalIndex, e);
              }}
              className="relative block w-full h-56 rounded-2xl overflow-hidden shadow-sm border border-gray-100 focus:outline-2 focus:outline-[#b10017]"
              aria-label={`Open image ${globalIndex + 1}`}
            >
              <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform transition-transform duration-300 hover:scale-105" />
            </button>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 rounded border"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={`px-3 py-1 rounded ${p === page ? "bg-[#b10017] text-white" : "border"}`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 rounded border"
        >
          Next
        </button>
      </div>

      {/* Lightbox: uses full images array so navigation spans pages */}
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={lightboxSlides}
        onIndexChange={(i) => setIndex(i)}
      >
        <div className="absolute top-4 left-4 text-white/90 z-50">{index + 1} / {images.length}</div>
      </Lightbox>
    </div>
  );
}
