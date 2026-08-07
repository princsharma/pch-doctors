"use client";

import { UserPlus, Video, FileCheck, ArrowRight } from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: UserPlus,
    number: "1",
    title: "Create Your Account",
    description:
      "Sign up in minutes with your basic information and select your state. All data is secured with HIPAA-compliant encryption.",
    time: "2-3 minutes",
  },
  {
    icon: Video,
    number: "2",
    title: "Video Consultation",
    description:
      "Meet with a licensed physician via secure video call. Discuss your condition and receive professional medical evaluation.",
    time: "10-15 minutes",
  },
  {
    icon: FileCheck,
    number: "3",
    title: "Get Your Certification",
    description:
      "Receive your official medical marijuana recommendation instantly. Download, print, or access digitally anytime.",
    time: "under 60 minutes",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--service-brand-dark)] via-[var(--service-brand-dark)] to-[var(--service-brand-dark)] py-20"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[var(--service-brand)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 size-96 rounded-full bg-[var(--service-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70">
          <span className="size-2 rounded-full bg-[var(--service-accent)]" />
          3 SIMPLE STEPS
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            Get <span className="text-[var(--service-accent)]">Certified</span> in 3 Easy Steps
          </h2>
          <p className="max-w-md text-sm text-white/60 lg:mb-1">
            Our streamlined process makes getting your medical marijuana
            certification simple, secure, and convenient from the comfort of
            your home.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-white/15" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-72 flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
            >
              <p className="font-heading text-2xl font-medium text-white/90">
                {step.number}.
              </p>
              <h3 className="font-heading mt-1 text-xl font-medium text-white">
                {step.title}
              </h3>

              <div className="flex-1" />

              <p className="text-sm text-white/60">{step.description}</p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                <step.icon className="size-4 text-[var(--service-accent)]" />
                {step.time}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-white/5 px-4 py-3.5 ring-1 ring-white/10 sm:flex-row sm:justify-between sm:gap-4 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2.5">
              {["bg-[var(--service-brand)]", "bg-[var(--service-accent)]", "bg-[#e0342a]", "bg-[var(--service-brand-dark)]"].map(
                (bg, i) => (
                  <span
                    key={i}
                    className={cn(
                      "flex size-7 items-center justify-center rounded-full text-white ring-2 ring-[var(--service-brand-dark)]",
                      bg
                    )}
                  >
                    <UserPlus className="size-3.5" />
                  </span>
                )
              )}
            </div>
            <p className="text-xs text-white/80 sm:text-sm">
              100% Money-Back Guarantee{" "}
              <span className="font-semibold text-white">if not approved</span>
            </p>
          </div>

          <MmjLeadModal
            trigger={
              <Button className="group h-auto w-full max-w-full gap-2.5 rounded-full border-0 bg-white py-2.5 pl-1.5 pr-4 text-sm font-semibold text-[var(--ds-ink)] hover:bg-white/90 sm:w-auto sm:py-3 sm:pr-5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--service-accent)] text-[var(--ds-ink)] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-4" />
                </span>
                <span className="sm:hidden">Start Your Certification</span>
                <span className="hidden sm:inline">
                  Start Your Certification Process
                </span>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
