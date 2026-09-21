"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/home-content";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  function go(step: number) {
    setActive((current) => (current + step + testimonials.length) % testimonials.length);
  }

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <Image src={item.image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-kg-green-dark/80 via-kg-green-dark/72 to-kg-green-dark/85" />
      <Reveal>
        <div className="kg-on-image relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
          <p className="kg-eyebrow text-kg-gold-light">Guest voices</p>
          <h2 className="kg-display-title kg-home-section-title mt-4 uppercase text-white">Loved By Our Guests</h2>
          <blockquote className="kg-serif-heading mt-6 text-lg leading-relaxed text-white sm:mt-10 sm:text-2xl lg:text-3xl">
            “{item.quote}”
          </blockquote>
          <p className="mt-5 text-xs tracking-[0.14em] uppercase text-kg-gold-light sm:mt-6 sm:text-sm sm:tracking-[0.16em]">{item.name}</p>
          <p className="mt-1 text-sm text-white/90">{item.role}</p>
          <div className="mt-8 flex justify-center gap-3">
            <button type="button" onClick={() => go(-1)} className="h-11 w-11 rounded-full border border-white/40" aria-label="Previous">
              ←
            </button>
            <button type="button" onClick={() => go(1)} className="h-11 w-11 rounded-full border border-white/40" aria-label="Next">
              →
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
