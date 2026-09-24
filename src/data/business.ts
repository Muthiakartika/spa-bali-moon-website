/**
 * BUSINESS INFORMATION — name, phone, WhatsApp, address, opening hours, socials.
 *
 * Used by the header, footer, contact details, WhatsApp buttons and SEO (schema).
 * Change a value here and it updates everywhere it is used.
 *
 * ⚠️ Some facts were written differently on different pages of the old website.
 *    Until the owner confirms the correct value, each page keeps what it showed before.
 *    Those items are marked "TODO" below and listed in migration/migration-audit.md.
 */
export const business = {
  name: "Spa Bali Moon",
  url: "https://spabalimoon.com",
  foundedYear: 2009,

  /** WhatsApp number in international format WITHOUT "+" or spaces (used for wa.me links). */
  whatsappNumber: "6287863175144",
  /** How the phone / WhatsApp number is written on the website. */
  phoneDisplay: "+62 878-6317-5144",

  /**
   * TODO CONTACT-01: two different emails were found and no page shows one in the footer.
   *   - "info@spabalimoon.com"   (only in the old homepage schema, not visible)
   *   - "spabalimoon@gmail.com"  (visible on /privacy-policy/)
   * Leave empty until the owner confirms which one to publish.
   */
  email: undefined as string | undefined,

  address: {
    /**
     * Short address as written in the footer and on the Privacy Policy.
     * TODO ADDR-01: the old mobile menu spelled it "Jl. Panggung Sari No. 30, Seminyak, Bali".
     */
    short: "Jl. Pangkung Sari No. 30, Seminyak, Bali",
    /** Full address as written on /contact/. TODO ADDR-02: confirm the official format. */
    full: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361",
    /** Structured version for Google (schema.org). Built from the full address above. */
    street: "Jl. Pangkung Sari No. 30",
    locality: "Seminyak",
    region: "Bali",
    postalCode: "80361",
    country: "ID",
  },

  /** "Get Directions" link from the old /contact/ page. */
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Spa%20Bali%20Moon%2C%20Jl.%20Pangkung%20Sari%20No.%2030%2C%20Petitenget%2C%20Seminyak%2C%20Kerobokan%2C%20Kuta%20Utara%2C%20Badung%2C%20Bali%2080361",

  /**
   * Opening hours as written in the footer ("Open Daily: 9am - 11pm").
   * TODO HOURS-01: /contact/ said "Open Daily: 9:00 - 22:00". The Contact page keeps
   * its own text (src/data/pages/contact.ts) until the owner confirms.
   */
  openingHours: {
    label: "Open Daily",
    display: "9am - 11pm",
    opens: "09:00",
    closes: "23:00",
  },

  homeService: {
    /**
     * Extra fee per therapist, in Rupiah.
     * TODO FEE-01: Terms & Conditions say 75k applies "within Seminyak" and that fees
     * outside Seminyak vary. Other pages say a flat 75K per therapist.
     */
    feePerTherapist: 75_000,
    /** How the fee is written in the footer. */
    feeDisplay: "75k / therapist",
  },

  /**
   * Footer "Accepted Payments". The live footer listed VISA and Cash; Mastercard was added on the
   * owner's request (2026-09-24), matching the live villa page ("Visa, and Mastercard"). See PAY-01.
   * Each name needs a logo in src/components/layout/PaymentLogo.tsx.
   */
  acceptedPayments: ["VISA", "Mastercard", "Cash"],

  /** Found on the old blog pages. */
  social: {
    facebook: "https://www.facebook.com/spabalimoon",
    instagram: "https://www.instagram.com/spabalimoon_/",
  },

  /** Short "About Us" text used in the footer and the mobile menu. */
  aboutText:
    "Spa Bali Moon offers high-quality traditional massages and spa therapies, with outcall and home services by skilled therapists specializing in Balinese Body Massage.",
} as const;

/** Years in business, e.g. 17 in 2026. Used for the "17 + Years Experience" badge (CONTENT-10). */
export function yearsOfExperience(today: Date = new Date()): number {
  return today.getFullYear() - business.foundedYear;
}
