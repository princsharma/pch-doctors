import Image from "next/image";
import { ShieldCheck, BadgeCheck, Star, TrendingDown, Users } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Glp1Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--service-section-bg)] via-[var(--service-section-bg)] to-[var(--color-surface)]">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--service-accent-soft)]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 size-80 rounded-full bg-[var(--service-brand)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-5 flex flex-wrap gap-3">
            <Badge variant="outline" className="h-8 gap-1.5 rounded-full bg-white/80 px-4 text-xs shadow-sm backdrop-blur">
              <ShieldCheck className="size-3.5 text-[var(--service-brand)]" /> HIPAA Compliant
            </Badge>
            <Badge variant="outline" className="h-8 gap-1.5 rounded-full bg-white/80 px-4 text-xs shadow-sm backdrop-blur">
              <BadgeCheck className="size-3.5 text-[var(--service-brand)]" /> Licensed Clinicians
            </Badge>
          </div>

          <h1 className="font-heading text-4xl font-medium leading-[1.1] tracking-normal text-[var(--ds-ink)] sm:text-5xl">
            Clinician-Guided{" "}
            <span className="text-[var(--service-brand)]">GLP-1 Weight Management</span>
          </h1>

          <p className="mt-6 max-w-lg text-neutral-600">
            Start with a personalized, online, clinician-guided GLP-1
            evaluation based on your medical history and health goals.
            Treatment is prescribed only when clinically appropriate by your
            provider.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Glp1LeadModal
              trigger={
                <Button className="rounded-full bg-[var(--service-accent)] px-9 py-7 text-base font-semibold text-white shadow-[0_8px_24px_rgb(var(--service-accent-rgb)/0.35)] hover:bg-[var(--service-warm)]">
                  Schedule Medical Evaluation
                </Button>
              }
            />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-[var(--service-brand)]", "bg-[var(--service-accent)]", "bg-[var(--service-brand-dark)]"].map((bg, i) => (
                  <span
                    key={i}
                    className={`flex size-8 items-center justify-center rounded-full text-white ring-2 ring-white ${bg}`}
                  >
                    <Users className="size-3.5" />
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-[var(--service-accent)] text-[var(--service-accent)]" />
                  ))}
                </div>
                <p className="text-xs text-neutral-500">Rated 4.9/5 by patients</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Weight Loss Program Enrolment Fee:{" "}
            <span className="font-semibold text-[var(--ds-ink)]">$75</span>
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <Image
              src="/glp-1-hero-section.webp"
              alt="Patient self-administering a GLP-1 weight loss injection"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>

          <Card className="absolute -left-6 top-10 flex-row items-center gap-2 px-3 py-2 shadow-lg">
            <div className="flex size-8 items-center justify-center rounded-full bg-[var(--service-brand)]/10 text-[var(--service-brand)]">
              <TrendingDown className="size-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--ds-ink)]">Sustained Results</p>
              <p className="text-[10px] text-neutral-500">Backed by STEP & SURMOUNT trials</p>
            </div>
          </Card>

          <Card className="absolute -right-4 bottom-10 flex-col items-start gap-0.5 px-4 py-3 shadow-lg">
            <p className="text-[10px] text-neutral-500">Starting at</p>
            <p className="font-heading text-xl font-medium text-[var(--service-brand)]">$75</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
