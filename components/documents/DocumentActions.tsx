import React from "react";

interface DocumentActionsProps {
  pdfUrl: string;
  viewLabel?: string;
  downloadLabel?: string;
  viewAriaLabel?: string;
  downloadAriaLabel?: string;
  downloadFileName?: string;
  className?: string;
}

export default function DocumentActions({
  pdfUrl,
  viewLabel = "VIEW ONLINE →",
  downloadLabel = "DOWNLOAD PDF",
  viewAriaLabel,
  downloadAriaLabel,
  downloadFileName,
  className = "",
}: DocumentActionsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {/* Primary: Opens PDF inline in a new tab without forcing download */}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={viewAriaLabel}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-pill bg-[#b10017] text-white hover:bg-[#8e0a20] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b10017] cursor-pointer select-none"
      >
        {viewLabel}
      </a>

      {/* Secondary: Dedicated Download action */}
      <a
        href={pdfUrl}
        download={downloadFileName}
        aria-label={downloadAriaLabel}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-pill border-2 border-[#b10017] text-[#b10017] bg-transparent hover:bg-[#b10017] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b10017] cursor-pointer select-none"
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        {downloadLabel}
      </a>
    </div>
  );
}
