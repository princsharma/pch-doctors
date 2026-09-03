import Image from "next/image";
import { BadgeCheck, Leaf } from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { doctorsByService } from "@/lib/doctors";
import { MMJ_STATES } from "@/lib/mmj-states";

export function MmjDoctorsHero() {
  const stateCount = MMJ_STATES.length;
  const clinicianCount = doctorsByService("mmj").length;

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center overflow-hidden bg-[var(--ds-brand-dark)] px-6 py-16 text-white sm:px-10 lg:min-h-[36rem] lg:px-14 lg:py-20">
          <Leaf
            className="pointer-events-none absolute -right-10 -top-8 size-56 text-white/5"
            strokeWidth={0.6}
            aria-hidden
          />
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-[#d4f5e0] uppercase ring-1 ring-white/15">
            <Leaf className="size-3.5" aria-hidden />
            Medical team
          </p>
          <h1 className="font-heading mt-6 max-w-xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            The people on the other side of your visit
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80">
            You will not get a faceless form and a generic yes. A licensed
            clinician reviews your story, asks what is going on, and decides
            whether a medical marijuana recommendation fits your case and your
            state.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-[#9ad4b2]" aria-hidden />
              {clinicianCount} licensed clinicians
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-[#9ad4b2]" aria-hidden />
              {stateCount}+ states
            </li>
            <li className="inline-flex items-center gap-2">
              <BadgeCheck className="size-4 text-[#9ad4b2]" aria-hidden />
              Private video visits
            </li>
          </ul>
          <MmjLeadModal
            trigger={
              <Button className="mt-9 h-auto w-fit rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-[var(--ds-ink)] hover:bg-[var(--service-accent)]/90">
                Book a visit
              </Button>
            }
          />
        </div>

        <div className="relative min-h-[280px] lg:min-h-full">
          <Image
            src="/images/hero-section.webp"
            alt="Licensed clinician preparing for an online medical marijuana visit"
            fill
            className="object-cover object-[center_18%]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(8_40_24/0.12)_0%,rgb(8_40_24/0.45)_100%)]" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/92 p-5 shadow-xl backdrop-blur-md sm:max-w-sm">
            <p className="font-heading text-lg font-medium text-[var(--ds-ink)]">
              Real licenses. Real names.
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Every clinician on this page is listed with credentials you can
              look up before you book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
