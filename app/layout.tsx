import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kalawatigreens.vickeybuilds.com"),
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
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${cormorantGaramond.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
