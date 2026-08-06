import Image from "next/image";
import { Card } from "@/components/ui/card";

const doctors = [
  {
    name: "Johnathan Chance Miller, MD",
    npi: "1235623372",
    bio: "Dr. Miller is a licensed physician providing clinically guided weight loss and metabolic care. He conducts personalized evaluations and may prescribe treatment when clinically appropriate.",
    image: "/images/johnathan-miller.webp",
  },
  {
    name: "Vanessa Niles, MD",
    npi: "1922199470",
    bio: "Dr. Niles is a licensed physician with over 30 years of clinical experience. She provides personalized weight loss evaluations and determines appropriate treatment options based on individual needs.",
    image: "/images/vanessa-niles.webp",
  },
  {
    name: "Benjamin Howard Krasne, MD",
    npi: "1306189832",
    bio: "Dr. Krasne is a board-certified physician specializing in personalized weight loss evaluations. He provides clinician-guided care and may prescribe GLP-1 treatment when appropriate.",
    image: "/images/benjamin-krasne.webp",
  },
  {
    name: "Cheryl-Lynn Marie Bugailiskis, MD",
    npi: "1871882035",
    bio: "Dr. Bugailiskis is a licensed physician offering personalized, physician-guided weight loss care. She evaluates each patient’s health history and goals to determine appropriate treatment options.",
    image: "/images/cheryl-bugailiskis.webp",
  },
];

export function Glp1Doctors() {
  return (
    <section id="doctors" className="bg-[var(--service-section-bg)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Our <span className="text-[var(--service-brand)]">Doctors</span>
          </h2>
          <p className="mt-4 text-neutral-600">
            Our team of licensed professionals guides your treatment from
            evaluation through ongoing care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="flex-row gap-4 border-0 bg-[var(--color-surface)] p-6 ring-1 ring-[var(--service-border)]"
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-full bg-[var(--service-accent-soft)] ring-2 ring-white shadow-sm">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="64px"
                />
              </span>
              <div>
                <h3 className="font-heading text-base font-medium text-[var(--ds-ink)]">
                  {doctor.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-400">NPI: {doctor.npi}</p>
                <p className="mt-2 text-sm text-neutral-600">{doctor.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
