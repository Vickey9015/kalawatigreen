import type { Metadata } from "next";
import GalleryPageContent from "@/components/gallery/GalleryPageContent";
import MomentsHeroSection from "@/components/gallery/MomentsHeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/moments",
    title: "Kalawati Moments",
    description:
      "Explore moments captured at Kalawati Greens — weddings, lawns, cottages, poolside views, dining, and night ambience.",
    imageUrl: "/images/gallery/moment-01.png",
  });
}

export default function MomentsPage() {
  return (
    <>
      <Navbar />
      <main className="kg-home-main">
        <MomentsHeroSection />
        <GalleryPageContent />
      </main>
      <Footer />
    </>
  );
}
