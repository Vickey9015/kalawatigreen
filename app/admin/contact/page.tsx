import {
  AdminGhostButton,
  AdminPageHeader,
  AdminPanel,
  AdminPrimaryButton,
  AdminSecondaryButton,
  Field,
  TextArea,
  TextInput,
} from "@/components/admin/AdminUi";
import {
  contactBannerImage,
  contactHighlights,
  contactPageHeader,
  eventTypes,
  socialLinks,
  visitInfo,
} from "@/lib/contact-content";
import { contactInfo } from "@/lib/site";

export default function AdminContactPage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="Contact"
        description="Update inquiry form options, visit details, and public contact channels."
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
              <TextInput defaultValue={contactPageHeader.eyebrow} />
            </Field>
            <Field label="Title">
              <TextInput defaultValue={contactPageHeader.title} />
            </Field>
          </div>
          <Field label="Description">
            <TextArea rows={3} defaultValue={contactPageHeader.description} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel title="Public contact details">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Phone">
            <TextInput defaultValue={contactInfo.phone} />
          </Field>
          <Field label="Email">
            <TextInput defaultValue={contactInfo.email} type="email" />
          </Field>
          <div className="md:col-span-2">
            <Field label="Address">
              <TextInput defaultValue={contactInfo.address} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Map search query">
              <TextInput defaultValue={contactInfo.mapQuery} />
            </Field>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel title="Visit information">
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Hours">
            <TextInput defaultValue={visitInfo.hours} />
          </Field>
          <Field label="Response time">
            <TextInput defaultValue={visitInfo.response} />
          </Field>
          <Field label="Visit note">
            <TextInput defaultValue={visitInfo.note} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Inquiry event types"
        description="Options shown in the contact form dropdown."
        actions={<AdminGhostButton>+ Add type</AdminGhostButton>}
      >
        <div className="flex flex-wrap gap-2">
          {eventTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(1,49,31,0.12)] bg-white px-3 py-1.5 text-xs font-medium text-kg-green"
            >
              {type}
              <button
                type="button"
                className="text-kg-muted transition hover:text-kg-green"
                aria-label={`Remove ${type}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel
        title="Contact highlights"
        description="Supporting cards on the contact page."
        actions={<AdminGhostButton>+ Add highlight</AdminGhostButton>}
      >
        <div className="space-y-3">
          {contactHighlights.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 md:grid-cols-[1fr_1fr_auto]"
            >
              <Field label="Title">
                <TextInput defaultValue={item.title} />
              </Field>
              <Field label="Description">
                <TextInput defaultValue={item.description} />
              </Field>
              <div className="flex items-end">
                <AdminGhostButton>Remove</AdminGhostButton>
              </div>
              <div className="md:col-span-3">
                <Field label="Image">
                  <TextInput defaultValue={item.image} />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel title="Social links & banner">
        <div className="grid gap-4 md:grid-cols-2">
          {socialLinks.map((link) => (
            <Field key={link.id} label={link.label}>
              <TextInput defaultValue={link.href} />
            </Field>
          ))}
          <div className="md:col-span-2">
            <Field label="Banner image">
              <TextInput defaultValue={contactBannerImage} />
            </Field>
          </div>
        </div>
      </AdminPanel>
    </div>
  );
}
