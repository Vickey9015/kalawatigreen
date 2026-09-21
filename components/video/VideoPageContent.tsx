import VideoClosingBanner from "@/components/video/VideoClosingBanner";
import VideoFilmsSection from "@/components/video/VideoFilmsSection";
import VideoHeroSection from "@/components/video/VideoHeroSection";
import VideoHighlightsSection from "@/components/video/VideoHighlightsSection";

export default function VideoPageContent() {
  return (
    <>
      <VideoHeroSection />
      <VideoHighlightsSection />
      <VideoFilmsSection />
      <VideoClosingBanner />
    </>
  );
}
