"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  doctorInitials,
  GLP1_DOCTORS,
  MMJ_DOCTORS,
  type Doctor,
} from "@/lib/doctors";
import { GLP1_STATES } from "@/lib/glp1-states";
import { MMJ_STATES } from "@/lib/mmj-states";

type ServiceKey = "mmj" | "glp1";

const SERVICES = {
  mmj: {
    service: "mmj" as const,
    eyebrow: "My MMJ Card",
    title: "See the MMJ doctors",
    body: "Content review is separate from care. If you need a medical marijuana evaluation, these licensed clinicians run the visits on their own roster.",
    image: "/images/mmj-service-card.webp",
    imageAlt: "Secure online medical marijuana consultation",
    href: "/our-doctors",
    label: "See all MMJ doctors",
    doctors: MMJ_DOCTORS,
    meta: `${MMJ_DOCTORS.length} clinicians · ${MMJ_STATES.length}+ states`,
    icon: Leaf,
  },
  glp1: {
    service: "glp1" as const,
    eyebrow: "Weight Loss",
    title: "See the weight loss doctors",
    body: "GLP-1 visits are handled by a different licensed roster. Open the weight loss team to read credentials, then book a private evaluation.",
    image: "/images/glp1-service-card.webp",
    imageAlt: "Patient using a GLP-1 injection pen",
    href: "/weight-loss-doctors",
    label: "See all weight loss doctors",
    doctors: GLP1_DOCTORS,
    meta: `${GLP1_DOCTORS.length} physicians · ${GLP1_STATES.length} states`,
    icon: Pill,
  },
};

function doctorHref(doctor: Doctor): string {
  return doctor.service === "glp1"
    ? `/weight-loss-doctors/${doctor.slug}`
    : `/our-doctors/${doctor.slug}`;
}

function DoctorTile({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      href={doctorHref(doctor)}
      className="group flex items-center gap-3 rounded-2xl bg-white px-3 py-3 ring-1 ring-black/[0.05] transition hover:shadow-md"
    >
      <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-[var(--service-brand-light)]">
        {doctor.image ? (
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-top"
            sizes="56px"
          />
        ) : (
          <span className="flex size-full items-center justify-center font-heading text-sm font-medium text-[var(--service-brand)]">
            {doctorInitials(doctor.name)}
          </span>
        )}
      </div>
      <span className="min-w-0">
        <span className="font-heading block truncate text-[15px] font-medium text-[var(--ds-ink)]">
          {doctor.name}
        </span>
        <span className="mt-0.5 block text-xs font-semibold text-[var(--service-accent)]">
          {doctor.credential}
          {doctor.experienceYears ? ` · ${doctor.experienceYears} yrs` : ""}
        </span>
      </span>
    </Link>
  );
}

export function ClinicianToggle() {
  const [service, setService] = useState<ServiceKey>("mmj");
  const current = SERVICES[service];
  const Icon = current.icon;

  return (
    <section
      data-service={service}
      className="bg-[var(--service-section-bg)] py-16 lg:py-20"
      aria-labelledby="clinicians-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <h2
            id="clinicians-heading"
            className="font-heading text-3xl font-medium text-[var(--ds-ink)]"
          >
            See the doctors who see patients
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
            Writers and reviewers are not the clinicians who run visits. Toggle
            a service to meet that roster.
          </p>
          <div
            role="tablist"
            aria-label="Choose a clinician roster"
            className="mt-8 inline-flex rounded-full bg-white p-1 shadow-sm ring-1 ring-[var(--ds-border)]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={service === "mmj"}
              id="tab-mmj-doctors"
              aria-controls="panel-clinician-roster"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                service === "mmj"
                  ? "bg-[var(--service-brand)] text-white"
                  : "text-[var(--ds-ink-mid)] hover:text-[var(--ds-ink)]"
              )}
              onClick={() => setService("mmj")}
            >
              <Leaf className="size-3.5" aria-hidden />
              My MMJ Card
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={service === "glp1"}
              id="tab-glp1-doctors"
              aria-controls="panel-clinician-roster"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                service === "glp1"
                  ? "bg-[var(--service-brand)] text-white"
                  : "text-[var(--ds-ink-mid)] hover:text-[var(--ds-ink)]"
              )}
              onClick={() => setService("glp1")}
            >
              <Pill className="size-3.5" aria-hidden />
              Weight Loss
            </button>
          </div>
        </div>

        <div
          id="panel-clinician-roster"
          role="tabpanel"
          aria-labelledby={
            service === "mmj" ? "tab-mmj-doctors" : "tab-glp1-doctors"
          }
          className="mt-10 grid items-stretch gap-6 lg:grid-cols-12"
        >
          <div className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] lg:col-span-5 lg:min-h-full">
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--service-brand-dark)]/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <Icon className="size-6" aria-hidden />
              <p className="font-heading mt-3 text-2xl font-medium">
                {current.eyebrow}
              </p>
              <p className="mt-1 text-sm text-white/80">{current.meta}</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-[var(--service-border)] sm:p-8 lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--service-brand)] uppercase">
              {current.eyebrow}
            </p>
            <h3 className="font-heading mt-2 text-3xl font-medium text-[var(--ds-ink)]">
              {current.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
              {current.body}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.doctors.map((doctor) => (
                <DoctorTile
                  key={`${doctor.service}-${doctor.slug}`}
                  doctor={doctor}
                />
              ))}
            </div>
            <Button
              nativeButton={false}
              render={<Link href={current.href} />}
              className="mt-7 h-auto gap-2 rounded-full border-0 [background:var(--service-cta)] px-7 py-5 text-sm font-semibold text-[var(--service-cta-ink)] hover:[background:var(--service-cta-hover)]"
            >
              {current.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
