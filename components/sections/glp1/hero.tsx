import Image from "next/image";
import { ShieldCheck, BadgeCheck, Star, TrendingDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Glp1Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dcf0f1] via-[#eef6f6] to-white">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 size-80 rounded-full bg-[#0d6e74]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-5 flex flex-wrap gap-3">
            <Badge variant="outline" className="h-8 gap-1.5 rounded-full bg-white/80 px-4 text-xs shadow-sm backdrop-blur">
              <ShieldCheck className="size-3.5 text-[#0d6e74]" /> HIPAA Compliant
            </Badge>
            <Badge variant="outline" className="h-8 gap-1.5 rounded-full bg-white/80 px-4 text-xs shadow-sm backdrop-blur">
              <BadgeCheck className="size-3.5 text-[#0d6e74]" /> Licensed Clinicians
            </Badge>
          </div>

          <h1 className="font-heading text-4xl font-medium leading-[1.1] tracking-normal text-[#0a2733] sm:text-5xl">
            Clinician-Guided{" "}
            <span className="text-[#0d6e74]">GLP-1 Weight Management</span>
          </h1>

          <p className="mt-6 max-w-lg text-neutral-600">
            Start with a personalized, online, clinician-guided GLP-1
            evaluation based on your medical history and health goals.
            Treatment is prescribed only when clinically appropriate by your
            provider.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button className="rounded-full bg-[#f2a83c] px-9 py-7 text-base font-semibold text-[#0a2733] hover:bg-[#f2a83c]/90">
              Schedule Medical Evaluation
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-[#0d6e74]", "bg-[#f2a83c]", "bg-[#0a4f54]"].map((bg, i) => (
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
                    <Star key={i} className="size-3 fill-[#f2a83c] text-[#f2a83c]" />
                  ))}
                </div>
                <p className="text-xs text-neutral-500">Rated 4.9/5 by patients</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Weight Loss Program Enrolment Fee:{" "}
            <span className="font-semibold text-[#0a2733]">$75</span>
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
            <div className="flex size-8 items-center justify-center rounded-full bg-[#0d6e74]/10 text-[#0d6e74]">
              <TrendingDown className="size-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0a2733]">Sustained Results</p>
              <p className="text-[10px] text-neutral-500">Backed by STEP & SURMOUNT trials</p>
            </div>
          </Card>

          <Card className="absolute -right-4 bottom-10 flex-col items-start gap-0.5 px-4 py-3 shadow-lg">
            <p className="text-[10px] text-neutral-500">Starting at</p>
            <p className="font-heading text-xl font-medium text-[#0d6e74]">$75</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
