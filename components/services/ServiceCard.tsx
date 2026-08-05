"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import type { ServiceItem } from "@/lib/services-content";

type ServiceCardProps = {
  service: ServiceItem;
  onSelect: (id: string) => void;
};

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, lift: false });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ rotateX, rotateY, lift: true });
  }

  function handlePointerLeave() {
    setTilt({ rotateX: 0, rotateY: 0, lift: false });
  }

  const transform = tilt.lift
    ? `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-12px) scale(1.03)`
    : "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

  return (
    <article
      ref={cardRef}
      id={service.id}
      role="button"
      tabIndex={0}
      className={`kg-service-card group relative scroll-mt-28 cursor-pointer rounded-2xl bg-white ring-1 ring-kg-green/10 ${
        tilt.lift ? "kg-service-card--lifted" : ""
      }`}
      style={{ transform }}
      onClick={() => onSelect(service.id)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(service.id);
        }
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label={`View details for ${service.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kg-green-dark/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>

      <div className="relative z-10 -mt-6 flex justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-kg-green text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
      </div>

      <div className="px-4 pb-6 pt-2 text-center">
        <h3 className="text-sm font-bold text-kg-green transition-colors duration-300 group-hover:text-kg-green-light sm:text-base">
          {service.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-kg-muted sm:text-sm">
          {service.description}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-kg-green-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View details
        </p>
      </div>
    </article>
  );
}
