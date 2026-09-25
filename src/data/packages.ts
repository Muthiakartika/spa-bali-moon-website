// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.

import type { PackageGroup, SpaPackage } from "./types";

/**
 * SPA PACKAGES — each package is written here once.
 *
 * - The Pricelist page (/seminyak/) shows the groups that have a `heading`.
 * - The homepage shows the "balinese-massage" group.
 * - A treatment page shows one group through its `packages` section
 *   (see `packageGroup` in src/data/treatments/<slug>.ts).
 *
 * Prices are in Rupiah (449_000 = "449K"). Couple packages have `pax: 2`
 * which means the price covers both guests.
 *
 * Note: small spelling differences between pages on the old site ("1,5 Hr" vs "1.5 Hr",
 * "Cream bath" vs "Cream Bath", "Medi Pedi" vs "Mani & Pedi") were stored once using the
 * majority spelling. See migration-audit.md CONTENT-11.
 */
export const packageGroups: PackageGroup[] = [
  {
    id: "body-scrub",
    title: "Body Scrub",
    eyebrow: "Exfoliate and Refresh",
    heading: "Body Scrub Packages",
    description: "Great for refreshing your skin. A body scrub can go a long way toward removing any dull skin, followed by a relaxing massage so you're feeling good and clean. Get your package from us or book a session on WhatsApp.",
    icon: { src: "/images/branding/icons/packages/body-scrub.png", alt: "Body Scrub icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 439_000,
        items: [
          { duration: "30 Mins", treatment: "Body Scrub" },
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package B",
        price: 549_000, // PRICE-06: live price since 2026-09-25 (was 449K)
        items: [
          { duration: "30 Mins", treatment: "Body Scrub" },
          { duration: "1.5 Hr", treatment: "Hot Stone" },
          { duration: "30 Mins", treatment: "Head Massage" },
        ],
      },
      {
        name: "Package C",
        price: 539_000,
        items: [
          { duration: "30 Mins", treatment: "Body Scrub" },
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "1 Hr", treatment: "Cream Bath" },
        ],
      },
      {
        name: "Package D",
        price: 549_000,
        items: [
          { duration: "30 Mins", treatment: "Body Scrub" },
          { duration: "1 Hr", treatment: "Warm Candle" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
    ],
  },
  {
    id: "couples",
    title: "Couple Massage",
    eyebrow: "Reconnect and Relax Together",
    heading: "Couples Massage Packages",
    description: "A soothing massage experience to enjoy side by side. Great to spend a quiet moment together in a peaceful place. Sessions can be conducted in-spa or at home. The opportunity to get custom packages or book reservations are available on WhatsApp.",
    icon: { src: "/images/branding/icons/packages/couple-massage.png", alt: "Couple Massage icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 639_000,
        pax: 2,
        items: [
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "30 Mins", treatment: "Ear Candle" },
        ],
      },
      {
        name: "Package B",
        price: 709_000,
        pax: 2,
        items: [
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package C",
        price: 849_000,
        pax: 2,
        items: [
          { duration: "1 Hr", treatment: "Warm Candle" },
          { duration: "30 Mins", treatment: "Ear Candle" },
        ],
      },
      {
        name: "Package D",
        price: 929_000,
        pax: 2,
        items: [
          { duration: "1 Hr", treatment: "Warm Candle" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
    ],
  },
  {
    id: "cream-bath",
    title: "Cream Bath",
    eyebrow: "Revitalize and Renew",
    heading: "Cream Bath Packages",
    description: "Ideal when you simply want to slow down. Do a light hair wash, conditioner, and a calming head massage to relax completely. For tailored packages or to schedule a home session, please reach out to us through WhatsApp.",
    icon: { src: "/images/branding/icons/packages/cream-bath.png", alt: "Cream Bath icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 649_000,
        items: [
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package B",
        price: 549_000, // PRICE-06: live price since 2026-09-25 (was 589K)
        items: [
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Hot Stone" },
          { duration: "30 Mins", treatment: "Reflexology" },
        ],
      },
      {
        name: "Package C",
        price: 449_000,
        items: [
          { duration: "30 Mins", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package D",
        price: 539_000,
        items: [
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "30 Mins", treatment: "Body Scrub" },
        ],
      },
    ],
  },
  {
    id: "bali-moon-facial",
    title: "Bali Moon Facial",
    eyebrow: "Nourish and Rejuvenate",
    heading: "Facial Treatment Packages",
    description: "A simple facial treatment and cleansing to keep your skin balanced and comfortable. Sessions are in-spa or a home service. For more on your custom treatment, please contact us over WhatsApp.",
    icon: { src: "/images/branding/icons/packages/biokos-facial.png", alt: "Bali Moon Facial icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 439_000,
        items: [
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
          { duration: "30 Mins", treatment: "Body Scrub" },
          { duration: "1 Hr", treatment: "Balinese Massage" },
        ],
      },
      {
        name: "Package B",
        price: 649_000,
        items: [
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Thai Massage" },
        ],
      },
      {
        name: "Package C",
        price: 449_000,
        items: [
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
          { duration: "1 Hr", treatment: "Thai Massage" },
        ],
      },
      {
        name: "Package D",
        price: 549_000,
        items: [
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
          { duration: "1 Hr", treatment: "Warm Candle" },
          { duration: "30 Mins", treatment: "Body Scrub" },
        ],
      },
    ],
  },
  {
    id: "hot-stone",
    title: "Hot Stone",
    eyebrow: "Relax and Unwind",
    heading: "Hot Stone Packages",
    description: "Great for if you require deeper relaxation. Warm stones are utilized to release tension and relax your body. This can be enjoyed on its own or combined with a full massage for a more complete experience.",
    icon: { src: "/images/branding/icons/packages/hot-stone.png", alt: "Hot Stone icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 549_000, // PRICE-06: live price since 2026-09-25 (was 449K)
        items: [
          { duration: "1.5 Hr", treatment: "Hot Stone" },
          { duration: "30 Mins", treatment: "Body Scrub" },
          { duration: "30 Mins", treatment: "Head Massage" },
        ],
      },
      {
        name: "Package B",
        price: 549_000, // PRICE-06: live price since 2026-09-25 (was 599K)
        items: [
          { duration: "1 Hr", treatment: "Hot Stone" },
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "30 Mins", treatment: "Reflexology" },
        ],
      },
      {
        name: "Package C",
        price: 449_000, // PRICE-06: live price since 2026-09-25 (was 489K)
        items: [
          { duration: "1 Hr", treatment: "Hot Stone" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package D",
        price: 519_000, // PRICE-06: live price since 2026-09-25 (was 439K)
        items: [
          { duration: "1.5 Hr", treatment: "Hot Stone" },
          { duration: "30 Mins", treatment: "Pedicure" },
        ],
      },
    ],
  },
  {
    id: "mani-pedi",
    title: "Mani Pedi",
    eyebrow: "Pamper and Perfect",
    heading: "Manicure and Pedicure Packages",
    description: "For hands and feet that need a little care. Our manicure and pedicure appointments keep them neat, clean, and refreshed. The treatments are available in-spa or at home. For tailored packages, you can contact us via WhatsApp.",
    icon: { src: "/images/branding/icons/packages/menipedi.png", alt: "Mani Pedi icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 449_000,
        items: [
          { duration: "1 Hr", treatment: "Mani & Pedi" },
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "30 Mins", treatment: "Cream Bath" },
        ],
      },
      {
        name: "Package B",
        price: 549_000,
        items: [
          { duration: "1 Hr", treatment: "Mani & Pedi" },
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package C",
        price: 299_000,
        items: [
          { duration: "1 Hr", treatment: "Mani & Pedi" },
          { duration: "30 Mins", treatment: "Cream Bath" },
        ],
      },
      {
        name: "Package D",
        price: 399_000,
        items: [
          { duration: "30 Mins", treatment: "Pedicure" },
          { duration: "30 Mins", treatment: "Manicure" },
          { duration: "1 Hr", treatment: "Balinese Massage" },
        ],
      },
    ],
  },
  {
    id: "thai-massage",
    title: "Thai Massage",
    eyebrow: "Relax and Revitalize",
    heading: "Thai Massage Packages",
    description: "A good choice if you feel stiff or tired. Gentle pressure and stretching help you feel lighter and more relaxed. Available in-spa or at home. See our packages or contact us on WhatsApp to schedule.",
    icon: { src: "/images/branding/icons/packages/thai-massage.png", alt: "Thai Massage icon", width: 383, height: 394 },
    packages: [
      {
        name: "Package A",
        price: 549_000,
        items: [
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
          { duration: "30 Mins", treatment: "Manicure" },
        ],
      },
      {
        name: "Package B",
        price: 649_000,
        items: [
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package C",
        price: 449_000,
        items: [
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package D",
        price: 539_000,
        items: [
          { duration: "1 Hr", treatment: "Thai Massage" },
          { duration: "1 Hr", treatment: "Cream Bath" },
          { duration: "30 Mins", treatment: "Body Scrub" },
        ],
      },
    ],
  },
  {
    id: "balinese-massage",
    title: "Balinese Massage",
    packages: [
      {
        name: "Package A",
        price: 449_000,
        items: [
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "1 Hr", treatment: "Mani & Pedi" },
          { duration: "30 Mins", treatment: "Cream Bath" },
        ],
      },
      {
        name: "Package B",
        price: 549_000,
        items: [
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "1 Hr", treatment: "Mani & Pedi" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package C",
        price: 449_000,
        items: [
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "30 Mins", treatment: "Cream Bath" },
          { duration: "1 Hr", treatment: "Bali Moon Facial" },
        ],
      },
      {
        name: "Package D",
        price: 399_000,
        items: [
          { duration: "1 Hr", treatment: "Balinese Massage" },
          { duration: "30 Mins", treatment: "Manicure" },
          { duration: "30 Mins", treatment: "Pedicure" },
        ],
      },
    ],
  },
];

/** Find a package group by id, e.g. getPackageGroup("hot-stone"). */
export function getPackageGroup(id: string): PackageGroup {
  const group = packageGroups.find((entry) => entry.id === id);
  if (!group) {
    throw new Error(`Package group "${id}" not found in src/data/packages.ts`);
  }
  return group;
}

/** Find one package, e.g. getPackage("couples", "Package A"). */
export function getPackage(groupId: string, name: string): SpaPackage {
  const pkg = getPackageGroup(groupId).packages.find((entry) => entry.name === name);
  if (!pkg) {
    throw new Error(`Package "${name}" not found in group "${groupId}" (src/data/packages.ts)`);
  }
  return pkg;
}
