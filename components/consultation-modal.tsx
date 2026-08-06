"use client";

import { useState, type ReactElement } from "react";
import { ArrowRight, Leaf, Scale } from "lucide-react";

import { LeadCaptureForm } from "@/components/lead-capture-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Step = "choose" | "mmj" | "glp1";

type ConsultationModalProps = {
  trigger: ReactElement;
};

export function ConsultationModal({ trigger }: ConsultationModalProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("choose");

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      setStep("choose");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={trigger} />
      <DialogContent
        data-service={step === "choose" ? undefined : step}
        className="max-h-[min(90vh,720px)] w-full gap-0 overflow-y-auto p-0 sm:max-w-md"
        showCloseButton
      >
        {step === "choose" ? (
          <>
            <DialogHeader className="border-b border-[var(--ds-brand)]/10 px-5 py-4 sm:px-6">
              <DialogTitle className="font-heading text-xl font-medium text-[var(--ds-ink)] sm:text-2xl">
                What are you looking for?
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-neutral-600">
                Choose a service to continue with your consultation.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="button"
                data-service="mmj"
                onClick={() => setStep("mmj")}
                aria-label="Continue with medical marijuana certification"
                className="group flex w-full items-start gap-4 rounded-2xl border border-[var(--service-brand)]/15 bg-[var(--service-section-bg)] p-4 text-left transition-all hover:border-[var(--service-accent)]/50 hover:bg-white hover:shadow-sm"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--service-accent)]/20 text-[var(--ds-ink)]">
                  <Leaf className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-heading text-base font-medium text-[var(--ds-ink)]">
                      Medical Marijuana Cert
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-[var(--ds-ink)]/40 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--service-accent)]" />
                  </span>
                  <span className="mt-1 block text-sm text-neutral-600">
                    Same-day recommendations from licensed physicians.
                  </span>
                </span>
              </button>

              <button
                type="button"
                data-service="glp1"
                onClick={() => setStep("glp1")}
                aria-label="Continue with weight loss program"
                className="group flex w-full items-start gap-4 rounded-2xl border border-[var(--service-brand)]/15 bg-[var(--service-section-bg)] p-4 text-left transition-all hover:border-[var(--service-brand)]/40 hover:bg-white hover:shadow-sm"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--service-brand)]/15 text-[var(--service-brand)]">
                  <Scale className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-heading text-base font-medium text-[var(--ds-ink)]">
                      Weight Loss Program
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-[var(--ds-ink)]/40 transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--service-brand)]" />
                  </span>
                  <span className="mt-1 block text-sm text-neutral-600">
                    Clinician-guided GLP-1 weight management.
                  </span>
                </span>
              </button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader className="border-b border-[var(--service-brand)]/10 px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setStep("choose")}
                className="mb-2 w-fit text-sm font-medium text-[var(--service-brand)] transition-colors hover:text-[var(--service-brand-dark)]"
              >
                ← Back to services
              </button>
              <DialogTitle className="font-heading text-xl font-medium text-[var(--ds-ink)] sm:text-2xl">
                {step === "glp1"
                  ? "Start Your Weight Loss Program"
                  : "Get Your Recommendation"}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-neutral-600">
                {step === "glp1"
                  ? "Enter your details to continue to scheduling with a licensed clinician."
                  : "Enter your details to continue to scheduling with a licensed physician."}
              </DialogDescription>
            </DialogHeader>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <LeadCaptureForm variant={step === "glp1" ? "glp1" : "mmj"} />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
