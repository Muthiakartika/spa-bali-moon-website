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
        <details key={item.question} className="group rounded-cell bg-ivory/80 px-5 ring-1 ring-taupe/40 open:bg-ivory sm:px-6">
          <summary
            className={
              "flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left " +
              "font-serif text-[1.25rem] leading-snug text-olive transition-colors duration-(--duration-quick) " +
              "hover:text-brown-deep sm:text-[1.35rem] [&::-webkit-details-marker]:hidden"
            }
          >
            <span>{item.question}</span>
            <Plus
              aria-hidden="true"
              strokeWidth={1.5}
              className="mt-0.5 size-7 shrink-0 rounded-full bg-sage/35 p-1.5 text-olive transition-transform duration-(--duration-base) ease-out-expo group-open:rotate-45"
            />
          </summary>
          <div className="accordion-panel">
            <p className="max-w-[68ch] pb-6 pr-4 text-body text-brown-ink sm:pr-10">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
