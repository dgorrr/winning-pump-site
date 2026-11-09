import type { Metadata } from "next";
import CategoryLandingPage from "@/components/CategoryLandingPage";
import { getCategoryPage } from "@/data/categoryPages";
import { SITE_URL } from "@/lib/siteUrl";

const category = getCategoryPage("inline-circulation-pumps")!;

export const metadata: Metadata = {
  title: { absolute: "Inline Pipeline & Circulation Pumps | Winning Pumps" },
  description: "Explore GD, TD and TDW inline pumps for heating, cooling and water circulation, including TDW's back-pull motor design for maintenance. TP vertical inline pipeline pumps serve water supply, drainage and industrial systems.",
  alternates: { canonical: `${SITE_URL}/products/inline-circulation-pumps` },
};

export default function Page() {
  return <CategoryLandingPage slug={category.slug} />;
}
