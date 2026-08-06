import Image from "next/image";
import { Check, Stethoscope, ClipboardCheck, Utensils, Activity, Clock, Star } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Stethoscope,
    title: "Clinician Led Care",
    description:
      "Work with licensed doctors who carefully review your medical background and provide a science-backed treatment plan, including dosing instructions and side effect management.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Treatment Plan",
    description:
      "When appropriate, your care plan may include FDA-approved GLP-1 medications such as Wegovy® or Zepbound®, along with clear instructions and ongoing clinical oversight.",
  },
  {
    icon: Utensils,
    title: "Lifestyle and Nutrition Support",
    description:
      "You will receive personalized nutrition guidance and healthy workout recommendations designed to promote safe, sustainable, and long-term weight management success.",
  },
  {
    icon: Activity,
    title: "Ongoing Clinical Monitoring",
    description:
      "Your provider conducts regular follow-ups to monitor progress, make necessary adjustments, and help you stay aligned with your long-term health goals.",
  },
];

export function Glp1Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-[var(--service-section-bg)] py-20">
      <div className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-[var(--service-brand)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <Badge variant="outline" className="mb-4 h-7 gap-1.5 rounded-full bg-white px-3 text-xs">
            <Check className="size-3.5 text-[var(--service-brand)]" /> Holistic & Science-Backed
          </Badge>
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Benefits of <span className="text-[var(--service-brand)]">Our Weight Loss</span> Program
          </h2>
          <p className="mt-4 text-neutral-600">
            Our program is designed to offer a holistic approach backed by
            science and practical lifestyle guidance.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-3 rounded-xl bg-[var(--color-surface)] p-4 shadow-sm ring-1 ring-[var(--service-border)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--service-brand)] shadow-sm ring-1 ring-black/5">
                  <benefit.icon className="size-4.5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-medium text-[var(--ds-ink)]">
                    {benefit.title}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Glp1LeadModal
            trigger={
              <Button
                className="mt-8 rounded-full px-7 py-6 text-sm font-semibold text-white hover:opacity-95"
                style={{ background: "var(--service-cta)" }}
              >
                Schedule Medical Evaluation
              </Button>
            }
          />
          <p className="mt-3 text-xs text-neutral-500">
            Weight Loss Program Enrollment Fee: $75
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src="/hero-section.webp"
              alt="Physician reviewing a personalized GLP-1 weight loss treatment plan"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <Card className="absolute -left-4 top-8 flex-row items-center gap-2 px-3 py-2 shadow-lg">
            <Clock className="size-4 text-[var(--service-brand)]" />
            <div>
              <p className="text-xs font-semibold text-[var(--ds-ink)]">10+ Years</p>
              <p className="text-[10px] text-neutral-500">of clinical experience</p>
            </div>
          </Card>
          <Card className="absolute -right-4 bottom-8 flex-row items-center gap-2 px-3 py-2 shadow-lg">
            <Star className="size-4 fill-[var(--service-accent)] text-[var(--service-accent)]" />
            <div>
              <p className="text-xs font-semibold text-[var(--ds-ink)]">Trusted Reviews</p>
              <p className="text-[10px] text-neutral-500">Rated 4.9/5 by patients</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
