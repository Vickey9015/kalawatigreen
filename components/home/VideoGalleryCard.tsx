"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HomeGalleryVideo } from "@/lib/video-content";

type VideoGalleryCardProps = {
  video: HomeGalleryVideo;
  /** When true, card is not a link (e.g. on /video/). */
  staticCard?: boolean;
};

export default function VideoGalleryCard({ video, staticCard }: VideoGalleryCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useRef(false);
  const [inView, setInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const [motionFallback, setMotionFallback] = useState(false);

  const hasVideo = Boolean(video.videoSrc || video.videoId);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const tryPlayMp4 = useCallback(async () => {
    const element = videoRef.current;
    if (!element || !video.videoSrc || prefersReducedMotion.current) return;

    try {
      element.muted = true;
      await element.play();
      setIsPlaying(true);
      setMotionFallback(false);
    } catch {
      setIsPlaying(false);
      setMotionFallback(true);
    }
  }, [video.videoSrc]);

  useEffect(() => {
    if (!inView || prefersReducedMotion.current) {
      setShowEmbed(false);
      setIsPlaying(false);
      setMotionFallback(false);
      const element = videoRef.current;
      if (element) {
        element.pause();
        element.currentTime = 0;
      }
      return;
    }

    if (video.videoId) {
      setShowEmbed(true);
      setIsPlaying(true);
      return;
    }

    if (video.videoSrc) {
      void tryPlayMp4();
    }
  }, [inView, video.videoId, video.videoSrc, tryPlayMp4]);

  async function handlePointerEnter() {
    if (prefersReducedMotion.current || inView) return;
    if (video.videoId) {
      setShowEmbed(true);
      setIsPlaying(true);
      return;
    }
    await tryPlayMp4();
  }

  function handlePointerLeave() {
    if (inView) return;
    setShowEmbed(false);
    setIsPlaying(false);
    setMotionFallback(false);
    const element = videoRef.current;
    if (!element) return;
    element.pause();
    element.currentTime = 0;
  }

  const className =
    "group relative block overflow-hidden rounded-[1.5rem] border border-kg-green/12 shadow-md";
  const pointerHandlers = {
    onPointerEnter: handlePointerEnter,
    onPointerLeave: handlePointerLeave,
  };

  const inner = (
    <>
      <div className="relative aspect-[16/11] overflow-hidden bg-kg-green-dark/5">
        <Image
          src={video.image}
          alt={video.title}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isPlaying ? "opacity-0" : "opacity-100"
          } ${motionFallback ? "kg-kenburns" : "group-hover:scale-105"}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {video.videoSrc ? (
          <video
            ref={videoRef}
            src={video.videoSrc}
            muted
            loop
            playsInline
            autoPlay={false}
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            onError={() => {
              setIsPlaying(false);
              setMotionFallback(true);
            }}
          />
        ) : null}

        {showEmbed && video.videoId ? (
          <iframe
            title={video.title}
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}

        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isPlaying || motionFallback ? "bg-kg-green-dark/15" : "bg-kg-green-dark/20 group-hover:bg-kg-green-dark/30"
          }`}
        />

        <span
          className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-white/90 text-kg-green shadow-lg transition-all duration-300 ${
            isPlaying ? "scale-90 opacity-0" : "opacity-100"
          }`}
          aria-hidden
        >
          <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 7.5v9l8-4.5-8-4.5z" />
          </svg>
        </span>

        {hasVideo ? <span className="sr-only">Video preview plays when this card is on screen</span> : null}
      </div>

      <p className="bg-white px-4 py-3 text-sm tracking-[0.12em] uppercase text-kg-green">{video.title}</p>
    </>
  );

  if (staticCard) {
    return (
      <div ref={rootRef} className={className} {...pointerHandlers}>
        {inner}
      </div>
    );
  }

  return (
    <Link href="/video/" className={className} {...pointerHandlers}>
      <div ref={rootRef}>{inner}</div>
    </Link>
  );
}
