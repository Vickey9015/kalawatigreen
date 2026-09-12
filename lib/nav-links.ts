export type NavLink = {
  label: string;
  href: string;
};

/** Match current route to nav href (handles trailing slashes). */
export function isActiveNavPath(pathname: string, href: string): boolean {
  const normalize = (path: string) => {
    if (!path || path === "/") return "/";
    return path.endsWith("/") ? path.slice(0, -1) : path;
  };

  return normalize(pathname) === normalize(href);
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Moments", href: "/moments" },
  { label: "Video", href: "/video" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Spaces & Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerSpacesLinks: NavLink[] = [
  { label: "Cottages", href: "/services#cottages" },
  { label: "Restaurant", href: "/services#restaurant" },
  { label: "Bar", href: "/services#bar" },
  { label: "Lawns", href: "/services#lawns" },
  { label: "Banquet Hall", href: "/services#banquet" },
  { label: "Conference Hall", href: "/services#conference" },
];
