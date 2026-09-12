export const videoPageHeader = {
  title: "Video Section",
  subtitle: "Experience Kalawati Greens in motion",
  description:
    "Take a visual journey through our forest-inspired retreat — from lush green landscapes and luxury cottages to grand celebrations and serene poolside moments.",
} as const;

/** Replace with your YouTube video ID when available, e.g. "dQw4w9WgXcQ" */
export const featuredVideoId = "";

export type HomeGalleryVideo = {
  title: string;
  image: string;
  /** Local path under /public, e.g. /videos/resort-overview.mp4 */
  videoSrc?: string;
  /** YouTube video ID for hover preview */
  videoId?: string;
};

export const homeGalleryVideos: HomeGalleryVideo[] = [
  {
    title: "Resort Overview",
    image: "/images/cottage.png",
    videoSrc: "/videos/resort-overview.mp4",
  },
  {
    title: "Nature & Ambience",
    image: "/images/lawn-upawan.png",
    videoSrc: "/videos/nature-ambience.mp4",
  },
  {
    title: "Pool & Leisure",
    image: "/images/pool.png",
    videoSrc: "/videos/pool-leisure.mp4",
  },
];

export const videoHighlights = [
  {
    title: "Forest Retreat",
    description: "Explore our Miyawaki-inspired green ecosystem",
    image: "/images/cottage.png",
  },
  {
    title: "Celebrations",
    description: "Weddings and events in nature's embrace",
    image: "/images/banquet.png",
  },
  {
    title: "Pool & Leisure",
    description: "Tropical pool surrounded by greenery",
    image: "/images/pool.png",
  },
] as const;
