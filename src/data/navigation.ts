/**
 * NAVIGATION — header menu, the Treatments dropdown and the footer menus.
 *
 * To rename a menu item: change `label`.
 * To add a page to the menu: add { label, href } in the right place.
 * Always write internal links WITH a trailing slash, e.g. "/contact/" (the site uses them everywhere).
 *
 * Menu approved by the owner on 2026-09-23 (migration-audit.md URL-02):
 * Treatments · Spa Packages · Home Service · About · Blog · Contact · Book via WhatsApp
 */
import { treatments } from "./treatments";
import type { TreatmentCategory } from "./types";

export type NavItem = {
  label: string;
  href: string;
};

/** Main menu (desktop header and mobile menu). "Treatments" opens the dropdown below. */
export const mainNav: NavItem[] = [
  { label: "Treatments", href: "/seminyak/" },
  { label: "Spa Packages", href: "/seminyak/#packages" },
  { label: "Home Service", href: "/outcall-home-service-massage/" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/guide/" },
  { label: "Contact", href: "/contact/" },
];

/** Text of the booking button in the header (it opens WhatsApp). */
export const headerBookingLabel = "Book via WhatsApp";

/**
 * Treatments dropdown, grouped like the old price-list tabs (Massage · Beauty · For Couples).
 * The lists fill themselves from src/data/treatments — add a treatment there and it appears here.
 */
const groupLabels: { category: TreatmentCategory; label: string }[] = [
  { category: "massage", label: "Massage" },
  { category: "beauty", label: "Beauty" },
  { category: "couple", label: "For Couples" },
  { category: "day-spa", label: "Day Spa" },
];

export const treatmentMenu: { label: string; items: NavItem[] }[] = groupLabels.map((group) => ({
  label: group.label,
  items: treatments
    .filter((treatment) => treatment.category === group.category)
    .map((treatment) => ({ label: treatment.name, href: `/seminyak/${treatment.slug}/` })),
}));

/** Extra links shown at the bottom of the Treatments dropdown. */
export const treatmentMenuLinks: NavItem[] = [
  { label: "Pricelist", href: "/seminyak/" },
  { label: "Reservation", href: "/reservation/" },
];

/* ---------------------------------- Footer --------------------------------- */

/** Footer column "Explore". */
export const footerExplore: NavItem[] = [
  { label: "Pricelist", href: "/seminyak/" },
  { label: "Spa Packages", href: "/seminyak/#packages" },
  { label: "Reservation", href: "/reservation/" },
  { label: "Blog", href: "/guide/" },
  { label: "Contact", href: "/contact/" },
];

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
