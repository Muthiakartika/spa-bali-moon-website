import Container from "@/components/ui/Container";
import type { StatsSection } from "@/data/types";

/** A calm row of four short facts, e.g. "Experienced / Therapists". */
export default function StatsStrip({ section }: { section: StatsSection }) {
  return (
    <div className="bg-ivory py-10 sm:py-12">
      <Container>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {section.items.map((item, i) => (
            <li
              key={item.title + item.text}
              className={`flex flex-col gap-1 rounded-card px-5 py-6 ${["bg-sand", "bg-sage-mist", "bg-sage-mist", "bg-sand"][i % 4]}`}
            >
              <span className="font-serif text-[1.6rem] leading-tight text-olive sm:text-[1.9rem]">{item.title}</span>
              <span className="label-caps text-brown-ink">{item.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
