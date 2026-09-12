"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import type { ServiceDetail, ServiceIconName } from "@/lib/services-content";

type ServiceDetailModalProps = {
  detail: ServiceDetail;
  image?: string;
  icon?: ServiceIconName;
  onClose: () => void;
};

export default function ServiceDetailModal({ detail, image, icon, onClose }: ServiceDetailModalProps) {
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
      aria-labelledby="service-detail-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-kg-green-dark/70 backdrop-blur-[2px]"
        aria-label="Close details"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-t-2xl bg-kg-cream shadow-2xl sm:rounded-2xl">
        <div className="relative aspect-[16/9] w-full shrink-0">
          {image ? (
            <>
              <Image src={image} alt={detail.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 42rem" />
              <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/60 to-transparent" aria-hidden />
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-kg-green/10 via-white to-kg-gold/12">
              {icon ? (
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-kg-gold/35 bg-white text-kg-green shadow-lg">
                  <ServiceIcon name={icon} className="h-11 w-11" />
                </span>
              ) : null}
            </div>
          )}
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
          <h2 id="service-detail-title" className="text-xl font-bold text-kg-green sm:text-2xl">
            {detail.title}
          </h2>
          <p className="mt-2 text-sm font-medium text-kg-green-light sm:text-base">{detail.tagline}</p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-kg-muted sm:text-base">
            {detail.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 50)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-kg-green/15 bg-white px-4 py-3 text-sm text-kg-green">
            <span className="font-semibold">Perfect for:</span> {detail.perfectFor}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
