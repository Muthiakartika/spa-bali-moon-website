import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import type { Treatment } from "@/data/types";

/** Card linking to one treatment page: photo, name, short description. */
export default function TreatmentCard({
  treatment,
  label,
  className = "",
  headingLevel = "h3",
  name: nameOverride,
  showDescription = true,
}: {
  treatment: Treatment;
  /** Optional small line above the name, e.g. a "From IDR 159K" price label. */
  label?: string;
  className?: string;
  headingLevel?: "h2" | "h3";
  /** Use a different name than the treatment's own (e.g. the homepage's wording). */
  name?: string;
  showDescription?: boolean;
}) {
  const Heading = headingLevel;
  const name = nameOverride ?? treatment.cardName ?? treatment.name;
  return (
    <article className={`group relative flex flex-col ${className}`}>
      <div className="relative aspect-[630/580] overflow-hidden rounded-card">
        <SiteImage
          image={treatment.cardImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 78vw"
          className="transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-[1.03]"
        />
      </div>
      {label && <p className="label-caps numeric mt-4 text-sage-deep">{label}</p>}
      <Heading className={`${label ? "mt-1.5" : "mt-4"} font-serif text-[1.55rem] leading-tight text-olive`}>
        <Link href={`/seminyak/${treatment.slug}/`} className="after:absolute after:inset-0">
          {name}
        </Link>
      </Heading>
      {showDescription && treatment.shortDescription && (
        <p className="mt-2 text-small text-brown-ink">{treatment.shortDescription}</p>
      )}
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.5}
        className="absolute right-3 top-3 size-9 rounded-full bg-ivory/90 p-2 text-olive opacity-0 transition-opacity duration-(--duration-quick) group-hover:opacity-100"
      />
    </article>
  );
}
