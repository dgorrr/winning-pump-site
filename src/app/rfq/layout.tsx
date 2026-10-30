import type { Metadata } from "next";

const description =
  "Request a pump quote by selecting a pump series and submitting your contact details, business profile, and technical requirements.";

export const metadata: Metadata = {
  title: {
    absolute: "Request a Pump Quote | Winning Pumps",
  },
  description,
  alternates: {
    canonical: "https://www.winningpump.com/rfq",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.winningpump.com/rfq",
    siteName: "Winning Pumps",
    title: "Request a Pump Quote | Winning Pumps",
    description,
  },
};

export default function RFQLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
