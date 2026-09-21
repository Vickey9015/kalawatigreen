"use client";

import Image from "next/image";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import type { ServiceItem } from "@/lib/services-content";

type ServiceRowCardProps = {
  service: ServiceItem;
  onSelect: (id: string) => void;
};

export default function ServiceRowCard({ service, onSelect }: ServiceRowCardProps) {
  return (
    <button
      type="button"
      id={service.id}
      onClick={() => onSelect(service.id)}
      className="group flex w-full scroll-mt-28 items-stretch gap-0 overflow-hidden rounded-2xl border border-kg-green/12 bg-white text-left shadow-sm transition hover:border-kg-gold/40 hover:shadow-md sm:gap-0"
    >
      <div className="relative w-28 shrink-0 self-stretch sm:w-36">
        {service.image ? (
          <div className="relative h-full min-h-[6.5rem] w-full">
            <Image
              src={service.image}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="144px"
            />
          </div>
        ) : (
          <div className="flex h-full min-h-[6.5rem] items-center justify-center bg-gradient-to-br from-kg-green/8 via-white to-kg-gold/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-kg-gold/30 bg-white text-kg-green">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-kg-green/8 text-kg-green sm:hidden">
              <ServiceIcon name={service.icon} className="h-4 w-4" />
            </span>
            <h3 className="font-semibold text-kg-green-dark sm:text-lg">{service.title}</h3>
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-kg-muted">{service.description}</p>
        </div>
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-kg-green/15 text-kg-green transition group-hover:border-kg-gold group-hover:bg-kg-gold/10 group-hover:text-kg-gold"
          aria-hidden
        >
          →
        </span>
      </div>
    </button>
  );
}
