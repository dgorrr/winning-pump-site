import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pump Manufacturing & OEM Capabilities",
  description:
    "Explore Winning Pumps' manufacturing capabilities, from stainless steel forming and pump assembly to engineering, production, and quality control for global OEM and ODM partners.",
  alternates: {
    canonical: "https://www.winningpump.com/factory",
  },
  openGraph: {
    title: "Pump Manufacturing & OEM Capabilities | Winning Pumps",
    description:
      "Explore Winning Pumps' manufacturing capabilities, from stainless steel forming and pump assembly to engineering, production, and quality control for global OEM and ODM partners.",
    url: "https://www.winningpump.com/factory",
    siteName: "Winning Pumps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pump Manufacturing & OEM Capabilities | Winning Pumps",
    description:
      "Explore Winning Pumps' manufacturing capabilities, from stainless steel forming and pump assembly to engineering, production, and quality control for global OEM and ODM partners.",
  },
};

export default function FactoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}