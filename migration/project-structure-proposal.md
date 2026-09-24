# Project Structure (data layer built in Step 7; components follow in Steps 8–17)

Next.js (latest stable, App Router) + TypeScript + Tailwind CSS + next/image + next/font (Instrument Serif + Manrope) + lucide-react.
Folders follow the **live URLs** (see `url-map.md`), so each page file sits where its URL is.

```
new-spa/
├── migration/                         ← this audit (done)
├── public/
│   └── images/
│       ├── home/                      /images/home/* (hero, about, CTA)  +  shared/ ← /images/homepage/*
│       ├── treatments/
│       │   ├── cards/                 630×580 treatment card photos (listmenu)
│       │   └── <slug>/                photos of each treatment page, e.g. balinese-massage/
│       ├── beauty/
│       │   ├── cards/
│       │   └── <slug>/                facial/, creambath/, manicure-pedicure/, nail-spa/, waxing-salon/, hair-braiding/, ear-wax-removal/
│       ├── packages/cards/            couple package photo
│       ├── gallery/                   pricelist/, home-service/, contact/, villa-hotel-massage/, massage-kuta/
│       ├── blog/                      featured + in-article images
│       └── branding/                  logos, icons/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 fonts, Header, Footer, WhatsApp button, site metadata
│   │   ├── globals.css                design tokens (colours, spacing) + Tailwind
│   │   ├── page.tsx                   /  (homepage)
│   │   ├── not-found.tsx              custom 404
│   │   ├── sitemap.ts                 /sitemap.xml
│   │   ├── robots.ts                  /robots.txt
│   │   ├── seminyak/
│   │   │   ├── page.tsx               /seminyak/  → Pricelist + Spa Packages
│   │   │   └── [slug]/page.tsx        /seminyak/balinese-massage/ … (24 treatment pages incl. day-spa)
│   │   ├── outcall-home-service-massage/page.tsx   Home Service
│   │   ├── villa-hotel-massage/page.tsx
│   │   ├── massage-kuta/page.tsx
│   │   ├── reservation/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── guide/
│   │   │   ├── page.tsx               /guide/  → Blog archive
│   │   │   └── [slug]/page.tsx        blog posts
│   │   ├── wellness-in-bali/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── terms-and-conditions/page.tsx
│   ├── components/
│   │   ├── layout/    Header.tsx, MobileMenu.tsx (client), Footer.tsx, UtilityBar.tsx, WhatsAppButton.tsx, Breadcrumbs.tsx
│   │   ├── home/      Hero.tsx, TreatmentCategories.tsx, FeaturedTreatments.tsx, AboutSpa.tsx, InSpaVsHomeService.tsx,
│   │   │              SpaPackages.tsx, WhySpaBaliMoon.tsx, Testimonials.tsx, Gallery.tsx, HowBookingWorks.tsx
│   │   ├── treatments/ TreatmentCard.tsx, TreatmentHero.tsx, TreatmentPricing.tsx, ContentSections.tsx,
│   │   │              PackageCard.tsx, RelatedTreatments.tsx, PriceList.tsx (client: tabs/filter)
│   │   └── ui/        Button.tsx, SectionHeading.tsx, FAQ.tsx (client: accordion), BookingCTA.tsx, JsonLd.tsx
│   ├── data/                  ✅ built in Step 7 (all copy verbatim, verified against the live site)
│   │   ├── types.ts           shapes of all content (editor autocomplete + error checking)
│   │   ├── business.ts        name, phone, WhatsApp, address, hours, fee, socials (conflicts marked TODO)
│   │   ├── navigation.ts      header menu, Treatments dropdown, footer menus
│   │   ├── pricelist.ts       34 price items — every price typed ONCE; priceOf("id", "label") helper
│   │   ├── packages.ts        8 package groups — every package typed ONCE
│   │   ├── testimonials.ts    23 existing Google review texts
│   │   ├── treatments/        one file per treatment page (24) + index.ts (order, related list)
│   │   ├── blog/              one file per article (7, body HTML identical to the old site) + index.ts
│   │   └── pages/             home, pricelist (/seminyak/), home-service, villa-hotel-massage, massage-kuta,
│   │                          reservation, contact, privacy-policy, terms-and-conditions, wellness-in-bali, blog
│   └── lib/
│       ├── whatsapp.ts        ✅ whatsappLink({ treatment?, packageName?, source? }) — number comes from business.ts
│       ├── format.ts          ✅ formatPrice(159000) -> "159K"
│       └── seo.ts             (Step 18) metadata + canonical + JSON-LD helpers
├── next.config.ts             trailingSlash: true, all redirects from url-map.md §B (+ approved §C/§D)
├── README.md                  beginner guide (install, run, edit treatments/prices/nav/images/WhatsApp/SEO, deploy)
└── package.json
```

Principles: Server Components by default. Client Components only for the mobile menu, dropdown, FAQ accordion, pricelist tabs/filters and the contact form. No CMS, no database, no state library. Content lives in plain TypeScript objects in `src/data/`.
