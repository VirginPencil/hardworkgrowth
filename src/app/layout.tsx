import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HARDWORKGROWTH | Websites + Ads + AI for Service Businesses",
  description:
    "High-performance websites, precision ad campaigns, and AI automation for roofing, HVAC, dental, med spa, and plumbing businesses. Stop losing leads. Start scaling.",
  keywords: [
    "digital marketing agency",
    "contractor website design",
    "HVAC marketing",
    "roofing leads",
    "dental marketing",
    "med spa marketing",
    "AI automation",
    "lead generation",
  ],
  openGraph: {
    title: "HARDWORKGROWTH | Digital Infrastructure for Service Businesses",
    description:
      "Websites + Ads + AI Automation engineered for the trades. We build growth engines for businesses that do the hard work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
