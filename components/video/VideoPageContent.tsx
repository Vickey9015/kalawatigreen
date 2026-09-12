import Image from "next/image";
import Link from "next/link";
import { featuredVideoId, videoHighlights, videoPageHeader } from "@/lib/video-content";

export default function VideoPageContent() {
  return (
    <>
      <section className="bg-kg-cream px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="kg-section-title">{videoPageHeader.title}</p>
          <h1 className="kg-serif-heading mt-3 text-3xl font-medium text-kg-green sm:text-4xl">
            {videoPageHeader.subtitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-kg-muted sm:text-base">
            {videoPageHeader.description}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-kg-green/15 bg-white shadow-lg">
          {featuredVideoId ? (
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                title="Kalawati Greens video"
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
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 56rem"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/75 px-6 text-center backdrop-blur-sm">
                <p className="text-sm text-kg-muted sm:text-base">
                  Video coming soon. Explore our gallery and spaces in the meantime.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link href="/moments" className="kg-btn-primary">
                    View Gallery
                  </Link>
                  <Link href="/services" className="kg-btn-secondary">
                    Explore Spaces
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          {videoHighlights.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-xl border border-kg-green/15 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.title} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="px-4 py-3">
                <h2 className="text-sm font-bold text-kg-green">{item.title}</h2>
                <p className="mt-1 text-xs text-kg-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
