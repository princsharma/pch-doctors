import { Mail, Phone, MapPin } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";

export function Glp1Cta() {
  return (
    <section className="bg-[var(--service-section-bg)] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-[var(--color-surface)] px-6 py-12 text-center ring-1 ring-[var(--service-border)] sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-heading text-2xl font-medium text-[var(--ds-ink)]">
            Begin your clinician-guided weight loss journey.
          </h2>
          <p className="mt-2 text-sm text-[var(--ds-ink-mid)]">
            Book your online evaluation now.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-[var(--ds-ink-soft)] sm:justify-start">
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5 text-[var(--service-accent)]" /> contact@pchdoctors.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-[var(--service-accent)]" /> +1 (424) 424 – 1618
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[var(--service-accent)]" /> Wilmington, CA
            </span>
          </div>
        </div>
        <Glp1LeadModal
          trigger={
            <Button
              className="shrink-0 rounded-full px-8 py-7 text-base font-semibold text-white hover:opacity-95"
              style={{ background: "var(--service-cta)" }}
            >
              Book Consultation
            </Button>
          }
        />
      </div>
    </section>
  );
}
