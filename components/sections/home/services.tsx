import Link from "next/link";
import Image from "next/image";
import {
  Lock,
  Award,
  Leaf,
  Pill,
  Clock,
  Scale,
  Stethoscope,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GLP1_STATES } from "@/lib/glp1-states";
import { MMJ_STATES } from "@/lib/mmj-states";

const MMJ_PATH = "/services/medical-marijuana-consultation";
const GLP1_PATH = "/services/glp-1-medications";

const featuredStates = [
  "California",
  "New York",
  "Florida",
  "Ohio",
  "Colorado",
  "Pennsylvania",
  "Georgia",
  "Illinois",
];

export function HomeServices() {
  const mmjCount = MMJ_STATES.length;
  const glp1Count = GLP1_STATES.length;

  return (
    <section id="services" className="relative overflow-hidden py-20">
      <div className="relative mx-auto max-w-6xl space-y-6 px-6">
        {/* Row 1 — MMJ: big left, small right */}
        <div
          data-service="mmj"
          className="grid gap-6 rounded-3xl bg-[var(--service-section-bg)] p-4 md:grid-cols-12 md:items-stretch md:p-6"
        >
          <div className="grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[var(--service-border)] md:col-span-8 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
            <div className="space-y-6 p-8 md:p-12">
              <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]">
                Medical Marijuana{" "}
                <span className="relative inline-block">
                  Certifications
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--service-brand)]/15" />
                </span>
              </h2>
              <p className="text-neutral-600">
                Same-day recommendations from state-licensed physicians. Get
                certified online with a secure, HIPAA-compliant consultation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-brand)]/10 text-[var(--service-brand)]">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ds-ink)]">
                      Same-Day Approvals
                    </p>
                    <p className="text-sm text-neutral-600">
                      Fast evaluations with digital delivery when approved.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-brand)]/10 text-[var(--service-brand)]">
                    <Lock className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ds-ink)]">
                      Bank-Level Security
                    </p>
                    <p className="text-sm text-neutral-600">
                      Your health information is encrypted and never shared.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-brand)]/10 text-[var(--service-brand)]">
                    <Award className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ds-ink)]">
                      US-Licensed Doctors
                    </p>
                    <p className="text-sm text-neutral-600">
                      Every physician is board-certified and state-licensed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
              <Image
                src="/hero-section.webp"
                alt="Licensed physician consulting with a patient for a medical marijuana evaluation"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </div>
          </div>

          <div className="flex flex-col rounded-2xl bg-[var(--service-brand)] p-7 text-white shadow-lg md:col-span-4">
            <div>
              <Leaf className="mb-4 size-8" />
              <h3 className="font-heading text-xl font-medium">
                Medical Marijuana Cert
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Same-day recommendations from state-licensed physicians, 100%
                online.
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-white/75 uppercase">
                {mmjCount}+ states · from $149
              </p>
            </div>
            <div className="relative mt-6 min-h-[160px] flex-1 overflow-hidden rounded-xl ring-1 ring-white/20">
              <Image
                src="/secure-sections.webp"
                alt="Secure online medical marijuana consultation"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </div>
            <Button
              nativeButton={false}
              render={<Link href={MMJ_PATH} />}
              className="mt-6 h-auto rounded-full border border-white/35 bg-white/15 py-4 text-sm font-semibold text-white hover:bg-white/25"
            >
              View MMJ Service
            </Button>
          </div>
        </div>

        {/* Row 2 — GLP-1: small left, big right */}
        <div
          data-service="glp1"
          className="grid gap-6 rounded-3xl bg-[var(--service-section-bg)] p-4 md:grid-cols-12 md:items-stretch md:p-6"
        >
          <div className="flex flex-col rounded-2xl bg-gradient-to-br from-[var(--service-accent)] via-[var(--service-warm)] to-[var(--service-warm-deep)] p-7 text-white shadow-lg md:col-span-4 md:order-1">
            <div>
              <Pill className="mb-4 size-8 text-white" />
              <h3 className="font-heading text-xl font-medium">
                GLP-1 Weight Loss
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Clinician-guided access to medications like Wegovy, Ozempic, and
                Mounjaro.
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-white/75 uppercase">
                {glp1Count} states · from $75 consult
              </p>
            </div>
            <div className="relative mt-6 min-h-[160px] flex-1 overflow-hidden rounded-xl ring-1 ring-white/20">
              <Image
                src="/images/glp1-hero-banner.webp"
                alt="Patient using GLP-1 medication for clinician-guided weight loss"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 25vw, 100vw"
              />
            </div>
            <Button
              nativeButton={false}
              render={<Link href={GLP1_PATH} />}
              className="mt-6 h-auto rounded-full border border-white/35 bg-white/15 py-4 text-sm font-semibold text-white hover:bg-white/25"
            >
              View Medications
            </Button>
          </div>

          <div className="grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[var(--service-border)] md:col-span-8 md:order-2 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
            <div className="space-y-6 p-8 md:p-12">
              <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]">
                Clinician-Guided{" "}
                <span className="relative inline-block">
                  Weight Management
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--service-accent)]/25" />
                </span>
              </h2>
              <p className="text-neutral-600">
                Personalized GLP-1 programs with licensed clinicians, ongoing
                support, and access to proven medications for sustainable
                results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-accent-soft)] text-[var(--service-accent)]">
                    <Stethoscope className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ds-ink)]">
                      Licensed Clinicians
                    </p>
                    <p className="text-sm text-neutral-600">
                      Expert evaluation and prescription guidance online.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-accent-soft)] text-[var(--service-accent)]">
                    <Scale className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ds-ink)]">
                      FDA-Approved Options
                    </p>
                    <p className="text-sm text-neutral-600">
                      Access medications like Wegovy, Ozempic, and Mounjaro when
                      appropriate.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-accent-soft)] text-[var(--service-accent)]">
                    <Headphones className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--ds-ink)]">
                      Dedicated Support
                    </p>
                    <p className="text-sm text-neutral-600">
                      Ongoing check-ins so your plan stays on track.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
              <Image
                src="/glp-1-hero-section.webp"
                alt="Clinician-guided GLP-1 weight management care"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </div>
          </div>
        </div>

        {/* Availability strip */}
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="font-heading text-xl font-medium text-[var(--ds-ink)]">
              Care Available Across the U.S.
            </h3>
            <p className="mt-2 text-neutral-600">
              Online medical marijuana certifications and GLP-1 weight loss
              programs. Check availability for your state by service.
            </p>
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2 md:justify-end">
            {featuredStates.map((state) => (
              <span
                key={state}
                className="rounded-full bg-[var(--ds-bg-subtle)] px-3 py-1.5 text-xs font-semibold text-[var(--ds-ink)]/80"
              >
                {state}
              </span>
            ))}
            <span
              data-service="mmj"
              className="rounded-full bg-[var(--service-brand)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--service-brand)]"
            >
              MMJ · {mmjCount}+ states
            </span>
            <span
              data-service="glp1"
              className="rounded-full bg-[var(--service-accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--service-badge-accent-ink)]"
            >
              GLP-1 · {glp1Count} states
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
