import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased font-smooth">
        {children}
      </body>
    </html>
  );
}
