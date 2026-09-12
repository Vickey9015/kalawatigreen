"use client";

import { useMemo, useState } from "react";
import GalleryImageTile from "@/components/gallery/GalleryImageTile";
import {
  galleryFilters,
  galleryItems,
  galleryPageHeader,
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
      className={`rounded-full border px-3 py-2 text-[0.6875rem] font-semibold tracking-wide transition-colors sm:px-4 sm:text-xs lg:text-sm ${
        active
          ? "border-kg-gold bg-kg-gold text-white"
          : "border-kg-green/25 bg-white text-kg-green hover:border-kg-green/50 hover:bg-kg-surface-soft"
      }`}
    >
      {label}
    </button>
  );
}

function MasonryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4 [perspective:1200px]">
      {masonryColumns.map((column) => {
        const columnItems = items.filter((item) => item.column === column);

        return (
          <div key={column} className="flex min-h-0 flex-col gap-3 sm:gap-4">
            {columnItems.map((item, index) => (
              <GalleryImageTile
                key={item.id}
                item={item}
                grow={index === columnItems.length - 1}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function FilteredGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 [perspective:1200px]">
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
    <section className="bg-kg-cream px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h1 className="kg-section-title">{galleryPageHeader.title}</h1>
          <p className="mt-3 text-sm text-kg-muted sm:text-base">
            {galleryPageHeader.subtitle}
          </p>
        </header>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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

        <div className="mt-10">
          {filteredItems.length > 0 ? (
            useMasonry ? (
              <MasonryGrid items={filteredItems} />
            ) : (
              <FilteredGrid items={filteredItems} />
            )
          ) : (
            <p className="py-16 text-center text-sm text-kg-muted">
              No moments found in this category yet.
            </p>
          )}
        </div>

        {activeFilter === "all" && !showFullGallery && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowFullGallery(true)}
              className="kg-btn-primary min-w-[min(100%,22rem)] px-10 py-4"
            >
              View Full Gallery
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
