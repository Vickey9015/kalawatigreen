import type { Metadata } from "next";
import AboutClosingBanner from "@/components/about/AboutClosingBanner";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutValuesSection from "@/components/about/AboutValuesSection";
import StoryMissionVisionSection from "@/components/about/StoryMissionVisionSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { aboutClosingImage } from "@/lib/about-content";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/about",
    title: "About Kalawati Greens | Bringing Nature to You",
    description:
      "Discover the story, mission, and values behind Kalawati Greens — a forest-inspired eco-luxury retreat in Ambedkar Nagar.",
    imageUrl: aboutClosingImage,
  });
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutIntroSection />
        <StoryMissionVisionSection />
        <AboutValuesSection />
        <AboutClosingBanner />
      </main>
      <Footer />
    </>
  );
}
