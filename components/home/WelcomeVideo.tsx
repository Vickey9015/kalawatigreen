"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { featuredVideoId } from "@/lib/video-content";
import { homeVideos, welcomeContent } from "@/lib/home-content";

const introFrames = homeVideos.map((video) => ({
  image: video.image,
  alt: video.title,
}));

export default function WelcomeVideo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (featuredVideoId) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % introFrames.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, []);

  if (featuredVideoId) {
    return (
      <div className="relative min-h-[18rem] overflow-hidden rounded-md sm:min-h-[24rem] lg:min-h-[28rem]">
        <iframe
          title={welcomeContent.videoCaption}
          src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1&mute=1&loop=1&playlist=${featuredVideoId}&controls=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-md sm:min-h-[24rem] lg:min-h-[28rem]">
      {introFrames.map((frame, index) => (
        <Image
          key={frame.image}
          src={frame.image}
          alt={frame.alt}
          fill
          className={`object-cover transition-opacity duration-700 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-kg-green-dark/25" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kg-green-dark/70 to-transparent px-4 py-4 text-white">
        <p className="text-sm font-semibold tracking-wide">{welcomeContent.videoCaption}</p>
      </div>
    </div>
  );
}
