"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import ServiceDetailModal from "@/components/services/ServiceDetailModal";
import ServiceRowCard from "@/components/services/ServiceRowCard";
import {
  getServiceDetailById,
  serviceCategories,
  servicesClosingLine,
} from "@/lib/services-content";

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
      <div className="sticky top-[4.35rem] z-40 border-b border-kg-green/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {serviceCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-full border border-kg-green/20 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-kg-green transition hover:border-kg-gold hover:bg-kg-gold/10 hover:text-kg-green-dark sm:text-xs"
            >
              {category.eyebrow}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-0">
        {serviceCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-36 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 ${
              categoryIndex % 2 === 0 ? "bg-kg-surface-soft" : "bg-white"
            }`}
            aria-labelledby={`${category.id}-heading`}
          >
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex flex-col gap-4 border-l-4 border-kg-gold pl-5 sm:pl-6">
                  <p className="kg-eyebrow">{category.eyebrow}</p>
                  <h2 id={`${category.id}-heading`} className="kg-display-title text-3xl text-kg-green-dark sm:text-4xl">
                    {category.slogan}
                  </h2>
                </div>
              </Reveal>

              <ul className="mt-8 space-y-3 sm:space-y-4">
                {category.services.map((service, index) => (
                  <li key={service.id}>
                    <Reveal delayMs={index * 60}>
                      <ServiceRowCard service={service} onSelect={openDetail} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-kg-green/12 bg-kg-surface-soft px-7 py-10 text-center sm:px-12 sm:py-12">
            <p className="kg-serif-heading mx-auto max-w-3xl text-xl leading-relaxed text-kg-green-dark sm:text-2xl">
              {servicesClosingLine}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="kg-btn-primary min-w-[min(100%,14rem)] px-10 py-3.5">
                Plan your visit
              </Link>
              <Link href="/moments/" className="kg-btn-secondary min-w-[min(100%,14rem)] px-10 py-3.5">
                See the gallery
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {selected && (
        <ServiceDetailModal
          detail={selected.detail}
          image={selected.image}
          icon={selected.icon}
          onClose={closeDetail}
        />
      )}
    </>
  );
}
