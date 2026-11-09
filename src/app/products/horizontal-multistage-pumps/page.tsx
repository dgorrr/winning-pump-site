import type { Metadata } from "next";
import CategoryLandingPage from "@/components/CategoryLandingPage";
import { getCategoryPage } from "@/data/categoryPages";
import { SITE_URL } from "@/lib/siteUrl";

const category = getCategoryPage("horizontal-multistage-pumps")!;

export const metadata: Metadata = {
  title: { absolute: "Horizontal Multistage Centrifugal Pumps | Winning Pumps" },
  description: "Explore Winning Pumps' DW horizontal multistage centrifugal pump range, featuring stainless steel construction for high-head water supply and circulation duties.",
  alternates: { canonical: `${SITE_URL}/products/horizontal-multistage-pumps` },
};

export default function Page() {
  return <CategoryLandingPage slug={category.slug} />;
}
