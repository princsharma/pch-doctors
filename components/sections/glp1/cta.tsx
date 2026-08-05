import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ONGO_WEIGHT_LOSS_URL } from "@/lib/ongo";

export function Glp1Cta() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-[#eef6f6] px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h3 className="font-heading text-2xl font-medium text-[#0a2733]">
            Begin your clinician-guided weight loss journey.
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Book your online evaluation now.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-neutral-500 sm:justify-start">
            <span className="flex items-center gap-1.5">
              <Mail className="size-3.5 text-[#0d6e74]" /> contact@pchdoctors.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="size-3.5 text-[#0d6e74]" /> +1 (424) 424 – 1618
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#0d6e74]" /> Wilmington, CA
            </span>
          </div>
        </div>
        <Button
          nativeButton={false}
          render={<a href={ONGO_WEIGHT_LOSS_URL} />}
          className="shrink-0 rounded-full bg-[#0d6e74] px-8 py-7 text-base font-semibold text-white hover:bg-[#0d6e74]/90"
        >
          Book Consultation
        </Button>
      </div>
    </section>
  );
}
