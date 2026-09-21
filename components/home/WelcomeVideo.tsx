"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { featuredVideoId } from "@/lib/video-content";
import { homeVideos, welcomeContent } from "@/lib/home-content";

const introFrames = homeVideos.map((video) => ({
  image: video.image,
  alt: video.title,
}));

type WelcomeVideoProps = {
  className?: string;
};

export default function WelcomeVideo({ className = "" }: WelcomeVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [clipIndex, setClipIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [useImageFallback, setUseImageFallback] = useState(false);

  const clips = useMemo(() => homeVideos.filter((v) => v.videoSrc), []);
  const currentClip = clips[clipIndex]?.videoSrc;

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (featuredVideoId || clips.length === 0 || useImageFallback) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setUseImageFallback(true);
    }
  }, [clips.length, useImageFallback]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || featuredVideoId || !currentClip || !isVisible || useImageFallback) {
      if (element) {
        element.pause();
      }
      setVideoPlaying(false);
      return;
    }

    element.muted = true;
    element
      .play()
      .then(() => setVideoPlaying(true))
      .catch(() => {
        setVideoPlaying(false);
        setUseImageFallback(true);
      });
  }, [isVisible, currentClip, useImageFallback]);

  useEffect(() => {
    if (featuredVideoId || !useImageFallback || !isVisible) return;

    const timer = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % introFrames.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isVisible, useImageFallback]);

  function handleVideoEnded() {
    if (clips.length <= 1) return;
    setClipIndex((current) => (current + 1) % clips.length);
  }

  const showMp4 = !featuredVideoId && Boolean(currentClip) && !useImageFallback;
  const posterFrame = clips[clipIndex] ?? homeVideos[0];

  return (
    <div
      ref={containerRef}
      className={`relative min-h-[22rem] overflow-hidden sm:min-h-[26rem] ${className}`}
    >
      {featuredVideoId && isVisible ? (
        <iframe
          title={welcomeContent.videoCaption}
          src={`https://www.youtube.com/embed/${featuredVideoId}?autoplay=1&mute=1&loop=1&playlist=${featuredVideoId}&controls=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : showMp4 ? (
        <>
          <video
            ref={videoRef}
            key={currentClip}
            src={currentClip}
            muted
            loop={clips.length <= 1}
            playsInline
            preload="auto"
            poster={posterFrame?.image}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoPlaying ? "opacity-100" : "opacity-0"
            }`}
            onPlaying={() => setVideoPlaying(true)}
            onEnded={handleVideoEnded}
            onError={() => setUseImageFallback(true)}
          />
          {!videoPlaying && posterFrame ? (
            <Image
              src={posterFrame.image}
              alt={posterFrame.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority
            />
          ) : null}
        </>
      ) : (
        introFrames.map((frame, index) => (
          <Image
            key={frame.image}
            src={frame.image}
            alt={frame.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === slideIndex ? "kg-kenburns opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 90vw, 40vw"
            priority={index === 0}
          />
        ))
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kg-green-dark/75 via-kg-green-dark/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-5 py-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white">
          {welcomeContent.videoCaption}
        </p>
        <Link
          href="/video/"
          className="pointer-events-auto rounded-full border border-white/60 bg-white/15 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition hover:bg-white/25"
        >
          Full film
        </Link>
      </div>
    </div>
  );
}
