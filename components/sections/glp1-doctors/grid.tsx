import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  doctorInitials,
  GLP1_DOCTORS,
  type Doctor,
} from "@/lib/doctors";

function firstName(name: string): string {
  return name.split(/\s+/)[0] ?? name;
}

function DoctorPhoto({ doctor }: { doctor: Doctor }) {
  if (doctor.image) {
    return (
      <Image
        src={doctor.image}
        alt={doctor.name}
        fill
        className="object-cover object-top"
        sizes="160px"
      />
    );
  }

  return (
    <span className="flex size-full items-center justify-center bg-[var(--service-accent-soft)] font-heading text-3xl font-medium text-[var(--service-accent)]">
      {doctorInitials(doctor.name)}
    </span>
  );
}

export function Glp1DoctorsGrid() {
  return (
    <section id="weight-loss-doctors" className="bg-[#f4f1ec] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-accent)] uppercase">
              The roster
            </p>
            <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
              Four physicians. One kind of visit.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600 lg:mb-1">
            Read a profile, then book. You will not get a random assignment
            without knowing who is on the call.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {GLP1_DOCTORS.map((doctor) => (
            <article
              key={doctor.slug}
              className="group flex gap-5 rounded-[1.6rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(80,40,20,0.45)] ring-1 ring-black/[0.05] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(80,40,20,0.4)] sm:p-6"
            >
              <div className="relative size-28 shrink-0 overflow-hidden rounded-full bg-[#fffbf5] ring-4 ring-[#fffbf5] sm:size-32">
                <DoctorPhoto doctor={doctor} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="font-heading text-xl font-medium text-[var(--ds-ink)]">
                    Dr. {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-wide text-[var(--service-accent)]">
                    {doctor.credential}
                    {doctor.experienceYears
                      ? ` · ${doctor.experienceYears} yrs`
                      : ""}
                  </p>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {doctor.bio}
                </p>
                <Link
                  href={`/weight-loss-doctors/${doctor.slug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--service-brand)] transition-colors hover:text-[var(--service-brand-dark)]"
                >
                  Meet {firstName(doctor.name)}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
