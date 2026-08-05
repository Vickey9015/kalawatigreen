export type AdminNavItem = {
  href: string;
  label: string;
  description: string;
  icon: AdminIconName;
};

export type AdminIconName =
  | "dashboard"
  | "home"
  | "about"
  | "services"
  | "gallery"
  | "video"
  | "contact"
  | "settings";

export const adminNavItems: AdminNavItem[] = [
  {
    href: "/admin",
    label: "Overview",
    description: "Dashboard snapshot",
    icon: "dashboard",
  },
  {
    href: "/admin/home",
    label: "Homepage",
    description: "Hero, highlights & CTA",
    icon: "home",
  },
  {
    href: "/admin/about",
    label: "About",
    description: "Story, mission & values",
    icon: "about",
  },
  {
    href: "/admin/services",
    label: "Services",
    description: "Spaces & experiences",
    icon: "services",
  },
  {
    href: "/admin/gallery",
    label: "Moments",
    description: "Gallery images",
    icon: "gallery",
  },
  {
    href: "/admin/video",
    label: "Video",
    description: "Featured film & clips",
    icon: "video",
  },
  {
    href: "/admin/contact",
    label: "Contact",
    description: "Details & inquiry form",
    icon: "contact",
  },
  {
    href: "/admin/settings",
    label: "Settings",
    description: "Site info & SEO",
    icon: "settings",
  },
];
