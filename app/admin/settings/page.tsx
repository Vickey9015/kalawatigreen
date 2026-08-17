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
  footerQuickLinks,
  footerSpacesLinks,
  mainNavLinks,
} from "@/lib/nav-links";
import { SITE, contactInfo, siteName } from "@/lib/site";

export default function AdminSettingsPage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="Settings"
        description="Site-wide identity, SEO defaults, and navigation structure."
        actions={
          <>
            <AdminSecondaryButton>Discard</AdminSecondaryButton>
            <AdminPrimaryButton>Save changes</AdminPrimaryButton>
          </>
        }
      />

      <AdminPanel title="Site identity">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Site name">
            <TextInput defaultValue={siteName} />
          </Field>
          <Field label="Canonical URL">
            <TextInput defaultValue={SITE} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Default meta description">
              <TextArea
                rows={3}
                defaultValue="Forest-inspired luxury resort in Ambedkar Nagar — peaceful stays, grand celebrations, and immersive nature experiences."
              />
            </Field>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel title="Primary contact (global)">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Phone">
            <TextInput defaultValue={contactInfo.phone} />
          </Field>
          <Field label="Email">
            <TextInput defaultValue={contactInfo.email} type="email" />
          </Field>
          <div className="md:col-span-2">
            <Field label="Location">
              <TextInput defaultValue={contactInfo.location} />
            </Field>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Main navigation"
        description="Links shown in the site header."
        actions={<AdminGhostButton>+ Add link</AdminGhostButton>}
      >
        <div className="space-y-3">
          {mainNavLinks.map((link) => (
            <div
              key={link.href}
              className="grid gap-3 rounded-xl border border-[rgba(10,61,42,0.14)] bg-[rgba(232,240,234,0.65)] p-4 md:grid-cols-[1fr_1fr_auto]"
            >
              <Field label="Label">
                <TextInput defaultValue={link.label} />
              </Field>
              <Field label="URL">
                <TextInput defaultValue={link.href} />
              </Field>
              <div className="flex items-end">
                <AdminGhostButton>Remove</AdminGhostButton>
              </div>
            </div>
          ))}
        </div>
      </AdminPanel>

      <div className="grid gap-6 lg:grid-cols-2">
        <AdminPanel title="Footer quick links">
          <div className="space-y-3">
            {footerQuickLinks.map((link) => (
              <div key={link.href} className="grid grid-cols-2 gap-3">
                <Field label="Label">
                  <TextInput defaultValue={link.label} />
                </Field>
                <Field label="URL">
                  <TextInput defaultValue={link.href} />
                </Field>
              </div>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Footer spaces links">
          <div className="space-y-3">
            {footerSpacesLinks.map((link) => (
              <div key={link.href} className="grid grid-cols-2 gap-3">
                <Field label="Label">
                  <TextInput defaultValue={link.label} />
                </Field>
                <Field label="URL">
                  <TextInput defaultValue={link.href} />
                </Field>
              </div>
            ))}
          </div>
        </AdminPanel>
      </div>

      <AdminPanel title="Admin access" description="Authentication will be connected in the next step.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Admin email">
            <TextInput defaultValue={contactInfo.email} type="email" />
          </Field>
          <Field label="Display name">
            <TextInput defaultValue="Kalawati Admin" />
          </Field>
          <Field label="New password">
            <TextInput type="password" placeholder="••••••••" />
          </Field>
          <Field label="Confirm password">
            <TextInput type="password" placeholder="••••••••" />
          </Field>
        </div>
      </AdminPanel>
    </div>
  );
}
