import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ONGO_WEIGHT_LOSS_URL } from "@/lib/ongo";

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
      className="relative overflow-hidden bg-gradient-to-br from-[#0a2733] via-[#0d3f45] to-[#0a2733] py-20"
    >
      <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[#f2a83c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70">
          <span className="size-2 rounded-full bg-[#f2a83c]" />
          PRICING
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            Program <span className="text-[#f2a83c]">Pricing</span> Overview
          </h2>
          <p className="max-w-md text-sm text-white/60 lg:mb-1">
            Our team of licensed professionals guides your treatment from
            evaluation through ongoing care.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-white/15" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <h3 className="font-heading text-base font-medium text-white">
                {plan.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-white/60">{plan.description}</p>
              <p className="font-heading mt-4 text-2xl font-medium text-[#f2a83c]">
                {plan.price}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          Brand-Name Medications: Variable Pricing — cost varies based on
          your insurance coverage and preferred pharmacy selection. Final
          pricing depends on insurance coverage, pharmacy selection, and
          prescribed dosage.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            nativeButton={false}
            render={<a href={ONGO_WEIGHT_LOSS_URL} />}
            className="group gap-3 rounded-full bg-white py-7 pl-2 pr-6 text-sm font-semibold text-[#0a2733] hover:bg-white/90"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[#f2a83c] text-[#0a2733] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4.5" />
            </span>
            Schedule Medical Evaluation
          </Button>
        </div>

        <p className="mt-4 text-center text-[11px] text-white/40">
          Disclaimer: Medication is prescribed only when clinically
          appropriate. Prices are subject to change and may vary based on
          individual treatment plans.
        </p>
      </div>
    </section>
  );
}
