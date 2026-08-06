import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const medications = [
  {
    name: "Ozempic®",
    tag: "Off-Label for Weight Loss",
    description:
      "An FDA-approved medication for type 2 diabetes that helps lower A1C levels and is often prescribed off-label for weight management.",
    image:
      "/images/ozempic-semaglutide-prefilled-injection-pen-with-medication-packaging-for-type-2-diabetes.webp",
    alt: "Ozempic semaglutide prefilled injection pen with medication packaging",
  },
  {
    name: "Zepbound®",
    tag: "Weight Management",
    description:
      "An FDA-approved GLP-1/GIP weekly injection for chronic weight management in adults with BMI ≥27 with weight-related conditions or ≥30 with obesity.",
    image:
      "/images/zepbound-tirzepatide-prefilled-injection-pen-with-medication-packaging-for-weight-loss.webp",
    alt: "Zepbound tirzepatide prefilled injection pen with medication packaging",
  },
  {
    name: "Wegovy®",
    tag: "Weight Management",
    description:
      "An FDA-approved GLP-1 for chronic weight management in adults with BMI ≥27 with weight-related conditions or ≥30 with obesity.",
    image:
      "/images/wegovy-semaglutide-prefilled-injection-pen-with-medication-box-for-chronic-weight-management.webp",
    alt: "Wegovy semaglutide prefilled injection pen with medication box",
  },
  {
    name: "Rybelsus®",
    tag: "Daily Oral Tablet",
    description:
      "An FDA-approved medication for type 2 diabetes, taken as a once-daily oral tablet and used alongside diet and exercise.",
    image:
      "/images/rybelsus-semaglutide-7-mg-tablets-bottle-with-medication-box-for-type-2-diabetes-treatment.webp",
    alt: "Rybelsus semaglutide 7 mg tablets bottle with medication box",
  },
  {
    name: "Mounjaro®",
    tag: "Off-Label for Weight Loss",
    description:
      "An FDA-approved medication for type 2 diabetes that helps lower A1C levels and is sometimes prescribed off-label for weight management.",
    image:
      "/images/mounjaro-tirzepatide-prefilled-injection-pen-with-medication-box-for-type-2-diabetes-treatment.webp",
    alt: "Mounjaro tirzepatide prefilled injection pen with medication box",
  },
  {
    name: "Liraglutide",
    tag: "Saxenda® / Victoza®",
    description:
      "FDA-approved for weight loss (Saxenda®) and for type 2 diabetes (Victoza®), used alongside diet and exercise.",
    image:
      "/images/liraglutide-saxenda-prefilled-injection-pen-with-medication-box-for-weight-management.webp",
    alt: "Liraglutide Saxenda prefilled injection pen with medication box",
  },
];

export function Glp1Medications() {
  return (
    <section
      id="medications"
      className="relative overflow-hidden bg-[var(--color-surface)] py-20"
    >
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--service-brand)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-[var(--service-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 h-7 gap-1.5 rounded-full border-[var(--service-border)] bg-[var(--service-accent-soft)] px-3 text-xs text-[var(--service-badge-accent-ink)]"
          >
            <Sparkles className="size-3.5 text-[var(--service-accent)]" /> FDA-Approved Options
          </Badge>
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            GLP-1 Medications for{" "}
            <span className="text-[var(--service-accent)]">Weight Management</span>
          </h2>
          <p className="mt-4 text-[var(--ds-ink-mid)]">
            Our program includes FDA-approved GLP-1 medications, some
            indicated for diabetes care and prescribed off-label for weight
            management based on clinical judgment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medications.map((med) => (
            <Card
              key={med.name}
              className="overflow-hidden border-0 bg-[var(--color-surface)] p-0 shadow-sm ring-1 ring-[var(--service-border)] transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full bg-[var(--service-section-bg-alt)]">
                <Image
                  src={med.image}
                  alt={med.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute right-3 bottom-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-[var(--service-accent)] shadow-sm ring-1 ring-[var(--service-accent)]/20">
                  {med.tag}
                </span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="font-heading text-lg font-medium text-[var(--ds-ink)]">
                  {med.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{med.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Glp1LeadModal
            trigger={
              <Button className="rounded-full bg-[var(--service-accent)] px-7 py-6 text-sm font-semibold text-white hover:bg-[var(--service-warm)]">
                Schedule Medical Evaluation
              </Button>
            }
          />
          <p className="max-w-2xl text-xs text-neutral-500">
            <span className="font-semibold text-[var(--ds-ink)]">Important:</span>{" "}
            Medications such as Ozempic®, Mounjaro®, Rybelsus®, and Victoza®
            are FDA-approved for type 2 diabetes and often prescribed as an
            off-label medication for weight loss.
          </p>
        </div>
      </div>
    </section>
  );
}
