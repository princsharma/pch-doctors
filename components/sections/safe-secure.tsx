"use client";

import Image from "next/image";
import { ShieldCheck, BadgeCheck, CalendarClock, Laptop2 } from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const secureFeatures = [
  {
    icon: ShieldCheck,
    title: "HIPAA Compliant & Secure",
    description:
      "Your health information is protected with bank-level security and complete privacy.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Physicians Only",
    description:
      "All consultations are conducted by state-licensed medical doctors with cannabis expertise.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "Book appointments 7 days a week with same-day availability in most states.",
  },
  {
    icon: Laptop2,
    title: "Any Device, Anywhere",
    description:
      "Join consultations from your computer, tablet, or smartphone with our easy-to-use platform.",
  },
];

export function SafeSecure() {
  return (
    <section id="consultations" className="relative overflow-hidden bg-[var(--service-section-bg)] py-20">
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-[var(--service-brand)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 h-7 gap-1.5 rounded-full bg-white px-3 text-xs">
            <ShieldCheck className="size-3.5 text-[var(--service-brand)]" /> 100% Online Process
          </Badge>
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Safe & Secure Online <span className="text-[var(--service-brand)]">Consultations</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-heading text-2xl font-medium text-[var(--ds-ink)] sm:text-3xl">
              Your Trusted Telemedicine Partner
            </h3>
            <p className="mt-4 max-w-md text-neutral-600">
              Connect with licensed physicians from anywhere in the USA
              through our secure, HIPAA-compliant platform — available 24/7,
              guiding you at every step.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {secureFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--service-brand)] shadow-sm ring-1 ring-black/5">
                    <feature.icon className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-medium text-[var(--ds-ink)]">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <MmjLeadModal
              trigger={
                <Button className="mt-10 rounded-full bg-[var(--service-accent)] px-7 py-6 text-sm font-semibold text-[var(--ds-ink)] hover:bg-[var(--service-accent)]/90">
                  Schedule Your Consultation Now
                </Button>
              }
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <div className="relative aspect-4/5 w-full lg:aspect-auto lg:h-[560px]">
              <Image
                src="/secure-sections.webp"
                alt="Doctor joining a secure video consultation from a smartphone"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
