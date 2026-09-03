import { ArrowRight } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function Glp1DoctorsCta() {
  return (
    <section className="bg-[#fffbf5] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#24553f_0%,#3e8d69_52%,#e76f51_100%)] px-8 py-14 text-white sm:px-12">
          <div className="relative max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase">
              Ongo Weight Loss
            </p>
            <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
              Sit down with a physician this week
            </h2>
            <p className="mt-4 text-white/85">
              Most first visits are online and short. If you would rather talk
              to someone before you book, call us and we will point you to the
              right calendar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Glp1LeadModal
                trigger={
                  <Button className="h-auto rounded-full border-0 bg-white px-8 py-5 text-sm font-semibold text-[var(--ds-ink)] hover:bg-white/90">
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
