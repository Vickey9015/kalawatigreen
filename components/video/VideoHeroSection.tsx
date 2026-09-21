import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import VideoFeaturedPlayer from "@/components/video/VideoFeaturedPlayer";
import { videoHeroImages, videoPageHeader, videoThemes } from "@/lib/video-content";

export default function VideoHeroSection() {
  return (
    <section className="relative overflow-hidden bg-kg-green-dark">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={videoHeroImages.backdrop}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-kg-green-dark via-kg-green-dark/95 to-kg-green/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(198,170,88,0.12),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <Reveal>
            <div className="max-w-xl lg:max-w-none">
              <p className="kg-eyebrow text-kg-gold-light">{videoPageHeader.eyebrow}</p>
              <h1 className="kg-display-title mt-4 text-3xl text-white sm:text-4xl lg:text-[2.85rem] lg:leading-[1.12]">
                {videoPageHeader.title}
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base">{videoPageHeader.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {videoThemes.map((theme) => (
                  <li key={theme}>
                    <span
                      className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm"
                    >
                      {theme}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 hidden flex-wrap gap-3 sm:flex">
                <Link href="/services/" className="kg-btn-gold">Explore spaces</Link>
                <Link
                  href="/contact?intent=event"
                  className="rounded-sm border border-white/45 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                >
                  Plan an event
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <VideoFeaturedPlayer priority />
          </Reveal>
        </div>

        <Reveal delayMs={160} className="mt-10 flex items-center gap-4 border-t border-white/15 pt-8 lg:mt-12">
          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/20 sm:h-16 sm:w-24">
            <Image src={videoHeroImages.accent} alt="" fill className="object-cover" sizes="96px" />
          </div>
          <p className="text-xs leading-6 text-white/70 sm:text-sm">
            <span className="font-semibold text-white/95">Immersive previews</span> — short films below play automatically
            as you scroll.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
