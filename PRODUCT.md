# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mix of international tourists and locals/expats in Bali (confirmed by owner, Sept 2026).

- Tourists staying in Seminyak, Kuta and nearby areas: browsing mostly on a phone, often choosing a treatment and booking the same day, either at the spa or as home service in their villa or hotel.
- Locals and expats: returning guests who already know what they want and need the price and a fast way to book.

Their job: find the right treatment (massage, facial, beauty, body care, couple, package), see the duration and price clearly, and book without friction.

## Product Purpose

The marketing and booking website of Spa Bali Moon, an independent day spa in Seminyak, Bali (since 2009), which also offers outcall/home service to villas, hotels and residences.

Success = a visitor finds a treatment, understands the price and duration, and taps **WhatsApp to book** (the primary conversion, confirmed). The contact form is secondary.

## Positioning

An established (since 2009) independent Seminyak spa with a full menu (massage, facials, beauty, body care, couple treatments, spa packages) and clear published prices. The same therapists deliver the same treatments in-spa or at your villa/hotel for a stated fee per therapist.

## Operating Context

- Booking happens in WhatsApp (+62 878-6317-5144). There is no online booking engine.
- Prices are in thousands of Indonesian Rupiah ("159K" = IDR 159,000); couple prices cover 2 pax.
- Home service adds a fee per therapist (amount and area rules are pending review, see migration/migration-audit.md FEE-01).
- The site is a migration of the live https://spabalimoon.com/. URLs, content and SEO value must be preserved (see migration/).

## Capabilities and Constraints

- Next.js App Router, TypeScript, Tailwind CSS v4, next/image, next/font. Server Components by default. Must stay beginner-maintainable.
- All content lives in `src/data/` (verbatim from the live site). Do not invent copy, prices, treatments, FAQs, reviews or ratings.
- Existing URLs are kept (`/seminyak/<slug>/`, `/guide/<slug>/`, `/outcall-home-service-massage/`, trailing slashes).
- Undecided facts (opening hours, address spelling, email, fee rules, some prices) are listed in migration/migration-audit.md and must not be resolved silently.

## Brand Commitments

- Name: Spa Bali Moon. Existing logo: gold lotus mark + wordmark (`public/images/branding/`).
- Original Spa Bali Moon photography only (`public/images/`). No stock, AI or placeholder imagery.
- The owner's brief sets the direction: calm, warm, organic, minimal, modern, tropical, refined, subtly feminine; premium but approachable; a modern independent Bali spa, NOT a medical clinic, five-star resort, ThemeForest template, corporate wellness brand, bright pink salon or overly bohemian site.
- **Brand colors (owner, 24 Sept 2026 — copy the live website spabalimoon.com):** White #FFFFFF, Linen #F5F2EC, Cream #F2E6DD, Gold #A78627 (brand accent, logo), Ink #1C1A1D (headings), Stone #5F5A54 (secondary text), hairline #DFDADA. Only tints/shades of these for states and contrast (e.g. Gold Deep #7E6519 for buttons with white text). Replaces the earlier six-colour brief palette (Ivory/Sand/Taupe/Sage/Olive/Brown).
- Typography pinned by the brief: an editorial serif (Instrument Serif or similar) for headings and a modern sans (Manrope or similar) for body.

## Evidence on Hand

- 23 real Google review texts (`src/data/testimonials.ts`). A live Google rating (4.2 / 192) existed on the old site but is not confirmed for display. Never show fabricated stars or counts.
- "Since 2009" / "17 + Years Experience" (existing claims).
- Real published prices for 34 price-list items and 32 packages.
- Absent: awards, press, certifications, a team page and an About page. Do not fabricate them.

## Product Principles

1. Booking is one tap away: every treatment and package leads to WhatsApp with the treatment named.
2. Price and duration are never hidden or ambiguous.
3. Existing content and URLs are preserved; the design changes, the facts do not.
4. Calm over clutter: the site should feel like the spa, not like a sales page.
5. Mobile first: most visitors decide on a phone, often on the same day.

## Accessibility & Inclusion

WCAG 2.2 AA as a baseline (owner confirmed "per brief"): readable contrast, keyboard navigation, visible focus, labelled form fields, meaningful alt text, accessible menu and accordion, and respect for prefers-reduced-motion. Lighthouse targets: Accessibility ≥ 95, Performance ≥ 90, Best Practices ≥ 95, SEO ≥ 95.
