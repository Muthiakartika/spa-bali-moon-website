import type { NextConfig } from "next";
import { liveRedirects } from "./src/data/redirects";

const nextConfig: NextConfig = {
  // Every URL ends with "/" — exactly like the old website (SEO: keep URLs identical).
  // Visiting /contact redirects to /contact/.
  trailingSlash: true,

  images: {
    // Modern formats: smaller files, same quality.
    formats: ["image/avif", "image/webp"],
    // Next.js 16 requires the list of allowed image qualities.
    qualities: [75],
  },

  // Old URLs → new URLs. The list lives in src/data/redirects.ts (see migration/url-map.md).
  async redirects() {
    return liveRedirects.map((redirect) => ({
      source: redirect.from,
      destination: redirect.to,
      permanent: true,
    }));
  },
};

export default nextConfig;
