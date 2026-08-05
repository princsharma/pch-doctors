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
  },
  {
    number: "2",
    icon: Video,
    title: "Video Consultation",
    description:
      "Meet with a licensed physician via our secure telehealth platform to discuss your health goals.",
    time: "10-15 minutes",
  },
  {
    number: "3",
    icon: ClipboardCheck,
    title: "Get Started",
    description:
      "Receive your certification or GLP-1 treatment plan. Meds are shipped to your door or pick up locally.",
    time: "Same Day",
  },
];

export function HomeProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[#0d6e74]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#f2a83c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            Our{" "}
            <span className="relative inline-block">
              Simple 3-Step
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#0d6e74]/15" />
            </span>{" "}
            Process
          </h2>
          <p className="mt-4 text-neutral-600">
            We&apos;ve streamlined medical consultations to be faster, more
            secure, and entirely digital.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="pointer-events-none absolute top-8 right-0 left-0 hidden h-px bg-[#0d6e74]/15 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-8 flex size-16 items-center justify-center rounded-full bg-[#f2a83c] font-heading text-2xl font-medium text-[#0a2733] ring-8 ring-[#eef6f6]">
                {step.number}
              </div>
              <div className="h-full w-full rounded-2xl bg-white/80 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur transition-shadow hover:shadow-md">
                <step.icon className="mx-auto mb-4 size-9 text-[#0d6e74]" />
                <h3 className="font-heading text-xl font-medium text-[#0a2733]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600">{step.description}</p>
                <span className="mt-4 inline-block rounded-full bg-[#eef6f6] px-3 py-1 text-xs font-semibold text-[#0a2733]/70">
                  {step.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ConsultationModal
            trigger={
              <Button className="h-auto rounded-full bg-[#f2a83c] px-10 py-6 text-base font-semibold text-[#0a2733] shadow-[0_8px_24px_rgba(242,168,60,0.35)] hover:bg-[#f2a83c]/90">
                Start Your Online Consultation
                <ArrowRight className="size-4" />
              </Button>
            }
          />
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-neutral-500">
            <BadgeCheck className="size-4 text-[#0d6e74]" />
            100% Money-Back Guarantee if not approved.
          </p>
        </div>
      </div>
    </section>
  );
}
