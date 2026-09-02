"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroCinematic, heroHeadline, heroSubtitle, homeBooking } from "@/lib/home-content";

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const count = heroCinematic.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [count]);

  function handleBook(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams({
      intent: "stay",
      checkin: String(data.get("checkin") ?? ""),
      checkout: String(data.get("checkout") ?? ""),
      guests: String(data.get("guests") ?? "2"),
    });
    window.location.href = `/contact/?${params.toString()}`;
  }

  return (
    <section className="relative h-[100svh] min-h-[40rem] overflow-hidden bg-kg-green-dark">
      {heroCinematic.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className={`object-cover ${index === active ? "kg-kenburns" : ""}`}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-kg-green-dark/65 via-kg-green-dark/20 to-kg-green-dark/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-kg-green-dark/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-52 pt-28 sm:px-6 sm:pb-44 lg:px-8 lg:pb-40">
        <p className="kg-slow-fade text-xs font-semibold uppercase tracking-[0.32em] text-kg-gold-light">
          {homeBooking.kicker}
        </p>
        <h1 className="kg-hero-title kg-slow-fade mt-4 max-w-3xl text-5xl leading-[1.05] text-white sm:text-7xl lg:text-[5.4rem]">
          {heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="kg-slow-fade mt-6 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
          {heroSubtitle}
        </p>
        <div className="kg-slow-fade mt-8 flex flex-wrap items-center gap-4">
          <Link href="/contact" className="kg-btn-gold">
            {homeBooking.primaryCta}
          </Link>
          <Link
            href="/video"
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur-md">
              <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 7.5v9l8-4.5-8-4.5z" />
              </svg>
            </span>
            Watch film
          </Link>
        </div>
      </div>

      <form
        onSubmit={handleBook}
        className="kg-glass absolute inset-x-4 bottom-6 z-20 mx-auto grid max-w-5xl gap-3 rounded-2xl p-4 text-white shadow-2xl sm:inset-x-6 sm:grid-cols-[1fr_1fr_8rem_auto] sm:items-end lg:px-6"
      >
        <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
          Check in
          <input
            type="date"
            name="checkin"
            required
            className="mt-1.5 w-full border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none [color-scheme:dark]"
          />
        </label>
        <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
          Check out
          <input
            type="date"
            name="checkout"
            required
            className="mt-1.5 w-full border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none [color-scheme:dark]"
          />
        </label>
        <label className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
          Guests
          <select
            name="guests"
            defaultValue="2"
            className="mt-1.5 w-full border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none"
          >
            {["1", "2", "3", "4", "5", "6+"].map((value) => (
              <option key={value} value={value} className="text-kg-green-dark">
                {value}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="kg-btn-gold mt-2 h-12 sm:mt-0">
          Check availability
        </button>
      </form>

      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
        {heroCinematic.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Show image ${index + 1}`}
            onClick={() => setActive(index)}
            className={`rounded-full transition-all ${
              index === active ? "h-8 w-1.5 bg-kg-gold-light" : "h-2.5 w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
