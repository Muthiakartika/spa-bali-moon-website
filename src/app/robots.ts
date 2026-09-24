import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/**
 * ROBOTS (/robots.txt) — same rules as the old website.
 * Old theme-demo pages (/faq/, /testimonials/ …) are NOT blocked here on purpose:
 * they now return 404, and Google must be able to see that to drop them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/", "/*?s=", "/*?utm_source", "/*?utm_medium", "/*?utm_campaign"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
