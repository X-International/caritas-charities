import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Next 16's CLI type-check path cannot parse the TypeScript 5.9 wrapper
  // when it launches it directly. Keep full type checking enabled through
  // the compiler API until that upstream compatibility issue is resolved.
  experimental: {
    useTypeScriptCli: false,
  },
  // Baseline browser protections for every route. The CSP allows only the
  // third-party services actually used by this site (Mapbox, Google Maps,
  // YouTube privacy-enhanced embeds, and Vercel telemetry).
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/favicons/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "object-src 'none'",
              "worker-src 'self' blob:",
              `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""} https://api.mapbox.com https://maps.googleapis.com https://va.vercel-scripts.com`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://api.mapbox.com https://*.tiles.mapbox.com https://events.mapbox.com https://maps.googleapis.com https://va.vercel-scripts.com https://*.supabase.co",
              "frame-src 'self' https://www.youtube-nocookie.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.caritas.org",
      },
    ],
  },
};

export default nextConfig;
