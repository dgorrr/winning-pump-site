import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pump Manufacturer & Engineering Team",
  description:
    "Contact Guangdong Winning Pumps Industrial Co., Ltd. for pump selection, technical support, factory-direct quotations, and OEM/ODM cooperation.",
  alternates: {
    canonical: "https://www.winningpump.com/contact",
  },
  openGraph: {
    title: "Contact Pump Manufacturer & Engineering Team | Winning Pumps",
    description:
      "Contact our engineering team for pump selection, technical support, factory-direct quotations, and OEM/ODM cooperation.",
    url: "https://www.winningpump.com/contact",
    siteName: "Winning Pumps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pump Manufacturer & Engineering Team | Winning Pumps",
    description:
      "Contact our engineering team for pump selection, technical support, factory-direct quotations, and OEM/ODM cooperation.",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}