import { ArrowRight } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Care Team Consultation",
    description: "Initial intake and program overview with our care team.",
    price: "Free",
  },
  {
    title: "Licensed Clinician Evaluation",
    description: "Comprehensive medical evaluation to determine eligibility for treatment.",
    price: "$75",
  },
  {
    title: "Semaglutide",
    description: "Compounded weight loss medication with effective results.",
    price: "$299/mo",
  },
  {
    title: "Tirzepatide",
    description: "Advanced dual-action compounded therapy for sustainable weight loss.",
    price: "$399/mo",
  },
];

export function Glp1Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[var(--service-section-bg)] py-20"
    >
      <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[var(--service-accent)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--service-brand)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--ds-ink-soft)]">
          <span className="size-2 rounded-full bg-[var(--service-accent)]" />
          PRICING
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Program{" "}
            <span className="text-[var(--service-accent)]">Pricing</span> Overview
          </h2>
          <p className="max-w-md text-sm text-[var(--ds-ink-mid)] lg:mb-1">
            Our team of licensed professionals guides your treatment from
            evaluation through ongoing care.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-[var(--service-border)]" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col rounded-2xl bg-[var(--color-surface)] p-6 shadow-sm ring-1 ring-[var(--service-border)]"
            >
              <h3 className="font-heading text-base font-medium text-[var(--ds-ink)]">
                {plan.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--ds-ink-mid)]">
                {plan.description}
              </p>
              <p className="font-heading mt-4 text-2xl font-medium text-[var(--service-accent)]">
                {plan.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-[var(--ds-ink-soft)]">
          Brand-Name Medications: Variable Pricing. Cost varies based on
          your insurance coverage and preferred pharmacy selection. Final
          pricing depends on insurance coverage, pharmacy selection, and
          prescribed dosage.
        </p>

        <div className="mt-8 flex justify-center">
          <Glp1LeadModal
            trigger={
              <Button className="group gap-3 rounded-full bg-[var(--service-accent)] py-7 pl-2 pr-6 text-sm font-semibold text-white hover:bg-[var(--service-warm)]">
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-[var(--service-accent)] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-4.5" />
                </span>
                Schedule Medical Evaluation
              </Button>
            }
          />
        </div>

        <p className="mt-4 text-center text-[11px] text-[var(--ds-ink-soft)]">
          Disclaimer: Medication is prescribed only when clinically
          appropriate. Prices are subject to change and may vary based on
          individual treatment plans.
        </p>
      </div>
    </section>
  );
}
