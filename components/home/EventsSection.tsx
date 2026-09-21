"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { upcomingEvents } from "@/lib/home-content";

const AUTO_SLIDE_MS = 4500;

export default function EventsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((direction: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>("[data-event-card]");
    const gap = 24;
    const step = (card?.offsetWidth ?? 300) + gap;

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
            <p className="kg-eyebrow">The calendar</p>
            <h2 className="kg-display-title kg-home-section-title mt-4 uppercase text-kg-green-dark">Upcoming Events</h2>
            <Link href="/contact" className="mt-3 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold">
              View all events
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition hover:border-kg-green/45 hover:bg-kg-green/5"
            aria-label="Previous events"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition hover:border-kg-green/45 hover:bg-kg-green/5"
            aria-label="Next events"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="kg-space-track mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1rem,env(safe-area-inset-left))] pb-4 pr-[max(1rem,env(safe-area-inset-right))] scroll-pl-4 sm:mt-10 sm:gap-6 sm:px-8"
      >
        {upcomingEvents.map((event) => (
          <article
            key={event.title}
            data-event-card
            className="w-[min(84vw,18rem)] shrink-0 snap-center overflow-hidden rounded-[1.5rem] border border-kg-green/12 bg-white shadow-md sm:w-[18rem]"
          >
            <div className="relative aspect-[4/5]">
              <Image src={event.image} alt={event.title} fill className="object-cover" sizes="288px" />
              <span className="absolute left-4 top-4 rounded-xl border border-white/30 bg-white/90 px-3 py-2 text-center text-kg-green-dark shadow-sm backdrop-blur-sm">
                <span className="block text-lg font-semibold leading-none">{event.date}</span>
                <span className="text-[0.65rem] tracking-widest text-kg-muted">{event.month}</span>
              </span>
            </div>
            <div className="px-5 py-5">
              <h3 className="font-serif text-xl text-kg-green-dark">{event.title}</h3>
              <p className="mt-2 text-sm text-kg-muted">{event.description}</p>
              <Link
                href="/contact?intent=event"
                className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold"
              >
                Reserve a place
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
