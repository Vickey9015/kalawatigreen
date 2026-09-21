import Link from "next/link";
import Reveal from "@/components/Reveal";
import VideoGalleryCard from "@/components/home/VideoGalleryCard";
import { homeVideos } from "@/lib/home-content";

export default function VideoGallerySection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="kg-eyebrow">Cinematic glimpses</p>
          <h2 className="kg-serif-heading kg-home-section-title mt-4 text-kg-green-dark">Experience Kalawati Greens</h2>
        </Reveal>
        <ul className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {homeVideos.map((video, index) => (
            <li key={video.title}>
              <Reveal delayMs={index * 80}>
                <VideoGalleryCard video={video} />
              </Reveal>
            </li>
          ))}
        </ul>
        <Link href="/video" className="kg-btn-gold mt-10">
          Explore all films
        </Link>
      </div>
    </section>
  );
}
