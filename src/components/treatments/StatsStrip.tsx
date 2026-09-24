import Container from "@/components/ui/Container";
import type { StatsSection } from "@/data/types";

/**
 * A calm row of four short facts, e.g. "Experienced / Therapists".
 * Plain type separated by thin vertical rules (no boxes), like a stats bar.
 */
export default function StatsStrip({ section }: { section: StatsSection }) {
  return (
    <div className="bg-paper py-10 sm:py-14">
      <Container>
        <ul className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {section.items.map((item) => (
            <li key={item.title + item.text} data-motion="rise" className="flex flex-col gap-1 border-l border-line pl-5 sm:pl-6">
              <span className="font-display text-[1.5rem] font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-[1.875rem]">{item.title}</span>
              <span className="text-small text-stone">{item.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
