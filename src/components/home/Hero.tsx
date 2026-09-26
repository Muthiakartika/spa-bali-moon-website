import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import LotusMark from "@/components/layout/LotusMark";
import { headerBookingLabel } from "@/data/navigation";
import { homePage } from "@/data/pages/home";
import type { SiteImage as SiteImageData } from "@/data/types";
import { pillLink, SOURCE, SplitTitle } from "./shared";
import VisitFacts from "./VisitFacts";

/**
 * Homepage hero ("Taman" design), on warm cream:
 * "Seminyak · Since 2009", the H1 with "Day Spa" in gold italic, the intro text and two buttons;
 * on the right a tall arched photo of a frangipani garden with a small round photo.
 * Below it, a white card with the practical facts (VisitFacts: hours, address, home service fee, phone).
 * Texts: src/data/pages/home.ts (hero).
 */

// Existing site photos (Day Spa garden, coconuts).
const gardenPhoto: SiteImageData = { src: "/images/treatments/day-spa/dayspa-1.webp", alt: "", width: 1920, height: 850 };
const coconutPhoto: SiteImageData = { src: "/images/treatments/coconut-oil-massage/coconutoilmassage-11.webp", alt: "", width: 1920, height: 898 };

export default function Hero() {
  const { hero, about } = homePage;

  return (
    <>
      <section aria-labelledby="home-title" className="relative overflow-hidden bg-cream">
        <TropicalLeaf className="absolute -left-24 top-6 hidden w-80 text-gold/20 lg:block" />
        <Container className="relative grid items-center gap-12 pb-28 pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-14">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2.5 text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep">
              <LotusMark className="h-5 w-auto text-gold" />
              {about.badge.line}
            </p>
            <h1 id="home-title" className="mt-6 font-display text-[clamp(3.1rem,1.6rem+6vw,7rem)] leading-[0.96]">
              <SplitTitle text={hero.title} />
            </h1>
            <p className="mt-7 max-w-[50ch] text-[1.0625rem] leading-[1.75] text-stone">{hero.text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookButton label={headerBookingLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
              <Link href="/seminyak/" className={pillLink}>
                Explore Treatments
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
              <SiteImage image={gardenPhoto} fill priority sizes="(min-width: 1024px) 40vw, 90vw" focus="45% center" />
            </div>
            <div className="absolute -bottom-6 -left-3 size-32 overflow-hidden rounded-full border-[6px] border-cream sm:size-44 lg:-left-10">
              <SiteImage image={coconutPhoto} fill sizes="176px" />
            </div>
          </div>
        </Container>
      </section>

      {/* The practical facts, on a white card that overlaps the hero */}
      <VisitFacts />
    </>
  );
}
