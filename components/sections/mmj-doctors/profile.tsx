import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Clock,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import {
  getDoctorProfile,
  npiRegistryUrl,
  stateLabel,
  type DoctorProfile,
} from "@/lib/doctor-profiles";
import { doctorInitials } from "@/lib/doctors";

function displayName(doctor: DoctorProfile): string {
  if (doctor.credential === "MD" || doctor.credential === "DO") {
    return `Dr. ${doctor.name}, ${doctor.credential}`;
  }
  return `${doctor.name}, ${doctor.credential}`;
}

export function MmjDoctorProfile({ slug }: { slug: string }) {
  const doctor = getDoctorProfile(slug);
  if (!doctor) return null;

  const name = displayName(doctor);

  return (
    <div className="bg-[#f6f3ee]">
      <section className="relative overflow-hidden bg-[var(--ds-brand-dark)] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.75rem] bg-white/10 shadow-2xl ring-1 ring-white/15">
            {doctor.image ? (
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 30vw, 80vw"
                priority
              />
            ) : (
              <span className="flex size-full items-center justify-center font-heading text-5xl font-medium text-[#c8f0d6]">
                {doctorInitials(doctor.name)}
              </span>
            )}
            <span className="absolute top-4 left-4 rounded-full bg-[var(--service-accent)] px-3 py-1 text-[11px] font-semibold text-[var(--ds-ink)]">
              {doctor.experienceYears} years in practice
            </span>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#c8f0d6] uppercase">
              Medical team
            </p>
            <h1 className="font-heading mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {name}
            </h1>
            <p className="mt-3 text-base text-[#c8f0d6]">{doctor.specialty}</p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80">
              {doctor.about}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              <li className="inline-flex items-center gap-2">
                <Clock className="size-4 text-[#9ad4b2]" aria-hidden />
                {doctor.experienceYears} years experience
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-[#9ad4b2]" aria-hidden />
                Licensed in {doctor.licenses.length}{" "}
                {doctor.licenses.length === 1 ? "state" : "states"}
              </li>
            </ul>
            <MmjLeadModal
              trigger={
                <Button className="mt-8 h-auto rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-[var(--ds-ink)] hover:bg-[var(--service-accent)]/90">
                  Book a visit with {doctor.name.split(" ")[0]}
                </Button>
              }
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.4rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
              NPI number
            </p>
            {doctor.npi ? (
              <a
                href={npiRegistryUrl(doctor.npi)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-mono text-lg text-[var(--ds-ink)] underline-offset-2 hover:underline"
              >
                {doctor.npi}
              </a>
            ) : (
              <p className="mt-2 text-lg text-[var(--ds-ink)]">On file</p>
            )}
            <p className="mt-1 text-xs text-neutral-500">
              Look it up in the NPPES registry
            </p>
          </div>
          <div className="rounded-[1.4rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
              Status
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-lg text-[var(--ds-ink)]">
              <BadgeCheck
                className="size-5 text-[var(--service-brand)]"
                aria-hidden
              />
              Active
            </p>
          </div>
          <div className="rounded-[1.4rem] bg-white p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">
              Licensed states
            </p>
            <p className="mt-2 text-lg text-[var(--ds-ink)]">
              {doctor.licenses.length}{" "}
              {doctor.licenses.length === 1 ? "state" : "states"}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h2 className="font-heading flex items-center gap-2 text-2xl font-medium text-[var(--ds-ink)]">
              <GraduationCap
                className="size-5 text-[var(--service-brand)]"
                aria-hidden
              />
              Schooling
            </h2>
            <ul className="mt-5 space-y-3">
              {doctor.education.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-[#f6f3ee] px-4 py-3 text-sm text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h2 className="font-heading flex items-center gap-2 text-2xl font-medium text-[var(--ds-ink)]">
              <MapPin
                className="size-5 text-[var(--service-brand)]"
                aria-hidden
              />
              Where they are licensed
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {doctor.licenses.map((license) => (
                <li
                  key={`${license.code}-${license.number ?? "none"}`}
                  className="rounded-xl bg-[#f6f3ee] px-4 py-3 text-sm"
                >
                  <p className="font-medium text-[var(--ds-ink)]">
                    {stateLabel(license.code)}
                  </p>
                  {license.number ? (
                    <p className="mt-0.5 font-mono text-xs text-neutral-500">
                      License {license.number}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h2 className="font-heading text-2xl font-medium text-[var(--ds-ink)]">
            How they work with patients
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-neutral-600">
            {doctor.role}
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h2 className="font-heading text-2xl font-medium text-[var(--ds-ink)]">
            Conditions they commonly review
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-600">
            What qualifies depends on your state. The clinician makes the call
            during the visit, based on your history and the rules that apply to
            you.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {doctor.conditions.map((condition) => (
              <li
                key={condition}
                className="rounded-full bg-[var(--ds-brand-dark)] px-4 py-2 text-sm font-medium text-white"
              >
                {condition}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[var(--ds-brand-dark)] px-8 py-8 text-white sm:flex-row sm:items-center">
          <div>
            <p className="font-heading flex items-center gap-2 text-xl font-medium">
              <ShieldCheck className="size-5 text-[var(--service-accent)]" aria-hidden />
              Private, HIPAA-compliant video
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Book a visit with {name}. A recommendation is never promised. It
              is a medical decision, made only by the clinician on the call.
            </p>
          </div>
          <MmjLeadModal
            trigger={
              <Button className="h-auto shrink-0 rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-[var(--ds-ink)] hover:bg-[var(--service-accent)]/90">
                Book this clinician
              </Button>
            }
          />
        </div>

        <p>
          <Link
            href="/our-doctors"
            className="text-sm font-semibold text-[var(--service-brand)] hover:underline"
          >
            Back to the medical team
          </Link>
        </p>
      </section>
    </div>
  );
}
