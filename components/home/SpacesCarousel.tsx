"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import type { HomeSpaceItem } from "@/lib/home-content";
import { homeSpaces, spacesSection } from "@/lib/home-content";

const AUTO_SLIDE_MS = 4500;

function SpaceCard({ space }: { space: HomeSpaceItem }) {
  return (
    <article
      data-space-card
      className="group relative h-[24rem] w-[min(88vw,20rem)] shrink-0 snap-center overflow-hidden rounded-[1.5rem] border border-kg-green/12 bg-white shadow-lg sm:h-[28rem] sm:w-[min(84vw,22rem)] sm:rounded-[1.75rem]"
    >
      {space.image ? (
        <>
          <Image
            src={space.image}
            alt={space.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="352px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark via-kg-green/20 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-kg-green/8 via-white to-kg-gold/12">
          <div className="absolute inset-0 flex items-center justify-center">
            {space.icon ? (
              <span className="flex h-24 w-24 items-center justify-center rounded-full border border-kg-gold/35 bg-white text-kg-green shadow-lg">
                <ServiceIcon name={space.icon} className="h-11 w-11" />
              </span>
            ) : null}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/75 via-kg-green/10 to-transparent" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-serif text-2xl">{space.title}</h3>
        <p className="mt-2 text-sm text-white/90">{space.description}</p>
        <Link
          href={`/services#${space.id === "banquet" ? "celebration-lawns" : space.id}`}
          className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold-light"
        >
          Discover
        </Link>
      </div>
    </article>
  );
}

export default function SpacesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((direction: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>("[data-space-card]");
    const gap = 24;
    const step = (card?.offsetWidth ?? 352) + gap;

    if (direction > 0) {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (scroller.scrollLeft >= maxScroll - 8) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
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
      className="bg-white py-12 sm:py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="kg-eyebrow">Natural Elegance</p>
            <h2 className="kg-display-title kg-home-section-title mt-4 uppercase text-kg-green-dark">{spacesSection.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-kg-muted sm:text-base">{spacesSection.subtitle}</p>
          </div>
        </Reveal>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition hover:border-kg-green/45 hover:bg-kg-green/5"
            aria-label="Previous spaces"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition hover:border-kg-green/45 hover:bg-kg-green/5"
            aria-label="Next spaces"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="kg-space-track mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1rem,env(safe-area-inset-left))] pb-4 pr-[max(1rem,env(safe-area-inset-right))] scroll-pl-4 sm:mt-10 sm:gap-6 sm:px-8"
      >
        {homeSpaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </section>
  );
}
