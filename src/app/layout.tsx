import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.winningpump.com"),
  applicationName: "Winning Pumps",
  title: {
    default: "Winning Pumps | Professional Water Pump Manufacturer",
    template: "%s | Winning Pumps",
  },
  description:
    "Winning Pumps is a China-based manufacturer of stainless steel centrifugal, submersible, booster, and industrial water pumps for global B2B buyers. OEM and ODM support available.",
  keywords: [
    "water pump manufacturer",
    "stainless steel centrifugal pump",
    "submersible pump",
    "booster pump",
    "industrial water pump",
    "China pump manufacturer",
    "OEM pump manufacturer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Winning Pumps",
    title: "Winning Pumps | Professional Water Pump Manufacturer",
    description:
      "China-based manufacturer of stainless steel centrifugal, submersible, booster, and industrial water pumps for global B2B buyers.",
    locale: "en_US",
    images: [{ url: "/images/hero-carousel-1.webp", alt: "Winning Pumps manufacturing facility" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winning Pumps | Professional Water Pump Manufacturer",
    description: "China-based manufacturer of industrial water pumps for global B2B buyers.",
    images: ["/images/hero-carousel-1.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
