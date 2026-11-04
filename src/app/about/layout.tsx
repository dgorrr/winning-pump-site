import type { Metadata } from "next";
import { company } from "@/data/company";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brandName,
  legalName: company.legalName,
  foundingDate: String(company.founded),
  url: "https://www.winningpump.com",
  description:
    "Guangdong Winning Pumps Industrial Co., Ltd. is a China-based manufacturer of stainless steel centrifugal pumps and industrial water pumping solutions for global B2B buyers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.location.address,
    addressLocality: `${company.location.city} City`,
    addressRegion: company.location.province,
    postalCode: company.location.postalCode,
    addressCountry: company.location.country === "China" ? "CN" : company.location.country,
  },
  telephone: "+86 662 8886888",
  email: "globalmarketing@wpump.cn",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86 662 8886888",
    email: "globalmarketing@wpump.cn",
    contactType: "sales",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "stainless steel centrifugal pumps",
    "industrial water pumps",
    "pump manufacturing",
    "OEM pump manufacturing",
    "ODM pump manufacturing",
  ],
  mainEntityOfPage: "https://www.winningpump.com/about",
};

export const metadata: Metadata = {
  title: "31+ Years of Stainless Steel Pump Manufacturing",
  description:
    "Learn about Winning Pumps, a stainless steel pump manufacturer with more than 30 years of manufacturing experience, international patent development, and engineering expertise serving global markets.",
  alternates: {
    canonical: "https://www.winningpump.com/about",
  },
  openGraph: {
    title: "31+ Years of Stainless Steel Pump Manufacturing | Winning Pumps",
    description:
      "Learn about Winning Pumps, a stainless steel pump manufacturer with more than 30 years of manufacturing experience, international patent development, and engineering expertise serving global markets.",
    url: "https://www.winningpump.com/about",
    siteName: "Winning Pumps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "31+ Years of Stainless Steel Pump Manufacturing | Winning Pumps",
    description:
      "Learn about Winning Pumps, a stainless steel pump manufacturer with more than 30 years of manufacturing experience, international patent development, and engineering expertise serving global markets.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {children}
    </>
  );
}
