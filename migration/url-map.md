# URL Map — spabalimoon.com → new Next.js (App Router) site

> Source: live crawl + `sitemap.xml` + live redirect tests + Ahrefs backlink data (all-time, 102 target URLs), checked 2026-09-23.
> **Decision (owner, 2026-09-23): keep the live URLs.**
> **Policy:** every indexable URL keeps its exact path, including the trailing slash. Nothing is renamed to look "cleaner". Every redirect the live site already serves is reproduced as a **permanent redirect** in `next.config.ts` (`permanent: true` gives HTTP 308, which Google treats the same as 301; the live site also uses 301/308).
> Items marked **REQUIRES MANUAL REVIEW** are also logged in `migration-audit.md`.

Format per row: `OLD URL → NEW URL → STATUS → REDIRECT REQUIRED?`

---

## A. Indexable pages (in sitemap, HTTP 200): kept 1:1

| OLD URL | → NEW URL | → STATUS | → REDIRECT REQUIRED? | App Router file |
|---|---|---|---|---|
| `/` | `/` | Keep | No | `src/app/page.tsx` |
| `/seminyak/` | `/seminyak/` | Keep (Pricelist + Spa Packages) | No | `src/app/seminyak/page.tsx` |
| `/seminyak/balinese-massage/` | `/seminyak/balinese-massage/` | Keep | No | `src/app/seminyak/[slug]/page.tsx` |
| `/seminyak/anti-cellulite-massage/` | `/seminyak/anti-cellulite-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/body-scrub/` | `/seminyak/body-scrub/` | Keep | No | `…/[slug]` |
| `/seminyak/coconut-oil-massage/` | `/seminyak/coconut-oil-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/couple-spa/` | `/seminyak/couple-spa/` | Keep | No | `…/[slug]` |
| `/seminyak/creambath/` | `/seminyak/creambath/` | Keep | No | `…/[slug]` |
| `/seminyak/day-spa/` | `/seminyak/day-spa/` | Keep | No | `…/[slug]` |
| `/seminyak/deep-tissue-massage/` | `/seminyak/deep-tissue-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/ear-wax-removal/` | `/seminyak/ear-wax-removal/` | Keep (slug kept although the page is "Ear Candle") | No | `…/[slug]` |
| `/seminyak/facial/` | `/seminyak/facial/` | Keep | No | `…/[slug]` |
| `/seminyak/foot-massage/` | `/seminyak/foot-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/foot-reflexology/` | `/seminyak/foot-reflexology/` | Keep | No | `…/[slug]` |
| `/seminyak/hair-braiding/` | `/seminyak/hair-braiding/` | Keep | No | `…/[slug]` |
| `/seminyak/head-massage/` | `/seminyak/head-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/hot-stone-massage/` | `/seminyak/hot-stone-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/lymphatic-drainage-massage/` | `/seminyak/lymphatic-drainage-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/manicure-pedicure/` | `/seminyak/manicure-pedicure/` | Keep | No | `…/[slug]` |
| `/seminyak/nail-spa/` | `/seminyak/nail-spa/` | Keep | No | `…/[slug]` |
| `/seminyak/shiatsu-massage/` | `/seminyak/shiatsu-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/sport-massage/` | `/seminyak/sport-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/sunburn-massage/` | `/seminyak/sunburn-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/thai-massage/` | `/seminyak/thai-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/traditional-massage/` | `/seminyak/traditional-massage/` | Keep | No | `…/[slug]` |
| `/seminyak/waxing-salon/` | `/seminyak/waxing-salon/` | Keep | No | `…/[slug]` |
| `/outcall-home-service-massage/` | `/outcall-home-service-massage/` | Keep (Home Service page) | No | `src/app/outcall-home-service-massage/page.tsx` |
| `/villa-hotel-massage/` | `/villa-hotel-massage/` | Keep | No | `src/app/villa-hotel-massage/page.tsx` |
| `/massage-kuta/` | `/massage-kuta/` | Keep | No | `src/app/massage-kuta/page.tsx` |
| `/reservation/` | `/reservation/` | Keep | No | `src/app/reservation/page.tsx` |
| `/contact/` | `/contact/` | Keep | No | `src/app/contact/page.tsx` |
| `/guide/` | `/guide/` | Keep (Blog archive) | No | `src/app/guide/page.tsx` |
| `/guide/lymphatic-drainage-massage-benefits-techniques-what-to-expect/` | same | Keep | No | `src/app/guide/[slug]/page.tsx` |
| `/guide/what-is-a-balinese-massage/` | same | Keep | No | `…/[slug]` |
| `/guide/what-is-thai-massage/` | same | Keep | No | `…/[slug]` |
| `/guide/understanding-of-facial-massage/` | same | Keep | No | `…/[slug]` |
| `/guide/understanding-slimming-massage/` | same | Keep | No | `…/[slug]` |
| `/guide/best-massages-after-a-long-flight/` | same | Keep | No | `…/[slug]` |
| `/guide/iv-drip/` | same | Keep — content **REQUIRES MANUAL REVIEW** (third-party promotion, see audit) | No | `…/[slug]` |
| `/wellness-in-bali/` | `/wellness-in-bali/` | Keep (currently an orphan page; content **REQUIRES MANUAL REVIEW**) | No | `src/app/wellness-in-bali/page.tsx` |
| `/privacy-policy/` | `/privacy-policy/` | Keep | No | `src/app/privacy-policy/page.tsx` |
| `/terms-and-conditions/` | `/terms-and-conditions/` | Keep | No | `src/app/terms-and-conditions/page.tsx` |

