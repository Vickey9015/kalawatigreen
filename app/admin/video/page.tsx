import Image from "next/image";
import {
  AdminGhostButton,
  AdminPageHeader,
  AdminPanel,
  AdminPrimaryButton,
  AdminSecondaryButton,
  Field,
  StatusBadge,
  TextArea,
  TextInput,
} from "@/components/admin/AdminUi";
import {
  featuredVideoId,
  videoHighlights,
  videoPageHeader,
} from "@/lib/video-content";

export default function AdminVideoPage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="Video"
        description="Set the featured YouTube film and supporting highlight clips."
        actions={
          <>
            <AdminSecondaryButton>Discard</AdminSecondaryButton>
            <AdminPrimaryButton>Save changes</AdminPrimaryButton>
          </>
        }
      />

      <AdminPanel title="Page header">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Eyebrow">
              <TextInput defaultValue={videoPageHeader.eyebrow} />
            </Field>
            <Field label="Title">
              <TextInput defaultValue={videoPageHeader.title} />
            </Field>
          </div>
          <Field label="Description">
            <TextArea rows={3} defaultValue={videoPageHeader.description} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Featured video"
        description="Paste a YouTube video ID to embed the main film."
        actions={
          featuredVideoId ? (
            <StatusBadge label="Connected" tone="success" />
          ) : (
            <StatusBadge label="Not set" tone="warn" />
          )
        }
      >
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <Field
            label="YouTube video ID"
            hint='Example: from youtube.com/watch?v=XXXXXXXX — use only the ID portion'
          >
            <TextInput
              defaultValue={featuredVideoId}
              placeholder="e.g. dQw4w9WgXcQ"
            />
          </Field>
          <div className="flex items-end">
            <AdminGhostButton>Test embed</AdminGhostButton>
          </div>
        </div>

        <div className="mt-5 flex aspect-video items-center justify-center rounded-xl border border-dashed border-[rgba(1,49,31,0.2)] bg-[rgba(1,49,31,0.04)] text-center">
          <div>
            <p className="text-sm font-medium text-kg-green">Video preview</p>
            <p className="mt-1 text-xs text-kg-muted">
              {featuredVideoId
                ? `Ready for ID: ${featuredVideoId}`
                : "Add a YouTube ID to preview the embed here."}
            </p>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Highlight clips"
        description="Supporting cards under the main video."
        actions={<AdminGhostButton>+ Add clip</AdminGhostButton>}
      >
        <div className="space-y-3">
          {videoHighlights.map((clip) => (
            <div
              key={clip.title}
              className="grid gap-4 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 md:grid-cols-[7.5rem_1fr_auto]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-kg-cream-dark">
                <Image
                  src={clip.image}
                  alt={clip.title}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Title">
                  <TextInput defaultValue={clip.title} />
                </Field>
                <Field label="Image">
                  <TextInput defaultValue={clip.image} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Description">
                    <TextInput defaultValue={clip.description} />
                  </Field>
                </div>
              </div>
              <div className="flex items-start justify-end">
                <AdminGhostButton>Remove</AdminGhostButton>
              </div>
            </div>
          ))}
        </div>
      </AdminPanel>
    </div>
  );
}
