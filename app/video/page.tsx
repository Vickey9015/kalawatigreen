import type { Metadata } from "next";
import VideoPageContent from "@/components/video/VideoPageContent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { seoForRoute } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return seoForRoute({
    pathname: "/video",
    title: "Video Section | Kalawati Greens",
    description:
      "Watch and experience Kalawati Greens — a forest-inspired retreat in Ambedkar Nagar.",
    imageUrl: "/images/top_bg_image.png",
  });
}

export default function VideoPage() {
  return (
    <>
      <Navbar />
      <main>
        <VideoPageContent />
      </main>
      <Footer />
    </>
  );
}
