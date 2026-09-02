"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import {
  getServiceDetailById,
  serviceCategories,
  servicesClosingLine,
  servicesPageHeader,
} from "@/lib/services-content";

function CornerLeaves({ className }: { className: string }) {
  return (
    <svg
      className={`pointer-events-none absolute h-32 w-32 text-kg-green/20 sm:h-40 sm:w-40 ${className}`}
      viewBox="0 0 120 120"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 95c8-35 22-55 45-70 8-6 18-12 12-22-12 6-22 20-28 38-4-22 6-48 28-62-6 28-2 54 14 76 8 12 20 18 30 14-12-4-26-4-38 6-10 8-14 22-10 38z" />
      <path d="M55 98c4-18 2-34-10-46-8-8-18-14-14-26 8 4 14 14 16 26 2-14 10-28 24-36-6 16-4 34 8 48 6 8 14 12 22 10-10-2-20 0-28 10-6 8-8 18-4 30z" />
    </svg>
  );
}

export default function ServicesPageContent() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = selectedId ? getServiceDetailById(selectedId) : null;

  const openDetail = useCallback((id: string) => {
    setSelectedId(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedId(null);
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    if (hash === "lawns") {
      openDetail("upawan-lawn");
      return;
    }

    if (getServiceDetailById(hash)) {
      openDetail(hash);
    }
  }, [openDetail]);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--kg-surface-soft)] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <CornerLeaves className="-left-2 top-0" />

        <div className="relative mx-auto max-w-7xl">
          <header className="text-center">
            <h1 className="kg-section-title">{servicesPageHeader.title}</h1>
            <p className="mt-3 text-sm text-kg-green sm:text-base">{servicesPageHeader.subtitle}</p>
          </header>

          <div className="mt-14 space-y-16">
            {serviceCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-28"
                aria-labelledby={`${category.id}-heading`}
              >
                <div className="mx-auto max-w-3xl text-center">
                  <p className="kg-eyebrow text-kg-gold">{category.eyebrow}</p>
                  <h2
                    id={`${category.id}-heading`}
                    className="kg-display-title mt-3 text-3xl text-kg-green-dark sm:text-4xl"
                  >
                    {category.slogan}
                  </h2>
                </div>

                <div
                  className={`mt-8 grid gap-4 [perspective:1200px] ${
                    category.services.length === 1
                      ? "sm:grid-cols-1 lg:max-w-sm lg:mx-auto"
                      : category.services.length === 2
                        ? "sm:grid-cols-2 lg:max-w-3xl lg:mx-auto"
                        : category.services.length === 3
                          ? "sm:grid-cols-2 lg:grid-cols-3"
                          : "sm:grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {category.services.map((service) => (
                    <ServiceCard key={service.id} service={service} onSelect={openDetail} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="kg-serif-heading mx-auto mt-14 max-w-3xl text-center text-base font-medium leading-relaxed text-kg-green sm:text-lg">
            {servicesClosingLine}
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="kg-btn-primary min-w-[min(100%,20rem)] px-10 py-4">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {selected && (
        <ServiceDetailModal detail={selected.detail} image={selected.image} onClose={closeDetail} />
      )}
    </>
  );
}
