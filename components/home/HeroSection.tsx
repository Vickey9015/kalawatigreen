"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { heroHeadline, heroSlides, heroSubtitle } from "@/lib/home-content";
import HomeArrowButton from "./HomeArrowButton";

/** Shared diagonal seams — same slope, equal average panel width. */
const SEAM_1 = { top: 40.33, bottom: 26.33 };
const SEAM_2 = { top: 73.67, bottom: 59.67 };

const paneClips = [
  `polygon(0 0, ${SEAM_1.top}% 0, ${SEAM_1.bottom}% 100%, 0 100%)`,
  `polygon(${SEAM_1.top}% 0, ${SEAM_2.top}% 0, ${SEAM_2.bottom}% 100%, ${SEAM_1.bottom}% 100%)`,
  `polygon(${SEAM_2.top}% 0, 100% 0, 100% 100%, ${SEAM_2.bottom}% 100%)`,
] as const;

const objectPositions = ["left center", "center center", "right center"] as const;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const count = heroSlides.length;
  const slide = heroSlides[active];
  const mobileImage = slide.panels[1] ?? slide.panels[0];

  const go = (step: number) => {
    setActive((current) => (current + step + count) % count);
  };

  return (
    <section className="relative overflow-hidden bg-kg-green-dark">
      <div className="relative h-[min(56dvh,22rem)] min-h-[18.5rem] sm:h-[min(68vh,34rem)] md:h-[min(82vh,46rem)] md:min-h-[28rem] lg:h-[min(88vh,820px)] lg:min-h-[32rem]">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={mobileImage.image}
            alt={mobileImage.alt}
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 hidden md:block">
          {slide.panels.map((panel, index) => (
            <div
              key={`${slide.id}-${panel.image}`}
              className="absolute inset-0"
              style={{ clipPath: paneClips[index], zIndex: index + 1 }}
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                priority={active === 0}
                className="object-cover"
                style={{ objectPosition: objectPositions[index] }}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[3] hidden md:block">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <line
              x1={SEAM_1.top}
              y1="0"
              x2={SEAM_1.bottom}
              y2="100"
              stroke="#d4b56a"
              strokeWidth="0.28"
            />
            <line
              x1={SEAM_2.top}
              y1="0"
              x2={SEAM_2.bottom}
              y2="100"
              stroke="#d4b56a"
              strokeWidth="0.28"
            />
          </svg>
        </div>

        <div
          className="absolute inset-0 z-[4] bg-gradient-to-t from-black/80 via-black/35 to-black/15 md:bg-gradient-to-r md:from-black/70 md:via-black/35 md:to-transparent"
          aria-hidden
        />

        <div className="relative z-[5] mx-auto flex h-full max-w-7xl items-end px-4 pb-8 sm:px-6 sm:pb-10 md:items-center md:pb-12 lg:px-8 lg:pb-16">
          <div className="max-w-xl">
            <h1 className="kg-hero-title text-[1.85rem] leading-[1.08] text-white sm:text-5xl lg:text-[4.5rem]">
              {heroHeadline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base">
              {heroSubtitle}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 sm:mt-8 sm:gap-5">
              <Link href="/about" className="kg-btn-gold px-4 py-2.5 text-[0.7rem] sm:px-6 sm:py-2.5 sm:text-xs">
                Explore Kalawati Greens
              </Link>
              <Link
                href="/video"
                className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white sm:gap-3 sm:text-xs"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white sm:h-11 sm:w-11">
                  <svg className="ml-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M9 7.5v9l8-4.5-8-4.5z" />
                  </svg>
                </span>
                Watch Video
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute left-2 top-[42%] z-[6] hidden -translate-y-1/2 sm:left-5 sm:block md:top-1/2">
          <HomeArrowButton
            direction="prev"
            label="Previous hero slide"
            onClick={() => go(-1)}
            className="border-white/70 bg-black/35 text-white"
          />
        </div>
        <div className="absolute right-2 top-[42%] z-[6] hidden -translate-y-1/2 sm:right-5 sm:block md:top-1/2">
          <HomeArrowButton
            direction="next"
            label="Next hero slide"
            onClick={() => go(1)}
            className="border-white/70 bg-black/35 text-white"
          />
        </div>

        <div className="absolute bottom-3 left-1/2 z-[6] flex -translate-x-1/2 gap-2 sm:bottom-5 sm:gap-2.5">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2 w-2 rounded-full border border-white sm:h-2.5 sm:w-2.5 ${
                index === active ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
