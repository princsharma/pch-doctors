import Image from "next/image";

const doctors = [
  {
    name: "Johnathan C. Miller, MD",
    role: "Medical Director",
    bio: "Specializing in metabolic health and lifestyle medicine with 15+ years experience.",
    npi: "1235623372",
    service: "glp1" as const,
    image: "/images/johnathan-miller.webp",
  },
  {
    name: "Vanessa Niles, MD",
    role: "Lead Physician",
    bio: "Expert in cannabis-based therapeutics and patient-centered evaluation protocols.",
    npi: "1922199470",
    service: "mmj" as const,
    image: "/images/vanessa-niles.webp",
  },
  {
    name: "Benjamin H. Krasne, MD",
    role: "Board-Certified Specialist",
    bio: "Focuses on comprehensive weight management plans and GLP-1 monitoring.",
    npi: "1306189832",
    service: "glp1" as const,
    image: "/images/benjamin-krasne.webp",
  },
  {
    name: "Cheryl-Lynn M. Bugailiskis, MD",
    role: "Senior Consultant",
    bio: "Dedicated to holistic patient wellness and evidence-based clinical programs.",
    npi: "1871882035",
    service: "mmj" as const,
    image: "/images/cheryl-bugailiskis.webp",
  },
];

export function HomeDoctors() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        data-service="mmj"
        className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-[var(--service-brand)]/10 blur-3xl"
      />
      <div
        data-service="glp1"
        className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-[var(--service-accent)]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Our Expert{" "}
            <span className="relative inline-block">
              Doctors
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15" />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            A team of licensed professionals dedicated to your long-term health
            and wellness journey.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.npi}
              data-service={doctor.service}
              className="group rounded-2xl bg-[var(--service-section-bg)] p-6 text-center ring-1 ring-[var(--service-border)] transition-colors hover:ring-[var(--service-border-hover)]"
            >
              <div className="relative mx-auto mb-6 size-24 overflow-hidden rounded-full bg-white shadow-md ring-4 ring-white">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="96px"
                />
              </div>
              <h3 className="font-heading text-lg font-medium text-[var(--ds-ink)]">
                {doctor.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-[var(--service-accent)]">
                {doctor.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {doctor.bio}
              </p>
              <p className="mt-4 font-mono text-[10px] text-neutral-400">
                NPI: {doctor.npi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
