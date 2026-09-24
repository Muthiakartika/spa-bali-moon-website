import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import type { SiteImage as SiteImageData } from "@/data/types";

/**
 * Full-width photo hero with the page title on top (same style as the homepage hero).
 * A dark gradient on the left keeps the white text readable over the photo.
 *
 *   <PhotoHero title="Our Massage in Seminyak" note="Find Your Treatment" image={...} buttonLabel="Book Now" />
 */
export default function PhotoHero({
  title,
  note,
  text,
  meta,
  image,
  buttonLabel = "Book Now",
  source,
  focus = "center",
  children,
}: {
  title: string;
  /** The small line the old site showed above the H1 (shown under it here). */
  note?: string;
  /** Optional short paragraph under the title. */
  text?: string;
  /** Extra small line, e.g. opening times. */
  meta?: string;
  image: SiteImageData;
  buttonLabel?: string;
  source?: string;
  /** Which part of the photo to keep in view, e.g. "60% center". */
  focus?: string;
  /** Extra links next to the booking button. */
  children?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-ink">
      <SiteImage image={image} fill priority sizes="100vw" focus={focus} className="-z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/50 to-ink/5" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink/55 to-transparent" />

      <Container className="flex min-h-[min(70dvh,34rem)] flex-col justify-end py-16 sm:py-20">
        <div className="max-w-[38rem]">
          <h1 id="page-title" className="text-display text-paper">
            {title}
          </h1>
          {note && <p className="mt-4 text-lead text-linen/90">{note}</p>}
          {text && <p className="mt-4 max-w-[46ch] text-body text-linen/85">{text}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookButton label={buttonLabel} source={source} size="lg" />
            {children}
          </div>
          {meta && <p className="mt-6 text-small text-linen/80">{meta}</p>}
        </div>
      </Container>
    </section>
  );
}
