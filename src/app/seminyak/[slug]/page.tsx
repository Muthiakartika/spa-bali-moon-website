import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/treatments/DetailPage";
import SpaTreatmentPage from "@/components/treatments/spa/SpaTreatmentPage";
import { getTreatment, treatments } from "@/data/treatments";
import { buildMetadata } from "@/lib/seo";

/**
 * Treatment pages: /seminyak/balinese-massage/, /seminyak/facial/, …
 * One file serves all of them; the content comes from src/data/treatments/<slug>.ts.
 */

type Props = { params: Promise<{ slug: string }> };

/**
 * Treatment pages that already use the redesigned spa template (SpaTreatmentPage).
 * Add a slug here to switch that page over; all others still use DetailPage.
 */
const SPA_TEMPLATE_SLUGS = new Set(["balinese-massage"]);

// Build every treatment page ahead of time (fast, and good for SEO).
export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

// Any other /seminyak/<something>/ address shows the 404 page.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return buildMetadata({
    title: treatment.seo.title,
    description: treatment.seo.description,
    path: `/seminyak/${treatment.slug}/`,
    image: treatment.hero.image,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const Template = SPA_TEMPLATE_SLUGS.has(treatment.slug) ? SpaTreatmentPage : DetailPage;
  return (
    <Template
      page={treatment}
      treatmentName={treatment.name}
      source={`${treatment.name} page`}
      currentSlug={treatment.slug}
    />
  );
}
