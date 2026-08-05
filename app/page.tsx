import type { Metadata } from "next";
import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import HomeContentPanel from "@/components/home/HomeContentPanel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { heroImage } from "@/lib/home-content";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/",
    title: "Kalawati Greens | A Forest. A Retreat. A Celebration.",
    description:
      "Forest-inspired luxury resort in Ambedkar Nagar — peaceful stays, grand celebrations, and immersive nature experiences.",
    imageUrl: heroImage,
  });
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HomeContentPanel />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
