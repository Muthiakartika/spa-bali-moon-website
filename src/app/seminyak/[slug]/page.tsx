import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailPage from "@/components/treatments/DetailPage";
import { getTreatment, treatments } from "@/data/treatments";
import { buildMetadata } from "@/lib/seo";

/**
 * Treatment pages: /seminyak/balinese-massage/, /seminyak/facial/, …
 * One file serves all of them; the content comes from src/data/treatments/<slug>.ts.
 */

type Props = { params: Promise<{ slug: string }> };

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

  return (
    <DetailPage
      page={treatment}
      treatmentName={treatment.name}
      source={`${treatment.name} page`}
      currentSlug={treatment.slug}
    />
  );
}
