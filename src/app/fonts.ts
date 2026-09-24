/**
 * FONT — loaded once and self-hosted by Next.js (no requests to Google in the browser).
 *
 * Figtree (one variable font for everything, like the Lovable design system):
 *   headings  -> weight 600 with tight letter-spacing (class: font-display)
 *   body, buttons, prices -> weight 400 (class: font-sans)
 *
 * The `variable` name is used in src/app/globals.css (--font-display / --font-sans).
 */
import { Figtree } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});
