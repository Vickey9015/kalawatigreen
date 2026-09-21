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
  image?: string;
  icon: ServiceIconName;
};

export type ServiceDetail = {
  id: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  perfectFor: string;
};

export type ServiceCategory = {
  id: string;
  eyebrow: string;
  slogan: string;
  services: ServiceItem[];
};

export const servicesPageHeader = {
  title: "Spaces & Services",
  subtitle: "Curated experiences across stays, dining, and celebrations — all rooted in nature.",
} as const;

export const servicesHeroImages = {
  primary: "/images/cottage.png",
  secondary: "/images/restaurant.png",
  accent: "/images/lawn-upawan.png",
} as const;

const curatedSpacesServices: ServiceItem[] = [
  {
    id: "cottages",
    title: "Luxury Cottages",
    description: "Private retreats nestled amidst lush greenery.",
    image: "/images/cottage.png",
    icon: "cottage",
  },
  {
    id: "conference",
    title: "Conference Hall",
    description: "A refined setting for meetings, seminars, and corporate gatherings.",
    image: "/images/conference.png",
    icon: "conference",
  },
  {
    id: "celebration-lawns",
    title: "Banquet Hall & Celebration Lawns",
    description: "Elegant venues designed for weddings and grand celebrations.",
    icon: "hall",
  },
  {
    id: "pool",
    title: "Tropical Swimming Pool",
    description: "A tranquil oasis for relaxation and leisure.",
    image: "/images/pool.png",
    icon: "pool",
  },
];

const drinkDineServices: ServiceItem[] = [
  {
    id: "restaurant",
    title: "Palash Restaurant",
    description: "Flavour, freshness, and culinary artistry in a vibrant multi-cuisine setting.",
    image: "/images/restaurant.png",
    icon: "restaurant",
  },
  {
    id: "bar",
    title: "Baa-Ya-Bia Bar",
    description: "Premium spirits, refreshing cocktails, and an inviting tropical ambiance.",
    image: "/images/bar.png",
    icon: "bar",
  },
];

const grandVenuesServices: ServiceItem[] = [
  {
    id: "banquet",
    title: "Gulmohar Hall",
    description: "An elegant indoor venue for weddings, receptions, and corporate events.",
    image: "/images/banquet.png",
    icon: "hall",
  },
  {
    id: "upawan-lawn",
    title: "Upawan Lawn",
    description: "A spacious outdoor lawn surrounded by lush greenery.",
    image: "/images/lawn-upawan.png",
    icon: "lawn",
  },
  {
    id: "jalaj-lawn",
    title: "Jalaj Lawn",
    description: "A picturesque lawn with a unique floating stage for grand celebrations.",
    image: "/images/lawn-jalaj.png",
    icon: "garden",
  },
];

const guestAmenitiesServices: ServiceItem[] = [
  {
    id: "parking",
    title: "Orchard Parking",
    description: "A welcome into nature through refreshing fruit orchards.",
    image: "/images/parking.png",
    icon: "parking",
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "curated-spaces",
    eyebrow: "Curated Spaces",
    slogan: "Natural Elegance.",
    services: curatedSpacesServices,
  },
  {
    id: "drink-dine",
    eyebrow: "Drink & Dine",
    slogan: "Flavours Inspired by Nature",
    services: drinkDineServices,
  },
  {
    id: "grand-venues",
    eyebrow: "Grand Venues",
    slogan: "Celebrating in Nature",
    services: grandVenuesServices,
  },
  {
    id: "guest-amenities",
    eyebrow: "Guest Amenities",
    slogan: "Thoughtfully designed from arrival to departure.",
    services: guestAmenitiesServices,
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
    id: "celebration-lawns",
    title: "Banquet Hall & Celebration Lawns",
    tagline: "Elegant venues designed for weddings and grand celebrations.",
    paragraphs: [
      "Our banquet halls and celebration lawns are crafted for weddings, receptions, and milestone gatherings that deserve a setting as memorable as the occasion itself.",
      "Surrounded by lush greenery, these spaces blend refined interiors with open-air charm — offering flexibility for décor, seating, and event setups of every scale.",
    ],
    perfectFor: "Weddings, receptions, social celebrations, and large family gatherings.",
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

export const allServices = serviceCategories.flatMap((category) => category.services);

export function getServiceDetailById(id: string) {
  const detail = serviceDetails.find((item) => item.id === id);
  if (!detail) return null;
  const service = allServices.find((item) => item.id === id);
  return { detail, image: service?.image, icon: service?.icon };
}
