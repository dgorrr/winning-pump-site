import type { Metadata } from "next";
import CategoryLandingPage from "@/components/CategoryLandingPage";
import { getCategoryPage } from "@/data/categoryPages";
import { SITE_URL } from "@/lib/siteUrl";

const category = getCategoryPage("vertical-multistage-pumps")!;

export const metadata: Metadata = {
  title: { absolute: "Vertical Multistage Pump Manufacturer | Winning Pumps" },
  description: "Explore DL vertical multistage inline pumps for water boosting, cooling and space-constrained installations, alongside YDL submerged pumps for machine-tool coolant, lubricating fluids and industrial cleaning equipment.",
  alternates: { canonical: `${SITE_URL}/products/vertical-multistage-pumps` },
};

export default function Page() {
  return <CategoryLandingPage slug={category.slug} />;
}
