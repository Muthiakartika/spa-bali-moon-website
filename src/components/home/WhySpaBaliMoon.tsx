import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { homePage } from "@/data/pages/home";

/** "What Makes Spa Bali Moon Different" — four reasons from the old homepage, each linking on. */
export default function WhySpaBaliMoon() {
  const { whyUs } = homePage;
  return (
    <Section tone="sage" labelledBy="why-heading">
      <SectionHeading id="why-heading" title={whyUs.heading} note={whyUs.eyebrow} />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.items.map((item, i) => (
          <li
            key={item.title}
            className="group relative flex flex-col gap-3 rounded-card bg-ivory p-7 transition-shadow duration-(--duration-base) hover:shadow-lift"
          >
            <span aria-hidden="true" className={`mb-2 block size-3 rounded-full ${["bg-sage", "bg-taupe", "bg-brown", "bg-olive"][i % 4]}`} />
            <h3 className="text-subtitle">
              <Link href={item.href} className="after:absolute after:inset-0">
                {item.title}
              </Link>
            </h3>
            <p className="text-body text-brown-ink">{item.text}</p>
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="mt-auto size-5 text-brown-deep transition-transform duration-(--duration-quick) group-hover:translate-x-1"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
