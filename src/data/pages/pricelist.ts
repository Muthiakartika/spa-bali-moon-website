// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/seminyak/

/**
 * PRICELIST & SPA PACKAGES PAGE TEXT (/seminyak/)
 *
 * Prices are NOT typed here — they come from src/data/pricelist.ts and src/data/packages.ts.
 * `itemIds` / `packageGroups` only decide WHICH items are shown and in WHAT order.
 */
export const pricelistPage = {
  path: "/seminyak/",
  seo: {
    title: "Spa and Massage in Seminyak Bali - Price and Packages",
    description: "Book affordable massages in Seminyak at Spa Bali Moon. Our Price list includes luxury facial, couple packages, shiatsu and Balinese massage.",
  },
  hero: {
    eyebrow: "Find Your Treatment",
    title: "Our Massage in Seminyak",
    image: { src: "/images/gallery/pricelist/pricelist-1.webp", alt: "", width: 1920, height: 850 },
    buttonLabel: "Book Now",
  },
  intro: {
    eyebrow: "Start With What You Need",
    heading: "Which Treatment Are You Looking For Today?",
    text: "Our treatment menu makes it easy to find the care your body or skin needs, from massage and muscle care to facials, body scrubs, and beauty treatments. Choose the treatment and duration that suit your day.",
  },
  completeMenu: {
    eyebrow: "More Than Massage",
    heading: "A Complete Spa Menu in Seminyak",
    text: "Spa Bali Moon brings massage, body care, facials, and beauty services together in one place. Choose a familiar treatment, try something new during your Bali stay, or ask our team for help finding the right option.",
    images: [
      { src: "/images/gallery/pricelist/pricelist-2.webp", alt: "Spa body treatment", width: 778, height: 265 },
      { src: "/images/gallery/pricelist/pricelist-3.webp", alt: "Relaxing spa setting", width: 688, height: 648 },
    ],
    facts: [
      ["Established Since", "2009"],
      ["In-Spa &", "Home Service"],
    ],
  },
  priceList: {
    eyebrow: "Best Price",
    heading: "Our Massages Price List",
    feeNote: "Home service available — extra IDR 75K per therapist.",
    tabs: [
      {
        label: "Massage",
        itemIds: [
          "aloe-vera-massage",
          "aromatherapy-massage",
          "balinese-massage",
          "back-massage",
          "cellulite-massage",
          "deep-tissue-massage",
          "foot-reflexology",
          "foot-massage",
          "four-hand-massage",
          "herbal-massage",
          "hot-stone-massage",
          "head-massage",
          "lymphatic-massage",
          "organic-warm-candle-oil-massage",
          // Shown on the live price list right under Organic Warm Candle Oil Massage (it was missing here, see PRICE-06).
          "four-hand-warm-candle",
          "shiatsu-massage",
          "sport-massage",
          "traditional-massage",
          "thai-massage",
          "coconut-oil-massage",
        ],
      },
      {
        label: "Beauty",
        itemIds: [
          "bali-moon-tea-tree-facial",
          "bali-moon-gold-facial",
          "body-scrub",
          "foot-scrub",
          "biokos-facial",
          "cream-bath",
          "ear-candle",
          "manicure-pedicure",
          "waxing",
        ],
      },
      {
        label: "For Couples",
        itemIds: [
          "couple-balinese-massage",
          "couple-traditional-massage",
          "couple-deep-tissue-massage",
          "couple-warm-candle-massage",
        ],
      },
      {
        // On the live page these are one row at the end of "For Couples"; shown as their own tab
        // at the owner's request (2026-09-26, see PRICE-07). Same texts and prices.
        label: "Couple Massage Packages",
        itemIds: [],
        packageGroup: "couples",
        // Row labels exactly as written in the old price list (price comes from packages.ts).
        packageLabels: {
          "Package A": "1 Hour Balinese Massage · 2 pax + 30 Mins Ear Candle",
          "Package B": "1 Hour Balinese Massage · 2 pax + 1 Hour Bali Moon Facial",
          "Package C": "1 Hour Warm Candle · 2 pax + 30 Mins Ear Candle",
          "Package D": "1 Hour Warm Candle · 2 pax + 1 Hour Bali Moon Facial",
        },
      },
    ],
  },
  allPackages: {
    eyebrow: "All Spa Packages",
    heading: "Available In-Spa & with Day Spa at Home",
    paragraphs: [
      "We offer multiple spa packages at our spa or as a day spa at home. Some guests know what they want, while others wish to combine treatments. We provide the help, so you can enjoy a laid-back and cozy experience, whether alone, with a partner, or with friends.",
      "Browse the packages below to find a combination that fits your plans.",
    ],
    packageGroups: [
      // Added on the live page on 2026-09-26 (PRICE-07).
      "balinese-massage",
      "body-scrub",
      "couples",
      "cream-bath",
      "bali-moon-facial",
      "hot-stone",
      "mani-pedi",
      "thai-massage",
    ],
    // On the old site these package buttons went to /contact/ (not WhatsApp). TODO FLOW-01.
    cardButton: { label: "Reserve", href: "/contact/" },
  },
  faq: {
    heading: "Revive Your Senses",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/gallery/pricelist/pricelist-4.webp", alt: "Spa facial treatment", width: 895, height: 682 },
    items: [
      {
        question: "1. How do I choose the right treatment?",
        answer: "Start with what you want from your visit. Balinese Massage is a popular choice for general relaxation, while Sport Massage and Deep Tissue Massage are better suited to muscle tightness and recovery. Our team can also recommend a treatment based on how your body feels and what you would like to achieve.",
      },
      {
        question: "2. Can I combine several treatments into one visit?",
        answer: "Yes. Massage, facials, body scrubs, cream baths, manicures, pedicures, and other services can be combined through our spa packages or selected treatment combinations.",
      },
      {
        question: "3. Are the prices listed for each treatment?",
        answer: "Yes. Our treatment menu provides clear pricing for individual services and packages, making it easier to compare your options before booking.",
      },
      {
        question: "4. Can I book a treatment at my hotel or villa?",
        answer: "Many of our massage and spa treatments are available through home service in Seminyak and nearby areas. An additional outcall fee of IDR 75,000 per therapist applies.",
      },
      {
        question: "5. Can I create a custom spa package?",
        answer: "Yes. If you have several treatments in mind, contact us through WhatsApp and our team can help you find a combination that suits your preferences, schedule, and budget.",
      },
      {
        question: "6. Do I need to book in advance?",
        answer: "Advance booking is recommended, particularly during busy periods. Contact us on WhatsApp with your preferred treatment and time so we can check availability.",
      },
      {
        question: "7. What does \"K\" mean in the prices?",
        answer: "\"K\" means thousand Indonesian Rupiah. A treatment listed at 159K costs IDR 159,000. All prices on this page are in Indonesian Rupiah (IDR).",
      },
      {
        question: "8. What is your cheapest treatment?",
        answer: "The lowest-priced options are the 30-minute traditional massage and 30-minute back massage at IDR 90,000, and the 30-minute foot reflexology at IDR 99,000. For a full hour, Balinese massage at IDR 159,000 is the most affordable full-body treatment.",
      },
      {
        question: "9. Are prices per person or per booking?",
        answer: "Individual treatments are priced per person. Couple treatments are priced for two people together; the \"2 pax\" label means the listed price covers both guests. For example, a one-hour couple Balinese massage at IDR 319,000 is the total for two people, not per person.",
      },
      {
        question: "10. How much extra is home service?",
        answer: "Home service costs an additional IDR 75,000 per therapist on top of the treatment price. The treatment itself is charged at the same rate as in-spa. For a couple booking with two therapists, the outcall fee is IDR 150,000 total.",
      },
      {
        question: "11. Which areas do you cover for outcall massage?",
        answer: "Seminyak and surrounding areas. For villas, hotels, or residences further out, message us on WhatsApp with your location and we will confirm availability and any additional travel cost before you book.",
      },
      {
        question: "12. Is tipping expected?",
        answer: "Tipping is not required and is never added automatically. It is appreciated but entirely at your discretion, and our therapists are paid regardless.",
      },
      {
        question: "13. Do prices differ between the website and in the spa?",
        answer: "No. The prices listed on this page are our current rates and apply both in-spa and for home service, with the outcall fee added separately for home visits. If you are ever quoted a different price, please tell us before your treatment.",
      },
      {
        question: "14. Are towels, oils, and amenities included?",
        answer: "Yes. Every treatment includes clean towels, professional-grade massage oil, and use of a private treatment room. There is no additional charge for amenities.",
      },
      {
        question: "15. Can I choose the pressure or a specific therapist?",
        answer: "Yes. Tell your therapist your preferred pressure at the start and adjust it at any point during the session. If you have a therapist you have booked before, request them by name on WhatsApp and we will do our best to accommodate.",
      },
    ],
  },
  cta: {
    heading: "Take a Proper Break from Your Bali Itinerary",
    paragraphs: [
      "Some treatments are chosen because your muscles need attention. Others are for tired skin, overworked feet, a scalp that needs care, or simply the feeling that you have been moving from one plan to the next without stopping. Browse the Spa Bali Moon price list to find the treatment that fits your day.",
      "Visit us in Seminyak or arrange selected treatments at your villa or hotel.",
    ],
    image: { src: "/images/gallery/pricelist/pricelist-5.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};
