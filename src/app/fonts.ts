/**
 * FONTS — loaded once and self-hosted by Next.js (no requests to Google in the browser).
 *
 * Instrument Serif  -> headings (class: font-serif)
 * Manrope           -> body text, buttons, prices, board labels (class: font-sans)
 *
 * The `variable` names are used in src/app/globals.css (--font-serif / --font-sans).
 */
import { Instrument_Serif, Manrope } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif",
});

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
