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
  title: {
    default: "Winning Pumps | Professional Water Pump Manufacturer",
    template: "%s | Winning Pumps",
  },
  description:
    "Winning Pumps (胜利水泵) is a leading Chinese manufacturer of submersible, centrifugal, and booster pumps for global B2B clients. OEM/ODM available.",
  keywords: [
    "water pump",
    "submersible pump",
    "centrifugal pump",
    "booster pump",
    "China pump manufacturer",
    "B2B pumps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
