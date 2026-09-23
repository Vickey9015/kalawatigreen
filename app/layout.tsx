import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Kalawati Greens | A Forest. A Retreat. A Celebration.",
  description:
    "Forest-inspired luxury resort in Ambedkar Nagar — peaceful stays, grand celebrations, and immersive nature experiences.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-icon.png?v=2",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
