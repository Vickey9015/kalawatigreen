"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { homeSpaces, spacesSection } from "@/lib/home-content";
import HomeArrowButton from "./HomeArrowButton";

export default function SpacesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const scrollByCard = (direction: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    const maxScroll = node.scrollWidth - node.clientWidth;
    const nextLeft = node.scrollLeft + direction * step;

    if (direction > 0 && nextLeft >= maxScroll - 8) {
      node.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction < 0 && node.scrollLeft <= 8) {
      node.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    node.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      scrollByCard(1);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-kg-cream px-4 py-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="kg-display-title text-4xl uppercase sm:text-5xl">{spacesSection.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-kg-muted sm:text-base">{spacesSection.subtitle}</p>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <HomeArrowButton direction="prev" label="Previous spaces" onClick={() => scrollByCard(-1)} className="border-kg-green/30 text-kg-green" />
          <HomeArrowButton direction="next" label="Next spaces" onClick={() => scrollByCard(1)} className="border-kg-green/30 text-kg-green" />
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            pausedRef.current = false;
          }}
          className="mt-10 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {homeSpaces.map((space) => (
            <article
              key={space.id}
              className="w-[min(100%,17.5rem)] shrink-0 overflow-hidden rounded-md bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image src={space.image} alt={space.title} fill className="object-cover" sizes="280px" />
              </div>
              <div className="px-4 py-5">
                <h3 className="text-base font-semibold text-kg-green-dark">{space.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-kg-muted">{space.description}</p>
                <Link
                  href={`/services#${space.id}`}
                  className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-kg-gold"
                >
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
