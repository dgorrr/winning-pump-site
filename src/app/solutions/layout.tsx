import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Pumping Solutions",
  description:
    "Explore engineered pump solutions for industrial, commercial, and OEM applications, including fluid transfer, wastewater, water supply, circulation, and other demanding pumping requirements.",
  alternates: {
    canonical: "https://www.winningpump.com/solutions",
  },
  openGraph: {
    title: "Water Pumping Solutions | Winning Pumps",
    description:
      "Explore engineered pump solutions for industrial, commercial, and OEM applications, including fluid transfer, wastewater, water supply, circulation, and other demanding pumping requirements.",
    url: "https://www.winningpump.com/solutions",
    siteName: "Winning Pumps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Pumping Solutions | Winning Pumps",
    description:
      "Explore engineered pump solutions for industrial, commercial, and OEM applications, including fluid transfer, wastewater, water supply, circulation, and other demanding pumping requirements.",
  },
};

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}