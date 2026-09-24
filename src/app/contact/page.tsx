import { Clock, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/treatments/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { business } from "@/data/business";
import { contactPage } from "@/data/pages/contact";
import { whatsappLink } from "@/lib/whatsapp";
import { buildMetadata } from "@/lib/seo";

/**
 * CONTACT (/contact/) — text in src/data/pages/contact.ts
 * Note: this page keeps its own opening hours text (migration-audit HOURS-01).
 */
export const metadata = buildMetadata({
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  path: contactPage.path,
  image: contactPage.hero.image,
});

const icons = [MessageCircle, MapPin, Clock];

export default function ContactPage() {
  const { hero, details, form, findUs } = contactPage;
  return (
    <>
      <PageHero title={hero.title} note={hero.eyebrow} image={hero.image} buttonLabel={hero.buttonLabel} source="Contact page" />

      <Section labelledBy="details-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-5">
            <h2 id="details-heading" className="text-title">
              {details.heading}
            </h2>
            <p className="mt-3 text-lead text-stone">{details.eyebrow}</p>
            <p className="mt-5 text-lead text-stone">{details.text}</p>
            <ul className="mt-10 space-y-6">
              {details.items.map((item, i) => {
                const Icon = icons[i] ?? MapPin;
                const isWhatsApp = i === 0;
                return (
                  <li key={item.title} className="flex gap-4 border-t border-line pt-5">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      {isWhatsApp ? (
                        <a
                          href={whatsappLink({ source: "Contact page" })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="numeric inline-block whitespace-nowrap py-1 text-stone underline decoration-gold underline-offset-[0.3em] hover:text-ink"
                        >
                          {item.text}
                          <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
                        </a>
                      ) : (
                        <p className="text-stone">{item.text}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="rounded-board bg-linen p-6 sm:p-10 lg:col-span-7">
            <h2 className="text-title">{form.heading}</h2>
            <p className="mt-3 text-lead text-stone">{form.eyebrow}</p>
            <div className="mt-8">
              <ContactForm fields={form.fields} submitLabel={form.submitLabel} resetLabel={form.resetLabel} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="linen" labelledBy="find-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="find-heading" className="text-title">
              {findUs.name}
            </h2>
            <p className="mt-3 text-lead text-stone">{findUs.eyebrow}</p>
            <p className="mt-5 max-w-[46ch] text-lead text-stone">{findUs.address}</p>
            <p className="mt-2 text-lead text-stone">{findUs.hours}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href={business.mapsUrl} external variant="primary" size="lg">
              <MapPin aria-hidden="true" strokeWidth={1.5} className="size-5" />
              {findUs.directionsLabel}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
