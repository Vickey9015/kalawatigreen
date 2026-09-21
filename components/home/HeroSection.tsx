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
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-kg-green-dark">
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

      <div className="absolute inset-0 bg-gradient-to-b from-kg-green-dark/65 via-kg-green-dark/20 to-kg-green-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-kg-green-dark/55 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-4 pt-24 sm:px-6 sm:pb-6 lg:px-8 lg:pt-28">
        <p className="kg-slow-fade text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-kg-gold-light sm:text-xs sm:tracking-[0.32em]">
          {homeBooking.kicker}
        </p>
        <h1 className="kg-hero-title kg-slow-fade mt-3 max-w-3xl text-[2.15rem] leading-[1.08] text-white sm:mt-4 sm:text-5xl md:text-6xl lg:text-[5.4rem]">
          {heroHeadline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="kg-slow-fade mt-4 max-w-xl text-sm leading-relaxed text-white/88 sm:mt-6 sm:text-base md:text-lg">
          {heroSubtitle}
        </p>
        <div className="kg-slow-fade mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
          <Link href="/contact/" className="kg-btn-gold px-5 py-3 text-[0.7rem] sm:px-6 sm:text-xs">
            {homeBooking.primaryCta}
          </Link>
          <Link
            href="/video/"
            className="inline-flex items-center gap-2.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white sm:gap-3 sm:text-xs sm:tracking-[0.18em]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur-md sm:h-12 sm:w-12">
              <svg className="ml-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 7.5v9l8-4.5-8-4.5z" />
              </svg>
            </span>
            <span className="max-[360px]:hidden sm:inline">Watch film</span>
            <span className="min-[361px]:hidden sm:hidden">Film</span>
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-1.5 lg:hidden" aria-label="Hero slides">
          {heroCinematic.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className={`rounded-full transition-all ${
                index === active ? "h-2 w-6 bg-kg-gold-light" : "h-2 w-2 bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={handleBook}
        className="kg-glass relative z-20 mx-4 mb-4 grid grid-cols-2 gap-3 rounded-2xl p-3.5 text-white shadow-2xl sm:mx-6 sm:mb-6 sm:max-w-5xl sm:p-4 sm:grid-cols-[1fr_1fr_7rem_auto] sm:items-end lg:mx-auto lg:px-6"
      >
        <label className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[0.65rem] sm:tracking-[0.18em]">
          Check in
          <input
            type="date"
            name="checkin"
            required
            className="mt-1 w-full min-w-0 border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none [color-scheme:dark]"
          />
        </label>
        <label className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[0.65rem] sm:tracking-[0.18em]">
          Check out
          <input
            type="date"
            name="checkout"
            required
            className="mt-1 w-full min-w-0 border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none [color-scheme:dark]"
          />
        </label>
        <label className="col-span-1 block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[0.65rem] sm:tracking-[0.18em]">
          Guests
          <select
            name="guests"
            defaultValue="2"
            className="mt-1 w-full min-w-0 border-0 border-b border-white/30 bg-transparent py-2 text-sm text-white outline-none"
          >
            {["1", "2", "3", "4", "5", "6+"].map((value) => (
              <option key={value} value={value} className="text-kg-green-dark">
                {value}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="kg-btn-gold col-span-1 h-11 self-end px-3 text-[0.65rem] sm:col-auto sm:mt-0 sm:h-12 sm:px-5 sm:text-xs">
          <span className="sm:hidden">Check</span>
          <span className="hidden sm:inline">Check availability</span>
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
