import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "ElevestOS — The Operating System for NGOs & Development Programs",
    template: "%s — ElevestOS",
  },
  description:
    "ElevestOS brings grants, projects, reporting, compliance, partnerships, institutional memory and operational workflows into a single operating environment for NGOs, foundations and development programs.",
  keywords: [
    "NGO operating system",
    "grant management",
    "NGO compliance",
    "funding platform",
    "development programs",
    "NGO reporting",
    "NGO operations",
  ],
  authors: [{ name: "Elevest Labs" }],
  creator: "Elevest Development & Labs",
  metadataBase: new URL("https://elevestos.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ElevestOS",
    title: "ElevestOS — The Operating System for NGOs & Development Programs",
    description:
      "ElevestOS brings grants, projects, reporting, compliance, partnerships, institutional memory and operational workflows into a single operating environment.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased font-smooth">
        {children}
      </body>
    </html>
  );
}
