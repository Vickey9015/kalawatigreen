"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import VideoGalleryCard from "@/components/home/VideoGalleryCard";
import { homeGalleryVideos } from "@/lib/video-content";

const AUTO_SLIDE_MS = 5500;

export default function VideoFilmsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((direction: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-video-film-card]");
    const step = (card?.offsetWidth ?? 360) + 20;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    if (direction > 0 && scroller.scrollLeft >= maxScroll - 8) {
      scroller.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      if (!paused) scrollByCard(1);
    }, AUTO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused, scrollByCard]);

  return (
    <section
      className="relative overflow-hidden bg-kg-surface-soft px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-kg-surface-soft to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-kg-surface-soft to-transparent sm:w-16"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kg-eyebrow">Short films</p>
              <h2 className="kg-display-title mt-3 text-2xl text-kg-green-dark sm:text-3xl">Motion previews</h2>
              <p className="mt-2 max-w-md text-sm text-kg-muted">
                Clips play automatically when in view — each captures a corner of the property.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/20 bg-white text-kg-green shadow-sm transition hover:border-kg-gold/50 hover:text-kg-green-dark"
                aria-label="Previous films"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/20 bg-white text-kg-green shadow-sm transition hover:border-kg-gold/50 hover:text-kg-green-dark"
                aria-label="Next films"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          className="kg-space-track -mx-1 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-3 pt-1"
        >
          {homeGalleryVideos.map((video, index) => (
            <div
              key={video.title}
              data-video-film-card
              className="w-[min(88vw,22rem)] shrink-0 snap-center sm:w-[24rem] lg:w-[26rem]"
            >
              <div className="rounded-[1.5rem] bg-white p-1.5 shadow-[0_12px_40px_-16px_rgba(1,49,31,0.2)] ring-1 ring-kg-green/10">
                <VideoGalleryCard video={video} staticCard />
              </div>
              <p className="mt-3 text-center text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-kg-muted">
                Clip {String(index + 1).padStart(2, "0")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
