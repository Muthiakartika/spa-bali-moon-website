import TextPageContent from "@/components/ui/TextPageContent";
import { wellnessPage } from "@/data/pages/wellness-in-bali";
import { buildMetadata } from "@/lib/seo";

/** /wellness-in-bali/ — text in src/data/pages/wellness-in-bali.ts */
export const metadata = buildMetadata({
  title: wellnessPage.seo.title,
  description: wellnessPage.seo.description,
  path: wellnessPage.path,
});

export default function WellnessPage() {
  return <TextPageContent page={wellnessPage} />;
}
