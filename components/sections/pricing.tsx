"use client";

import { ArrowRight, CheckCircle2, FileCheck, RefreshCcw } from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";

const pricingPlans = [
  {
    badge: "New Patients",
    icon: FileCheck,
    name: "New MMJ Card",
    description: "Best for first-time medical marijuana patients.",
    price: "$149",
    features: [
      "Quick online consultation with a licensed doctor",
      "State-recognized certification, delivered digitally",
      "Same-day approval or a full refund",
    ],
  },
  {
    badge: "Renewals",
    icon: RefreshCcw,
    name: "Renew MMJ Card",
    description: "For patients renewing an existing certification.",
    price: "$129",
    features: [
      "Fast renewal, no repeat paperwork",
      "Maintain uninterrupted dispensary access",
      "Competitive, accessible renewal pricing",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-[var(--service-brand-dark)] via-[var(--service-brand-dark)] to-[var(--service-brand-dark)] py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[var(--service-brand)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[var(--service-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70">
          <span className="size-2 rounded-full bg-[var(--service-accent)]" />
          PRICING
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            Know Your <span className="text-[var(--service-accent)]">Consultation</span> Costs
          </h2>
          <p className="max-w-md text-sm text-white/60 lg:mb-1">
            We know every patient&rsquo;s needs are unique, so PCH Doctors
            keeps pricing transparent. Choose a plan for your first
            certification or a fast, affordable renewal.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-white/15" />

        <div className="mt-12 grid gap-6 sm:mx-auto sm:max-w-3xl sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[var(--service-brand-light)] shadow-lg ring-1 ring-white/70"
            >
              <div className="flex flex-col gap-4 border-b border-[var(--service-border)] p-6">
                <span className="w-fit rounded-full bg-[var(--service-badge-bg)] px-3 py-1 text-xs font-medium text-[var(--service-badge-ink)]">
                  {plan.badge}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[var(--service-brand)]/10 text-[var(--service-brand-dark)]">
                    <plan.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-[var(--ds-ink)]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[var(--ds-ink-mid)]">
                      {plan.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 border-b border-[var(--service-border)] p-6">
                <p className="text-xs font-medium tracking-widest text-[var(--ds-ink-soft)]">
                  WHAT&rsquo;S INCLUDED
                </p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--service-accent)]" />
                      <span className="text-sm text-[var(--ds-ink)]/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium tracking-widest text-[var(--ds-ink-soft)]">
                  STARTING FROM
                </p>
                <p className="font-heading mt-1 text-3xl font-medium text-[var(--ds-ink)]">
                  {plan.price}
                </p>
                <MmjLeadModal
                  trigger={
                    <button
                      type="button"
                      className="group mt-5 flex w-full items-center justify-between gap-3 rounded-full bg-[var(--service-brand-dark)] py-1 pl-6 pr-1 text-base font-semibold text-white transition-colors hover:bg-[var(--service-brand)]"
                    >
                      Book Slot
                      <span className="flex size-10 items-center justify-center rounded-full bg-[var(--service-accent)] text-[var(--ds-ink)] transition-transform group-hover:translate-x-0.5">
                        <ArrowRight className="size-4.5" />
                      </span>
                    </button>
                  }
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/50">
          Get California MMJ recommendation $55.
        </p>
      </div>
    </section>
  );
}
