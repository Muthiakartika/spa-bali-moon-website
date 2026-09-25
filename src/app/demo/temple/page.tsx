import DemoSwitcher from "@/components/demo/DemoSwitcher";
import TempleFooter from "@/components/demo/temple/TempleFooter";
import TempleHeader from "@/components/demo/temple/TempleHeader";
import TempleHome from "@/components/demo/temple/TempleHome";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMO B · TEMPLE (/demo/temple/) — not indexed, not in the sitemap. */
export const metadata = buildMetadata({
  title: "Demo B · Temple — Spa Bali Moon",
  description: "Homepage design demo: cinematic Bali, light.",
  path: "/demo/temple/",
  index: false,
});

export default function TempleDemoPage() {
  return (
    <div className="demo-temple bg-paper">
      <TempleHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <TempleHome />
      </main>
      <TempleFooter />
      <FloatingWhatsApp />
      <DemoSwitcher current="/demo/temple/" />
    </div>
  );
}
