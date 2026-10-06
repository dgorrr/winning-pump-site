import type { Metadata } from "next";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Winning Pumps",
  legalName: "Guangdong Winning Pumps Industrial Co., Ltd.",
  url: "https://www.winningpump.com",
  description:
    "Guangdong Winning Pumps Industrial Co., Ltd. is a China-based manufacturer of stainless steel centrifugal pumps and industrial water pumping solutions for global B2B buyers.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Longtoushan Industrial Zone, BeiGuan Town, Yangdong District",
    addressLocality: "Yangjiang City",
    addressRegion: "Guangdong Province",
    postalCode: "529932",
    addressCountry: "CN",
  },
  telephone: "+86 662 8886888",
  email: "727599117@qq.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86 662 8886888",
    email: "727599117@qq.com",
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