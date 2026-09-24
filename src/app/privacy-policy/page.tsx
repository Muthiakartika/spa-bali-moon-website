import TextPageContent from "@/components/ui/TextPageContent";
import { privacyPolicyPage } from "@/data/pages/privacy-policy";
import { buildMetadata } from "@/lib/seo";

/** /privacy-policy/ — text in src/data/pages/privacy-policy.ts */
export const metadata = buildMetadata({
  title: privacyPolicyPage.seo.title,
  description: privacyPolicyPage.seo.description,
  path: privacyPolicyPage.path,
});

export default function PrivacyPolicyPage() {
  return <TextPageContent page={privacyPolicyPage} />;
}
