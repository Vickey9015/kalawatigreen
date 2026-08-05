export type ServiceIconName =
  | "cottage"
  | "restaurant"
  | "bar"
  | "pool"
  | "hall"
  | "lawn"
  | "garden"
  | "conference"
  | "parking";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: ServiceIconName;
};

export type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  perfectFor: string;
};

export const servicesPageHeader = {
  title: "Spaces & Services",
  subtitle: "Curated Experiences. Rooted in Nature.",
} as const;

export const servicesRowOne: ServiceItem[] = [
  {
    id: "cottages",
    title: "Luxury Cottages",
    description: "Your private escape in the lap of nature.",
    image: "/images/cottage.png",
    icon: "cottage",
  },
  {
    id: "restaurant",
    title: "Palash Restaurant",
    description: "A multi-cuisine dining experience.",
    image: "/images/restaurant.png",
    icon: "restaurant",
  },
  {
    id: "bar",
    title: "Baa-Ya-Bia Bar",
    description: "Sip, relax & unwind in style.",
    image: "/images/bar.png",
    icon: "bar",
  },
  {
    id: "pool",
    title: "Swimming Pool",
    description: "Tropical pool surrounded by greenery.",
    image: "/images/pool.png",
    icon: "pool",
  },
  {
    id: "banquet",
    title: "Gulmohar Hall",
    description: "Elegant indoor space for grand events.",
    image: "/images/banquet.png",
    icon: "hall",
  },
];

