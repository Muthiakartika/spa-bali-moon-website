import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { headerBookingLabel } from "@/data/navigation";
import { homePage } from "@/data/pages/home";

/**
 * Homepage hero: one full-width spa photo with the H1, intro and booking button on top.
 * Text: src/data/pages/home.ts (hero). The photo is an existing site photo (frangipani massage).
 * A dark gradient on the left keeps the white text readable over the photo.
 */
const heroPhoto = {
  src: "/images/home/shared/homepage-28.webp",
  alt: "",
  width: 1920,
  height: 898,
};

export default function Hero() {
  const { hero } = homePage;

  return (
    <section aria-labelledby="home-title" className="relative isolate overflow-hidden bg-ink">
      <SiteImage image={heroPhoto} fill priority sizes="100vw" className="-z-10 object-cover object-[70%_center]" />
      {/* Readability: dark on the left where the text sits, clear on the right where the photo speaks */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/10" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink/50 to-transparent" />

      <Container className="flex min-h-[min(88dvh,46rem)] flex-col justify-center py-20 sm:py-24">
        <div className="max-w-[36rem]">
          <h1 id="home-title" className="text-display text-paper">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[46ch] text-lead text-linen/90">{hero.text}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookButton label={headerBookingLabel} size="lg" />
            <Link
              href="/seminyak/"
              className="group inline-flex min-h-12 items-center gap-2 font-medium text-paper underline decoration-paper/40 underline-offset-[0.35em] transition-colors hover:decoration-paper"
            >
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform duration-(--duration-quick) group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
