"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { welcomeContent, welcomeFeatures } from "@/lib/home-content";

const featureIcons: Record<string, ReactNode> = {
  leaf: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 21c-4-4-7-8-7-13a7 7 0 0 1 14 0c0 5-3 9-7 13z" />
      <path d="M12 11c0-3 2-6 5-8" />
    </svg>
  ),
  tree: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 22V12M8 12l4-8 4 8H8z" />
    </svg>
  ),
  diamond: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 3 3 9.5 12 21l9-11.5L12 3z" />
    </svg>
  ),
  spark: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
    </svg>
  ),
};

const titleLines = [
  { text: "Where", accent: false },
  { text: "Nature Becomes", accent: true },
  { text: "the Experience", accent: true },
] as const;

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;

    function onMove(event: PointerEvent) {
      const rect = media.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      media.style.setProperty("--kg-tilt-x", `${y * -6}deg`);
      media.style.setProperty("--kg-tilt-y", `${x * 6}deg`);
    }

    function onLeave() {
      media.style.setProperty("--kg-tilt-x", "0deg");
      media.style.setProperty("--kg-tilt-y", "0deg");
    }

    media.addEventListener("pointermove", onMove);
    media.addEventListener("pointerleave", onLeave);
    return () => {
      media.removeEventListener("pointermove", onMove);
      media.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`kg-welcome relative overflow-hidden py-20 sm:py-28 ${active ? "is-active" : ""}`}
      aria-labelledby="welcome-heading"
    >
      <div className="kg-welcome-glow kg-welcome-glow--left" aria-hidden />
      <div className="kg-welcome-glow kg-welcome-glow--right" aria-hidden />
      <div className="kg-welcome-grid" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="kg-welcome-eyebrow kg-eyebrow">{welcomeContent.eyebrow}</p>

            <h2 id="welcome-heading" className="mt-5">
              {titleLines.map((line, index) => (
                <span
                  key={line.text}
                  className={`kg-welcome-title-line block text-4xl sm:text-5xl lg:text-[3.35rem] ${
                    line.accent ? "kg-welcome-title-line--accent" : "text-kg-green-dark"
                  }`}
                  style={{ transitionDelay: `${120 + index * 110}ms` }}
                >
                  {line.text}
                </span>
              ))}
            </h2>

            <div className="mt-8 space-y-4">
              {welcomeContent.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="kg-welcome-copy text-sm leading-8 text-kg-muted sm:text-base"
                  style={{ transitionDelay: `${420 + index * 90}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {welcomeFeatures.map((feature, index) => (
                <li
                  key={feature.title}
                  className="kg-welcome-feature group"
                  style={{ transitionDelay: `${620 + index * 80}ms` }}
                >
                  <span className="kg-welcome-feature-icon text-kg-green">
                    {featureIcons[feature.icon]}
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-kg-green-light">
                      0{index + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-kg-green-dark">{feature.title}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="kg-welcome-cta mt-10 flex flex-wrap items-center gap-4">
              <Link href="/about" className="kg-btn-primary group inline-flex items-center gap-2">
                Read our story
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/services"
                className="text-xs font-bold uppercase tracking-[0.16em] text-kg-green transition-colors hover:text-kg-green-light"
              >
                Explore spaces
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div ref={mediaRef} className="kg-welcome-media">
              <div className="kg-welcome-media-card kg-welcome-media-card--back" aria-hidden>
                <Image
                  src="/images/lawn-upawan.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
              </div>

              <Link href="/video" className="kg-welcome-media-card kg-welcome-media-card--main group block">
                <Image
                  src={welcomeContent.videoImage}
                  alt={welcomeContent.videoCaption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/75 via-kg-green-dark/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="kg-welcome-play">
                    <svg className="ml-0.5 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 7.5v9l8-4.5-8-4.5z" />
                    </svg>
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-white">
                    {welcomeContent.videoCaption}
                  </p>
                </div>
              </Link>

              <div className="kg-welcome-stat-chip">
                <p className="text-2xl font-semibold text-kg-green-dark">2,80,000+</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-kg-muted">
                  Plants & trees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
