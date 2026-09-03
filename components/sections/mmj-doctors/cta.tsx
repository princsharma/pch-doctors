import { ArrowRight } from "lucide-react";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function MmjDoctorsCta() {
  return (
    <section className="relative overflow-hidden bg-[#f6f3ee] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ds-brand-dark)] px-8 py-14 text-white sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-[var(--service-accent)]/25 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#c8f0d6] uppercase">
              Ready when you are
            </p>
            <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Sit down with a licensed clinician this week
            </h2>
            <p className="mt-4 text-white/75">
              Most visits wrap in under half an hour. If you would rather talk
              to a person first, call us and we will help you get on the
              calendar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <MmjLeadModal
                trigger={
                  <Button className="h-auto rounded-full border-0 bg-[var(--service-accent)] px-8 py-5 text-sm font-semibold text-[var(--ds-ink)] hover:bg-[var(--service-accent)]/90">
                    Book online
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                }
              />
              <a
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Or call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
