/**
 * NAVIGATION — header menu, its dropdowns and the footer menus.
 *
 * To rename a menu item: change `label`.
 * To add a page to the menu: add { label, href } in the right place.
 * Always write internal links WITH a trailing slash, e.g. "/contact/" (the site uses them everywhere).
 *
 * The header menu is copied from the live website (spabalimoon.com, checked 2026-09-24):
 * Home · Pricelist · Treatments (dropdown) · Outcall · Reservation · Blog (dropdown) · Contact
 * + search + "Book an Appointment". This replaces the shorter menu approved on 2026-09-23 (URL-02).
 */

export type NavItem = {
  label: string;
  href: string;
};

/** A header item. `dropdown` names the list it opens (see treatmentMenu / blogMenu below). */
export type MainNavItem = NavItem & { dropdown?: "treatments" | "blog" };

/** Main menu (desktop header and mobile menu), in the live website's order. */
export const mainNav: MainNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Pricelist", href: "/seminyak/" },
  // The live site's "Treatments" item only opens the dropdown (it has no page of its own).
  { label: "Treatments", href: "/seminyak/", dropdown: "treatments" },
  { label: "Outcall", href: "/outcall-home-service-massage/" },
  { label: "Reservation", href: "/reservation/" },
  { label: "Blog", href: "/guide/", dropdown: "blog" },
  { label: "Contact", href: "/contact/" },
];

/** Text of the booking button in the header (it opens WhatsApp), as on the live site. */
export const headerBookingLabel = "Book an Appointment";

/** Treatments dropdown: the live site's list, in its order and wording (shown in 4 columns). */
export const treatmentMenu: NavItem[] = [
  { label: "Balinese Massage", href: "/seminyak/balinese-massage/" },
  { label: "Body Scrub", href: "/seminyak/body-scrub/" },
  { label: "Cellulite Massage", href: "/seminyak/anti-cellulite-massage/" },
  { label: "Couple Massage", href: "/seminyak/couple-spa/" },
  { label: "Coconut Oil Massage", href: "/seminyak/coconut-oil-massage/" },
  { label: "Cream Bath", href: "/seminyak/creambath/" },
  { label: "Deep Tissue Massage", href: "/seminyak/deep-tissue-massage/" },
  { label: "Ear Candle", href: "/seminyak/ear-wax-removal/" },
  { label: "Facial", href: "/seminyak/facial/" },
  { label: "Foot Massage", href: "/seminyak/foot-massage/" },
  { label: "Foot Reflexology", href: "/seminyak/foot-reflexology/" },
  { label: "Hair Braiding", href: "/seminyak/hair-braiding/" },
  { label: "Hot Stone Massage", href: "/seminyak/hot-stone-massage/" },
  { label: "Head Massage", href: "/seminyak/head-massage/" },
  { label: "Lymphatic Massage", href: "/seminyak/lymphatic-drainage-massage/" },
  { label: "Manicure Pedicure", href: "/seminyak/manicure-pedicure/" },
  { label: "Nail Art", href: "/seminyak/nail-spa/" },
  { label: "Shiatsu Massage", href: "/seminyak/shiatsu-massage/" },
  { label: "Sports Massage", href: "/seminyak/sport-massage/" },
  { label: "Sunburn Treatment", href: "/seminyak/sunburn-massage/" },
  { label: "Traditional Massage", href: "/seminyak/traditional-massage/" },
  { label: "Thai Massage", href: "/seminyak/thai-massage/" },
  { label: "Waxing", href: "/seminyak/waxing-salon/" },
];

/** Blog dropdown: the live site's list of articles, in its order and wording. */
export const blogMenu: NavItem[] = [
  { label: "A Guide To Lymphatic Drainage Massage", href: "/guide/lymphatic-drainage-massage-benefits-techniques-what-to-expect/" },
  { label: "What Is a Balinese Massage? A Complete Guide for First Timer", href: "/guide/what-is-a-balinese-massage/" },
  { label: "Thai Massage Benefits & Techniques Explained", href: "/guide/what-is-thai-massage/" },
  { label: "Facial Massage Benefits for Modern Self‑Care", href: "/guide/understanding-of-facial-massage/" },
  { label: "Slimming Massage Benefits & How It Works", href: "/guide/understanding-slimming-massage/" },
  { label: "Best Massages for Jet Lag Recovery After a Long Flight", href: "/guide/best-massages-after-a-long-flight/" },
  { label: "IV Drip Therapy in Bali", href: "/guide/iv-drip/" },
];

/* ---------------------------------- Footer --------------------------------- */

/** Footer column "Home Services" (heading links to the Home Service page, as on the old site). */
export const footerHomeServices = {
  label: "Home Services",
  href: "/outcall-home-service-massage/",
  items: [
    { label: "Massage Hotel & Villa", href: "/villa-hotel-massage/" },
    { label: "Massage Seminyak", href: "/" },
    { label: "Massage Kuta", href: "/massage-kuta/" },
  ] as NavItem[],
};

/** Footer column "Our Day Spa" (heading links to the Day Spa page, as on the old site). */
export const footerDaySpaLink: NavItem = { label: "Our Day Spa", href: "/seminyak/day-spa/" };

/** Links in the very bottom line of the footer. */
export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-and-conditions/" },
];
