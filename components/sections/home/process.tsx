"use client";

import { UserPlus, Video, ClipboardCheck, ArrowRight, BadgeCheck } from "lucide-react";
import { ConsultationModal } from "@/components/consultation-modal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Create Account",
    description:
      "Register your secure profile and complete a brief medical intake form. Takes less than 5 minutes.",
    time: "2-3 minutes",
    service: "mmj" as const,
  },
  {
    number: "2",
    icon: Video,
    title: "Video Consultation",
    description:
      "Meet with a licensed physician via our secure telehealth platform to discuss your health goals.",
    time: "10-15 minutes",
    service: "glp1" as const,
  },
  {
    number: "3",
    icon: ClipboardCheck,
    title: "Get Started",
    description:
      "Receive your certification or GLP-1 treatment plan. Meds are shipped to your door or pick up locally.",
    time: "Same Day",
    service: "mmj" as const,
  },
];

export function HomeProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-20">
      <div
        data-service="mmj"
        className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[var(--service-brand)]/10 blur-3xl"
      />
      <div
        data-service="glp1"
        className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[var(--service-accent)]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Our{" "}
            <span className="relative inline-block">
              Simple 3-Step
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15" />
            </span>{" "}
            Process
          </h2>
          <p className="mt-4 text-neutral-600">
            We&apos;ve streamlined medical consultations to be faster, more
            secure, and entirely digital.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute top-8 right-0 left-0 hidden h-px bg-[var(--ds-border)] md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              data-service={step.service}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-8 flex size-16 items-center justify-center rounded-full bg-[var(--service-accent)] font-heading text-2xl font-medium text-[var(--service-cta-secondary-ink)] ring-8 ring-[var(--service-section-bg)]">
                {step.number}
              </div>
              <div className="h-full w-full rounded-2xl bg-[var(--service-section-bg)] p-8 shadow-sm ring-1 ring-[var(--service-border)] transition-shadow hover:shadow-md">
                <step.icon className="mx-auto mb-4 size-9 text-[var(--service-accent)]" />
                <h3 className="font-heading text-xl font-medium text-[var(--ds-ink)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--ds-ink-mid)]">{step.description}</p>
                <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--service-badge-accent-ink)] ring-1 ring-[var(--service-border)]">
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ConsultationModal
            trigger={
              <Button className="h-auto rounded-full bg-[var(--ds-brand)] px-10 py-6 text-base font-semibold text-white shadow-[0_8px_24px_rgb(var(--ds-brand-rgb)/0.35)] hover:bg-[var(--ds-brand-dark)]">
                Start Your Online Consultation
                <ArrowRight className="size-4" />
              </Button>
            }
          />
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
            <BadgeCheck className="size-4 text-[var(--ds-brand)]" />
            100% Money-Back Guarantee if not approved.
          </p>
        </div>
      </div>
    </section>
  );
}
