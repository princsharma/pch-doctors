import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  doctorInitials,
  GLP1_DOCTORS,
  MMJ_DOCTORS,
  type Doctor,
  type DoctorService,
} from "@/lib/doctors";

function firstName(name: string): string {
  return name.split(/\s+/)[0] ?? name;
}

function profileHref(doctor: Doctor): string {
  return doctor.service === "glp1"
    ? `/weight-loss-doctors/${doctor.slug}`
    : `/our-doctors/${doctor.slug}`;
}

function DoctorPhoto({
  doctor,
  sizeClass,
}: {
  doctor: Doctor;
  sizeClass: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-white ${sizeClass}`}
    >
      {doctor.image ? (
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          className="object-cover object-top"
          sizes="96px"
        />
      ) : (
        <span className="flex size-full items-center justify-center font-heading text-lg font-medium text-[var(--service-brand)]">
          {doctorInitials(doctor.name)}
        </span>
      )}
    </div>
  );
}

function CompactDoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      href={profileHref(doctor)}
      className="group flex items-center gap-3 rounded-2xl bg-white px-3 py-3 ring-1 ring-black/[0.05] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-24px_rgba(20,50,30,0.45)]"
    >
      <DoctorPhoto doctor={doctor} sizeClass="size-16" />
      <span className="min-w-0 flex-1">
        <span className="font-heading block truncate text-[15px] font-medium text-[var(--ds-ink)]">
          {doctor.name}
        </span>
        <span className="mt-0.5 block text-[11px] font-semibold tracking-wide text-[var(--service-accent)]">
          {doctor.credential}
          {doctor.experienceYears ? ` · ${doctor.experienceYears} yrs` : ""}
        </span>
        <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[var(--service-brand)]">
          Meet {firstName(doctor.name)}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}

function FeaturedDoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group flex flex-col rounded-[1.4rem] bg-white p-5 shadow-[0_18px_40px_-28px_rgba(80,40,20,0.4)] ring-1 ring-black/[0.05] transition duration-300 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        <DoctorPhoto doctor={doctor} sizeClass="size-20" />
        <div className="min-w-0">
          <h4 className="font-heading text-lg font-medium text-[var(--ds-ink)]">
            Dr. {doctor.name}
          </h4>
          <p className="text-xs font-semibold tracking-wide text-[var(--service-accent)]">
            {doctor.credential}
            {doctor.experienceYears ? ` · ${doctor.experienceYears} yrs` : ""}
          </p>
        </div>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
        {doctor.bio}
      </p>
      <Link
        href={profileHref(doctor)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--service-brand)] hover:text-[var(--service-brand-dark)]"
      >
        Meet {firstName(doctor.name)}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

function ServiceRoster({
  service,
  title,
  kicker,
  href,
  linkLabel,
  doctors,
  variant,
}: {
  service: DoctorService;
  title: string;
  kicker: string;
  href: string;
  linkLabel: string;
  doctors: Doctor[];
  variant: "compact" | "featured";
}) {
  return (
    <div
      data-service={service}
      className="rounded-[1.75rem] bg-[var(--service-section-bg)] p-6 sm:p-8"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[var(--service-brand)] uppercase">
            {kicker}
          </p>
          <h3 className="font-heading mt-2 text-2xl font-medium text-[var(--ds-ink)]">
            {title}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            {doctors.length} licensed{" "}
            {doctors.length === 1 ? "clinician" : "clinicians"}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--service-brand)] hover:text-[var(--service-brand-dark)]"
        >
          {linkLabel}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      {variant === "compact" ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <CompactDoctorCard key={`${doctor.service}-${doctor.slug}`} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {doctors.map((doctor) => (
            <FeaturedDoctorCard key={`${doctor.service}-${doctor.slug}`} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--ds-brand)] uppercase">
            Medical team
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
            Doctors for both sides of care
          </h2>
          <p className="mt-4 text-neutral-600">
            MMJ evaluations and GLP-1 visits are run by different licensed
            rosters. Pick a name, read the profile, then book.
          </p>
        </div>

        <div className="space-y-6">
          <ServiceRoster
            service="mmj"
            kicker="Medical marijuana"
            title="MMJ clinicians"
            href="/our-doctors"
            linkLabel="Full MMJ team"
            doctors={MMJ_DOCTORS}
            variant="compact"
          />
          <ServiceRoster
            service="glp1"
            kicker="Ongo Weight Loss"
            title="GLP-1 physicians"
            href="/weight-loss-doctors"
            linkLabel="Full Ongo team"
            doctors={GLP1_DOCTORS}
            variant="featured"
          />
        </div>
      </div>
    </section>
  );
}
