---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/seminyak/page.tsx","src/app/seminyak/[slug]/page.tsx","src/app/outcall-home-service-massage/page.tsx"]
---

# Surface brief: Spa Bali Moon site (homepage first; the board system runs through Pricelist, Home Service and treatment pages)

## Scope and mode
Persuade. Homepage `/` is the first surface; `/seminyak/` (Pricelist), `/outcall-home-service-massage/` and `/seminyak/<slug>/` inherit the same world.

## Audience, job, action
Mixed tourists (phone, often same-day) and local/expat regulars. Job: find a treatment, read duration and price, book. Action: WhatsApp booking with the treatment named (src/lib/whatsapp.ts). Proof: real published prices, since 2009, 23 real Google review texts, original photography. Constraints: brand palette fixed (PRODUCT.md), verbatim copy from src/data, no invented claims or stars.

## Direction contract

THESIS: The spa menu read like a departure board every traveler already knows: treatment, duration, price, book, in one glance and one tap. It refuses the category default of a full-bleed photo, a centered serif headline and a grid of look-alike cards.

OWN-WORLD: Warm Ivory page with Deep Olive ink. The Board is one contained Deep Olive object: a Warm Taupe frame rule, ivory glyphs in fixed cells with a hairline split through each cell, Soft Sand column labels in tracked Manrope caps with tabular numerals. Muted Sage is the only lamp (selected tab, "home service available"). Warm Brown carries secondary text and links. Editorial serif (Instrument Serif) for display on ivory only; never inside the board. Corners nearly square (2–3px); taupe hairline rules; no gradients, no shadows beyond a single soft board drop.

STORY: The visitor learns this is Seminyak's day spa since 2009. They see real prices immediately on the board, switch Massage / Beauty / For Couples, pick a row, and tap Book. WhatsApp opens with that treatment named. The same board says the therapists also come to your villa or hotel.

FIRST VIEWPORT: Utility bar (opening hours · address · In-Spa / Home Service), then the header. Desktop: left 5/12 holds the eyebrow "Seminyak · Since 2009", H1 "Our Seminyak Day Spa" in a large serif (≈ 88–104px), the existing intro paragraph, the primary WhatsApp button and a secondary "Explore Treatments" link. Right 7/12 holds a tall original photo with a compact three-row board strip overlapping its lower edge (real items from pricelist.ts) that flaps into place on load. Mobile: H1, intro, buttons, then photo with the board strip under it. The primary action is always visible without scrolling.

FORM: Split-flap concourse departure board (catalog id signals-instruments-split-flap-concourse), dealt challenger in bolder re-roll round 1, verdict "wins", chosen by the owner. Seed key 142a1f3f. Signature interaction: a per-character flap cascade when the board's tab changes. Rows stay a semantic, sortable table. Under prefers-reduced-motion the cascade collapses to a single swap.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved decisions
Opening hours (HOURS-01) and address spelling (ADDR-01) are shown in the utility bar as the footer values until the owner confirms. The About/Treatments nav wording is URL-02.
