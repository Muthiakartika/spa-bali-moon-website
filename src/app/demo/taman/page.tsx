import DemoSwitcher from "@/components/demo/DemoSwitcher";
import TamanFooter from "@/components/demo/taman/TamanFooter";
import TamanHeader from "@/components/demo/taman/TamanHeader";
import TamanHome from "@/components/demo/taman/TamanHome";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMO E · TAMAN (/demo/taman/) — Botanica + Tirta combined. Not indexed, not in the sitemap. */
export const metadata = buildMetadata({
  title: "Demo E · Taman — Spa Bali Moon",
  description: "Homepage design demo: Botanica and Tirta combined.",
  path: "/demo/taman/",
  index: false,
});

export default function TamanDemoPage() {
  return (
    <div className="demo-taman bg-paper">
      <TamanHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <TamanHome />
      </main>
      <TamanFooter />
      <FloatingWhatsApp />
      <DemoSwitcher current="/demo/taman/" />
    </div>
  );
}
