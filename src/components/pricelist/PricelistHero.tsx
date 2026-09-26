import { ArrowDown } from "lucide-react";
import ArchHero from "@/components/home/ArchHero";
import { pillLink } from "@/components/home/shared";
import VisitFacts from "@/components/home/VisitFacts";
import BookButton from "@/components/ui/BookButton";
import { pricelistPage } from "@/data/pages/pricelist";
import type { SiteImage as SiteImageData } from "@/data/types";
import { SOURCE } from "./shared";

/**
 * Pricelist hero (the shared ArchHero, on warm cream): "Find Your Treatment", the H1 with
 * "in Seminyak" in gold italic (the same texts as the live hero), the booking button and a link
 * down to the price list; the pricelist photo in a tall arch with a small round photo of warm stones.
 * Below it, the same white facts card as on the homepage (hours, address, home service fee, phone).
 * Texts: src/data/pages/pricelist.ts → hero.
 */

// Existing site photo (hot stones), shown small in the circle.
const stonesPhoto: SiteImageData = { src: "/images/treatments/hot-stone-massage/hotstonemassage-12.webp", alt: "", width: 1920, height: 898 };

export default function PricelistHero() {
  const { hero } = pricelistPage;

  return (
    <>
      <ArchHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        image={hero.image}
        imageFocus="52% center"
        circleImage={stonesPhoto}
        circleFocus="6% center"
        withFactsCard
        actions={
          <>
            <BookButton label={hero.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-5 sm:px-7" />
            <a href="#pricelist" className={`${pillLink} max-sm:px-5`}>
              View Price List
              <ArrowDown aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </>
        }
      />
      <VisitFacts source={SOURCE} />
    </>
  );
}
