import Link from "next/link";
import { AdminIcon } from "@/components/admin/AdminIcon";
import {
  AdminPageHeader,
  AdminPanel,
  AdminPrimaryButton,
  AdminSecondaryButton,
  StatusBadge,
} from "@/components/admin/AdminUi";
import { adminNavItems } from "@/components/admin/admin-nav";
import { aboutValues } from "@/lib/about-content";
import { contactInfo } from "@/lib/site";
import { galleryItems } from "@/lib/gallery-content";
import { signatureHighlights, whyChooseUsItems } from "@/lib/home-content";
import { allServices } from "@/lib/services-content";
import { videoHighlights } from "@/lib/video-content";

const manageLinks = adminNavItems.filter((item) => item.href !== "/admin");

const stats = [
  {
    label: "Gallery moments",
    value: String(galleryItems.length),
    hint: "Images on Moments page",
  },
  {
    label: "Services",
    value: String(allServices.length),
    hint: "Spaces & experiences",
  },
  {
    label: "Home highlights",
    value: String(signatureHighlights.length + whyChooseUsItems.length),
    hint: "Signature + why choose us",
  },
  {
    label: "Video clips",
    value: String(videoHighlights.length),
    hint: "Featured highlight cards",
  },
];

const recentActivity = [
  {
    title: "Homepage hero image",
    detail: "Currently using forest canopy banner",
    tone: "success" as const,
    badge: "Live",
  },
  {
    title: "Moments gallery",
    detail: `${galleryItems.length} images across ${new Set(galleryItems.map((i) => i.category)).size} categories`,
    tone: "success" as const,
    badge: "Live",
  },
  {
    title: "Featured video",
    detail: "YouTube ID not set yet — add from Video section",
    tone: "warn" as const,
    badge: "Needs setup",
  },
  {
    title: "Contact channel",
    detail: contactInfo.email,
    tone: "neutral" as const,
    badge: "Published",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <AdminPageHeader
        title="Overview"
        description="Manage Kalawati Greens website content from one place — homepage, spaces, moments, and contact details."
        actions={
          <>
            <AdminSecondaryButton href="/" target="_blank">
              Preview site
            </AdminSecondaryButton>
            <AdminPrimaryButton href="/admin/home/">Edit homepage</AdminPrimaryButton>
          </>
        }
      />

      <section className="admin-fade-in grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[rgba(1,49,31,0.16)] bg-[rgba(255,255,255,0.82)] px-5 py-4 shadow-[0_8px_24px_-16px_rgba(1,49,31,0.35)]"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-kg-green-light">
              {stat.label}
            </p>
            <p className="kg-serif-heading mt-2 text-3xl text-kg-green">{stat.value}</p>
            <p className="mt-1 text-xs text-kg-muted">{stat.hint}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        <AdminPanel
          title="Manage website sections"
          description="Open a section to update copy, media, and layout content."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {manageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start gap-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 transition hover:-translate-y-0.5 hover:border-kg-green/40 hover:bg-white"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-kg-green/10 text-kg-green transition group-hover:bg-kg-green group-hover:text-white">
                  <AdminIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-kg-green">{item.label}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-kg-muted">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Content status" description="Quick health check of published content.">
          <ul className="space-y-3">
            {recentActivity.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-[rgba(1,49,31,0.12)] bg-[rgba(243,242,237,0.65)] px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-kg-green">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-kg-muted">{item.detail}</p>
                  </div>
                  <StatusBadge label={item.badge} tone={item.tone} />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl border border-dashed border-[rgba(1,49,31,0.28)] bg-[rgba(1,49,31,0.06)] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-kg-green-light">
              Brand values on site
            </p>
            <p className="mt-2 text-sm text-kg-text">
              {aboutValues.items.map((value) => value.title).join(" · ")}
            </p>
          </div>
        </AdminPanel>
      </section>
    </div>
  );
}
