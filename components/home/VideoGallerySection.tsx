import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { homeVideos } from "@/lib/home-content";

export default function VideoGallerySection() {
  return (
    <section className="bg-kg-green-dark px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="kg-eyebrow text-kg-gold-light">Cinematic glimpses</p>
          <h2 className="kg-serif-heading mt-4 text-4xl text-white sm:text-5xl">Experience Kalawati Greens</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {homeVideos.map((video, index) => (
            <li key={video.title}>
              <Reveal delayMs={index * 80}>
                <Link href="/video" className="group relative block overflow-hidden rounded-[1.5rem]">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={video.image}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-kg-green-dark/25" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/15 text-white backdrop-blur-md">
                      <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M9 7.5v9l8-4.5-8-4.5z" />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-4 text-sm tracking-[0.12em] uppercase text-white/90">{video.title}</p>
                </Link>
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
