/**
 * Fonts used only by the homepage design demos (/demo/...). Loaded only on those pages.
 *
 * Maison   : Cormorant Garamond (display) + Jost (text)      — editorial luxury
 * Temple   : Marcellus (display, carved-stone capitals)       — cinematic Bali
 * Botanica : Bodoni Moda (display, high-contrast italic)      — soft fashion-luxury
 * Tirta    : Gilda Display (display) + Mulish (text)          — calm Bali day spa
 */
import { Bodoni_Moda, Cormorant_Garamond, Gilda_Display, Jost, Marcellus, Mulish } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marcellus",
});

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bodoni",
});

export const gilda = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-gilda",
});

export const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});
