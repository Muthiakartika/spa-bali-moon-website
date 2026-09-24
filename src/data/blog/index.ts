// ⚠️  Content in this file was copied word-for-word from spabalimoon.com (September 2026).
// Please do not rewrite texts or prices without checking migration/migration-audit.md first.

/**
 * BLOG POSTS (/guide/<slug>/)
 *
 * Each article has its own file in this folder.
 * To ADD an article: copy an existing file, give it a new slug, then add it to the list below.
 * The list order is the order shown on /guide/ (the old site listed them this way).
 */
import type { BlogPost } from "../types";
import lymphaticDrainageMassageBenefitsTechniquesWhatToExpect from "./lymphatic-drainage-massage-benefits-techniques-what-to-expect";
import whatIsABalineseMassage from "./what-is-a-balinese-massage";
import whatIsThaiMassage from "./what-is-thai-massage";
import understandingOfFacialMassage from "./understanding-of-facial-massage";
import understandingSlimmingMassage from "./understanding-slimming-massage";
import bestMassagesAfterALongFlight from "./best-massages-after-a-long-flight";
import ivDrip from "./iv-drip";

export const blogPosts: BlogPost[] = [
  lymphaticDrainageMassageBenefitsTechniquesWhatToExpect,
  whatIsABalineseMassage,
  whatIsThaiMassage,
  understandingOfFacialMassage,
  understandingSlimmingMassage,
  bestMassagesAfterALongFlight,
  ivDrip,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
