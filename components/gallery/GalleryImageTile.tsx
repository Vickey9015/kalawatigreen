"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gallerySizeClass, type GalleryItem } from "@/lib/gallery-content";

export default function GalleryImageTile({
  item,
  grow = false,
}: {
  item: GalleryItem;
  grow?: boolean;
}) {
  const tileRef = useRef<HTMLButtonElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, lift: false });

  function handlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    const tile = tileRef.current;
    if (!tile) return;

    const rect = tile.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setTilt({
      rotateX: ((y - centerY) / centerY) * -8,
      rotateY: ((x - centerX) / centerX) * 8,
      lift: true,
    });
  }

  function handlePointerLeave() {
    setTilt({ rotateX: 0, rotateY: 0, lift: false });
  }

  const transform = tilt.lift
    ? `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(1.03)`
    : "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

  const sizeClass = grow
    ? "min-h-[160px] flex-1 sm:min-h-[200px]"
    : gallerySizeClass(item.size);

  return (
    <button
      ref={tileRef}
      type="button"
      className={`kg-gallery-tile group relative w-full overflow-hidden rounded-2xl ${sizeClass} ${
        tilt.lift ? "kg-gallery-tile--lifted z-10" : ""
      }`}
      style={{ transform }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label={item.alt}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 50vw, 25vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kg-green-dark/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </button>
  );
}
