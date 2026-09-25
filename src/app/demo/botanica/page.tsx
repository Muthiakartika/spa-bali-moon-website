import DemoSwitcher from "@/components/demo/DemoSwitcher";
import BotanicaFooter from "@/components/demo/botanica/BotanicaFooter";
import BotanicaHeader from "@/components/demo/botanica/BotanicaHeader";
import BotanicaHome from "@/components/demo/botanica/BotanicaHome";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMO C · BOTANICA (/demo/botanica/) — not indexed, not in the sitemap. */
export const metadata = buildMetadata({
  title: "Demo C · Botanica — Spa Bali Moon",
  description: "Homepage design demo: soft fashion-luxury.",
  path: "/demo/botanica/",
  index: false,
});

export default function BotanicaDemoPage() {
  return (
    <div className="demo-botanica bg-paper">
      <BotanicaHeader />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <BotanicaHome />
      </main>
      <BotanicaFooter />
      <FloatingWhatsApp />
      <DemoSwitcher current="/demo/botanica/" />
    </div>
  );
}
