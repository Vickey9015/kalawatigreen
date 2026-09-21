import Image from "next/image";
import Link from "next/link";
import { featuredVideoId } from "@/lib/video-content";

export default function VideoFeaturedPlayer({ priority }: { priority?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-[1.25rem] bg-black shadow-[0_24px_80px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/15 sm:rounded-[1.5rem]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-kg-gold/20 blur-3xl" aria-hidden />
      {featuredVideoId ? (
        <div className="relative aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=0&mute=0&playsinline=1&rel=0&modestbranding=1`}
            title="Kalawati Greens featured film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : (
        <div className="relative aspect-video w-full">
          <Image
            src="/images/top_bg_image.png"
            alt="Kalawati Greens resort preview"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/85 via-kg-green-dark/35 to-kg-green-dark/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-md sm:h-16 sm:w-16"
              aria-hidden
            >
              <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 7.5v9l8-4.5-8-4.5z" />
              </svg>
            </span>
            <p className="kg-on-image mt-4 max-w-xs text-sm text-white/92 sm:text-base">
              Featured film coming soon — preview the clips below.
            </p>
            <Link href="/moments/" className="kg-btn-gold mt-5">View moments</Link>
          </div>
        </div>
      )}
    </div>
  );
}
