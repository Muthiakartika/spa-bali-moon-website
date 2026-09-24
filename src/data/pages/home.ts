// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/

/**
 * HOMEPAGE TEXT (/)
 *
 * Each block below is one section of the homepage, from top to bottom.
 * Prices are not typed here: the catalog and packages read them from pricelist.ts and packages.ts.
 */
export const homePage = {
  seo: {
    title: "Spa Bali Moon - Outcall & Home Service Massage",
    description: "Our traditional Bali massage is available for outcall massage to your stay. Visit our spa or call for home service. Feel the signature warmth of Bali Moon.",
  },
  hero: {
    title: "Our Seminyak Day Spa",
    text: "Since 2009, Spa Bali Moon has provided professional Balinese massage and spa treatments in Seminyak, Bali. Our experienced therapists offer traditional massage, body treatments, facials, and beauty services at our Seminyak spa, with home service also available for hotels and villas in nearby areas.",
    images: [
      { src: "/images/home/homepage-1.webp", alt: "Spa towels and candles", width: 388, height: 561 },
      { src: "/images/home/homepage-2.webp", alt: "Hot stone spa treatment", width: 337, height: 452 },
    ],
  },
  booking: {
    eyebrow: "Book via WhatsApp",
    heading: "How Do You Book Your Spa Experience?",
    steps: [
      {
        number: "01",
        title: "Choose a Treatment",
        text: "Browse our massage, facial, beauty, and spa treatments to find the experience that suits your schedule and preferences.",
      },
      {
        number: "02",
        title: "Book via WhatsApp",
        text: "Tell us your preferred treatment, location, and appointment time. We'll confirm availability and help arrange every detail.",
      },
      {
        number: "03",
        title: "Relax Your Way",
        text: "Visit our spa in Seminyak or enjoy the same professional treatment from the comfort of your villa or accommodation.",
      },
    ],
  },
  about: {
    images: [
      { src: "/images/home/homepage-3.webp", alt: "Spa massage treatment", width: 360, height: 636 },
      { src: "/images/home/homepage-4.webp", alt: "Spa treatment room", width: 237, height: 421 },
    ],
    badge: {
      name: "Spa Bali Moon",
      line: "Seminyak · Since 2009",
      text: "Traditional massage, beauty and body care at our spa or your villa.",
    },
    eyebrow: "Beyond Relaxation",
    heading: "Why Spa Bali Moon Is Part of the Bali Experience",
    text: "After long flights, sightseeing, surfing, or time in the tropical sun, your body needs time to recover. We offer massage, beauty, and body care treatments that ease muscle tension, refresh tired skin, and help you feel refreshed with treatments chosen to suit your body and your time in Bali. Here’s what makes us a trusted choice:",
    items: [
      "Established since 2009",
      "Traditional & modern massage treatments",
      "Beauty and facial services",
      "In-spa and home service available",
      "Experienced Balinese therapists",
      "Personalised treatment recommendations",
    ],
    button: { label: "Discover More", href: "/seminyak/" },
  },
  // TODO PRICE-03: these "From" labels are copied exactly from the old homepage. Some do not match the
  // Pricelist (Body Scrub, Traditional Massage, Nail Art, Hair Braiding, Deep Tissue). See migration-audit.md.
  featuredTreatments: [
    {
      slug: "balinese-massage",
      name: "Balinese Massage",
      priceLabel: "From IDR 159K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    { slug: "creambath", name: "Cream Bath", priceLabel: "From IDR 165K", text: "Relax and rejuvenate your body and soul." },
    {
      slug: "hot-stone-massage",
      name: "Hot Stone Massage",
      priceLabel: "From IDR 250K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "sport-massage",
      name: "Sports Massage",
      priceLabel: "From IDR 269K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "facial",
      name: "Bali Moon Facial",
      priceLabel: "From IDR 196K",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "deep-tissue-massage",
      name: "Deep Tissue Massage",
      priceLabel: "From IDR 269K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "head-massage",
      name: "Head Massage",
      priceLabel: "From IDR 159K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "sunburn-massage",
      name: "Sunburn Treatment",
      priceLabel: "From IDR 250K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "body-scrub",
      name: "Body Scrub",
      priceLabel: "From IDR 100K",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "ear-wax-removal",
      name: "Ear Candle",
      priceLabel: "From IDR 159K | 30 Minutes",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "lymphatic-drainage-massage",
      name: "Lymphatic Massage",
      priceLabel: "From IDR 300K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "traditional-massage",
      name: "Traditional Massage",
      priceLabel: "From IDR 90K | 30 Minutes",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "anti-cellulite-massage",
      name: "Cellulite Massage",
      priceLabel: "From IDR 350K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "foot-massage",
      name: "Foot Massage",
      priceLabel: "From IDR 159K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "manicure-pedicure",
      name: "Manicure Pedicure",
      priceLabel: "From IDR 69K",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "thai-massage",
      name: "Thai Massage",
      priceLabel: "From IDR 133K | 30 Minutes",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "couple-spa",
      name: "Couple Massage",
      priceLabel: "From IDR 319K | 1 Hour · 2 pax",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "foot-reflexology",
      name: "Foot Reflexology",
      priceLabel: "From IDR 99K | 30 Minutes",
      text: "Relax and rejuvenate your body and soul.",
    },
    { slug: "nail-spa", name: "Nail Art", priceLabel: "From IDR 159K", text: "Relax and rejuvenate your body and soul." },
    { slug: "waxing-salon", name: "Waxing", priceLabel: "From IDR 99K", text: "Relax and rejuvenate your body and soul." },
    {
      slug: "coconut-oil-massage",
      name: "Coconut Oil Massage",
      priceLabel: "From IDR 300K | 1 Hour",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "hair-braiding",
      name: "Hair Braiding",
      priceLabel: "From IDR 279K",
      text: "Relax and rejuvenate your body and soul.",
    },
    {
      slug: "shiatsu-massage",
      name: "Shiatsu Massage",
      priceLabel: "From IDR 119K | 30 Minutes",
      text: "Relax and rejuvenate your body and soul.",
    },
  ],
  catalog: {
    eyebrow: "Our Spa Menu",
    heading: "Browse Our Spa Treatments",
    feeLabel: "Home Service Fee",
    feeText: "Extra 75K/Therapist",
    // Card button text on the old site. {name} is replaced by the treatment name.
    // Items with their own page link to it; items without a page open booking.
    buttonLabels: { withPage: "View {name} details", withoutPage: "Book {name}" },
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
          "four-hand-massage",
          "four-hand-warm-candle",
          "foot-reflexology",
          "foot-massage",
          "head-massage",
          "herbal-massage",
          "lymphatic-massage",
          "organic-warm-candle-oil-massage",
          "shiatsu-massage",
          "sport-massage",
          "thai-massage",
          "traditional-massage",
          "coconut-oil-massage",
          "hot-stone-massage",
        ],
      },
      {
        label: "Beauty",
        itemIds: [
          "bali-moon-tea-tree-facial",
          "bali-moon-gold-facial",
          "biokos-facial",
          "body-scrub",
          "foot-scrub",
          "ear-candle",
          "eyelash",
          "cream-bath",
          "manicure-pedicure",
          "waxing",
        ],
      },
      {
        label: "For Couple",
        itemIds: [
          "couple-balinese-massage",
          "couple-traditional-massage",
          "couple-deep-tissue-massage",
          "couple-warm-candle-massage",
        ],
      },
      { label: "Couple Package", packageGroup: "couples" },
    ],
  },
  moreToEnjoy: {
    eyebrow: "More to Enjoy",
    heading: "Looking for More Than One Treatment?",
    paragraphs: [
      "A great spa experience often includes more than one treatment. Our spa packages combine massage, facials, body scrubs, cream baths, and beauty treatments into carefully selected experiences that let you enjoy more while offering better overall value.",
      "Every package is available at our spa, and selected combinations can also be arranged as home service, making it easy to enjoy professional spa care wherever you're staying.",
    ],
  },
  packages: {
    eyebrow: "Spa Packages",
    heading: "Complete Relaxation in One Visit",
    text: "Our signature spa packages combine massage, facials, cream baths, body care, and beauty treatments into a complete wellness experience while offering better value than individual bookings. Explore the collections below to find the package that suits you best.",
    button: { label: "Explore Packages", href: "/seminyak/" },
    packageGroup: "balinese-massage",
    cardButtonLabel: "Reserve",
  },
  whyUs: {
    eyebrow: "Why It Matters",
    heading: "What Makes Spa Bali Moon Different",
    items: [
      {
        title: "Experienced Therapists",
        href: "/seminyak/",
        text: "Skilled professionals who adjust every treatment to your comfort level and individual needs.",
      },
      {
        title: "Home Service Available",
        href: "/outcall-home-service-massage/",
        text: "Enjoy the same professional treatments at your villa, hotel, or private residence around Seminyak.",
      },
      {
        title: "Complete Wellness Menu",
        href: "/seminyak/",
        text: "Massage, facials, body care, beauty treatments, and spa packages are all available in one destination.",
      },
      {
        title: "Easy WhatsApp Booking",
        href: "/contact/",
        text: "Book appointments quickly, ask questions, and receive personalised treatment recommendations.",
      },
    ],
  },
  faq: {
    heading: "Time to Unwind",
    eyebrow: "Frequently Asked Questions",
    subheading: "Everything You Need to Know",
    image: { src: "/images/home/shared/homepage-2.webp", alt: "Spa facial treatment", width: 337, height: 452 },
    items: [
      {
        question: "1. Do I need to make an appointment?",
        answer: "Advance bookings are recommended so we can prepare your preferred therapist, treatment, and appointment time, especially during busy travel seasons.",
      },
      {
        question: "2. Can I enjoy the treatments without visiting the spa?",
        answer: "Yes. Many of our massage and spa treatments are available as home service for villas, hotels, and private residences around Seminyak.",
      },
      {
        question: "3. Which massage is best if I've never had one before?",
        answer: "Balinese Massage is often recommended for first time guests because it combines relaxation, gentle stretching, and traditional massage techniques suitable for most people.",
      },
      {
        question: "4. Can I combine different treatments in one visit?",
        answer: "Absolutely. Many guests pair massage with facials, body scrubs, cream baths, manicure, pedicure, or waxing to create a more complete spa experience.",
      },
      {
        question: "5. How do I choose the right treatment?",
        answer: "Tell us how you're feeling or what you'd like to achieve, whether that's relaxation, muscle recovery, skin care, or simply time to unwind. We'll happily recommend the most suitable treatment for you.",
      },
      {
        question: "6. Is Spa Bali Moon a licensed spa?",
        answer: "Yes. We are an established spa operating from a physical location at Jl. Pangkung Sari No. 30, Seminyak, and have served guests in Bali since 2009. Our home service is delivered by the same therapists who work in our spa, and you are welcome to visit us in person before booking.",
      },
    ],
  },
  cta: {
    heading: "A Better Way to Experience Wellness in Bali",
    paragraphs: [
      "Some treatments are for tired muscles. Others for tired skin, overworked feet, or simply the feeling of moving from one plan to the next. Browse the price list and find yours.",
      "Visit our spa in Seminyak or enjoy the same trusted care through our home service, delivered by experienced therapists directly to your villa or hotel.",
    ],
    image: { src: "/images/home/homepage-5.webp", alt: "", width: 1920, height: 898 },
    buttonLabel: "Reserve",
  },
};
