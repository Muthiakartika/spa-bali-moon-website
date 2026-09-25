import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { homePage } from "@/data/pages/home";
import AboutBadge from "./AboutBadge";
import { noteClass, titleClass } from "./shared";

/**
 * "Beyond Relaxation — Why Spa Bali Moon Is Part of the Bali Experience" ("Taman" design):
 * the two About photos (an arch and a circle) beside the text, the checked list,
 * the "Discover More" button and the brand note. Texts: src/data/pages/home.ts → about.
 */
export default function AboutSpa() {
  const { about } = homePage;

  return (
    <section id="about" aria-labelledby="about-heading" className="py-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative pb-10 lg:col-span-5">
          {about.images[0] && (
            <div data-motion="photo" className="arch relative aspect-[3/4] w-[80%] overflow-hidden">
              <SiteImage image={about.images[0]} fill sizes="(min-width: 1024px) 32vw, 80vw" />
            </div>
          )}
          {about.images[1] && (
            <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[44%] overflow-hidden rounded-full border-8 border-paper">
              <SiteImage image={about.images[1]} fill sizes="(min-width: 1024px) 18vw, 40vw" />
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <p className={noteClass}>{about.eyebrow}</p>
          <h2 id="about-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
            {about.heading}
          </h2>
          <p className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">{about.text}</p>
          <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {about.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.9375rem]">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                  <Check aria-hidden="true" strokeWidth={2} className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <Link
              href={about.button.href}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-deep px-7 font-semibold text-paper shadow-(--shadow-button) transition-colors hover:bg-ink"
            >
              {about.button.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <AboutBadge />
          </div>
        </div>
      </Container>
    </section>
  );
}
