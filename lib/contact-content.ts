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
  title: "Get in Touch",
  subtitle: "We'd love to hear from you",
  description:
    "Whether you're planning a wedding, a corporate retreat, or a peaceful weekend escape — our team is here to help you craft the perfect experience at Kalawati Greens.",
} as const;

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
  },
  {
    title: "Grand Celebrations",
    description: "Banquet halls & lawns for weddings & events",
    image: "/images/banquet.png",
  },
  {
    title: "Pool & Dining",
    description: "Tropical pool, restaurant & premium bar",
    image: "/images/pool.png",
  },
  {
    title: "Corporate Events",
    description: "Conference halls for meetings & offsites",
    image: "/images/conference.png",
  },
] as const;

export const contactBannerImage = "/images/gallery/moment-01.png";
