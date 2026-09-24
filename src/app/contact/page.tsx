import { Clock, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import PhotoHero from "@/components/treatments/PhotoHero";
import { ButtonLink } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { business } from "@/data/business";
import { contactPage } from "@/data/pages/contact";
import type { SiteImage as SiteImageData } from "@/data/types";
import { whatsappLink } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

/**
 * CONTACT (/contact/) — text in src/data/pages/contact.ts
 * Note: this page keeps its own opening hours text (migration-audit HOURS-01).
 *
 * Layout: photo hero → contact details beside the form (in a menu-style card) →
 * "Find Us" card and the Google map (as on the old page) over a photo of the garden path.
 */
export const metadata = buildMetadata({
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  path: contactPage.path,
  image: contactPage.hero.image,
});

const SOURCE = "Contact page";
const icons = [MessageCircle, MapPin, Clock];

// Existing site photo (the garden path to the spa) behind the "Find Us" card.
const findUsPhoto: SiteImageData = { src: "/images/treatments/day-spa/dayspa-8.webp", alt: "", width: 1920, height: 898 };

export default function ContactPage() {
  const { hero, details, form, findUs } = contactPage;
  return (
    <>
      <PhotoHero title={hero.title} note={hero.eyebrow} image={hero.image} buttonLabel={hero.buttonLabel} source={SOURCE} focus="55% center" />

      {/* Contact details + form */}
      <section aria-labelledby="details-heading" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -left-20 bottom-0 w-72 text-gold/20 sm:w-96" />
        <Container className="relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="details-heading" data-motion="rise" className="text-title">
              {details.heading}
            </h2>
            <p className="mt-3 text-lead text-stone">{details.eyebrow}</p>
            <p className="mt-5 max-w-[48ch] text-lead text-stone">{details.text}</p>
            <ul className="mt-10 space-y-3">
              {details.items.map((item, i) => {
                const Icon = icons[i] ?? MapPin;
                const isWhatsApp = i === 0;
                return (
                  <li key={item.title} data-motion="rise" className="flex gap-4 rounded-card border border-line bg-paper p-5">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream">
                      <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-gold-deep" />
                    </span>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      {isWhatsApp ? (
                        <a
                          href={whatsappLink({ source: SOURCE })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="numeric inline-block whitespace-nowrap py-1 text-stone underline decoration-gold underline-offset-[0.3em] hover:text-ink"
                        >
                          {item.text}
                          <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
                        </a>
                      ) : (
                        <p className="mt-0.5 text-stone">{item.text}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative rounded-board bg-paper p-6 shadow-(--shadow-board) sm:p-10 lg:col-span-7">
            {/* thin gold frame, like the price-menu card */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-2.5 rounded-[12px] border border-gold/35 sm:inset-4" />
            <div className="relative">
              <h2 className="text-title">{form.heading}</h2>
              <p className="mt-3 text-lead text-stone">{form.eyebrow}</p>
              <div className="mt-8">
                <ContactForm fields={form.fields} submitLabel={form.submitLabel} resetLabel={form.resetLabel} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Find Us: the address card and the Google map side by side, over the garden-path photo */}
      <section aria-labelledby="find-heading" className="relative isolate overflow-hidden bg-ink">
        <SiteImage image={findUsPhoto} fill sizes="100vw" focus="60% center" className="-z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/35" />
        <Container className="grid gap-6 py-section lg:grid-cols-12 lg:items-stretch">
          <div data-motion="rise" className="flex flex-col rounded-board bg-paper p-8 shadow-(--shadow-board) sm:p-10 lg:col-span-5 xl:col-span-4">
            <MapPin aria-hidden="true" strokeWidth={1.5} className="size-7 text-gold" />
            <h2 id="find-heading" className="mt-4 text-title">
              {findUs.name}
            </h2>
            <p className="mt-2 text-lead text-stone">{findUs.eyebrow}</p>
            <p className="mt-5 text-body text-stone">{findUs.address}</p>
            <p className="mt-2 text-body text-stone">{findUs.hours}</p>
            <div className="mt-8 lg:mt-auto lg:pt-8">
              <ButtonLink href={business.mapsUrl} external variant="primary" size="lg">
                <MapPin aria-hidden="true" strokeWidth={1.5} className="size-5" />
                {findUs.directionsLabel}
              </ButtonLink>
            </div>
          </div>

          {/* Google map from the old contact page (loads only when scrolled near) */}
          <div data-motion="rise" className="overflow-hidden rounded-board border-8 border-paper bg-linen shadow-(--shadow-board) lg:col-span-7 xl:col-span-8">
            <iframe
              src={findUs.map.embedUrl}
              title={findUs.map.title}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-80 w-full border-0 sm:h-96 lg:h-full lg:min-h-[28rem]"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
