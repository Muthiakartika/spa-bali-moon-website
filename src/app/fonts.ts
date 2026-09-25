/**
 * FONTS — loaded once and self-hosted by Next.js (no requests to Google in the browser).
 *
 * The "Taman" design chosen by the client (2026-09-25):
 *   Bodoni Moda -> headings (weight 400, with gold italics for accents)   class: font-display
 *   Mulish      -> body text, buttons, prices (soft and easy to read)   class: font-sans
 *
 * The `variable` names are used in src/app/globals.css (--font-display / --font-sans).
 */
import { Bodoni_Moda, Mulish } from "next/font/google";

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

export const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});
