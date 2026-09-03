import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Clock,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";
import {
  getGlp1DoctorProfile,
  type Glp1DoctorProfile,
} from "@/lib/glp1-doctor-profiles";
import { doctorInitials } from "@/lib/doctors";
import { npiRegistryUrl } from "@/lib/doctor-profiles";

function displayName(doctor: Glp1DoctorProfile): string {
  return `Dr. ${doctor.name}, ${doctor.credential}`;
}

export function Glp1DoctorProfile({ slug }: { slug: string }) {
  const doctor = getGlp1DoctorProfile(slug);
  if (!doctor) return null;

  const name = displayName(doctor);

  return (
    <div className="bg-[#fffbf5]">
      <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:py-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full bg-white/10 shadow-2xl ring-4 ring-[var(--service-accent)]/40">
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
              <span className="flex size-full items-center justify-center font-heading text-5xl font-medium text-[var(--service-accent)]">
                {doctorInitials(doctor.name)}
              </span>
            )}
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-accent)] uppercase">
              Ongo Weight Loss
            </p>
            <h1 className="font-heading mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {name}
            </h1>
            <p className="mt-3 text-base text-[#f4a261]">{doctor.specialty}</p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/80">
              {doctor.about}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {doctor.experienceYears ? (
                <li className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-[var(--service-accent)]" aria-hidden />
                  {doctor.experienceYears} years experience
                </li>
              ) : null}
              <li className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-[var(--service-accent)]" aria-hidden />
                {doctor.licensed.length > 0
                  ? `Licensed in ${doctor.licensed.join(", ")}`
                  : "Licensed U.S. physician"}
              </li>
            </ul>
            <Glp1LeadModal
              trigger={
                <Button className="mt-8 h-auto rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-white hover:bg-[var(--service-warm)]">
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
              Program
            </p>
            <p className="mt-2 text-lg text-[var(--ds-ink)]">Ongo Weight Loss</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h2 className="font-heading flex items-center gap-2 text-2xl font-medium text-[var(--ds-ink)]">
              <GraduationCap
                className="size-5 text-[var(--service-accent)]"
                aria-hidden
              />
              Schooling
            </h2>
            <ul className="mt-5 space-y-3">
              {doctor.education.map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-[#fffbf5] px-4 py-3 text-sm text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
            <h2 className="font-heading text-2xl font-medium text-[var(--ds-ink)]">
              How they work with patients
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">{doctor.role}</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white p-7 shadow-sm ring-1 ring-black/5">
          <h2 className="font-heading text-2xl font-medium text-[var(--ds-ink)]">
            Conditions they commonly review
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-600">
            A listed condition does not mean a prescription. The clinician
            decides during the visit.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {doctor.conditions.map((condition) => (
              <li
                key={condition}
                className="rounded-full bg-[var(--service-accent)] px-4 py-2 text-sm font-medium text-white"
              >
                {condition}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#1a1a1a] px-8 py-8 text-white sm:flex-row sm:items-center">
          <div>
            <p className="font-heading flex items-center gap-2 text-xl font-medium">
              <ShieldCheck className="size-5 text-[var(--service-accent)]" aria-hidden />
              Private, HIPAA-compliant video
            </p>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Book a visit with {name}. Medication is never promised. It is a
              medical decision, made only by the clinician on the call.
            </p>
          </div>
          <Glp1LeadModal
            trigger={
              <Button className="h-auto shrink-0 rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-white hover:bg-[var(--service-warm)]">
                Book this clinician
              </Button>
            }
          />
        </div>

        <p>
          <Link
            href="/weight-loss-doctors"
            className="text-sm font-semibold text-[var(--service-brand)] hover:underline"
          >
            Back to Ongo weight loss doctors
          </Link>
        </p>
      </section>
    </div>
  );
}
