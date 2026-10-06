import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Winning Pumps | 31+ Years of Manufacturing",
  description:
    "Learn about Winning Pumps, a stainless steel pump manufacturer with more than 30 years of manufacturing experience, international patent development, and engineering expertise serving global markets.",
  alternates: {
    canonical: "https://www.winningpump.com/about",
  },
  openGraph: {
    title: "About Winning Pumps | 31+ Years of Manufacturing",
    description:
      "Learn about Winning Pumps, a stainless steel pump manufacturer with more than 30 years of manufacturing experience, international patent development, and engineering expertise serving global markets.",
    url: "https://www.winningpump.com/about",
    siteName: "Winning Pumps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Winning Pumps | 31+ Years of Manufacturing",
    description:
      "Learn about Winning Pumps, a stainless steel pump manufacturer with more than 30 years of manufacturing experience, international patent development, and engineering expertise serving global markets.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}