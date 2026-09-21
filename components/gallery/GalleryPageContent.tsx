"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import GalleryImageTile from "@/components/gallery/GalleryImageTile";
import {
  galleryFilters,
  galleryItems,
  masonryColumns,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery-content";

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.08em] transition-colors sm:px-4 sm:text-[0.7rem] ${
        active
          ? "border-kg-gold bg-kg-gold text-white"
          : "border-kg-green/20 bg-white text-kg-green hover:border-kg-green/45 hover:bg-kg-surface-soft"
      }`}
    >
      {label}
    </button>
  );
}

function MasonryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4">
      {masonryColumns.map((column) => {
        const columnItems = items.filter((item) => item.column === column);

        return (
          <div key={column} className="flex min-h-0 flex-col gap-3 sm:gap-4">
            {columnItems.map((item, index) => (
              <GalleryImageTile key={item.id} item={item} grow={index === columnItems.length - 1} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function FilteredGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
      {items.map((item) => (
        <GalleryImageTile key={item.id} item={item} />
      ))}
    </div>
  );
}

export default function GalleryPageContent() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [showFullGallery, setShowFullGallery] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return galleryItems.filter((item) => item.featured || showFullGallery);
    }
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter, showFullGallery]);

  const useMasonry = activeFilter === "all";

  return (
    <>
      <div className="sticky top-[4.35rem] z-40 border-b border-kg-green/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {galleryFilters.map((filter) => (
            <FilterButton
              key={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                if (filter.id !== "all") setShowFullGallery(false);
              }}
            />
          ))}
        </div>
      </div>

      <section className="bg-kg-surface-soft px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-kg-green sm:text-left">
              {activeFilter === "all"
                ? showFullGallery
                  ? "Full collection"
                  : "Featured moments"
                : galleryFilters.find((f) => f.id === activeFilter)?.label}
            </p>
          </Reveal>

          <div className="mt-8">
            {filteredItems.length > 0 ? (
              useMasonry ? (
                <MasonryGrid items={filteredItems} />
              ) : (
                <FilteredGrid items={filteredItems} />
              )
            ) : (
              <p className="py-16 text-center text-sm text-kg-muted">No moments found in this category yet.</p>
            )}
          </div>

          {activeFilter === "all" && !showFullGallery && (
            <Reveal className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setShowFullGallery(true)}
                className="kg-btn-gold min-w-[min(100%,20rem)] px-10 py-3.5"
              >
                View full gallery
              </button>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-kg-green/12 bg-kg-surface-soft px-7 py-10 text-center sm:px-10">
            <p className="kg-serif-heading text-xl text-kg-green-dark sm:text-2xl">
              Ready to create your own moments here?
            </p>
            <p className="mt-3 text-sm text-kg-muted">Stays, weddings, and celebrations surrounded by the forest.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact?intent=event" className="kg-btn-primary">Host an event</Link>
              <Link href="/services" className="kg-btn-secondary">Explore spaces</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
