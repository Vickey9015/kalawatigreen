"use client";

import Image from "next/image";
import { gallerySizeClass, type GalleryItem } from "@/lib/gallery-content";

export default function GalleryImageTile({
  item,
  grow = false,
}: {
  item: GalleryItem;
  grow?: boolean;
}) {
  const sizeClass = grow
    ? "min-h-[160px] flex-1 sm:min-h-[200px]"
    : gallerySizeClass(item.size);

  return (
    <button
      type="button"
      className={`group relative w-full overflow-hidden rounded-2xl border border-kg-green/10 bg-white shadow-sm transition hover:border-kg-gold/40 hover:shadow-md ${sizeClass}`}
      aria-label={item.alt}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, 25vw"
      />
      <div
        className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-kg-green-dark/85 to-transparent px-3 pb-3 pt-10 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0"
      >
        <p className="text-left text-[0.65rem] leading-snug text-white/95 sm:text-xs">{item.alt}</p>
      </div>
    </button>
  );
}
