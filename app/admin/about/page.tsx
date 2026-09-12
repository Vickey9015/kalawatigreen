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
  aboutClosingQuote,
  aboutIntro,
  aboutMissionFull,
  aboutStoryFull,
  aboutValues,
  aboutVisionFull,
  storyMissionVision,
} from "@/lib/about-content";

export default function AdminAboutPage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="About"
        description="Shape the brand story, mission, vision, and values shown on the About page."
        actions={
          <>
            <AdminSecondaryButton>Discard</AdminSecondaryButton>
            <AdminPrimaryButton>Save changes</AdminPrimaryButton>
          </>
        }
      />

      <AdminPanel title="Page intro">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Eyebrow">
            <TextInput defaultValue={aboutIntro.eyebrow} />
          </Field>
          <Field label="Title">
            <TextInput defaultValue={aboutIntro.title} />
          </Field>
          <Field label="Tagline">
            <TextInput defaultValue={aboutIntro.tagline} />
          </Field>
          <div className="md:col-span-2">
            <Field label="Description">
              <TextArea rows={4} defaultValue={aboutIntro.description} />
            </Field>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel title="Story · Mission · Vision cards">
        <div className="space-y-4">
          {storyMissionVision.map((pillar) => (
            <div
              key={pillar.id}
              className="grid gap-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 md:grid-cols-2"
            >
              <Field label="Title">
                <TextInput defaultValue={pillar.title} />
              </Field>
              <Field label="Subtitle">
                <TextInput defaultValue={pillar.subtitle} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Short description">
                  <TextArea rows={3} defaultValue={pillar.description} />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel title="Full story copy">
        <Field label="Section title">
          <TextInput defaultValue={aboutStoryFull.title} />
        </Field>
        <div className="mt-4 space-y-3">
          {aboutStoryFull.paragraphs.map((paragraph, index) => (
            <Field key={index} label={`Paragraph ${index + 1}`}>
              <TextArea rows={3} defaultValue={paragraph} />
            </Field>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel title="Mission & vision detail">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4">
            <Field label="Mission title">
              <TextInput defaultValue={aboutMissionFull.title} />
            </Field>
            <Field label="Intro">
              <TextArea rows={3} defaultValue={aboutMissionFull.intro} />
            </Field>
          </div>
          <div className="space-y-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4">
            <Field label="Vision title">
              <TextInput defaultValue={aboutVisionFull.title} />
            </Field>
            <Field label="Intro">
              <TextArea rows={3} defaultValue={aboutVisionFull.intro} />
            </Field>
          </div>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Values"
        description={aboutValues.subtitle}
        actions={<AdminGhostButton>+ Add value</AdminGhostButton>}
      >
        <div className="mb-4">
          <Field label="Values intro">
            <TextArea rows={3} defaultValue={aboutValues.intro} />
          </Field>
        </div>
        <div className="space-y-3">
          {aboutValues.items.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 rounded-xl border border-[rgba(1,49,31,0.14)] bg-[rgba(243,242,237,0.65)] p-4 md:grid-cols-[1fr_2fr_auto]"
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
            </div>
          ))}
        </div>
      </AdminPanel>

      <AdminPanel title="Closing quote">
        <Field label="Quote">
          <TextArea rows={4} defaultValue={aboutClosingQuote} />
        </Field>
      </AdminPanel>
    </div>
  );
}
