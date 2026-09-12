import Image from "next/image";
import {
  AdminGhostButton,
  AdminPageHeader,
  AdminPanel,
  AdminPrimaryButton,
  AdminSecondaryButton,
  Field,
  StatusBadge,
  TextInput,
} from "@/components/admin/AdminUi";
import {
  galleryFilters,
  galleryItems,
  galleryPageHeader,
} from "@/lib/gallery-content";

export default function AdminGalleryPage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="Moments"
        description="Curate gallery images, categories, and captions for the Moments page."
        actions={
          <>
            <AdminSecondaryButton>Discard</AdminSecondaryButton>
            <AdminPrimaryButton>Save changes</AdminPrimaryButton>
          </>
        }
      />

      <AdminPanel title="Page header">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Title">
            <TextInput defaultValue={galleryPageHeader.title} />
          </Field>
          <Field label="Subtitle">
            <TextInput defaultValue={galleryPageHeader.subtitle} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Categories"
        description="Filters visitors use to browse moments."
      >
        <div className="flex flex-wrap gap-2">
          {galleryFilters.map((filter) => (
            <span
              key={filter.id}
              className="rounded-lg border border-[rgba(1,49,31,0.12)] bg-white px-3 py-1.5 text-xs font-medium text-kg-green"
            >
              {filter.label}
            </span>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel
        title="Gallery images"
        description={`${galleryItems.length} moments in the masonry layout.`}
        actions={<AdminGhostButton>+ Upload image</AdminGhostButton>}
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)]"
            >
              <div className="relative aspect-[4/3] bg-kg-cream-dark">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="space-y-3 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge label={item.category} />
                  {item.featured ? <StatusBadge label="Featured" tone="warn" /> : null}
                </div>
                <Field label="Alt text">
                  <TextInput defaultValue={item.alt} />
                </Field>
                <Field label="Image path">
                  <TextInput defaultValue={item.src} />
                </Field>
                <div className="flex justify-end">
                  <AdminGhostButton>Remove</AdminGhostButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AdminPanel>
    </div>
  );
}
