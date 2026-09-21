import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { aboutHeroImages, aboutIntro } from "@/lib/about-content";

export default function AboutIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(13,74,56,0.06),transparent_60%)]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div>
            <p className="kg-eyebrow">{aboutIntro.eyebrow}</p>
            <h1 className="kg-display-title kg-home-section-title mt-3 text-kg-green-dark sm:mt-4">
              {aboutIntro.title}
            </h1>
            <p className="mt-2 font-serif text-xl leading-snug text-kg-green sm:mt-3 sm:text-2xl lg:text-[1.65rem]">
              {aboutIntro.tagline}
            </p>
            <p className="mt-4 text-sm leading-7 text-kg-muted sm:mt-6 sm:max-w-xl sm:text-base">{aboutIntro.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link href="/services/" className="kg-btn-primary w-full justify-center sm:w-auto">
                Explore our spaces
              </Link>
              <Link href="/contact/" className="kg-btn-secondary w-full justify-center sm:w-auto">
                Plan your visit
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="relative order-1 mx-auto w-full max-w-md sm:max-w-lg lg:order-2 lg:max-w-none">
          <div className="relative min-h-[18rem] sm:min-h-[26rem]">
            <div className="absolute inset-[6%_8%_0_0] overflow-hidden rounded-2xl border border-kg-green/12 shadow-xl sm:inset-[8%_12%_0_0] sm:rounded-[1.75rem]">
              <Image
                src={aboutHeroImages.primary}
                alt="Lush lawns at Kalawati Greens"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 42vw"
                priority
              />
            </div>
            <div className="absolute right-0 top-0 z-[1] h-[38%] w-[44%] overflow-hidden rounded-xl border-[3px] border-white shadow-lg sm:h-[42%] sm:w-[48%] sm:rounded-2xl sm:border-4">
              <Image
                src={aboutHeroImages.secondary}
                alt="Cottages nestled in greenery"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, 240px"
              />
            </div>
            <div className="absolute bottom-4 left-2 z-[2] max-w-[11rem] rounded-xl border border-kg-gold/35 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-4 sm:max-w-[12rem] sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-kg-gold sm:text-[0.65rem] sm:tracking-[0.18em]">
                Forest-first
              </p>
              <p className="mt-0.5 text-xs font-semibold leading-snug text-kg-green-dark sm:mt-1 sm:text-sm">
                Nature is the foundation of every experience.
              </p>
            </div>
            <div className="absolute -bottom-2 -right-2 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-md sm:block">
              <Image src={aboutHeroImages.accent} alt="" fill className="object-cover" sizes="112px" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
