import { noteClass, titleClass } from "@/components/home/shared";
import { treatmentIcon } from "@/components/treatments/treatmentIcon";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { homeServicePage } from "@/data/pages/home-service";
import { SOURCE, splitItem } from "./shared";

/**
 * "Spa & Beauty Service — Outcall Massage & Body Treatments", on linen: the text and the eight
 * treatments (each with a small icon, its name and its line), the booking button, and on the right a
 * tall arched photo with the round "17 + Years Experience" badge. On phones the photo follows the list.
 * Texts and photo: src/data/pages/home-service.ts → treatmentsList.
 */
export default function HomeTreatments() {
  const { treatmentsList } = homeServicePage;
  const [badgeTop, ...badgeRest] = treatmentsList.imageBadge ?? [];

  return (
    <section aria-labelledby="treatments-heading" className="relative overflow-hidden bg-linen py-section">
      <TropicalLeaf className="absolute -bottom-16 -left-16 w-64 text-gold/20 sm:w-80" />
      <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-7">
          <p className={noteClass}>{treatmentsList.eyebrow}</p>
          <h2 id="treatments-heading" data-motion="rise" className={`mt-2 max-w-[18ch] ${titleClass}`}>
            {treatmentsList.heading}
          </h2>
          {treatmentsList.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">
              {paragraph}
            </p>
          ))}
          <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {treatmentsList.items.map((item) => {
              const { name, text } = splitItem(item);
              const Icon = treatmentIcon(name || text);
              return (
                <li key={item} data-motion="rise" className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-paper text-gold-deep">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-[1.1rem]" />
                  </span>
                  {/* One line of text, as on the live page ("Name — text"); the name is shown on top, the dash only to screen readers */}
                  <p>
                    {name && (
                      <>
                        <span className="block font-display text-[1.25rem] leading-tight text-ink">{name}</span>
                        <span className="sr-only"> — </span>
                      </>
                    )}
                    <span className="mt-1 block text-small leading-relaxed text-stone">{text}</span>
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="mt-10">
            <BookButton label={treatmentsList.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
          </div>
        </div>

        {treatmentsList.image && (
          <div className="relative mx-auto w-full max-w-[20rem] pb-6 sm:max-w-[24rem] lg:col-span-5 lg:max-w-[26rem]">
            <div data-motion="photo" className="arch relative aspect-[3/4] overflow-hidden">
              <SiteImage image={treatmentsList.image} fill sizes="(min-width: 1024px) 30vw, 384px" />
            </div>
            {badgeTop && (
              <p className="absolute -bottom-2 -left-4 flex size-32 flex-col items-center justify-center rounded-full border-[6px] border-linen bg-paper text-center shadow-(--shadow-board) sm:-left-8 sm:size-36">
                <span className="font-display text-[1.35rem] italic leading-none text-gold-deep sm:text-[1.5rem]">{badgeTop}</span>
                <span className="mt-1.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-stone">{badgeRest.join(" ")}</span>
              </p>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
