import DetailPage from "@/components/treatments/DetailPage";
import { villaHotelPage } from "@/data/pages/villa-hotel-massage";
import { buildMetadata } from "@/lib/seo";

/** HOTEL & VILLA MASSAGE (/villa-hotel-massage/) — text in src/data/pages/villa-hotel-massage.ts */
export const metadata = buildMetadata({
  title: villaHotelPage.seo.title,
  description: villaHotelPage.seo.description,
  path: villaHotelPage.path,
  image: villaHotelPage.hero.image,
});

export default function VillaHotelMassagePage() {
  return <DetailPage page={villaHotelPage} source="Hotel & Villa Massage page" />;
}
