import type { Metadata } from "next";
import CategoryLandingPage from "@/components/CategoryLandingPage";
import { getCategoryPage } from "@/data/categoryPages";
import { SITE_URL } from "@/lib/siteUrl";

const category = getCategoryPage("submersible-sewage-pumps")!;

export const metadata: Metadata = {
  title: { absolute: "Submersible Sewage Pump Manufacturer | Winning Pumps" },
  description: "Submersible sewage pumps including cutting models (ASWQ-D), channel designs with up to 100 mm solids passage (WQ-CG), and explosion-proof options (BWQ-G) for wastewater treatment.",
  alternates: { canonical: `${SITE_URL}/products/submersible-sewage-pumps` },
};

export default function Page() {
  return <CategoryLandingPage slug={category.slug} />;
}
