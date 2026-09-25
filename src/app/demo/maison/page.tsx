import DemoSwitcher from "@/components/demo/DemoSwitcher";
import MaisonFooter from "@/components/demo/maison/MaisonFooter";
import MaisonHeader from "@/components/demo/maison/MaisonHeader";
import MaisonHome from "@/components/demo/maison/MaisonHome";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMO A · MAISON (/demo/maison/) — not indexed, not in the sitemap. */
export const metadata = buildMetadata({
  title: "Demo A · Maison — Spa Bali Moon",
  description: "Homepage design demo: editorial luxury.",
  path: "/demo/maison/",
  index: false,
});

export default function MaisonDemoPage() {
  return (
    <div className="demo-maison bg-paper">
      <MaisonHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <MaisonHome />
      </main>
      <MaisonFooter />
      <FloatingWhatsApp />
      <DemoSwitcher current="/demo/maison/" />
    </div>
  );
}
