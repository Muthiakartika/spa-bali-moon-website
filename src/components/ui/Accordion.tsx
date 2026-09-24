import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/types";

/**
 * FAQ list. Built on the browser's own <details>/<summary>, so it works with a
 * keyboard and screen readers without any JavaScript. Several items can be open.
 */
export default function Accordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-card border border-line bg-paper px-5 sm:px-6">
          <summary
            className={
              "flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left " +
              "font-display text-[1.0625rem] font-semibold leading-snug text-ink transition-colors duration-(--duration-quick) " +
              "hover:text-gold-deep sm:text-[1.125rem] [&::-webkit-details-marker]:hidden"
            }
          >
            <span>{item.question}</span>
            <Plus
              aria-hidden="true"
              strokeWidth={1.5}
              className="mt-0.5 size-7 shrink-0 rounded-full bg-cream p-1.5 text-ink transition-transform duration-(--duration-base) ease-out-expo group-open:rotate-45"
            />
          </summary>
          <div className="accordion-panel">
            <p className="max-w-[68ch] pb-6 pr-4 text-body text-stone sm:pr-10">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
