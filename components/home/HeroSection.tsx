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

  const go = (step: number) => {
    setActive((current) => (current + step + count) % count);
  };

  return (
    <section className="relative overflow-hidden bg-kg-green-dark">
      <div className="relative h-[min(88vh,820px)] min-h-[32rem]">
        <div className="absolute inset-0">
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

        <div className="pointer-events-none absolute inset-0 z-[3]">
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
          className="absolute inset-0 z-[4] bg-gradient-to-r from-black/70 via-black/35 to-transparent"
          aria-hidden
        />

        <div className="relative z-[5] mx-auto flex h-full max-w-7xl items-end px-4 pb-20 sm:px-6 sm:pb-24 lg:items-center lg:px-8 lg:pb-16">
          <div className="max-w-xl">
            <h1 className="kg-hero-title text-5xl leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
              {heroHeadline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              {heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/about" className="kg-btn-gold">
                Explore Kalawati Greens
              </Link>
              <Link
                href="/video"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white">
                  <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M9 7.5v9l8-4.5-8-4.5z" />
                  </svg>
                </span>
                Watch Video
              </Link>
            </div>
          </div>
        </div>

        <HomeArrowButton
          direction="prev"
          label="Previous hero slide"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 z-[6] -translate-y-1/2 border-white/70 bg-black/35 text-white sm:left-5"
        />
        <HomeArrowButton
          direction="next"
          label="Next hero slide"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 z-[6] -translate-y-1/2 border-white/70 bg-black/35 text-white sm:right-5"
        />

        <div className="absolute bottom-6 left-1/2 z-[6] flex -translate-x-1/2 gap-2.5">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full border border-white ${
                index === active ? "bg-white" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
