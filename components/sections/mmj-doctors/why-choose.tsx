import { Lock, Scale, Stethoscope, Video } from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";

export function MmjDoctorsWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-brand)] uppercase">
            Why this team
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
            Care that still feels like a doctor visit
          </h2>
          <p className="mt-4 text-neutral-600">
            Telehealth should not mean lower standards. We built this roster so
            you can see who is on the call before you share a thing about your
            health.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[var(--ds-brand-dark)] p-8 text-white lg:col-span-2">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-[#c8f0d6] ring-1 ring-white/10">
              <Stethoscope className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading mt-6 text-2xl font-medium">
              They actually practice medicine
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">
              These are licensed MDs, DOs, and nurse practitioners. The visit
              is a clinical review. Nobody is trying to sell you a product on
              the call.
            </p>
          </div>

          <div className="rounded-[1.6rem] bg-[#f6f3ee] p-8 ring-1 ring-black/5">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-[var(--service-brand)] shadow-sm">
              <Scale className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading mt-6 text-xl font-medium text-[var(--ds-ink)]">
              Your state sets the rules
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Each clinician works within the licenses they hold. If they
              cannot see you in your state, we will not pretend otherwise.
            </p>
          </div>

          <div className="rounded-[1.6rem] bg-[#f6f3ee] p-8 ring-1 ring-black/5">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-[var(--service-brand)] shadow-sm">
              <Lock className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading mt-6 text-xl font-medium text-[var(--ds-ink)]">
              The visit stays between you two
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Calls run on encrypted, HIPAA-compliant video. Your health
              details are not used for marketing.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.6rem] bg-[var(--service-accent)] p-8 text-[var(--ds-ink)] lg:col-span-2">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--ds-brand-dark)] text-[#c8f0d6]">
              <Video className="size-5" aria-hidden />
            </span>
            <h3 className="font-heading mt-6 text-2xl font-medium">
              You can do this from the couch
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--ds-ink)]/75">
              No waiting room. Most people finish the conversation in about 15
              to 30 minutes, then get a written decision they can actually
              read.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-black/5 bg-white px-7 py-7 shadow-[0_18px_40px_-28px_rgba(20,50,30,0.45)] sm:flex-row sm:items-center">
          <div>
            <p className="font-heading text-xl font-medium text-[var(--ds-ink)]">
              Want to skip the browsing?
            </p>
            <p className="mt-1 text-sm text-neutral-600">
              Tell us your state and we will match you with a clinician who can
              see you.
            </p>
          </div>
          <MmjLeadModal
            trigger={
              <Button className="h-auto shrink-0 rounded-full border-0 bg-[var(--service-brand)] px-8 py-5 text-sm font-semibold text-white hover:bg-[var(--service-brand-dark)]">
                Match me with a clinician
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
