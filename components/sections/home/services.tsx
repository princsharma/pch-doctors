import Link from "next/link";
import Image from "next/image";
import { Lock, Award, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const states = ["California", "New York", "Texas", "Florida", "Ohio", "+25 More"];

export function HomeServices() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#eef6f6] py-20">
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-[#0d6e74]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:col-span-8 md:flex-row md:items-center md:p-12">
            <div className="flex-1 space-y-6">
              <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733]">
                Safe &amp; Secure{" "}
                <span className="relative inline-block">
                  Online Care
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#0d6e74]/15" />
                </span>
              </h2>
              <p className="text-neutral-600">
                Access expert medical guidance from the comfort of home. Our
                platform exceeds industry standards for patient privacy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0d6e74]/10 text-[#0d6e74]">
                    <Lock className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0a2733]">Bank-Level Security</p>
                    <p className="text-sm text-neutral-600">
                      Your health information is encrypted and never shared.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0d6e74]/10 text-[#0d6e74]">
                    <Award className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-[#0a2733]">US-Licensed Doctors</p>
                    <p className="text-sm text-neutral-600">
                      Every physician is board-certified and state-licensed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-xl shadow-inner">
              <Image
                src="/secure-sections.webp"
                alt="Doctor joining a secure telehealth consultation"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#0a4f54] via-[#0d6e74] to-[#0a2733] p-8 text-white shadow-lg md:col-span-4">
            <div>
              <Pill className="mb-6 size-9 text-[#f2a83c]" />
              <h3 className="font-heading text-xl font-medium">
                GLP-1 Specialist Access
              </h3>
              <p className="mt-4 leading-relaxed text-white/80">
                Direct access to modern medications including Wegovy, Ozempic,
                and Mounjaro with medical oversight.
              </p>
            </div>
            <Button
              nativeButton={false}
              render={<Link href="/services/glp-1-medications" />}
              className="mt-8 h-auto rounded-full border border-white/30 bg-transparent py-5 text-sm font-semibold text-white hover:bg-white/10"
            >
              View Medications
            </Button>
          </div>

          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 md:col-span-12 md:flex-row">
            <div className="flex-1">
              <h3 className="font-heading text-xl font-medium text-[#0a2733]">
                Available in 30+ States
              </h3>
              <p className="mt-2 text-neutral-600">
                We are rapidly expanding our telehealth network to serve more
                patients across the country.
              </p>
            </div>
            <div className="flex flex-1 flex-wrap justify-center gap-2 md:justify-end">
              {states.map((state) => (
                <span
                  key={state}
                  className="rounded-full bg-[#eef6f6] px-3 py-1.5 text-xs font-semibold text-[#0a2733]/80"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
