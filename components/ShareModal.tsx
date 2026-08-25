"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ANALYTICS_EVENTS, trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";
import {
  canUseNativeShare,
  copyPageUrl,
  getPageSharePayload,
  getShareDestinationUrl,
  nativeSharePage,
  type PageSharePayload,
  type SharePlatform,
} from "@/lib/share";

type ShareModalProps = {
  onClose: () => void;
};

const COPY_RESET_MS = 2500;

function openShareWindow(url: string) {
  window.open(url, "_blank", "width=640,height=520,noopener,noreferrer");
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

type PlatformButton = {
  id: Exclude<SharePlatform, "copy" | "native">;
  label: string;
  ariaLabel: string;
  className: string;
  icon: ReactNode;
};

const platforms: PlatformButton[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    ariaLabel: "Share this page on WhatsApp",
    className: "bg-[#25D366] hover:bg-[#1ebe57] focus-visible:ring-[#25D366]",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    ariaLabel: "Share this page on Facebook",
    className: "bg-[#1877f2] hover:bg-[#0d65d9] focus-visible:ring-[#1877f2]",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.4 0-4 1.2-4 3v3z" />
      </svg>
    ),
  },
  {
    id: "x",
    label: "X",
    ariaLabel: "Share this page on X",
    className: "bg-black hover:bg-[#222] focus-visible:ring-black",
    icon: (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    ariaLabel: "Share this page on LinkedIn",
    className: "bg-[#0a66c2] hover:bg-[#084e96] focus-visible:ring-[#0a66c2]",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    ariaLabel: "Share this page via Email",
    className: "bg-[#ea4335] hover:bg-[#d63022] focus-visible:ring-[#ea4335]",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function ShareModal({ onClose }: ShareModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const statusId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const copyRef = useRef<HTMLButtonElement | null>(null);
  const nativeRef = useRef<HTMLButtonElement | null>(null);
  const [payload, setPayload] = useState<PageSharePayload | null>(() =>
    typeof window !== "undefined" ? getPageSharePayload() : null
  );
  const [nativeAvailable] = useState<boolean>(() =>
    typeof window !== "undefined" ? canUseNativeShare() : false
  );
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  useEffect(() => {
    setPayload(getPageSharePayload());
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (window.matchMedia("(max-width: 767px)").matches && canUseNativeShare()) {
        nativeRef.current?.focus();
      } else {
        copyRef.current?.focus();
      }
    }, 40);

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", trapFocus);
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", trapFocus);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), COPY_RESET_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const shareVia = (platform: Exclude<SharePlatform, "copy" | "native">) => {
    if (!payload) return;
    trackEvent(ANALYTICS_EVENTS.shareClick, { platform });
    const destination = getShareDestinationUrl(platform, payload);
    if (platform === "email") {
      window.location.assign(destination);
      return;
    }
    openShareWindow(destination);
  };

  const handleCopy = async () => {
    if (!payload) return;
    const ok = await copyPageUrl(payload.url);
    trackEvent(ANALYTICS_EVENTS.shareClick, { platform: "copy", success: ok });
    setCopyError(!ok);
    setCopied(ok);
  };

  const handleNativeShare = async () => {
    if (!payload) return;
    const result = await nativeSharePage(payload);
    if (result === "shared") {
      trackEvent(ANALYTICS_EVENTS.shareClick, { platform: "native" });
    }
    if (result === "unavailable") {
      await handleCopy();
    }
  };

  const statusMessage = copied ? "Link copied" : copyError ? "Could not copy the link" : "";

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4"
      role="presentation"
    >
      <button
        type="button"
        tabIndex={-1}
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Close share dialog"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="share-modal-enter relative z-10 w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-subcard border border-gray-100 bg-white p-6 shadow-2xl sm:p-8"
      >
        <style>{`
          @keyframes shareModalIn {
            from { opacity: 0; transform: scale(0.95) translateY(8px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
          .share-modal-enter {
            animation: shareModalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          @media (prefers-reduced-motion: reduce) {
            .share-modal-enter { animation: none; }
          }
        `}</style>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 flex min-h-11 min-w-11 items-center justify-center rounded-pill text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#b10017] cursor-pointer"
          aria-label="Close share dialog"
        >
          <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start space-x-4 pr-8">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-caritas-red text-white shadow-md sm:h-14 sm:w-14"
            aria-hidden="true"
          >
            <ShareIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <div className="min-w-0 flex-1">
            <Heading id={titleId} level={2} variant="card" color="red" className="text-lg sm:text-xl font-bold font-serif">
              Share This Page
            </Heading>
            <Text id={descriptionId} size="xs" color="muted" className="mt-1.5 leading-relaxed sm:text-sm">
              Help more people discover the work of Caritas Kampala Charities Office. Share this page to help connect others with our mission and work.
            </Text>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {nativeAvailable && (
            <Button
              ref={nativeRef as React.Ref<HTMLButtonElement>}
              onClick={handleNativeShare}
              variant="primary"
              size="md"
              leftIcon={<ShareIcon className="h-4.5 w-4.5" />}
              className="w-full rounded-input md:hidden font-semibold normal-case text-sm tracking-normal shadow-sm"
            >
              Share Page
            </Button>
          )}

          <Button
            ref={copyRef as React.Ref<HTMLButtonElement>}
            onClick={handleCopy}
            aria-label="Copy page link"
            aria-describedby={statusId}
            variant={copied ? "primary" : "outline"}
            size="md"
            leftIcon={copied ? <CheckIcon className="h-5 w-5" /> : <LinkIcon className="h-5 w-5" />}
            className={`w-full rounded-input font-semibold normal-case text-sm tracking-normal border-2 ${
              copied
                ? "border-[#1b7a4a] bg-[#1b7a4a] text-white hover:bg-[#15623b]"
                : "border-[#b10017] bg-white text-[#b10017] hover:bg-[#b10017] hover:text-white"
            }`}
          >
            {copied ? "Link Copied" : "Copy Link"}
          </Button>
          <p id={statusId} className="sr-only" role="status" aria-live="polite">
            {statusMessage}
          </p>
        </div>

        <div className="mt-7">
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">
            SHARE VIA
          </p>
          <div className="grid grid-cols-5 gap-1.5 sm:gap-3 max-w-sm mx-auto items-center justify-items-center">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                type="button"
                onClick={() => shareVia(platform.id)}
                className="group flex min-w-0 w-full flex-col items-center gap-1.5 focus-visible:outline-none cursor-pointer"
                aria-label={platform.ariaLabel}
              >
                <span
                  className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-pill text-white shadow-md transition-colors duration-200 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 ${platform.className}`}
                >
                  {platform.icon}
                </span>
                <span className="text-[10px] font-semibold text-gray-700 transition-colors group-hover:text-gray-900 truncate w-full text-center">
                  {platform.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {nativeAvailable && (
          <Button
            onClick={handleNativeShare}
            variant="outline"
            size="md"
            leftIcon={<ShareIcon className="h-4 w-4 text-[#b10017]" />}
            className="mt-6 hidden w-full rounded-input border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 focus-visible:ring-[#b10017] md:flex font-semibold normal-case text-sm tracking-normal"
          >
            More ways to share
          </Button>
        )}
      </div>
    </div>
  );
}
