import DetailPage from "@/components/treatments/DetailPage";
import { kutaPage } from "@/data/pages/massage-kuta";
import { buildMetadata } from "@/lib/seo";

/** MASSAGE KUTA (/massage-kuta/) — text in src/data/pages/massage-kuta.ts */
export const metadata = buildMetadata({
  title: kutaPage.seo.title,
  description: kutaPage.seo.description,
  path: kutaPage.path,
  image: kutaPage.hero.image,
});

export default function MassageKutaPage() {
  return <DetailPage page={kutaPage} source="Massage Kuta page" />;
}
