// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.
//
// Page: https://spabalimoon.com/wellness-in-bali/
// TODO CONTENT-03 / SEO-07: page about other Bali wellness businesses; no internal links point to it.

import type { TextPage } from "../types";

/**
 * PAGE TEXT (/wellness-in-bali/)
 * The page is a list of blocks shown top to bottom (heading, paragraph, list, link).
 * A link with href "whatsapp" opens the WhatsApp booking chat.
 */
export const wellnessPage: TextPage = {
  path: "/wellness-in-bali/",
  seo: {
    title: "Wellness Bali Guide",
    description: "Discover the ultimate wellness experiences in Bali, view our recommendations for wellness retreats to rejuvenating spa treatments.",
  },
  title: "Wellness Guide in Bali",
  blocks: [
    {
      kind: "paragraph",
      text: "Bali is a place of spiritual transformation for those seeking holistic health and cultural enchantment. It offers a tropical setting where ancient healing traditions meet modern wellness. This blend promises a healing experience unlike any other. Each wellness retreat in Bali is a portal to self-discovery and renewal. These retreats uphold Balinese therapy while embracing eco-conscious principles. Every moment here is a step towards holistic wellness, inviting you to reconnect with yourself.",
    },
    { kind: "heading", level: 2, text: "What to Know" },
    {
      kind: "list",
      items: [
        { text: "Bali remains the ultimate destination for holistic well-being and cultural treatments" },
        { text: "Experience a unique combination of traditional Balinese healing and modern wellness techniques." },
        { text: "Cultivate self-love and creativity through luxury spa experiences and wellness therapies." },
        { text: "Commit to a sustainable journey with wellness retreats that foster eco-friendly practices." },
        { text: "Seek rejuvenation of mind, body, and soul in Bali's breathtaking landscapes and peaceful environments." },
      ],
    },
    { kind: "heading", level: 2, text: "Spa Bali Moon", href: "/seminyak/" },
    {
      kind: "paragraph",
      text: "In the heart of Seminyak, Spa Bali Moon is a peaceful and private spa. It’s known for it’s affordable massage in seminyak and offers a calm place for healing and relaxation. Guests can try the traditional Balinese Massage and the relaxing hot stone massage. Skilled therapists provide these ancient practices with great care.",
    },
    {
      kind: "paragraph",
      text: "The spa’s design and atmosphere focus on wellness. It helps guests feel calm and well. Spa Bali Moon also offers scented oils and private rooms for a unique couples experience. They blend traditional methods with modern body care. This makes them a favorite for those looking for a complete wellness journey.",
    },
    { kind: "heading", level: 2, text: "COMO Shambhala Estate" },
    {
      kind: "paragraph",
      text: "COMO Shambhala Estate is set in Ubud's peaceful landscape. It's known for its top-notch luxury wellness retreat in Bali. Here, guests find a mix of holistic healing and Ayurvedic treatments. These are designed to refresh the mind, body, and spirit.",
    },
    {
      kind: "paragraph",
      text: "The estate's surroundings are as beautiful as its treatments. Ubud's greenery adds to the peaceful atmosphere. It's perfect for healing the mind and body.",
    },
    {
      kind: "paragraph",
      text: "The villas at the estate are amazing. They offer stunning views of the Ubud forest and Ayung River. These villas mix modern luxury with Balinese traditions. They provide a cozy and elegant place to stay.",
    },
    {
      kind: "paragraph",
      text: "Guests can also enjoy organic meals. These meals are made with care and fit different diets. This ensures wellness from the inside out.",
    },
    {
      kind: "paragraph",
      text: "COMO Shambhala Estate is a unique place for wellness. It combines luxury, Ayurvedic treatments, and holistic healing. It's the perfect spot for a deep wellness journey in Bali.",
    },
    { kind: "heading", level: 2, text: "REVĪVŌ Wellness Resort" },
    {
      kind: "paragraph",
      text: "In the heart of Bali, REVĪVŌ Wellness Resort offers a place for ultimate rejuvenation through luxury wellness experiences. It's a top Bali retreat where peace meets change. It's designed to boost your wellness journey.",
    },
    {
      kind: "paragraph",
      text: "At REVĪVŌ Wellness Resort, each program is carefully made to help guests feel refreshed. It combines Balinese healing, modern wellness science, and nature.",
    },
    {
      kind: "paragraph",
      text: "The resort offers a refreshing getaway and ensures your stay supports a whole health approach. With its beautiful views, top wellness facilities, and deep care for guests, REVĪVŌ Wellness Resort shines as a healing and luxury spot in Bali.",
    },
    { kind: "heading", level: 2, text: "Sukhavati Ayurvedic Retreat" },
    {
      kind: "paragraph",
      text: "In the heart of Bali's green landscapes, the Sukhavati Ayurvedic Retreat is a haven for those looking for real Ayurvedic healing. It uses ancient Ayurveda wisdom to craft wellness plans that cover spiritual, physical, and mental health. Every part of Sukhavati is carefully planned to help guests deeply heal and renew through detox and rejuvenation therapies.",
    },
    {
      kind: "paragraph",
      text: "Sukhavati Ayurvedic Retreat is known for its focus on balance and boosting energy. It's a top spot among Bali's wellness retreats. Guests get a life-changing experience with Ayurvedic practices made just for them, turning it into a personal path to whole health.",
    },
    {
      kind: "paragraph",
      text: "The core of Sukhavati is its deep detox approach. The retreat offers detox programs led by skilled Ayurvedic doctors and therapists. These programs are set in a calm place that helps the detox process, leading to deep healing and empowerment.",
    },
    { kind: "heading", level: 2, text: "Nyuh Bali Luxury Spa" },
    {
      kind: "paragraph",
      text: "In the heart of Ubud, Nyuh Bali Villas offers a top-notch luxury spa in Ubud experience. People from all over visit to find peace and rejuvenation. The flower bath is famous for its beauty and healing powers, inspired by Balinese traditions. Yoga retreat at Nyuh Bali Villas combines spiritual and physical wellness. Expert instructors teach various yoga styles to balance body and mind. It’s a peaceful retreat for those looking to escape the daily grind and find health and wellbeing.",
    },
    { kind: "heading", level: 2, text: "Fivelements Retreat" },
    {
      kind: "paragraph",
      text: "Fivelements Retreat blends holistic healing with nature. It offers a special mix of sustainable wellness and spiritual renewal. This retreat is known for deep, transformative experiences. It combines traditional Balinese practices with modern wellness ideas.",
    },
    {
      kind: "paragraph",
      text: "At Fivelements, each program aims to care for body, mind, and spirit. It's for those looking for a real path to wellbeing.",
    },
    {
      kind: "paragraph",
      text: "Fivelements Retreat is deeply committed to eco-sustainability. It shows in its building and daily life. They use local materials and traditional methods. This way, your stay helps the environment and rejuvenates you.",
    },
    { kind: "heading", level: 2, text: "Floating Leaf Eco-Luxury Retreat" },
    {
      kind: "paragraph",
      text: "Floating Leaf Retreat is a leader in eco-luxury wellness and sustainable health practices. It offers a serene and upscale wellness experience. This makes it a favorite for those looking to relax and rejuvenate.",
    },
    {
      kind: "paragraph",
      text: "The retreat's core belief is in protecting the environment while enjoying luxury. Guests enjoy many wellness options, like the Melati Spa. It uses organic, eco-friendly products for traditional Balinese treatments. The Healing Pool, with its natural saltwater, provides a unique and therapeutic experience.",
    },
    {
      kind: "paragraph",
      text: "The retreat goes beyond spa services in its commitment to sustainability. It has an organic permaculture garden for its garden-to-table dining. Solar charging stations, rainwater harvesting, and eco-friendly materials make it a leader in eco-conscious travel.",
    },
    { kind: "heading", level: 2, text: "Four Seasons Resort" },
    {
      kind: "paragraph",
      text: "The Four Seasons Bali is a exclusive retreat for luxury wellness. It’s more than a place to stay; it’s a sanctuary for pampering spa treatments based on Balinese healing traditions. The Four Seasons Resort is known for its sophistication. Every detail is designed to give guests the best service. Wellness here is a cultural experience, blending Bali’s beauty and spiritual richness with modern luxury.",
    },
    {
      kind: "paragraph",
      text: "Guests at the Four Seasons Bali enjoy a range of healing options. The spa offers holistic services like body wraps and facials. These are done by skilled therapists using natural products. The resort’s wellness goes beyond the spa. It includes healthy dining, yoga spaces, and private villas. These villas are peaceful escapes from daily stress.",
    },
    { kind: "heading", level: 2, text: "The Apurva Kempinski" },
    {
      kind: "paragraph",
      text: "At The Apurva Kempinski Bali, guests find a place where luxury accommodation and wellness programs meet cultural exploration. This top spot combines the best of wellness with Bali’s rich culture. It’s a place where comfort and heritage come together beautifully. The resort offers many ways to care for your body and mind. It focuses on overall wellness and the peaceful surroundings. There’s something for everyone, whether you want to relax or feel refreshed. Visiting The Apurva Kempinski Bali is more than just luxury. It’s a journey of personal growth and cultural appreciation. Here, luxury and tradition blend perfectly, leaving lasting memories.",
    },
    { kind: "heading", level: 2, text: "Wellness Retreats in Bali for Recharging Your Body and Mind" },
    {
      kind: "paragraph",
      text: "In Bali, wellness seekers find a peaceful haven. The lush tropics and sea breezes create a perfect setting. Bali’s wellness retreats and spa’s connect the physical and spiritual. Every moment is a chance to care for the mind, body, and spirit. The island’s beauty and spiritual wisdom guide guests on a path to peace and balance.",
    },
    { kind: "heading", level: 2, text: "Learn More" },
    { kind: "heading", level: 3, text: "What types of treatments are available at Spa Bali Moon?" },
    {
      kind: "paragraph",
      text: "Spa Bali Moon offers refreshing foot reflexology and Balinese Massage. They also have Hot Stone massages. Call 0878-6317-5144 for a rejuvenating experience.",
    },
    { kind: "heading", level: 3, text: "What unique programs does REVĪVŌ Wellness Resort offer?" },
    {
      kind: "paragraph",
      text: "REVĪVŌ Wellness Resort has special wellness programs. They offer balanced nutrition, movement practices, and mindfulness activities. These are designed to improve your health in a peaceful setting.",
    },
    { kind: "heading", level: 3, text: "Can guests experience luxury spa treatments at Nyuh Bali Villas?" },
    {
      kind: "paragraph",
      text: "Yes, Nyuh Bali Villas offers luxury spa treatments in Ubud. They have flower baths, exclusive retreats, and yoga retreats. Call 085 333 779 779 for a luxurious wellness journey.",
    },
    { kind: "heading", level: 3, text: "What wellness services does the Four Seasons Resort in Bali offer?" },
    {
      kind: "paragraph",
      text: "The Four Seasons Resort offers a wide range of treatments. From Balinese healing arts to innovative wellness, they provide world-class luxury. It’s perfect for a high-end wellness getaway.",
    },
    {
      kind: "heading",
      level: 3,
      text: "Are there Bali retreats that focus on reforestation and other eco-friendly initiatives?",
    },
    {
      kind: "paragraph",
      text: "Yes, Bali retreats like Floating Leaf Eco-Luxury Retreat focus on reforestation. Many retreats also promote sustainability. They aim to improve both personal and environmental well-being.",
    },
  ],
};