### Why the brief's suggested routes are NOT used as-is

The brief suggested `/treatments/[slug]`, `/pricelist`, `/home-service`, `/blog/[slug]` and `/terms`. The live URLs with SEO value are `/seminyak/[slug]/`, `/seminyak/`, `/outcall-home-service-massage/`, `/guide/[slug]/` and `/terms-and-conditions/`. Moving them would require about 40 redirects and risk rankings, which goes against "prioritise existing URLs". The **folder names follow the live URLs**, and the brief's names become **redirect aliases** where the live site already has them (section B) or where they are harmless new aliases (section C).

---

## B. Redirects the live site ALREADY serves: reproduce all (permanent)

> **Step 18: ✅ built and tested.** All 35 rows are in `src/data/redirects.ts` → `liveRedirects`, loaded by `next.config.ts`.

Verified live on 2026-09-23. Many of these have external backlinks (count from Ahrefs in brackets).

| OLD URL | → NEW URL | → STATUS | → REDIRECT REQUIRED? |
|---|---|---|---|
| `/cheap-massage-seminyak-bali-price-list.html` (≈150 backlinks incl. http/www) | `/seminyak/` | Live 301 | **Yes — 301** |
| `/cheap-massage-seminyak-bali-price-list/` (≈31) | `/seminyak/` | Live 301 | **Yes — 301** |
| `/spa-massage-seminyak-bali-price-list/` (19) | `/seminyak/` | Live 301 | **Yes — 301** |
| `/spa-treatments/` | `/seminyak/` | Live 301 | **Yes — 301** |
| `/spa-treatments/foot-reflexology-seminyak-bali/` (≈131) | `/seminyak/foot-reflexology/` | Live 301 | **Yes — 301** |
| `/spa-treatments/reflexology-bali/` (1) | `/seminyak/foot-reflexology/` | Live 301 | **Yes — 301** |
| `/spa-treatments/waxing-bali/` (≈131) | `/seminyak/waxing-salon/` | Live 301 | **Yes — 301** |
| `/spa-treatments/couple-spa-bali/` (18) | `/seminyak/couple-spa/` | Live 301 | **Yes — 301** |
| `/spa-treatments/ear-candle-bali/` (8) | `/seminyak/ear-wax-removal/` | Live 301 | **Yes — 301** |
| `/spa-treatments/lymphatic-drainage-massage-bali/` (7) | `/seminyak/lymphatic-drainage-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/facial-seminyak/` (13) | `/seminyak/facial/` | Live 301 | **Yes — 301** |
| `/spa-treatments/body-scrub-bali/` (7) | `/seminyak/body-scrub/` | Live 301 | **Yes — 301** |
| `/spa-treatments/nails-seminyak/` (11) | `/seminyak/nail-spa/` | Live 301 | **Yes — 301** |
| `/spa-treatments/creambath-seminyak/` (4) | `/seminyak/creambath/` | Live 301 | **Yes — 301** |
| `/spa-treatments/manicure-pedicure-seminyak/` (4) | `/seminyak/manicure-pedicure/` | Live 301 | **Yes — 301** |
| `/spa-treatments/sport-massage-bali/` (7) | `/seminyak/sport-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/sunburn-massage-treatment-bali/` (4) | `/seminyak/sunburn-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/thai-massage-bali/` (6) | `/seminyak/thai-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/anti-cellulite-massage-bali/` (2) | `/seminyak/anti-cellulite-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/hot-stone-massage-bali/` (4) | `/seminyak/hot-stone-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/coconut-oil-massage/` (1) | `/seminyak/coconut-oil-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/deep-tissue-massage-bali/` (1) | `/seminyak/deep-tissue-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/hair-braiding-bali/` (1) | `/seminyak/hair-braiding/` | Live 301 | **Yes — 301** |
| `/spa-treatments/head-massage-bali/` (2) | `/seminyak/head-massage/` | Live 301 | **Yes — 301** |
| `/spa-treatments/shiatsu-massage-bali/` (1) | `/seminyak/shiatsu-massage/` | Live 301 | **Yes — 301** |
| `/massage-bali/` (5) | `/` | Live 301 | **Yes — 301** |
| `/massage-seminyak/` (5) | `/seminyak/` | Live 301 | **Yes — 301** |
| `/day-spa-seminyak/` (2) | `/seminyak/day-spa/` | Live 301 | **Yes — 301** |
| `/villa-hotel-massage-seminyak/` (2) | `/villa-hotel-massage/` | Live 301 | **Yes — 301** |
| `/spa-packages/` | `/seminyak/` | Live 301 | **Yes — 301** |
| `/pricing/` | `/seminyak/` | Live 301 | **Yes — 301** |
| `/page-services/` | `/seminyak/` | Live 301 | **Yes — 301** |
| `/team/` | `/seminyak/` | Live 301 | **Yes — 301** |
| `/blog/` | `/guide/` | Live 301 | **Yes — 301** |
| `/home-service/` | `/outcall-home-service-massage/` | Live 301 | **Yes — 301** |

