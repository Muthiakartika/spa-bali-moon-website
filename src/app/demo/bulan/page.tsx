import DemoSwitcher from "@/components/demo/DemoSwitcher";
import BulanFooter from "@/components/demo/bulan/BulanFooter";
import BulanHeader from "@/components/demo/bulan/BulanHeader";
import BulanHome from "@/components/demo/bulan/BulanHome";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMO F · BULAN (/demo/bulan/) — Taman mixed with the live site. Not indexed, not in the sitemap. */
export const metadata = buildMetadata({
  title: "Demo F · Bulan — Spa Bali Moon",
  description: "Homepage design demo: Taman mixed with the live website.",
  path: "/demo/bulan/",
  index: false,
});

export default function BulanDemoPage() {
  return (
    <div className="demo-bulan bg-paper">
      <BulanHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <BulanHome />
      </main>
      <BulanFooter />
      <FloatingWhatsApp />
      <DemoSwitcher current="/demo/bulan/" />
    </div>
  );
}
