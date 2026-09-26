import { ExternalLink } from "lucide-react";
import LotusMark from "@/components/layout/LotusMark";
import { pillLink } from "@/components/home/shared";
import Container from "@/components/ui/Container";
import { business } from "@/data/business";
import { contactPage } from "@/data/pages/contact";
import { capsLabel } from "./shared";

/**
 * "Find Us": the Google map from the live contact page in a white frame, with the address card
 * laid over its right side on large screens (as on the live page) and below the map on phones.
 * The map loads only when it is scrolled near. Texts: src/data/pages/contact.ts → findUs.
 */
export default function FindUs() {
  const { findUs } = contactPage;

  return (
    <section aria-labelledby="find-heading" className="bg-linen py-section">
      <Container>
        <div className="relative overflow-hidden rounded-board border-8 border-paper bg-paper shadow-(--shadow-board)">
          <iframe
            src={findUs.map.embedUrl}
            title={findUs.map.title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[20rem] w-full rounded-[10px] border-0 bg-linen sm:h-[26rem] lg:h-[34rem]"
          />

          <div
            data-motion="rise"
            className="relative px-4 pb-4 pt-6 sm:px-6 lg:absolute lg:right-8 lg:top-1/2 lg:w-[24rem] lg:-translate-y-1/2 lg:rounded-card lg:bg-paper lg:p-8 lg:shadow-(--shadow-board)"
          >
            <p className={`inline-flex items-center gap-2 ${capsLabel}`}>
              <LotusMark className="h-4 w-auto text-gold" />
              {findUs.eyebrow}
            </p>
            <h2 id="find-heading" className="mt-3 font-display text-[2rem] leading-tight">
              {findUs.name}
            </h2>
            <p className="mt-3 text-small leading-relaxed text-stone">{findUs.address}</p>
            <p className="numeric mt-2 text-small font-semibold text-gold-deep">{findUs.hours}</p>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={`mt-6 ${pillLink}`}>
              {findUs.directionsLabel}
              <ExternalLink aria-hidden="true" strokeWidth={1.5} className="size-4" />
              <span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
