import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctorInitials, FEATURED_DOCTORS } from "@/lib/doctors";

export function Doctors() {
  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-white py-20"
    >
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

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {FEATURED_DOCTORS.map((doctor) => (
            <div
              key={doctor.slug}
              data-service={doctor.service}
              className="group rounded-2xl bg-[var(--service-section-bg)] p-6 text-center ring-1 ring-[var(--service-border)] transition-colors hover:ring-[var(--service-border-hover)]"
            >
              <div className="relative mx-auto mb-6 size-24 overflow-hidden rounded-full bg-white shadow-md ring-4 ring-white">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                ) : (
                  <span className="flex size-full items-center justify-center bg-[var(--service-brand)]/10 font-heading text-xl font-medium text-[var(--service-brand)]">
                    {doctorInitials(doctor.name)}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-lg font-medium text-[var(--ds-ink)]">
                {doctor.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-[var(--service-accent)]">
                {doctor.credential}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {doctor.bio}
              </p>
              {doctor.npi ? (
                <p className="mt-4 font-mono text-[10px] text-neutral-400">
                  NPI: {doctor.npi}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
          <Link
            href="/our-doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ds-brand)] transition-colors hover:text-[var(--ds-brand-dark)]"
          >
            MMJ clinicians
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/weight-loss-doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ds-brand)] transition-colors hover:text-[var(--ds-brand-dark)]"
          >
            Ongo weight loss doctors
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
