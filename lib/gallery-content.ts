export type GalleryCategory =
  | "all"
  | "weddings"
  | "lawns"
  | "rooms"
  | "pool"
  | "dining"
  | "night";

export type GallerySize = "tall" | "medium" | "compact";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
  column: 1 | 2 | 3 | 4;
  size: GallerySize;
  featured?: boolean;
};

export const galleryPageHeader = {
  title: "Kalawati Moments",
  subtitle: "Weddings, retreats, poolside evenings, and celebrations framed by the forest.",
} as const;

export const galleryHeroImages = {
  feature: "/images/gallery/moment-01.png",
  pool: "/images/gallery/moment-07.png",
  celebration: "/images/gallery/moment-03.png",
} as const;

export const galleryFilters: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings & Celebrations" },
  { id: "lawns", label: "Lawns & Outdoor Spaces" },
  { id: "rooms", label: "Cottages & Rooms" },
  { id: "pool", label: "Poolside Views" },
  { id: "dining", label: "Restaurant & Bar" },
  { id: "night", label: "Night Ambience & Lighting" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "moment-01",
    src: "/images/gallery/moment-01.png",
    alt: "Evening celebration on the lawn with warm lighting",
    category: "weddings",
    column: 1,
    size: "tall",
    featured: true,
  },
  {
    id: "moment-02",
    src: "/images/gallery/moment-02.png",
    alt: "Outdoor dining setup at dusk",
    category: "dining",
    column: 1,
    size: "medium",
    featured: true,
  },
  {
    id: "moment-03",
    src: "/images/gallery/moment-03.png",
    alt: "Grand wedding celebration in Gulmohar Hall",
    category: "weddings",
    column: 2,
    size: "compact",
    featured: true,
  },
  {
    id: "moment-04",
    src: "/images/gallery/moment-04.png",
    alt: "Decorated lawn for a wedding ceremony",
    category: "lawns",
    column: 2,
    size: "compact",
    featured: true,
  },
  {
    id: "moment-05",
    src: "/images/gallery/moment-05.png",
    alt: "Vibrant evening reception with colorful lighting",
    category: "night",
    column: 2,
    size: "compact",
    featured: true,
  },
  {
    id: "moment-06",
    src: "/images/gallery/moment-06.png",
    alt: "Resort entrance illuminated at night",
    category: "night",
    column: 3,
    size: "medium",
    featured: true,
  },
  {
    id: "moment-07",
    src: "/images/gallery/moment-07.png",
    alt: "Tropical swimming pool surrounded by greenery",
    category: "pool",
    column: 3,
    size: "tall",
    featured: true,
  },
  {
    id: "moment-08",
    src: "/images/gallery/moment-08.png",
    alt: "Palash Restaurant dining area",
    category: "dining",
    column: 4,
    size: "medium",
    featured: true,
  },
  {
    id: "moment-09",
    src: "/images/gallery/moment-09.png",
    alt: "Baa-Ya-Bia Bar in the evening",
    category: "night",
    column: 4,
    size: "tall",
    featured: true,
  },
  {
    id: "moment-10",
    src: "/images/gallery/moment-10.png",
    alt: "Luxury cottage nestled in greenery",
    category: "rooms",
    column: 1,
    size: "medium",
  },
  {
    id: "moment-11",
    src: "/images/gallery/moment-11.png",
    alt: "Premium cottage interior and exterior",
    category: "rooms",
    column: 3,
    size: "compact",
  },
  {
    id: "moment-12",
    src: "/images/gallery/moment-12.png",
    alt: "Conference and corporate event space",
    category: "weddings",
    column: 4,
    size: "compact",
  },
];

export const masonryColumns: GalleryItem["column"][] = [1, 2, 3, 4];

const sizeClasses: Record<GallerySize, string> = {
  tall: "aspect-[3/4] min-h-[280px] sm:min-h-[320px]",
  medium: "aspect-[4/3] min-h-[200px]",
  compact: "aspect-[5/4] min-h-[160px]",
};

export function gallerySizeClass(size: GallerySize): string {
  return sizeClasses[size];
}
