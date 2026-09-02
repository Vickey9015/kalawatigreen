"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { homeSpaces, spacesSection } from "@/lib/home-content";

export default function SpacesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: number) {
    scrollerRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  }

  return (
    <section className="bg-kg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="kg-eyebrow">Natural Elegance</p>
            <h2 className="kg-display-title mt-4 text-4xl uppercase text-kg-green-dark sm:text-6xl">{spacesSection.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-kg-muted sm:text-base">{spacesSection.subtitle}</p>
          </div>
        </Reveal>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green"
            aria-label="Previous spaces"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-kg-green/25 text-kg-green"
            aria-label="Next spaces"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="kg-space-track mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:px-8"
      >
        {homeSpaces.map((space) => (
          <article
            key={space.id}
            className="group relative h-[28rem] w-[min(84vw,22rem)] shrink-0 snap-center overflow-hidden rounded-[1.75rem]"
          >
            <Image
              src={space.image}
              alt={space.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="352px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark via-kg-green/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <h3 className="font-serif text-2xl">{space.title}</h3>
              <p className="mt-2 text-sm text-white">{space.description}</p>
              <Link href={`/services#${space.id}`} className="mt-4 inline-flex text-xs uppercase tracking-[0.16em] text-kg-gold-light">
                Discover
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
