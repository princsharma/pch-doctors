import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";
import { GLP1_DOCTORS } from "@/lib/doctors";
import { GLP1_STATES } from "@/lib/glp1-states";

export function Glp1DoctorsHero() {
  return (
    <section className="relative overflow-hidden bg-[#fffbf5]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] order-last lg:order-first lg:min-h-[36rem]">
          <Image
            src="/images/glp1-weight-management.webp"
            alt="Clinician reviewing a GLP-1 weight management plan with a patient"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(231_111_81/0.18)_0%,rgb(36_85_63/0.25)_100%)]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/93 p-5 shadow-xl backdrop-blur-md sm:max-w-sm">
            <p className="font-heading text-lg font-medium text-[var(--ds-ink)]">
              Ongo Weight Loss clinicians
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Licensed physicians. GLP-1 medication only after a real medical
              review.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-accent)] uppercase">
            Medical team
          </p>
          <h1 className="font-heading mt-4 max-w-xl text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ds-ink)] sm:text-5xl">
            The doctors on your GLP-1 visit
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-600">
            These physicians see patients through PCH Doctors and the Ongo
            weight loss program. You get a private video visit, a straight
            answer, and a plan that matches your health, not a sales script.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--ds-ink)]">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck
                className="size-4 text-[var(--service-accent)]"
                aria-hidden
              />
              {GLP1_DOCTORS.length} licensed physicians
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck
                className="size-4 text-[var(--service-accent)]"
                aria-hidden
              />
              {GLP1_STATES.length} states
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck
                className="size-4 text-[var(--service-accent)]"
                aria-hidden
              />
              Prescription only if it fits
            </li>
          </ul>
          <Glp1LeadModal
            trigger={
              <Button className="mt-9 h-auto w-fit rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-white hover:bg-[var(--service-warm)]">
                Book a weight loss visit
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
