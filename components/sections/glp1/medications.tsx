import { Pill, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const medications = [
  {
    name: "Ozempic®",
    tag: "Off-Label for Weight Loss",
    description:
      "An FDA-approved medication for type 2 diabetes that helps lower A1C levels and is often prescribed off-label for weight management.",
  },
  {
    name: "Zepbound®",
    tag: "Weight Management",
    description:
      "An FDA-approved GLP-1/GIP weekly injection for chronic weight management in adults with BMI ≥27 with weight-related conditions or ≥30 with obesity.",
  },
  {
    name: "Wegovy®",
    tag: "Weight Management",
    description:
      "An FDA-approved GLP-1 for chronic weight management in adults with BMI ≥27 with weight-related conditions or ≥30 with obesity.",
  },
  {
    name: "Rybelsus®",
    tag: "Daily Oral Tablet",
    description:
      "An FDA-approved medication for type 2 diabetes, taken as a once-daily oral tablet and used alongside diet and exercise.",
  },
  {
    name: "Mounjaro®",
    tag: "Off-Label for Weight Loss",
    description:
      "An FDA-approved medication for type 2 diabetes that helps lower A1C levels and is sometimes prescribed off-label for weight management.",
  },
  {
    name: "Liraglutide",
    tag: "Saxenda® / Victoza®",
    description:
      "FDA-approved for weight loss (Saxenda®) and for type 2 diabetes (Victoza®), used alongside diet and exercise.",
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
              className="p-6 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#0d6e74]/10 text-[#0d6e74]">
                  <Pill className="size-5" />
                </div>
                <span className="rounded-full bg-[#f2a83c]/10 px-2.5 py-1 text-[10px] font-medium text-[#f2a83c]">
                  {med.tag}
                </span>
              </div>
              <h3 className="font-heading mt-4 text-lg font-medium text-[#0a2733]">
                {med.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{med.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button className="rounded-full bg-[#f2a83c] px-7 py-6 text-sm font-semibold text-[#0a2733] hover:bg-[#f2a83c]/90">
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
