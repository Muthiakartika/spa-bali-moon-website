import { CalendarClock, HandHeart, House, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import type { StatsSection } from "@/data/types";

const icons = [HandHeart, CalendarClock, Sparkles, House];

/** Four short facts (e.g. "Experienced / Therapists") on a dark gold band with gold icons. */
export default function SpaFactsBand({ section }: { section: StatsSection }) {
  return (
    <div className="bg-gold-night text-linen">
      <Container>
        <ul className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
          {section.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={item.title + item.text} className="flex items-center gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-soft/40">
                  <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-gold-soft" />
                </span>
                <span>
                  <span className="block text-[1.125rem] font-semibold text-paper">{item.title}</span>
                  <span className="block text-small text-linen/80">{item.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