Note: the live site may have more rules than these. The list was built by testing every backlinked legacy URL plus common aliases. If the old project's `next.config.js` / `vercel.json` / middleware is available, compare it with this list before launch (**REQUIRES MANUAL REVIEW**, audit SEO-08).

---

## C. Proposed NEW alias redirects (harmless, match the brief's route names)

> **Step 18:** written in `src/data/redirects.ts` → `proposedRedirects` but **not active** until approved (audit URL-03). Same for sections D and G.

These URLs return 404 today. Adding them costs nothing and matches the names in the brief. **Proposal only; confirm before adding.**

| OLD URL | → NEW URL | → STATUS | → REDIRECT REQUIRED? |
|---|---|---|---|
| `/pricelist/` | `/seminyak/` | Currently 404 | Proposed 301 |
| `/treatments/` | `/seminyak/` (or a new treatments hub, see audit URL-02) | Currently 404 | Proposed 301 — **REQUIRES MANUAL REVIEW** |
| `/terms/` | `/terms-and-conditions/` | Currently 404 | Proposed 301 |

---

## D. Legacy URLs with backlinks that now return 404: **REQUIRES MANUAL REVIEW**

Found in Ahrefs (all-time backlinks). These return 404 today, so their link equity is currently lost. The proposed targets are suggestions; nothing will be added without approval.

| OLD URL (backlinks) | → Proposed NEW URL | → STATUS | → REDIRECT REQUIRED? |
|---|---|---|---|
| `/bali-moon-best-massage-bali-seminyak-our-team.html` (138, 12 dofollow; last seen 2024-06) | `/` (no team page exists) | Live 404 | Proposed 301 — REVIEW |
| `/bali-moon-best-massage-bali-seminyak-our-team-html.html` (7) | `/` | Live 404 | Proposed 301 — REVIEW |
| `/spa-treatments/balinese-massage-bali/` (not in Ahrefs; follows the live `/spa-treatments/*` pattern) | `/seminyak/balinese-massage/` | Live 404 | Proposed 301 — REVIEW |
| `/spa-treatments/traditional-massage-bali/` (pattern) | `/seminyak/traditional-massage/` | Live 404 | Proposed 301 — REVIEW |
| `/spa-treatments/foot-massage-bali/` (pattern) | `/seminyak/foot-massage/` | Live 404 | Proposed 301 — REVIEW |
| `/cheap-massage-seminyak-bali-price-list/best-body-scrub-in-bali.html` (1) | `/seminyak/body-scrub/` | Live 404 | Proposed 301 — REVIEW |
| `/cheap-massage-seminyak-bali-price-list/extra-massage-service-in-seminyak.html` (1) | `/outcall-home-service-massage/` | Live 404 | Proposed 301 — REVIEW |
| `/cheap-massage-seminyak-bali-price-list/facial.html` (1) | `/seminyak/facial/` | Live 404 | Proposed 301 — REVIEW |
| `/cheap-massage-seminyak-bali-price-list/the-packages.html` (1) | `/seminyak/` | Live 404 | Proposed 301 — REVIEW |
| `/index.html` (9) | `/` | Live 404 | Proposed 301 — REVIEW |
| `/contact.html` (1) | `/contact/` | Live 404 | Proposed 301 — REVIEW |
| `/appointments.html` (1) | `/reservation/` | Live 404 | Proposed 301 — REVIEW |
| `/reservation-spa-bali-moon-massage.html` (1) | `/reservation/` | Live 404 | Proposed 301 — REVIEW |
| `/beauty-inspiration.html` (1, nofollow) | — (no equivalent) | Live 404 | Leave 404 — REVIEW |
| `/category/interiors/`, `/category/resort/`, `/dt_portfolios/honey-hive/`, `/portfolio_entries/hair-care/` (1 each, nofollow, 2019) | — (old WP theme junk) | Live 404 (after 308 slash) | Leave 404 |
| `/wp-content/uploads/2018/09/LOGOFIX-2.png` (4, image) | — | Live 403 | Leave as-is (image hotlink) |
| `/wp-content/uploads/2023/10/*.jpg` (2, image) | — | Live 404 | Leave as-is |
| `https://www.spabalimoon.com/www.` (2, malformed) | — | 404 | Leave |

