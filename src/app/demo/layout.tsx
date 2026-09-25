import { bodoni, cormorant, gilda, jost, literata, marcellus, mulish } from "@/components/demo/fonts";
import "./demo.css";

/** Layout for the homepage design demos: loads the demo fonts (only on these pages). */
export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${cormorant.variable} ${jost.variable} ${marcellus.variable} ${bodoni.variable} ${gilda.variable} ${mulish.variable} ${literata.variable}`}>{children}</div>;
}
