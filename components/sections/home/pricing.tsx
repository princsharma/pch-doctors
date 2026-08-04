import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "MMJ Certification",
    price: "149",
    unit: "/visit",
    href: "/services/medical-marijuana-consultation",
    cta: "Get Certified Now",
    headerClass: "bg-[#f2a83c] text-[#0a2733]",
    checkClass: "text-[#f2a83c]",
    features: [
      "New or Renewal patients",
      "Instant digital delivery",
      "Money back if not approved",
      "HIPAA secure consultation",
    ],
  },
  {
    name: "Weight Management",
    price: "299",
    unit: "/month",
    href: "/services/glp-1-medications",
    cta: "Start My Program",
    headerClass: "bg-gradient-to-br from-[#0a4f54] to-[#0d6e74] text-white",
    checkClass: "text-[#0d6e74]",
    features: [
      "Dedicated physician support",
      "GLP-1 Medication prescription",
      "Monthly health monitoring",
      "Nutritional guidance & support",
    ],
  },
];

export function HomePricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-[#0a2733] via-[#0d3f45] to-[#0a2733] py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[#0d6e74]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-[#f2a83c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-white sm:text-4xl">
            Transparent{" "}
            <span className="text-[#f2a83c]">Pricing</span>
          </h2>
          <p className="mt-4 text-white/60">
            Simple, straightforward costs. No hidden fees or surprise charges.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10"
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
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className={`size-5 shrink-0 ${plan.checkClass}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  nativeButton={false}
                  render={<Link href={plan.href} />}
                  className="h-auto w-full rounded-full bg-white py-5 text-sm font-semibold text-[#0a2733] hover:bg-white/90"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
