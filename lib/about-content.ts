export const aboutIntro = {
  eyebrow: "About",
  title: "Kalawati Greens",
  tagline: "Bringing Nature to You",
  description:
    "Kalawati Greens is more than just a destination—it is a vision brought to life. A place where nature is not an addition, but the foundation of every experience. Designed as a forest-inspired retreat in Ambedkar Nagar, it offers a rare escape where greenery, serenity, and thoughtful hospitality come together seamlessly.",
} as const;

export const storyMissionVision = [
  {
    id: "story",
    title: "Our Story",
    subtitle: "Where It All Began",
    description:
      "Born from a simple yet powerful idea—to create a space where people could reconnect with nature while celebrating life's most important moments.",
    showReadMore: true,
    anchor: "our-story",
    icon: "story" as const,
  },
  {
    id: "mission",
    title: "Our Mission",
    subtitle: "What Drives Us",
    description:
      "To create meaningful experiences by bringing people closer to nature, with a strong commitment to sustainability.",
    showReadMore: true,
    anchor: "our-mission",
    icon: "mission" as const,
  },
  {
    id: "vision",
    title: "Our Vision",
    subtitle: "Where We Are Heading",
    description:
      "To redefine hospitality by seamlessly blending luxury with nature and becoming a benchmark for eco-conscious resorts.",
    showReadMore: true,
    anchor: "our-vision",
    icon: "vision" as const,
  },
] as const;

export const aboutStoryFull = {
  id: "our-story",
  title: "Our Story – Where It All Began",
  paragraphs: [
    "Kalawati Greens was born from a simple yet powerful idea—to create a space where people could reconnect with nature while celebrating life's most important moments.",
    "What once was just land has now transformed into a thriving green ecosystem, nurtured with care and intention. Inspired by the Miyawaki Method of afforestation, thousands of plants were brought together to create a dense, self-sustaining forest. Over time, this vision evolved into a destination that blends natural beauty with modern comfort.",
    "Spread across 4 acres and established on 6th November 2022, Kalawati Greens is designed around a jungle theme, with thoughtfully raised mounds dividing the property into distinct, secluded spaces. Stand on one side of these mounds, and all you will see is trees—an immersive forest view from every angle. Built entirely using sustainable materials, the property reflects a deep commitment to harmony with nature at every step.",
    "Every tree planted, every pathway created, and every space designed tells a story of patience, growth, and a deep respect for nature. Today, Kalawati Greens stands as a living example of how nature and hospitality can coexist beautifully.",
  ],
} as const;

export const aboutMissionFull = {
  id: "our-mission",
  title: "Our Mission – What Drives Us",
  intro:
    "Our mission is to create meaningful experiences by bringing people closer to nature, while maintaining a strong commitment to sustainability and environmental responsibility.",
  bullets: [
    "Celebrate life's special occasions in a natural setting",
    "Experience peace and relaxation away from urban chaos",
    "Connect with an environment that feels authentic and refreshing",
  ],
  closing:
    "At Kalawati Greens, every experience is designed with intention—to ensure comfort for our guests while preserving the beauty of the natural world around us.",
} as const;

export const aboutVisionFull = {
  id: "our-vision",
  title: "Our Vision – Where We Are Heading",
  intro:
    "Our vision is to redefine hospitality by creating a destination that seamlessly blends luxury with nature. We aspire to become a benchmark for eco-conscious resorts, where sustainability is not just a practice but a way of life.",
  bullets: [
    "A leading eco-luxury retreat in the region",
    "A preferred destination for weddings, events, and leisure stays",
    "A space that inspires people to appreciate and protect nature",
  ],
  closing:
    "As we grow, our focus remains on expanding responsibly—ensuring that every development enhances the natural ecosystem rather than disrupting it.",
} as const;

export const aboutValues = {
  title: "Our Values – The Heart of Kalawati Greens",
  intro:
    "At Kalawati Greens, we believe in living in harmony with nature while offering thoughtful, meaningful experiences. Every space we create reflects our commitment to sustainability, simplicity, and genuine hospitality.",
  subtitle: "Our philosophy is built on three key principles:",
  items: [
    {
      title: "Nature First",
      description:
        "Nature is not designed—it is nurtured. Every element at Kalawati Greens respects and enhances the natural surroundings.",
      icon: "nature" as const,
    },
    {
      title: "Thoughtful Hospitality",
      description:
        "We believe true luxury lies in comfort, simplicity, and meaningful experiences rather than excess.",
      icon: "hospitality" as const,
    },
    {
      title: "Sustainable Growth",
      description:
        "Every step forward is taken with responsibility, ensuring that development and nature grow together.",
      icon: "growth" as const,
    },
  ],
} as const;

export const aboutClosingQuote =
  "Kalawati Greens is not just about where you go—it's about how you feel when you're there. A place where every moment is calmer, every experience is richer, and every visit brings you closer to nature.";

export const aboutClosingImage = "/images/gallery/moment-07.png";

export type AboutPillarId = "story" | "mission" | "vision";

export const aboutPillarImages: Record<AboutPillarId, string> = {
  story: "/images/gallery/moment-10.png",
  mission: "/images/lawn-upawan.png",
  vision: "/images/gallery/moment-07.png",
};

export type AboutPillarDetail =
  | {
      id: AboutPillarId;
      type: "story";
      title: string;
      image: string;
      paragraphs: readonly string[];
    }
  | {
      id: AboutPillarId;
      type: "bullets";
      title: string;
      image: string;
      intro: string;
      bullets: readonly string[];
      closing: string;
      bulletsHeading?: string;
    };

export function getAboutPillarDetail(id: AboutPillarId): AboutPillarDetail {
  if (id === "story") {
    return {
      id,
      type: "story",
      title: aboutStoryFull.title,
      image: aboutPillarImages.story,
      paragraphs: aboutStoryFull.paragraphs,
    };
  }

  if (id === "mission") {
    return {
      id,
      type: "bullets",
      title: aboutMissionFull.title,
      image: aboutPillarImages.mission,
      intro: aboutMissionFull.intro,
      bullets: aboutMissionFull.bullets,
      closing: aboutMissionFull.closing,
      bulletsHeading: "We aim to provide a space where guests can:",
    };
  }

  return {
    id,
    type: "bullets",
    title: aboutVisionFull.title,
    image: aboutPillarImages.vision,
    intro: aboutVisionFull.intro,
    bullets: aboutVisionFull.bullets,
    closing: aboutVisionFull.closing,
    bulletsHeading: "We envision Kalawati Greens as:",
  };
}
