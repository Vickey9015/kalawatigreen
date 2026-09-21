"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AboutPillarIcon } from "@/components/about/AboutIcons";
import AboutPillarModal from "@/components/about/AboutPillarModal";
import Reveal from "@/components/Reveal";
import {
  aboutPillarImages,
  getAboutPillarDetail,
  storyMissionVision,
  type AboutPillarId,
} from "@/lib/about-content";

export default function StoryMissionVisionSection() {
  const [selectedId, setSelectedId] = useState<AboutPillarId | null>(null);
  const selected = selectedId ? getAboutPillarDetail(selectedId) : null;

  const openDetail = useCallback((id: AboutPillarId) => {
    setSelectedId(id);
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedId(null);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const hashToId: Record<string, AboutPillarId> = {
      "our-story": "story",
      "our-mission": "mission",
      "our-vision": "vision",
    };
    const id = hashToId[hash];
    if (id) openDetail(id);
  }, [openDetail]);

  return (
    <>
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="kg-eyebrow">Our foundation</p>
              <h2 className="kg-display-title kg-home-section-title mt-3 text-kg-green-dark sm:mt-4">
                Story, mission & vision
              </h2>
              <p className="mt-4 text-sm leading-7 text-kg-muted sm:text-base">
                Three pillars that guide how we grow, host, and care for the forest around us.
              </p>
            </div>
          </Reveal>

          <ul className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
            {storyMissionVision.map((item, index) => {
              const image = aboutPillarImages[item.id];
              const reversed = index % 2 === 1;

              return (
                <li key={item.id}>
                  <Reveal delayMs={index * 90}>
                    <button
                      type="button"
                      onClick={() => openDetail(item.id)}
                      className={`group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-kg-green/12 bg-white text-left shadow-md shadow-kg-green/5 transition hover:border-kg-gold/40 hover:shadow-lg sm:rounded-[1.75rem] lg:min-h-[15rem] ${
                        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                      }`}
                    >
                      <div className="relative aspect-[16/10] w-full shrink-0 lg:aspect-auto lg:w-[42%]">
                        <Image
                          src={image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-kg-green-dark/35 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-kg-green-dark/15" />
                      </div>

                      <div className="flex flex-1 flex-col justify-center px-5 py-5 sm:px-8 sm:py-8">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-kg-gold/30 bg-kg-gold/10 text-kg-green sm:h-12 sm:w-12 sm:rounded-2xl">
                          <AboutPillarIcon name={item.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
                        </span>
                        <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-kg-gold sm:mt-5 sm:text-[0.7rem] sm:tracking-[0.2em]">
                          {item.subtitle}
                        </p>
                        <h3 className="mt-1.5 font-serif text-xl text-kg-green-dark sm:mt-2 sm:text-2xl lg:text-[1.65rem]">{item.title}</h3>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-kg-muted">{item.description}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-kg-green transition group-hover:text-kg-gold">
                          Read more
                          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {selected && <AboutPillarModal detail={selected} onClose={closeDetail} />}
    </>
  );
}
