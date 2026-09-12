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
  ctaImage,
  heroImage,
  signatureHighlights,
  whyChooseUsItems,
} from "@/lib/home-content";

export default function AdminHomePage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="Homepage"
        description="Update the hero story, signature highlights, why-choose-us points, and closing CTA."
        actions={
          <>
            <AdminSecondaryButton>Discard</AdminSecondaryButton>
            <AdminPrimaryButton>Save changes</AdminPrimaryButton>
          </>
        }
      />

      <AdminPanel title="Hero section" description="First impression visitors see on landing.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Headline">
            <TextInput defaultValue="A Forest. A Retreat. A Celebration." />
          </Field>
          <Field label="Hero image path" hint="Public path or uploaded media URL">
            <TextInput defaultValue={heroImage} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Supporting line">
              <TextArea
                rows={3}
                defaultValue="Forest-inspired luxury resort in Ambedkar Nagar — peaceful stays, grand celebrations, and immersive nature experiences."
              />
            </Field>
          </div>
          <Field label="Primary CTA label">
            <TextInput defaultValue="Explore Spaces" />
          </Field>
          <Field label="Secondary CTA label">
            <TextInput defaultValue="Plan Your Visit" />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Signature highlights"
        description="Featured spaces shown on the homepage."
        actions={<AdminGhostButton>+ Add highlight</AdminGhostButton>}
      >
        <div className="space-y-3">
          {signatureHighlights.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 md:grid-cols-[1fr_1fr_auto]"
            >
              <Field label={`Title ${index + 1}`}>
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

      <AdminPanel
        title="Why choose us"
        description="Short trust points under the homepage story."
        actions={<AdminGhostButton>+ Add point</AdminGhostButton>}
      >
        <div className="space-y-3">
          {whyChooseUsItems.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 sm:flex-row sm:items-end"
            >
              <div className="flex-1">
                <Field label={`Point ${index + 1}`}>
                  <TextInput defaultValue={item.title} />
                </Field>
              </div>
              <AdminGhostButton>Remove</AdminGhostButton>
            </div>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel title="Closing CTA" description="Final conversion section before the footer.">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="CTA headline">
            <TextInput defaultValue="Ready to experience the forest?" />
          </Field>
          <Field label="Background image">
            <TextInput defaultValue={ctaImage} />
          </Field>
          <div className="md:col-span-2">
            <Field label="CTA supporting text">
              <TextArea
                rows={3}
                defaultValue="Book a stay, plan a celebration, or schedule a venue walkthrough with our team."
              />
            </Field>
          </div>
        </div>
      </AdminPanel>
    </div>
  );
}
