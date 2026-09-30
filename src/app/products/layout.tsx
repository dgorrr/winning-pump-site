import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Pump Products",
  description:
    "Explore Winning Pumps' range of stainless steel centrifugal pumps, vertical multistage pumps, pipeline boosters, and submersible sewage pumps for industrial, commercial, and OEM applications.",
  alternates: {
    canonical: "https://www.winningpump.com/products",
  },
  openGraph: {
    title: "Industrial Pump Products | Winning Pumps",
    description:
      "Explore Winning Pumps' range of stainless steel centrifugal pumps, vertical multistage pumps, pipeline boosters, and submersible sewage pumps for industrial, commercial, and OEM applications.",
    url: "https://www.winningpump.com/products",
    siteName: "Winning Pumps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Pump Products | Winning Pumps",
    description:
      "Explore Winning Pumps' range of stainless steel centrifugal pumps, vertical multistage pumps, pipeline boosters, and submersible sewage pumps for industrial, commercial, and OEM applications.",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}