"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { AboutPillarDetail } from "@/lib/about-content";

type AboutPillarModalProps = {
  detail: AboutPillarDetail;
  onClose: () => void;
};

export default function AboutPillarModal({ detail, onClose }: AboutPillarModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-pillar-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-kg-green-dark/70 backdrop-blur-[2px]"
        aria-label="Close details"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-t-2xl bg-kg-cream shadow-2xl sm:rounded-2xl">
        <div className="relative aspect-[16/9] w-full shrink-0">
          <Image
            src={detail.image}
            alt={detail.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 42rem"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/60 to-transparent" aria-hidden />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-kg-green shadow-md transition-colors hover:bg-white"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <h2 id="about-pillar-title" className="text-xl font-bold text-kg-green sm:text-2xl">
            {detail.title}
          </h2>

          {detail.type === "story" ? (
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-kg-muted sm:text-base">
              {detail.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 50)}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-kg-muted sm:text-base">
              <p>{detail.intro}</p>
              {detail.bulletsHeading && (
                <p className="font-medium text-kg-green">{detail.bulletsHeading}</p>
              )}
              <ul className="list-disc space-y-2 pl-5">
                {detail.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{detail.closing}</p>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