export const servicesRowTwo: ServiceItem[] = [
  {
    id: "upawan-lawn",
    title: "Upawan Lawn",
    description: "Expansive lawn for large celebrations.",
    image: "/images/lawn-upawan.png",
    icon: "lawn",
  },
  {
    id: "jalaj-lawn",
    title: "Jalaj Lawn",
    description: "Serene lawn for intimate gatherings.",
    image: "/images/lawn-jalaj.png",
    icon: "garden",
  },
  {
    id: "conference",
    title: "Conference Hall",
    description: "Modern spaces for meetings & events.",
    image: "/images/conference.png",
    icon: "conference",
  },
  {
    id: "parking",
    title: "Parking",
    description: "A welcome into nature.",
    image: "/images/parking.png",
    icon: "parking",
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    id: "cottages",
    title: "Luxury Cottages – Your Private Escape",
    tagline: "Your private escape in the lap of nature.",
    paragraphs: [
      "Step into a world of calm and comfort with our premium cottages, nestled amidst dense greenery. Designed for those who seek privacy and peace, each cottage offers a perfect blend of elegance and nature.",
      "Wake up to the sound of birds, breathe in fresh forest air, and unwind in a space that feels far away from the chaos of everyday life. Whether it's a weekend getaway or an extended stay, our cottages offer a truly rejuvenating experience.",
    ],
    perfectFor: "Leisure stays, couples, family retreats, and peaceful getaways.",
  },
  {
    id: "restaurant",
    title: "Palash – Multi-Cuisine Restaurant",
    tagline: "Where dining becomes an experience.",
    paragraphs: [
      "At Palash, dining becomes an experience rather than just a meal. Our multi-cuisine restaurant brings together rich flavors, fresh ingredients, and refined presentation in a beautifully designed setting.",
      "From traditional favorites to global delicacies, every dish is crafted with attention to detail. The warm ambiance and nature-inspired interiors make it an ideal space for family dining, romantic dinners, and group gatherings.",
    ],
    perfectFor: "Family meals, celebrations, and fine dining experiences.",
  },
  {
    id: "bar",
    title: "Baa-Ya-Bia – The Tropical Bar",
    tagline: "Relaxed evenings and vibrant nights.",
    paragraphs: [
      "Unwind in style at Baa-Ya-Bia, our tropical-themed bar designed for relaxed evenings and vibrant nights. With a curated selection of premium spirits, signature cocktails, and a soothing ambiance, it's the perfect place to relax and socialize.",
      "Whether you're enjoying a quiet drink or celebrating with friends, the bar offers an atmosphere that feels both exclusive and inviting.",
    ],
    perfectFor: "Evening relaxation, social gatherings, and celebrations.",
  },
  {
    id: "pool",
    title: "Swimming Pool – A Refreshing Retreat",
    tagline: "A serene escape within nature.",
    paragraphs: [
      "Our tropical swimming pool is designed as a serene escape within nature. Surrounded by greenery, it offers a refreshing break from routine and a perfect spot to relax and recharge.",
      "Spend your day lounging by the pool, enjoying the calm environment, or simply soaking in the peaceful surroundings.",
    ],
    perfectFor: "Relaxation, leisure time, and family enjoyment.",
  },
  {
    id: "banquet",
    title: "Gulmohar Hall – Elegant Indoor Venue",
    tagline: "Grand celebrations with ease.",
    paragraphs: [
      "Gulmohar Hall is a sophisticated indoor venue designed to host grand celebrations and professional events with ease. With its elegant interiors and spacious layout, it creates the perfect setting for seamless experiences.",
      "Whether it's a wedding, reception, or corporate event, the hall is equipped to deliver comfort, style, and functionality.",
    ],
    perfectFor: "Weddings, receptions, corporate events, and formal gatherings.",
  },
  {
    id: "upawan-lawn",
    title: "Upawan Lawn – Nature's Open Venue",
    tagline: "Open-air celebrations surrounded by greenery.",
    paragraphs: [
      "Upawan Lawn offers a beautiful open-air venue surrounded by lush greenery. It creates a natural, serene environment that enhances every celebration.",
      "The expansive space allows flexibility for décor, seating, and event setups, making it ideal for both intimate and large-scale gatherings.",
    ],
    perfectFor: "Outdoor weddings, social events, and cultural functions.",
  },
  {
    id: "jalaj-lawn",
    title: "Jalaj Lawn – Signature Celebration Space",
    tagline: "A magical stage for unforgettable events.",
    paragraphs: [
      "Jalaj Lawn is one of the most distinctive spaces at Kalawati Greens. Featuring a uniquely designed stage with a stunning floating effect, it adds a magical touch to every celebration.",
      "This space is crafted to create visually striking events that leave a lasting impression on guests.",
    ],
    perfectFor: "Grand weddings, premium events, and high-impact celebrations.",
  },
  {
    id: "conference",
    title: "Conference Hall – Professional Meets Peaceful",
    tagline: "Focus and productivity in a calm setting.",
    paragraphs: [
      "Our conference hall offers a refined and fully functional space for corporate gatherings. Designed to ensure focus and productivity, it combines professional amenities with a calm, distraction-free environment.",
      "It's the ideal setting for meetings, seminars, training sessions, and business events.",
    ],
    perfectFor: "Corporate meetings, seminars, and workshops.",
  },
  {
    id: "parking",
    title: "Parking – A Welcome into Nature",
    tagline: "Your arrival is thoughtfully designed.",
    paragraphs: [
      "At Kalawati Greens, even your arrival is thoughtfully designed. Our parking area is set within refreshing fruit orchards, offering a unique and calming welcome.",
      "Instead of concrete surroundings, you are greeted by greenery from the very first step—setting the tone for your entire experience.",
    ],
    perfectFor: "A peaceful welcome for every guest and visitor.",
  },
];

export const servicesClosingLine =
  "Every space at Kalawati Greens is more than just a facility—it is an experience designed to bring you closer to nature while delivering comfort, elegance, and unforgettable moments.";

export const allServices = [...servicesRowOne, ...servicesRowTwo];

const serviceImageById = Object.fromEntries(
  allServices.map((service) => [service.id, service.image]),
) as Record<string, string>;

export function getServiceDetailById(id: string) {
  const detail = serviceDetails.find((item) => item.id === id);
  if (!detail) return null;
  return { detail, image: serviceImageById[id] ?? "/images/cottage.png" };
}
