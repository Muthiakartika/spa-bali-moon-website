import TextPageContent from "@/components/ui/TextPageContent";
import { termsPage } from "@/data/pages/terms-and-conditions";
import { buildMetadata } from "@/lib/seo";

/** /terms-and-conditions/ — text in src/data/pages/terms-and-conditions.ts */
export const metadata = buildMetadata({
  title: termsPage.seo.title,
  description: termsPage.seo.description,
  path: termsPage.path,
});

export default function TermsPage() {
  return <TextPageContent page={termsPage} />;
}
