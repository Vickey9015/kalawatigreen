"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/home-content";

const AUTO_SLIDE_MS = 4500;

export default function BlogSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = useCallback((direction: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const card = scroller.querySelector<HTMLElement>("[data-blog-card]");
    const gap = 24;
    const step = (card?.offsetWidth ?? 320) + gap;

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
      className="bg-kg-cream py-12 sm:py-14"
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
            <p className="kg-eyebrow">Journal</p>
            <h2 className="kg-display-title kg-home-section-title mt-4 uppercase text-kg-green-dark">
              Latest From Our Blog
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition hover:border-kg-green/45 hover:bg-kg-green/5"
            aria-label="Previous blog posts"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green transition hover:border-kg-green/45 hover:bg-kg-green/5"
            aria-label="Next blog posts"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="kg-space-track mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1rem,env(safe-area-inset-left))] pb-4 pr-[max(1rem,env(safe-area-inset-right))] scroll-pl-4 sm:mt-10 sm:gap-6 sm:px-8"
      >
        {blogPosts.map((post) => (
          <article
            key={post.title}
            data-blog-card
            className="w-[min(84vw,20rem)] shrink-0 snap-center sm:w-[20rem]"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] border border-kg-green/12 shadow-sm">
              <Image src={post.image} alt={post.title} fill className="object-cover" sizes="320px" />
            </div>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-kg-gold">
              {post.date} {post.month}
            </p>
            <h3 className="mt-2 font-serif text-xl text-kg-green-dark sm:text-2xl">{post.title}</h3>
            <p className="mt-2 text-sm leading-6 text-kg-muted">{post.excerpt}</p>
            <Link href="/about" className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold">
              Continue reading
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
