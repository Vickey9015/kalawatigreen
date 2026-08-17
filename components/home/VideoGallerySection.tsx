import Image from "next/image";
import Link from "next/link";
import { homeVideos } from "@/lib/home-content";

export default function VideoGallerySection() {
  return (
    <section className="bg-kg-green-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="kg-serif-heading text-4xl font-semibold text-white sm:text-5xl">
          Experience Kalawati Greens
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {homeVideos.map((video) => (
            <li key={video.title}>
              <Link href="/video" className="group relative block overflow-hidden rounded-md">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-kg-green-dark/30" />
                  <span className="kg-play-btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                    <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 7.5v9l8-4.5-8-4.5z" />
                    </svg>
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-white">{video.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/video" className="kg-btn-gold mt-10">
          Explore All Videos
        </Link>
      </div>
    </section>
  );
}
