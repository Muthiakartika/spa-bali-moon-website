/**
 * REDIRECTS FROM OLD URLS
 * Source: migration/url-map.md
 *
 * `liveRedirects`     = redirects the old website ALREADY serves (url-map section B).
 *                       They are active: next.config.ts loads this list.
 * `proposedRedirects` = ideas that still need the owner's approval (url-map sections C, D and G).
 *                       They are NOT active. To approve one, move it into `liveRedirects`.
 *
 * All redirects are permanent (HTTP 308, which Google treats like a 301).
 * Write every path with a trailing slash, except file names ending in ".html" / ".xml".
 */

export type OldUrlRedirect = {
  /** Old address on spabalimoon.com */
  from: string;
  /** New address on this website */
  to: string;
};

export const liveRedirects: OldUrlRedirect[] = [
  // Old price-list pages
  { from: "/cheap-massage-seminyak-bali-price-list.html", to: "/seminyak/" },
  { from: "/cheap-massage-seminyak-bali-price-list/", to: "/seminyak/" },
  { from: "/spa-massage-seminyak-bali-price-list/", to: "/seminyak/" },

  // Old /spa-treatments/ section
  { from: "/spa-treatments/", to: "/seminyak/" },
  { from: "/spa-treatments/foot-reflexology-seminyak-bali/", to: "/seminyak/foot-reflexology/" },
  { from: "/spa-treatments/reflexology-bali/", to: "/seminyak/foot-reflexology/" },
  { from: "/spa-treatments/waxing-bali/", to: "/seminyak/waxing-salon/" },
  { from: "/spa-treatments/couple-spa-bali/", to: "/seminyak/couple-spa/" },
  { from: "/spa-treatments/ear-candle-bali/", to: "/seminyak/ear-wax-removal/" },
  { from: "/spa-treatments/lymphatic-drainage-massage-bali/", to: "/seminyak/lymphatic-drainage-massage/" },
  { from: "/spa-treatments/facial-seminyak/", to: "/seminyak/facial/" },
  { from: "/spa-treatments/body-scrub-bali/", to: "/seminyak/body-scrub/" },
  { from: "/spa-treatments/nails-seminyak/", to: "/seminyak/nail-spa/" },
  { from: "/spa-treatments/creambath-seminyak/", to: "/seminyak/creambath/" },
  { from: "/spa-treatments/manicure-pedicure-seminyak/", to: "/seminyak/manicure-pedicure/" },
  { from: "/spa-treatments/sport-massage-bali/", to: "/seminyak/sport-massage/" },
  { from: "/spa-treatments/sunburn-massage-treatment-bali/", to: "/seminyak/sunburn-massage/" },
  { from: "/spa-treatments/thai-massage-bali/", to: "/seminyak/thai-massage/" },
  { from: "/spa-treatments/anti-cellulite-massage-bali/", to: "/seminyak/anti-cellulite-massage/" },
  { from: "/spa-treatments/hot-stone-massage-bali/", to: "/seminyak/hot-stone-massage/" },
  { from: "/spa-treatments/coconut-oil-massage/", to: "/seminyak/coconut-oil-massage/" },
  { from: "/spa-treatments/deep-tissue-massage-bali/", to: "/seminyak/deep-tissue-massage/" },
  { from: "/spa-treatments/hair-braiding-bali/", to: "/seminyak/hair-braiding/" },
  { from: "/spa-treatments/head-massage-bali/", to: "/seminyak/head-massage/" },
  { from: "/spa-treatments/shiatsu-massage-bali/", to: "/seminyak/shiatsu-massage/" },

  // Other old pages
  { from: "/massage-bali/", to: "/" },
  { from: "/massage-seminyak/", to: "/seminyak/" },
  { from: "/day-spa-seminyak/", to: "/seminyak/day-spa/" },
  { from: "/villa-hotel-massage-seminyak/", to: "/villa-hotel-massage/" },
  { from: "/spa-packages/", to: "/seminyak/" },
  { from: "/pricing/", to: "/seminyak/" },
  { from: "/page-services/", to: "/seminyak/" },
  { from: "/team/", to: "/seminyak/" },
  { from: "/blog/", to: "/guide/" },
  { from: "/home-service/", to: "/outcall-home-service-massage/" },
];

/**
 * NOT ACTIVE — waiting for the owner's approval (migration-audit URL-03).
 * These URLs return 404 on the old website today.
 */
export const proposedRedirects: OldUrlRedirect[] = [
  // Section C: short aliases that match common page names
  { from: "/pricelist/", to: "/seminyak/" },
  { from: "/treatments/", to: "/seminyak/" },
  { from: "/terms/", to: "/terms-and-conditions/" },

  // Section D: old URLs that other websites still link to
  { from: "/bali-moon-best-massage-bali-seminyak-our-team.html", to: "/" },
  { from: "/bali-moon-best-massage-bali-seminyak-our-team-html.html", to: "/" },
  { from: "/spa-treatments/balinese-massage-bali/", to: "/seminyak/balinese-massage/" },
  { from: "/spa-treatments/traditional-massage-bali/", to: "/seminyak/traditional-massage/" },
  { from: "/spa-treatments/foot-massage-bali/", to: "/seminyak/foot-massage/" },
  { from: "/cheap-massage-seminyak-bali-price-list/best-body-scrub-in-bali.html", to: "/seminyak/body-scrub/" },
  { from: "/cheap-massage-seminyak-bali-price-list/extra-massage-service-in-seminyak.html", to: "/outcall-home-service-massage/" },
  { from: "/cheap-massage-seminyak-bali-price-list/facial.html", to: "/seminyak/facial/" },
  { from: "/cheap-massage-seminyak-bali-price-list/the-packages.html", to: "/seminyak/" },
  { from: "/index.html", to: "/" },
  { from: "/contact.html", to: "/contact/" },
  { from: "/appointments.html", to: "/reservation/" },
  { from: "/reservation-spa-bali-moon-massage.html", to: "/reservation/" },

  // Section G: the old site also answered on /sitemap_index.xml
  { from: "/sitemap_index.xml", to: "/sitemap.xml" },
];
