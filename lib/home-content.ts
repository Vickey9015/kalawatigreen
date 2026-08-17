export const heroHeadline = ["A Forest.", "A Retreat.", "A Celebration."] as const;

export const heroSubtitle =
  "A hidden paradise where nature, luxury, and unforgettable moments come together.";

export const heroSlides = [
  {
    id: "slide-1",
    panels: [
      { image: "/images/cottage.png", alt: "Luxury cottage at dusk" },
      { image: "/images/pool.png", alt: "Aerial view of the tropical swimming pool" },
      { image: "/images/banquet.png", alt: "Glass banquet hall among the trees" },
    ],
  },
  {
    id: "slide-2",
    panels: [
      { image: "/images/hero.jpg", alt: "Forest resort aerial view" },
      { image: "/images/restaurant.png", alt: "Restaurant dining at Kalawati Greens" },
      { image: "/images/gallery/moment-06.png", alt: "Night ambience at the resort" },
    ],
  },
  {
    id: "slide-3",
    panels: [
      { image: "/images/top_bg_image.png", alt: "Forest retreat landscape" },
      { image: "/images/lawn-upawan.png", alt: "Open lawn surrounded by greenery" },
      { image: "/images/bar.png", alt: "Bar and evening gathering space" },
    ],
  },
] as const;

export const heroImage = "/images/hero.jpg";
export const heroImageDesktop = "/images/hero.jpg";

export const homeStats = [
  { value: "28+", label: "Acres of Greenery", icon: "acres" },
  { value: "2,80,000+", label: "Plants & Trees", icon: "plants" },
  { value: "4,000+", label: "Varieties", icon: "varieties" },
  { value: "100+", label: "Events Hosted", icon: "events" },
] as const;

export const welcomeContent = {
  eyebrow: "Welcome to Kalawati Greens",
  title: "Where Luxury Meets Nature",
  paragraphs: [
    "At Kalawati Greens, every detail is designed to reconnect you with nature. Built on the philosophy of the Miyawaki Method, our space is home to over 2,80,000 plants of 4,000+ varieties, creating a dense, living forest ecosystem.",
    "From peaceful stays to grand celebrations, we offer an experience where luxury meets nature in its purest form.",
  ],
  videoImage: "/images/banquet.png",
  videoCaption: "Experience Kalawati Greens",
} as const;

export const welcomeFeatures = [
  { title: "Eco-friendly sustainable", icon: "leaf" },
  { title: "Miyawaki Method", icon: "tree" },
  { title: "Luxury & Comfort", icon: "diamond" },
  { title: "Memorable Experiences", icon: "spark" },
] as const;

export const spacesSection = {
  title: "Our Spaces",
  subtitle: "Curated spaces for unforgettable stays, celebrations & getaways.",
} as const;

export const homeSpaces = [
  {
    id: "cottages",
    title: "Luxury Cottages",
    description: "Private forest cottages for a peaceful, nature-wrapped stay.",
    image: "/images/cottage.png",
  },
  {
    id: "banquet",
    title: "Banquet & Lawns",
    description: "Elegant halls and open lawns for weddings and celebrations.",
    image: "/images/banquet-lawns.jpg",
  },
  {
    id: "restaurant",
    title: "Restaurant & Bar",
    description: "Multi-cuisine dining and tropical evenings at Baa-Ya-Bia.",
    image: "/images/restaurant.png",
  },
  {
    id: "pool",
    title: "Swimming Pool",
    description: "A tropical pool surrounded by dense greenery.",
    image: "/images/pool.png",
  },
  {
    id: "conference",
    title: "Conference Spaces",
    description: "Focused meeting rooms away from city distraction.",
    image: "/images/conference.png",
  },
  {
    id: "parking",
    title: "Orchard Parking",
    description: "Arrive through fruit orchards — a welcome into nature.",
    image: "/images/parking.png",
  },
] as const;

export const homeVideos = [
  {
    title: "Resort Overview",
    image: "/images/cottage.png",
  },
  {
    title: "Nature & Ambience",
    image: "/images/lawn-upawan.png",
  },
  {
    title: "Pool & Leisure",
    image: "/images/pool.png",
  },
] as const;

