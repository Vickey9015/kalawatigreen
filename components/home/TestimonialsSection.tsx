"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "@/lib/home-content";
import HomeArrowButton from "./HomeArrowButton";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];

  const go = (step: number) => {
    setActive((current) => (current + step + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-kg-cream px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="kg-display-title text-4xl uppercase sm:text-5xl">Loved By Our Guests</h2>
        <div className="relative mt-10">
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 sm:block">
            <HomeArrowButton
              direction="prev"
              label="Previous testimonial"
              onClick={() => go(-1)}
              className="border-kg-green/30 text-kg-green"
            />
          </div>
          <div className="px-4 sm:px-16">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
            </div>
            <p className="kg-serif-heading mt-6 text-xl leading-relaxed text-kg-green-dark sm:text-2xl">
              “{item.quote}”
            </p>
            <p className="mt-5 text-sm font-semibold text-kg-green">{item.name}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-kg-muted">{item.role}</p>
            <div className="mt-4 flex justify-center gap-1 text-kg-gold" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 sm:block">
            <HomeArrowButton
              direction="next"
              label="Next testimonial"
              onClick={() => go(1)}
              className="border-kg-green/30 text-kg-green"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-3 sm:hidden">
          <HomeArrowButton direction="prev" label="Previous testimonial" onClick={() => go(-1)} className="border-kg-green/30 text-kg-green" />
          <HomeArrowButton direction="next" label="Next testimonial" onClick={() => go(1)} className="border-kg-green/30 text-kg-green" />
        </div>
      </div>
    </section>
  );
}
