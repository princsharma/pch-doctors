import { Stethoscope } from "lucide-react";

const doctors = [
  {
    name: "Johnathan C. Miller, MD",
    role: "Medical Director",
    bio: "Specializing in metabolic health and lifestyle medicine with 15+ years experience.",
    npi: "1235623372",
  },
  {
    name: "Vanessa Niles, MD",
    role: "Lead Physician",
    bio: "Expert in cannabis-based therapeutics and patient-centered evaluation protocols.",
    npi: "1922199470",
  },
  {
    name: "Benjamin H. Krasne, MD",
    role: "Board-Certified Specialist",
    bio: "Focuses on comprehensive weight management plans and GLP-1 monitoring.",
    npi: "1306189832",
  },
  {
    name: "Cheryl-Lynn M. Bugailiskis, MD",
    role: "Senior Consultant",
    bio: "Dedicated to holistic patient wellness and evidence-based clinical programs.",
    npi: "1871882035",
  },
];

export function HomeDoctors() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-[#0d6e74]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            Our Expert{" "}
            <span className="relative inline-block">
              Doctors
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#0d6e74]/15" />
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
              className="group rounded-2xl bg-[#eef6f6]/60 p-6 text-center ring-1 ring-[#0d6e74]/10 transition-colors hover:ring-[#0d6e74]/40"
            >
              <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-white text-[#0d6e74] shadow-md ring-4 ring-white">
                <Stethoscope className="size-8" />
              </div>
              <h3 className="font-heading text-lg font-medium text-[#0a2733]">
                {doctor.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-[#0d6e74]">
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
