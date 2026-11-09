import type { Metadata } from "next";
import CategoryLandingPage from "@/components/CategoryLandingPage";
import { getCategoryPage } from "@/data/categoryPages";
import { SITE_URL } from "@/lib/siteUrl";

const category = getCategoryPage("end-suction-pumps")!;

export const metadata: Metadata = {
  title: { absolute: "Stainless Steel End Suction Centrifugal Pumps | Winning Pumps" },
  description: "Stainless steel end suction pumps (GZA and DZA series) with 304 or 316 wetted parts; DZA models comply with DIN 24255 for industrial water transfer and boosting.",
  alternates: { canonical: `${SITE_URL}/products/end-suction-pumps` },
};

export default function Page() {
  return <CategoryLandingPage slug={category.slug} />;
}
