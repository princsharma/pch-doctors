"use client";

import type { ReactElement } from "react";

import { LeadCaptureForm } from "@/components/lead-capture-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Glp1LeadModalProps = {
  trigger: ReactElement;
};

export function Glp1LeadModal({ trigger }: Glp1LeadModalProps) {
  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent
        data-service="glp1"
        className="max-h-[min(90vh,720px)] w-full gap-0 overflow-y-auto p-0 sm:max-w-md"
        showCloseButton
      >
        <DialogHeader className="border-b border-[var(--service-brand)]/10 px-5 py-4 sm:px-6">
          <DialogTitle className="font-heading text-xl font-medium text-[var(--ds-ink)] sm:text-2xl">
            Start Your Weight Loss Program
          </DialogTitle>
          <DialogDescription className="mt-1 text-sm text-neutral-600">
            Enter your details to continue to scheduling with a licensed clinician.
          </DialogDescription>
        </DialogHeader>
        <div className="px-5 py-5 sm:px-6 sm:py-6">
          <LeadCaptureForm variant="glp1" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
