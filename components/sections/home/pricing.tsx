import { CheckCircle2 } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "MMJ Certification",
    service: "mmj" as const,
    price: "149",
    unit: "/visit",
    cta: "Get Certified Now",
    headerClass:
      "bg-[var(--service-brand)] text-white border-b border-[var(--service-border)]",
    features: [
      "New or Renewal patients",
      "Instant digital delivery",
      "Money back if not approved",
      "HIPAA secure consultation",
    ],
  },
  {
    name: "Weight Management",
    service: "glp1" as const,
    price: "299",
    unit: "/month",
    cta: "Start My Program",
    headerClass:
      "bg-[var(--service-accent)] text-white border-b border-[var(--service-border)]",
    features: [
      "Dedicated physician support",
      "GLP-1 Medication prescription",
      "Monthly health monitoring",
      "Nutritional guidance & support",
    ],
  },
] as const;

export function HomePricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a6332] via-[#154c35] to-[#24553f] py-20"
    >
      <div
        data-service="mmj"
        className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[var(--service-accent)]/25 blur-3xl"
      />
      <div
        data-service="glp1"
        className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[var(--service-accent)]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-white/60">
            Simple, straightforward costs. No hidden fees or surprise charges.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              data-service={plan.service}
              className="flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[var(--service-section-bg)] shadow-lg ring-1 ring-white/70"
            >
              <div className={`p-8 text-center ${plan.headerClass}`}>
                <h3 className="font-heading text-xl font-medium">{plan.name}</h3>
                <div className="mt-2 flex items-end justify-center">
                  <span className="mb-auto mt-2 text-2xl font-bold">$</span>
                  <span className="font-heading text-6xl font-medium leading-none">
                    {plan.price}
                  </span>
                  <span className="mb-2 ml-1 opacity-70">{plan.unit}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[var(--ds-ink)]/80"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-[var(--service-accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.service === "mmj" ? (
                  <MmjLeadModal
                    trigger={
                      <Button className="h-auto w-full rounded-full bg-[var(--service-accent)] py-5 text-sm font-semibold text-[var(--service-cta-secondary-ink)] hover:bg-[var(--service-accent)]/90">
                        {plan.cta}
                      </Button>
                    }
                  />
                ) : (
                  <Glp1LeadModal
                    trigger={
                      <Button className="h-auto w-full rounded-full border-0 bg-[#f59e0b] py-5 text-sm font-semibold text-[var(--ds-ink)] hover:bg-[#f59e0b]/90">
                        {plan.cta}
                      </Button>
                    }
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
