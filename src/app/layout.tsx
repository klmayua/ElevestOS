import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "ElevestOS - NGO Operating System",
  description: "Streamline funding applications, compliance, reporting, and funder relationships for NGOs",
  keywords: ["NGO", "funding", "grants", "compliance", "reporting", "operations"],
  authors: [{ name: "Elevest Labs" }],
  creator: "Elevest Labs",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${publicSans.variable}`}>
      <body className="font-sans antialiased bg-background min-h-screen">
        {children}
      </body>
    </html>
  );
}
