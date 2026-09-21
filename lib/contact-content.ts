export const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Leisure Stay",
  "Banquet & Celebration",
  "Conference",
  "Dining Reservation",
  "Other",
] as const;

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: "https://facebook.com" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "pinterest", label: "Pinterest", href: "https://pinterest.com" },
  { id: "youtube", label: "YouTube", href: "https://youtube.com" },
] as const;

export const contactPageHeader = {
  eyebrow: "Get in touch",
  title: "Plan your stay, celebration, or visit",
  description:
    "Whether you are booking cottages, hosting a wedding, or scheduling a venue walkthrough — our team will help you shape the experience at Kalawati Greens.",
} as const;

export const contactHeroImages = {
  primary: "/images/cottage.png",
  secondary: "/images/banquet.png",
  accent: "/images/pool.png",
} as const;

export const contactIntents = [
  { id: "stay", label: "Book a stay", href: "/contact/?intent=stay" },
  { id: "event", label: "Plan an event", href: "/contact/?intent=event" },
  { id: "visit", label: "Schedule a visit", href: "/contact/?intent=visit" },
] as const;

export const visitInfo = {
  hours: "Open daily · 9:00 AM – 8:00 PM",
  response: "We typically respond within 24 hours",
  note: "Site visits and venue walkthroughs are available by appointment.",
} as const;

export const contactHighlights = [
  {
    title: "Luxury Stays",
    description: "Forest cottages surrounded by 2,80,000+ plants",
    image: "/images/cottage.png",
    href: "/services/#curated-spaces",
  },
  {
    title: "Grand Celebrations",
    description: "Banquet halls and lawns for weddings and events",
    image: "/images/banquet.png",
    href: "/services/#grand-venues",
  },
  {
    title: "Pool & Dining",
    description: "Tropical pool, restaurant, and premium bar",
    image: "/images/pool.png",
    href: "/services/#drink-dine",
  },
  {
    title: "Corporate Events",
    description: "Conference halls for meetings and offsites",
    image: "/images/conference.png",
    href: "/services/#curated-spaces",
  },
] as const;

/** @deprecated Use contactHeroImages — kept for admin preview */
export const contactBannerImage = "/images/gallery/moment-01.png";
