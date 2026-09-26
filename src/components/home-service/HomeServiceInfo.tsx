import { CalendarClock, Clock, HandHeart, House, Package, Sparkles } from "lucide-react";
import { line, noteClass, titleClass, type LineIcon } from "@/components/home/shared";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { homeServicePage } from "@/data/pages/home-service";

/**
 * "Treat yourself to a Balinese spa experience right where you are — Home Service Massage", on warm cream:
 * the centred heading with the lotus ornament, the six promises as white cards with a small icon,
 * and the home service fee in a white pill underneath.
 * Texts: src/data/pages/home-service.ts → info.
 */

// One icon per item, in the same order as info.items.
const icons: LineIcon[] = [line(HandHeart), line(Sparkles), line(Package), line(Clock), line(CalendarClock), WhatsAppIcon];

export default function HomeServiceInfo() {
  const { info } = homeServicePage;

  return (
    <section aria-labelledby="info-heading" className="relative overflow-hidden bg-cream py-section">
      <TropicalLeaf className="absolute -left-16 top-10 hidden w-64 text-gold/25 md:block" />
      <TropicalLeaf className="absolute -right-16 top-10 hidden w-64 -scale-x-100 text-gold/25 md:block" />
      <Container className="relative">
        <div className="flex flex-col items-center text-center">
          <Ornament />
          <p className={`mt-5 max-w-[40ch] ${noteClass}`}>{info.eyebrow}</p>
          <h2 id="info-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
            {info.heading}
          </h2>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {info.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              // Phones: the icon sits beside the text (shorter cards); tablet and up: above it.
              <li key={item.title} data-motion="rise" className="flex gap-4 rounded-card bg-paper p-5 sm:block sm:p-7">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.25rem] leading-tight sm:mt-4 sm:text-[1.35rem]">{item.title}</h3>
                  <p className="mt-1.5 text-small leading-relaxed text-stone sm:mt-2">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-10 flex w-fit max-w-full items-center gap-3 rounded-full bg-paper px-6 py-3.5 text-center text-body shadow-(--shadow-board)">
          <House aria-hidden="true" strokeWidth={1.5} className="size-5 shrink-0 text-gold-deep" />
          <span>
            {info.feeNote.before}
            <span className="font-bold text-gold-deep">{info.feeNote.highlight}</span>
            {info.feeNote.after}
          </span>
        </p>
      </Container>
    </section>
  );
}
