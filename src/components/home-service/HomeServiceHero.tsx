import { ArrowDown, Clock, House } from "lucide-react";
import ArchHero from "@/components/home/ArchHero";
import FactsCard, { type Fact } from "@/components/home/FactsCard";
import { line, LotusIcon, pillLink, type LineIcon } from "@/components/home/shared";
import BookButton from "@/components/ui/BookButton";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { homeServicePage } from "@/data/pages/home-service";
import type { SiteImage as SiteImageData } from "@/data/types";
import { SOURCE } from "./shared";

/**
 * Home Service hero (the shared ArchHero, on warm cream): "Outcall Spa Service", the H1 with
 * "in Bali" in gold italic, the text, the booking button, a link down to the prices and the opening
 * times; the hero photo in a tall arch with a small round photo of a villa pool.
 * Below it, the page's four short facts ("Easy Booking — via WhatsApp" …) on the same white
 * overlapping card as the homepage's facts. Texts: src/data/pages/home-service.ts → hero, stats.
 */

// Existing site photo (a villa pool), shown small in the circle.
const villaPhoto: SiteImageData = { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "", width: 1920, height: 898 };

// One icon per fact, in the same order as stats.
const statIcons: LineIcon[] = [WhatsAppIcon, line(House), LotusIcon, line(Clock)];

export default function HomeServiceHero() {
  const { hero, stats } = homeServicePage;
  const facts: Fact[] = stats.map((stat, i) => ({ icon: statIcons[i % statIcons.length], label: stat.title, value: stat.text }));

  return (
    <>
      <ArchHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleSize="text-[clamp(2.9rem,1.5rem+5vw,6rem)] leading-[0.98]"
        text={hero.text}
        image={hero.image}
        imageFocus="58% center"
        circleImage={villaPhoto}
        circleFocus="40% center"
        withFactsCard
        actions={
          <>
            <BookButton label={hero.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-5 sm:px-7" />
            <a href="#prices" className={`${pillLink} max-sm:px-5`}>
              View Prices
              <ArrowDown aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </>
        }
        meta={
          <p className="flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.06em] text-stone">
            <Clock aria-hidden="true" strokeWidth={1.5} className="size-4 shrink-0 text-gold-deep" />
            {hero.openingTimes}
          </p>
        }
      />

      {/* The page's four short facts, on the homepage's white overlapping card */}
      <FactsCard facts={facts} />
    </>
  );
}
