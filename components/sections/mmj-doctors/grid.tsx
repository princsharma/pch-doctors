import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  doctorInitials,
  doctorsByService,
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
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
      />
    );
  }

  return (
    <span className="flex size-full items-center justify-center bg-[linear-gradient(160deg,#e8f5ee_0%,#d4eadc_100%)] font-heading text-4xl font-medium text-[var(--service-brand)]">
      {doctorInitials(doctor.name)}
    </span>
  );
}

export function MmjDoctorsGrid() {
  const doctors = doctorsByService("mmj");

  return (
    <section
      id="our-doctors"
      className="relative overflow-hidden bg-[#f6f3ee] py-20"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-brand)] uppercase">
              The roster
            </p>
            <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
              Find a clinician licensed where you live
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-600 lg:mb-1">
            Pick someone by state, then read their profile. You will see
            training, license details, and the kinds of cases they typically
            review.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article
              key={doctor.slug}
              className="group flex flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-[0_18px_40px_-28px_rgba(20,50,30,0.55)] ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-24px_rgba(20,50,30,0.45)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <DoctorPhoto doctor={doctor} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgb(10_36_22)] via-[rgb(10_36_22/0.55)] to-transparent px-4 pb-4 pt-16">
                  <h3 className="font-heading text-lg font-medium text-white">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-wide text-[#c8f0d6]">
                    {doctor.credential}
                  </p>
                </div>
                {doctor.experienceYears ? (
                  <span className="absolute top-3 left-3 rounded-full bg-[var(--service-accent)] px-2.5 py-1 text-[10px] font-semibold text-[var(--ds-ink)] shadow-sm">
                    {doctor.experienceYears} yrs
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
                  Licensed in
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--ds-ink)]">
                  {doctor.licensed.join(" · ")}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                  {doctor.bio}
                </p>
                <Link
                  href={`/our-doctors/${doctor.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--service-brand)] transition-colors hover:text-[var(--service-brand-dark)]"
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