export const homeMoments = [
  { label: "Weddings", image: "/images/gallery/moment-01.png" },
  { label: "Lawns & Outdoors", image: "/images/gallery/moment-04.png" },
  { label: "Cottages & Rooms", image: "/images/gallery/moment-10.png" },
  { label: "Poolside Views", image: "/images/gallery/moment-07.png" },
  { label: "Crafted Dining", image: "/images/gallery/moment-08.png" },
  { label: "Night Ambience", image: "/images/gallery/moment-05.png" },
  { label: "Celebrations", image: "/images/gallery/moment-03.png" },
  { label: "Evening Lights", image: "/images/gallery/moment-06.png" },
  { label: "Restaurant & Bar", image: "/images/gallery/moment-09.png" },
  { label: "Forest Retreat", image: "/images/gallery/moment-11.png" },
] as const;

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding guest",
    quote:
      "Kalawati Greens felt like another world. The greenery, the lighting, and the warmth of the team made our celebration unforgettable.",
    image: "/images/gallery/moment-02.png",
  },
  {
    name: "Rahul Mehta",
    role: "Corporate retreat",
    quote:
      "A rare place where meetings actually feel calm. The conference space was professional, and the forest around it made the whole day restorative.",
    image: "/images/conference.png",
  },
  {
    name: "Ananya Verma",
    role: "Weekend stay",
    quote:
      "Waking up to birdsong in the cottage was magical. Luxury without losing the feeling of being deep in nature.",
    image: "/images/cottage.png",
  },
] as const;

export const upcomingEvents = [
  {
    date: "15",
    month: "JUN",
    title: "Sufi Night",
    description: "An evening of live music under the forest canopy.",
    image: "/images/gallery/moment-05.png",
  },
  {
    date: "28",
    month: "JUN",
    title: "Yoga Retreat",
    description: "A mindful morning among 4,000+ plant varieties.",
    image: "/images/lawn-jalaj.png",
  },
  {
    date: "12",
    month: "JUL",
    title: "Garden Brunch",
    description: "Seasonal flavours at Palash, set against the lawns.",
    image: "/images/restaurant.png",
  },
  {
    date: "26",
    month: "JUL",
    title: "Poolside Evening",
    description: "Sunset leisure, tropical drinks, and forest light.",
    image: "/images/pool.png",
  },
] as const;

export const blogPosts = [
  {
    date: "08",
    month: "JUN",
    title: "Why Forest Retreats Restore Us",
    excerpt: "How dense greenery, quiet pathways, and Miyawaki forests change the way we rest.",
    image: "/images/cottage.png",
  },
  {
    date: "21",
    month: "MAY",
    title: "Planning a Wedding in Nature",
    excerpt: "Lawns, halls, and lighting ideas for celebrations that feel rooted in the landscape.",
    image: "/images/gallery/moment-03.png",
  },
  {
    date: "04",
    month: "MAY",
    title: "A Day at Kalawati Greens",
    excerpt: "From orchard parking to poolside dusk — a simple itinerary for first-time guests.",
    image: "/images/pool.png",
  },
] as const;

export const whyChooseUsItems = [
  {
    title: "A unique forest-inspired resort experience",
    icon: "leaf",
  },
  {
    title: "Perfect blend of luxury & natural serenity",
    icon: "diamond",
  },
  {
    title: "Ideal for weddings, corporate events & leisure stays",
    icon: "rings",
  },
  {
    title: "Thoughtfully designed spaces for every occasion",
    icon: "home",
  },
  {
    title: "Immersive environment away from city chaos",
    icon: "droplet",
  },
] as const;

export const signatureHighlights = [
  {
    title: "Luxury Cottages",
    description: "Luxury cottages surrounded by greenery",
    image: "/images/cottage.png",
  },
  {
    title: "Elegant Banquet & Lawns",
    description: "Elegant banquet & expansive lawns",
    image: "/images/banquet.png",
  },
  {
    title: "Restaurant & Bar",
    description: "Multi-cuisine restaurant & premium bar",
    image: "/images/bar.png",
  },
  {
    title: "Tropical Swimming Pool",
    description: "Tropical swimming pool",
    image: "/images/pool.png",
  },
  {
    title: "Conference Spaces",
    description: "Conference & corporate spaces",
    image: "/images/conference.png",
  },
] as const;

export const ctaImage =
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=85";
