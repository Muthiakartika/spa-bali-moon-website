import ContactDetails from "@/components/contact/ContactDetails";
import ContactHero from "@/components/contact/ContactHero";
import FindUs from "@/components/contact/FindUs";
import { contactPage } from "@/data/pages/contact";
import { buildMetadata } from "@/lib/seo";

/**
 * CONTACT (/contact/) — the homepage's "Taman" design with the live page's content and order.
 * The page's own blocks are in src/components/contact/.
 * Texts: src/data/pages/contact.ts. This page keeps its own opening hours text (migration-audit HOURS-01).
 *
 * Layout: hero (Contact Us, Get Directions) → contact details beside the form, in one card →
 * the Google map with the "Find Us" card.
 */
export const metadata = buildMetadata({
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  path: contactPage.path,
  image: contactPage.hero.image,
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <FindUs />
    </>
  );
}
