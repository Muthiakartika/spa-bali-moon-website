// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/contact/

/** CONTACT PAGE TEXT (/contact/) */
export const contactPage = {
  path: "/contact/",
  seo: {
    title: "Contact Us - Rejuvenating Massage at Spa Bali Moon",
    description: "Contact our professional and well-trained therapists at Spa Bali Moon in Seminyak for quality spa treatments and home massage services.",
  },
  hero: {
    eyebrow: "Ready When You Are",
    title: "Book Your Spa Experience in Seminyak",
    image: { src: "/images/gallery/contact/contact-1.webp", alt: "", width: 1920, height: 850 },
    buttonLabel: "Contact Us",
  },
  details: {
    eyebrow: "Questions or Bookings",
    heading: "Let’s Arrange Your Visit",
    text: "Contact Spa Bali Moon to check availability, ask about treatments and packages, or arrange a massage and spa service at our Seminyak location or through selected home service options.",
    // TODO HOURS-01 / ADDR-02: kept exactly as written on the old Contact page.
    items: [
      { title: "WhatsApp Message", text: "+62 878-6317-5144" },
      {
        title: "Visit anytime",
        text: "Jl. Pangkung Sari No. 30 Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361",
      },
      { title: "Opening Times", text: "Open Daily: 9:00 - 22:00" },
    ],
  },
  // TODO FUNC-01: the old form sent messages through its own backend + Cloudflare Turnstile.
  // A new way to deliver form messages must be chosen (see migration-audit.md).
  form: {
    eyebrow: "Get in Touch",
    heading: "How Can We Help?",
    fields: [
      { label: "Name *", placeholder: "Your name" },
      { label: "Email *", placeholder: "you@example.com" },
      { label: "Subject *", placeholder: "What is this about?" },
      { label: "Phone / WhatsApp", placeholder: "+62 …" },
      { label: "Message *", placeholder: "Tell us what you need and when you would like to come in." },
    ],
    submitLabel: "Send message",
    resetLabel: "Reset",
  },
  findUs: {
    eyebrow: "Find Us",
    name: "Spa Bali Moon",
    address: "Jl. Pangkung Sari No. 30, Petitenget, Seminyak, Kerobokan Kuta Utara, Badung, Bali 80361",
    hours: "Open daily · 9:00 – 22:00",
    directionsLabel: "Get Directions",
  },
};
