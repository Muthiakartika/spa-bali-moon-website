import { MapPin } from "lucide-react";
import ArchHero from "@/components/home/ArchHero";
import { pillLink } from "@/components/home/shared";
import BookButton from "@/components/ui/BookButton";
import { business } from "@/data/business";
import { contactPage } from "@/data/pages/contact";
import type { SiteImage as SiteImageData } from "@/data/types";
import { SOURCE } from "./shared";

/**
 * Contact hero (the shared ArchHero, on warm cream): "Ready When You Are", the H1 with "in Seminyak"
 * in gold italic, the live "Contact Us" button (WhatsApp) and the page's "Get Directions" link;
 * the contact photo in a tall arch with a small round photo of the garden path to the spa.
 * No facts card here: this page keeps its own opening hours text (migration-audit HOURS-01).
 * Texts: src/data/pages/contact.ts → hero, findUs.
 */

// Existing site photo (the garden path to the spa), shown small in the circle.
const gardenPhoto: SiteImageData = { src: "/images/treatments/day-spa/dayspa-8.webp", alt: "", width: 1920, height: 898 };

export default function ContactHero() {
  const { hero, findUs } = contactPage;

  return (
    <ArchHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      titleSize="text-[clamp(2.9rem,1.5rem+5vw,6rem)] leading-[0.98]"
      image={hero.image}
      imageFocus="30% center"
      circleImage={gardenPhoto}
      circleFocus="50% center"
      actions={
        <>
          <BookButton label={hero.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-5 sm:px-7" />
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${pillLink} max-sm:px-5`}>
            <MapPin aria-hidden="true" strokeWidth={1.5} className="size-4" />
            {findUs.directionsLabel}
            <span className="sr-only"> (opens Google Maps in a new tab)</span>
          </a>
        </>
      }
    />
  );
}
