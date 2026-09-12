import type { Metadata } from "next";
import BookingBand from "@/components/home/BookingBand";
import BlogSection from "@/components/home/BlogSection";
import EventsSection from "@/components/home/EventsSection";
import ExperiencePillarsSection from "@/components/home/ExperiencePillarsSection";
import HeroSection from "@/components/home/HeroSection";
import MomentsPreviewSection from "@/components/home/MomentsPreviewSection";
import SpacesCarousel from "@/components/home/SpacesCarousel";
import StatsBar from "@/components/home/StatsBar";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideoGallerySection from "@/components/home/VideoGallerySection";
import VisitSection from "@/components/home/VisitSection";
import WelcomeSection from "@/components/home/WelcomeSection";
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
      <main className="kg-home-main">
        <HeroSection />
        <StatsBar />
        <WelcomeSection />
        <ExperiencePillarsSection />
        <SpacesCarousel />
        <BookingBand />
        <VideoGallerySection />
        <MomentsPreviewSection />
        <TestimonialsSection />
        <EventsSection />
        <VisitSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