---

## E. Theme-demo pages (live, `noindex, nofollow`, not in sitemap): not migrated

These are leftovers from the purchased HTML template. They carry `noindex, nofollow` and reuse the homepage title. They contain no Spa Bali Moon business content.

| OLD URL | → NEW URL | → STATUS | → REDIRECT REQUIRED? |
|---|---|---|---|
| `/faq/` (H1 "FAQ") | — (404) | Not migrated; demo, noindex | No (404 lets Google drop it) |
| `/testimonials/` (H1 "Testimonials") | — (404) | Not migrated; demo, noindex | No |
| `/page-gallery/` (H1 "Gallery") | — (404) | Not migrated; demo, noindex | No |
| `/news-details/` (H1 "Blog Details") | — (404) | Not migrated; demo, noindex | No |
| `/team-details/` (H1 "Team Details") | — (404) | Not migrated; demo, noindex | No |
| `/index-3/` (and other `/index-*`) | — (404) | Not migrated; demo, noindex | No |

(`robots.txt` on the live site deliberately does **not** block these, so Google can see the noindex. The new site should keep that approach and simply 404 them.)

---

## F. Host, protocol and trailing-slash normalisation

| OLD | → NEW | → STATUS | → REDIRECT REQUIRED? |
|---|---|---|---|
| `http://spabalimoon.com/*` | `https://spabalimoon.com/*` | Live 308 | Yes — at host/CDN level (Vercel does this automatically) |
| `https://www.spabalimoon.com/*`, `http://www.spabalimoon.com/*` (≈210 backlinks to www home) | `https://spabalimoon.com/*` | Live 308 | Yes — configure `www` as a redirecting domain in hosting |
| `/any-path` (no slash) | `/any-path/` | Live 308 | Yes — `trailingSlash: true` in `next.config.ts` |

---

## G. Functional endpoints (not pages)

| OLD | → NEW | → STATUS | → REDIRECT REQUIRED? |
|---|---|---|---|
| `/api/subscribe/` (footer newsletter) | TBD | Existing functionality — **REQUIRES MANUAL REVIEW** (audit FUNC-02) | No |
| `/api/search-posts/?menu=1` (header search) | TBD | Existing functionality — **REQUIRES MANUAL REVIEW** (audit FUNC-03) | No |
| Contact form backend + Cloudflare Turnstile | TBD | Existing functionality — **REQUIRES MANUAL REVIEW** (audit FUNC-01) | No |
| `/admin` (disallowed in robots) | — | Old CMS admin; out of scope | No |
| `/sitemap.xml`, `/sitemap_index.xml` | `/sitemap.xml` (+ keep `/sitemap_index.xml` as a 301 → `/sitemap.xml`) | Keep | Proposed 301 for `sitemap_index.xml` |

---

## H. Internal development page (added in Step 8)

| URL | Purpose | Indexing |
|---|---|---|
| `/styleguide/` | Design-system preview (colours, type, buttons, treatment board, FAQ) using real content | `noindex, nofollow`, not linked from the site, excluded from `sitemap.xml`. Remove or keep before launch: owner's choice (noted in final report). |

| `/demo/`, `/demo/maison/`, `/demo/temple/`, `/demo/botanica/`, `/demo/tirta/`, `/demo/taman/`, `/demo/bulan/` | Homepage design demos (added 2026-09-24, D Tirta, E Taman and F Bulan 2026-09-25): six directions with their own header and footer, same content | `noindex, nofollow`, not linked from the site, excluded from `sitemap.xml`. Delete `src/app/demo/` and `src/components/demo/` once a direction is chosen. |
