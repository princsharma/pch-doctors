import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ONGO_WEIGHT_LOSS_URL } from "@/lib/ongo";

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
    <section id="medications" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[#0d6e74]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-[#f2a83c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4 h-7 gap-1.5 rounded-full bg-white px-3 text-xs">
            <Sparkles className="size-3.5 text-[#f2a83c]" /> FDA-Approved Options
          </Badge>
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            GLP-1 Medications for{" "}
            <span className="text-[#0d6e74]">Weight Management</span>
          </h2>
          <p className="mt-4 text-neutral-600">
            Our program includes FDA-approved GLP-1 medications, some
            indicated for diabetes care and prescribed off-label for weight
            management based on clinical judgment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medications.map((med) => (
            <Card
              key={med.name}
              className="overflow-hidden p-0 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full bg-[#f7f9f9]">
                <Image
                  src={med.image}
                  alt={med.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute right-3 bottom-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-[#f2a83c] shadow-sm ring-1 ring-[#f2a83c]/20">
                  {med.tag}
                </span>
              </div>
              <div className="p-6 pt-4">
                <h3 className="font-heading text-lg font-medium text-[#0a2733]">
                  {med.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{med.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button
            nativeButton={false}
            render={<a href={ONGO_WEIGHT_LOSS_URL} />}
            className="rounded-full bg-[#f2a83c] px-7 py-6 text-sm font-semibold text-[#0a2733] hover:bg-[#f2a83c]/90"
          >
            Schedule Medical Evaluation
          </Button>
          <p className="max-w-2xl text-xs text-neutral-500">
            <span className="font-semibold text-[#0a2733]">Important:</span>{" "}
            Medications such as Ozempic®, Mounjaro®, Rybelsus®, and Victoza®
            are FDA-approved for type 2 diabetes and often prescribed as an
            off-label medication for weight loss.
          </p>
        </div>
      </div>
    </section>
  );
}
