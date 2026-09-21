import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { galleryHeroImages, galleryPageHeader } from "@/lib/gallery-content";

export default function MomentsHeroSection() {
  return (
    <section className="border-b border-kg-green/10 bg-white pb-8 pt-8 sm:pb-10 sm:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kg-eyebrow">The gallery</p>
            <h1 className="kg-display-title mt-4 text-4xl text-kg-green-dark sm:text-5xl lg:text-[3.15rem]">
              {galleryPageHeader.title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-kg-muted sm:text-base">{galleryPageHeader.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="mt-10">
          <div className="grid gap-3 sm:grid-cols-12 sm:gap-4">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-kg-green/12 shadow-md sm:col-span-7 sm:aspect-auto sm:min-h-[20rem]">
              <Image
                src={galleryHeroImages.feature}
                alt="Celebration on the lawn at Kalawati Greens"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 58vw"
                priority
              />
            </div>
            <div className="grid gap-3 sm:col-span-5 sm:grid-rows-2 sm:gap-4">
              <div className="relative min-h-[10rem] overflow-hidden rounded-2xl border border-kg-green/12 shadow-md sm:min-h-0">
                <Image
                  src={galleryHeroImages.pool}
                  alt="Pool surrounded by greenery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
              <div className="relative min-h-[10rem] overflow-hidden rounded-2xl border border-kg-green/12 shadow-md sm:min-h-0">
                <Image
                  src={galleryHeroImages.celebration}
                  alt="Wedding celebration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={160} className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
          <p className="text-center text-xs text-kg-muted sm:text-left">
            Filter by mood below — or plan your own story with us.
          </p>
          <Link href="/contact" className="kg-btn-primary px-8 py-3">Plan your celebration</Link>
        </Reveal>
      </div>
    </section>
  );
}
