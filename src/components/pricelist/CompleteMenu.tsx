import { House } from "lucide-react";
import { line, LotusIcon, noteClass, titleClass, type LineIcon } from "@/components/home/shared";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { pricelistPage } from "@/data/pages/pricelist";
import { SOURCE } from "./shared";

/**
 * "More Than Massage — A Complete Spa Menu in Seminyak", in the layout of the homepage's About section:
 * an arched photo with a wide photo overlapping its corner, the text, the two facts
 * ("Established Since 2009", "In-Spa & Home Service") with a small icon each, and the booking button.
 * It follows the intro on the same white background (as on the live page), so it has no top padding of its own.
 * Texts and photos: src/data/pages/pricelist.ts → completeMenu.
 */

// One icon per fact, in the same order as completeMenu.facts.
const factIcons: LineIcon[] = [LotusIcon, line(House)];

export default function CompleteMenu() {
  const { completeMenu, hero } = pricelistPage;
  const [stripPhoto, squarePhoto] = completeMenu.images;

  return (
    <section aria-labelledby="complete-heading" className="pb-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative pb-14 lg:col-span-5">
          {squarePhoto && (
            <div data-motion="photo" className="arch relative aspect-[4/5] w-[80%] overflow-hidden">
              <SiteImage image={squarePhoto} fill sizes="(min-width: 1024px) 32vw, 80vw" focus="42% center" />
            </div>
          )}
          {stripPhoto && (
            <div
              data-motion="photo"
              className="absolute bottom-0 right-0 aspect-[778/265] w-[72%] overflow-hidden rounded-card border-[6px] border-paper shadow-(--shadow-board) sm:border-8"
            >
              <SiteImage image={stripPhoto} fill focus="30% 50%" sizes="(min-width: 1024px) 30vw, 72vw" />
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <p className={noteClass}>{completeMenu.eyebrow}</p>
          <h2 id="complete-heading" data-motion="rise" className={`mt-2 max-w-[18ch] ${titleClass}`}>
            {completeMenu.heading}
          </h2>
          <p className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">{completeMenu.text}</p>
          <ul className="mt-9 grid max-w-[36rem] grid-cols-2 gap-3 sm:gap-4">
            {completeMenu.facts.map((lines, i) => {
              const Icon = factIcons[i % factIcons.length];
              return (
                <li key={lines.join(" ")} data-motion="rise" className="flex flex-col gap-3 rounded-card bg-linen p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.8125rem] font-bold text-ink">{lines[0]}</span>{" "}
                    <span className="numeric block font-display text-[1.35rem] italic leading-tight text-gold-deep sm:text-[1.6rem]">{lines.slice(1).join(" ")}</span>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-10">
            <BookButton label={hero.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
