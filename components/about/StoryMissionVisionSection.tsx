"use client";

import { useCallback, useEffect, useState } from "react";
import { AboutPillarIcon } from "@/components/about/AboutIcons";
import AboutPillarModal from "@/components/about/AboutPillarModal";
import {
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
      <section className="bg-kg-cream px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border-2 border-[#7a9e88] bg-kg-cream px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {storyMissionVision.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openDetail(item.id)}
                className={`group flex cursor-pointer flex-col items-center px-2 text-center transition-colors md:px-6 ${
                  index > 0 ? "md:border-l md:border-kg-green/20" : ""
                }`}
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center text-kg-green transition-transform duration-300 group-hover:scale-110">
                  <AboutPillarIcon name={item.icon} className="h-10 w-10" />
                </span>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-kg-green">
                  {item.title}
                </h2>
                <p className="mt-2 text-xs font-medium text-kg-green-light">{item.subtitle}</p>
                <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-kg-green">
                  {item.description}
                </p>
                {item.showReadMore && (
                  <span className="mt-5 text-sm font-medium text-kg-green-light transition-colors group-hover:text-kg-green">
                    Read More →
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && <AboutPillarModal detail={selected} onClose={closeDetail} />}
    </>
  );
}
