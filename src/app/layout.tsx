import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElevestOS - NGO Operating System",
  description: "Streamline funding applications, compliance, reporting, and funder relationships for NGOs",
  keywords: ["NGO", "funding", "grants", "compliance", "reporting", "operations"],
  authors: [{ name: "Elevest Labs" }],
  creator: "Elevest Labs",
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
    <html lang="en" className="font-sans antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Public+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background min-h-screen">
        {children}
      </body>
    </html>
  );
}
