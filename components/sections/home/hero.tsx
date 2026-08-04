"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  CreditCard,
  Scale,
  Headphones,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MMJ_PATH = "/services/medical-marijuana-consultation";
const GLP1_PATH = "/services/glp-1-medications";

export function HomeHero() {
  const [active, setActive] = useState<"mmj" | "glp1" | null>(null);

  return (
    <section className="relative flex min-h-[85vh] flex-col overflow-hidden border-b border-[#0d6e74]/10 md:flex-row">
      {/* MMJ panel */}
      <div
        className={cn(
          "group relative flex flex-1 items-center justify-center overflow-hidden bg-[#eef6f6] p-8 transition-all duration-700 md:border-r md:border-[#0d6e74]/10 md:p-16",
          active === "mmj" && "md:flex-[1.25]",
          active === "glp1" && "md:flex-[0.85] md:opacity-60"
        )}
        onMouseEnter={() => setActive("mmj")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/hero-section.webp"
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef6f6]/95 via-[#eef6f6]/80 to-[#eef6f6]/45" />
        </div>

        <div className="relative z-10 max-w-md rounded-2xl bg-white/55 p-6 shadow-sm ring-1 ring-white/60 backdrop-blur-sm sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0a2733] shadow-sm ring-1 ring-[#0d6e74]/10 backdrop-blur">
            <BadgeCheck className="size-4 text-[#0d6e74]" />
            HIPAA Compliant
          </span>

          <h1 className="font-heading mt-6 text-4xl font-medium leading-[1.1] tracking-normal text-[#0a2733] sm:text-5xl">
            Medical{" "}
            <span className="relative inline-block">
              Marijuana
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#0d6e74]/20" />
            </span>{" "}
            Certs
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Fast, legal medical marijuana recommendations from state-licensed
            physicians. Get certified in minutes from home.
          </p>

          <Button
            nativeButton={false}
            render={<Link href={MMJ_PATH} />}
            className="mt-8 h-auto gap-2 rounded-full bg-[#f2a83c] px-8 py-6 text-sm font-semibold text-[#0a2733] shadow-[0_8px_24px_rgba(242,168,60,0.35)] transition-all hover:bg-[#f2a83c]/90 hover:shadow-[0_10px_28px_rgba(242,168,60,0.45)]"
          >
            Get My Recommendation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-[#0d6e74]" />
              Same Day
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="size-4 text-[#0d6e74]" />
              Starting at $149
            </span>
          </div>
        </div>
      </div>

      {/* GLP-1 panel */}
      <div
        className={cn(
          "group relative flex flex-1 items-center justify-center overflow-hidden bg-white p-8 transition-all duration-700 md:p-16",
          active === "glp1" && "md:flex-[1.25]",
          active === "mmj" && "md:flex-[0.85] md:opacity-60"
        )}
        onMouseEnter={() => setActive("glp1")}
        onMouseLeave={() => setActive(null)}
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/glp-1-hero-section.webp"
            alt=""
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/75 to-white/40" />
        </div>

        <div className="relative z-10 max-w-md rounded-2xl bg-white/55 p-6 shadow-sm ring-1 ring-white/60 backdrop-blur-sm sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f2a83c]/15 px-3 py-1.5 text-xs font-semibold text-[#0a2733] ring-1 ring-[#f2a83c]/30">
            <Stethoscope className="size-4 text-[#0d6e74]" />
            Clinician Guided
          </span>

          <h1 className="font-heading mt-6 text-4xl font-medium leading-[1.1] tracking-normal text-[#0a2733] sm:text-5xl">
            GLP-1{" "}
            <span className="relative inline-block">
              Weight Loss
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#f2a83c]/35" />
            </span>{" "}
            Program
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Comprehensive medical weight management featuring GLP-1 medications
            prescribed by experts who care.
          </p>

          <Button
            nativeButton={false}
            render={<Link href={GLP1_PATH} />}
            className="mt-8 h-auto gap-2 rounded-full bg-[#0d6e74] px-8 py-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(13,110,116,0.3)] transition-all hover:bg-[#0a4f54] hover:shadow-[0_10px_28px_rgba(13,110,116,0.4)]"
          >
            Start Weight Loss Journey
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Scale className="size-4 text-[#f2a83c]" />
              FDA-Approved Meds
            </span>
            <span className="flex items-center gap-1.5">
              <Headphones className="size-4 text-[#f2a83c]" />
              Dedicated Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
