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
  allServices,
  serviceDetails,
  servicesClosingLine,
  servicesPageHeader,
} from "@/lib/services-content";

export default function AdminServicesPage() {
  return (
    <div className="w-full max-w-6xl space-y-6">
      <AdminPageHeader
        title="Services"
        description="Manage spaces and experiences listed on the Services page."
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
            <TextInput defaultValue={servicesPageHeader.title} />
          </Field>
          <Field label="Subtitle">
            <TextInput defaultValue={servicesPageHeader.subtitle} />
          </Field>
        </div>
      </AdminPanel>

      <AdminPanel
        title="Service cards"
        description={`${allServices.length} spaces currently published.`}
        actions={<AdminGhostButton>+ Add service</AdminGhostButton>}
      >
        <div className="space-y-3">
          {allServices.map((service) => {
            const detail = serviceDetails.find((item) => item.id === service.id);

            return (
              <article
                key={service.id}
                className="rounded-xl border border-[rgba(10,61,42,0.14)] bg-[rgba(232,240,234,0.65)] p-4"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-kg-green">{service.title}</h3>
                    <StatusBadge label={service.id} />
                  </div>
                  <AdminGhostButton>Remove</AdminGhostButton>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="Title">
                    <TextInput defaultValue={service.title} />
                  </Field>
                  <Field label="Image">
                    <TextInput defaultValue={service.image} />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="Card description">
                      <TextInput defaultValue={service.description} />
                    </Field>
                  </div>
                  <Field label="Detail tagline">
                    <TextInput defaultValue={detail?.tagline ?? ""} />
                  </Field>
                  <Field label="Perfect for">
                    <TextInput defaultValue={detail?.perfectFor ?? ""} />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="Detail paragraphs">
                      <TextArea
                        rows={4}
                        defaultValue={detail?.paragraphs.join("\n\n") ?? ""}
                      />
                    </Field>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </AdminPanel>

      <AdminPanel title="Closing line">
        <Field label="Footer statement">
          <TextArea rows={2} defaultValue={servicesClosingLine} />
        </Field>
      </AdminPanel>
    </div>
  );
}
