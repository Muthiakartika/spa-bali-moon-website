import DemoSwitcher from "@/components/demo/DemoSwitcher";
import TirtaFooter from "@/components/demo/tirta/TirtaFooter";
import TirtaHeader from "@/components/demo/tirta/TirtaHeader";
import TirtaHome from "@/components/demo/tirta/TirtaHome";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMO D · TIRTA (/demo/tirta/) — not indexed, not in the sitemap. */
export const metadata = buildMetadata({
  title: "Demo D · Tirta — Spa Bali Moon",
  description: "Homepage design demo: a calm Bali day spa.",
  path: "/demo/tirta/",
  index: false,
});

export default function TirtaDemoPage() {
  return (
    <div className="demo-tirta bg-paper">
      <TirtaHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <TirtaHome />
      </main>
      <TirtaFooter />
      <FloatingWhatsApp />
      <DemoSwitcher current="/demo/tirta/" />
    </div>
  );
}
