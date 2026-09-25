import type { Metadata, Viewport } from "next";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SiteChrome from "@/components/layout/SiteChrome";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { business } from "@/data/business";
import { figtree } from "./fonts";
import "./globals.css";

/**
 * Site-wide settings for search engines and social sharing.
 * Each page sets its own title and description (copied from the old site);
 * these are only the defaults.
 */
export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Spa Bali Moon - Outcall & Home Service Massage",
  description:
    "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.",
  applicationName: business.name,
  openGraph: {
    siteName: business.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f1e9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body>
        {/* Lets keyboard users jump straight past the menu */}
        <a
          href="#main-content"
          className="sr-only z-50 rounded-control bg-ink px-4 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {/* Header, footer and WhatsApp button on every page except the /demo/ designs */}
        <SiteChrome header={<Header />} footer={<Footer />} extras={<FloatingWhatsApp />}>
          {children}
        </SiteChrome>
        <ScrollReveal />
      </body>
    </html>
  );
}
