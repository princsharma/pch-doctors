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
import { ONGO_WEIGHT_LOSS_URL } from "@/lib/ongo";

type Step = "choose" | "mmj";

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

  function handleWeightLoss() {
    window.location.href = ONGO_WEIGHT_LOSS_URL;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={trigger} />
      <DialogContent
        className="max-h-[min(90vh,720px)] w-full gap-0 overflow-y-auto p-0 sm:max-w-md"
        showCloseButton
      >
        {step === "choose" ? (
          <>
            <DialogHeader className="border-b border-[#0d6e74]/10 px-5 py-4 sm:px-6">
              <DialogTitle className="font-heading text-xl font-medium text-[#0a2733] sm:text-2xl">
                What are you looking for?
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-neutral-600">
                Choose a service to continue with your consultation.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 px-5 py-5 sm:px-6 sm:py-6">
              <button
                type="button"
                onClick={() => setStep("mmj")}
                className="group flex w-full items-start gap-4 rounded-2xl border border-[#0d6e74]/15 bg-[#eef6f6] p-4 text-left transition-all hover:border-[#f2a83c]/50 hover:bg-white hover:shadow-sm"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f2a83c]/20 text-[#0a2733]">
                  <Leaf className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-heading text-base font-medium text-[#0a2733]">
                      Medical Marijuana Cert
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-[#0a2733]/40 transition-transform group-hover:translate-x-0.5 group-hover:text-[#f2a83c]" />
                  </span>
                  <span className="mt-1 block text-sm text-neutral-600">
                    Same-day recommendations from licensed physicians.
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={handleWeightLoss}
                className="group flex w-full items-start gap-4 rounded-2xl border border-[#0d6e74]/15 bg-[#eef6f6] p-4 text-left transition-all hover:border-[#0d6e74]/40 hover:bg-white hover:shadow-sm"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0d6e74]/15 text-[#0d6e74]">
                  <Scale className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-heading text-base font-medium text-[#0a2733]">
                      Weight Loss Program
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-[#0a2733]/40 transition-transform group-hover:translate-x-0.5 group-hover:text-[#0d6e74]" />
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
            <DialogHeader className="border-b border-[#0d6e74]/10 px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => setStep("choose")}
                className="mb-2 w-fit text-sm font-medium text-[#0d6e74] transition-colors hover:text-[#0a4f54]"
              >
                ← Back to services
              </button>
              <DialogTitle className="font-heading text-xl font-medium text-[#0a2733] sm:text-2xl">
                Get Your Recommendation
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-neutral-600">
                Enter your details to continue to scheduling with a licensed physician.
              </DialogDescription>
            </DialogHeader>
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              <LeadCaptureForm />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

