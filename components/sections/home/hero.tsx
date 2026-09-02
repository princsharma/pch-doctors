"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  CreditCard,
  Scale,
  Headphones,
  Stethoscope,
  Shield,
  Leaf,
  Lock,
  Award,
  Users,
  Star,
  TrendingUp,
  HeartPulse,
} from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { MMJ_STATES } from "@/lib/mmj-states";

const mmjFeatures = [
  { icon: Award, label: "State Licensed Physicians" },
  { icon: Lock, label: "HIPAA Secure" },
  { icon: Clock, label: "Same Day Approval" },
  { icon: Shield, label: "100% Legal & Compliant" },
];

const glp1Features = [
  { icon: Scale, label: "FDA-Approved Medications" },
  { icon: Stethoscope, label: "Expert Physicians" },
  { icon: HeartPulse, label: "Personalized Treatment" },
  { icon: Headphones, label: "Ongoing Support" },
];

const trustItems = [
  {
    icon: Star,
    title: "4.9/5",
    subtitle: "Patient Rating",
    iconClass: "text-[#f5c542]",
    fill: true,
  },
  {
    icon: Users,
    title: "Patients Helped",
    subtitle: "Nationwide care",
    iconClass: "text-[var(--ds-brand-mid)]",
  },
  {
    icon: BadgeCheck,
    title: "States",
    subtitle: "Licensed coverage",
    iconClass: "text-[var(--ds-brand-mid)]",
    useStateCount: true,
  },
  {
    icon: Lock,
    title: "100% Secure",
    subtitle: "Your privacy matters",
    iconClass: "text-[var(--ds-brand-mid)]",
  },
] as const;

export function HomeHero() {
  const stateCount = MMJ_STATES.length;

  return (
    <section className="home-hero relative overflow-hidden">
      <h1 className="sr-only">
        PCH Doctors: Medical Marijuana Certifications and GLP-1 Weight Loss
      </h1>

      <div className="relative flex min-h-[min(960px,calc(100svh-4.5rem))] flex-col md:flex-row">
        {/* Soft center seam */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 z-[5] hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/50 to-transparent md:block"
          aria-hidden
        />

        {/* MMJ panel */}
        <div
          data-service="mmj"
          className="relative flex flex-1 flex-col overflow-hidden px-6 py-12 pb-10 sm:px-10 md:px-12 md:py-16 md:pb-36 lg:px-14"
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/effective-pills.webp"
              alt="Medical marijuana pills and capsules for MMJ certification"
              fill
              className="object-cover object-center saturate-[1.05] contrast-[1.02]"
              sizes="50vw"
              priority
            />
            {/* Soft green wash — keeps tone without hiding the photo */}
            <div className="absolute inset-0 bg-[linear-gradient(155deg,rgb(8_48_28/0.55)_0%,rgb(14_99_50/0.38)_40%,rgb(10_60_36/0.5)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgb(63_160_102/0.22)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgb(6_28_16/0.35)_0%,transparent_45%)]" />
            {/* Darker scrim behind copy so text stays readable */}
            <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-[linear-gradient(90deg,rgb(4_24_14/0.72)_0%,rgb(6_36_22/0.45)_55%,transparent_100%)]" />
            <Leaf
              className="home-hero-float absolute -left-20 bottom-28 size-[22rem] text-white/[0.1]"
              strokeWidth={0.45}
              aria-hidden
            />
            <Leaf
              className="absolute right-6 top-16 size-44 rotate-[38deg] text-white/[0.07]"
              strokeWidth={0.45}
              aria-hidden
            />
          </div>

          <div className="relative z-10 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.2)] ring-1 ring-white/25 backdrop-blur-md uppercase">
              <BadgeCheck className="size-3.5 text-[#9ad4b2]" />
              HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgb(14_129_64/0.35)] px-3.5 py-2 text-[11px] font-semibold tracking-wide text-white shadow-[0_8px_24px_rgb(14_129_64/0.2)] ring-1 ring-[#9ad4b2]/40 backdrop-blur-md uppercase">
              <Leaf className="size-3.5 text-[#9ad4b2]" />
              Patients Certified Nationwide
            </span>
          </div>

          <div className="relative z-10 mx-auto mt-auto mb-auto w-full max-w-xl py-10 md:py-12">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-[#d4f5e0] uppercase">
              Online medical cannabis care
            </p>
            <h2 className="font-heading text-[2.6rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.35rem]">
              <span className="text-[#c8f0d6]">Medical Marijuana</span>
              <br />
              <span className="text-white">Certifications</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] font-medium leading-relaxed text-white/95">
              Fast, legal recommendations from state-licensed physicians from
              home, same day.
            </p>

            <div className="mt-8 rounded-[1.35rem] bg-[linear-gradient(160deg,rgb(255_255_255/0.35)_0%,rgb(255_255_255/0.08)_100%)] p-px shadow-[0_24px_60px_rgb(0_0_0/0.2)]">
              <div className="rounded-[1.3rem] border border-white/20 bg-[rgb(255_255_255/0.08)] p-5 shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] backdrop-blur-2xl sm:p-7">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {mmjFeatures.map((feature) => (
                    <div
                      key={feature.label}
                      className="group flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-3.5 py-3.5 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur-md transition-colors hover:bg-white/[0.1]"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[rgb(255_255_255/0.12)] text-[#d4f5e0] backdrop-blur-sm">
                        <feature.icon className="size-4" />
                      </span>
                      <p className="pt-1 text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>

                <MmjLeadModal
                  trigger={
                    <Button className="group mt-6 h-auto w-full gap-2 rounded-full border-0 [background:var(--service-cta)] px-9 py-5 text-[15px] font-semibold text-white shadow-[0_14px_36px_rgb(14_129_64/0.45)] transition-[filter,box-shadow,background] hover:[background:var(--service-cta-hover)] hover:brightness-105 hover:shadow-[0_18px_44px_rgb(14_129_64/0.55)] sm:w-auto">
                      Get My Recommendation
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  }
                />

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-[12px] font-medium text-white/90">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-[#c8f0d6]" />
                    Same Day Approval
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="size-3.5 text-[#c8f0d6]" />
                    Starting at $149
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center divider badge */}
        <div className="pointer-events-none absolute left-1/2 top-[44%] z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="home-hero-pulse absolute inset-0 rounded-full bg-[var(--ds-brand)]/30 blur-xl" aria-hidden />
          <div className="relative flex size-16 items-center justify-center rounded-full bg-white shadow-[0_16px_50px_rgb(0_0_0/0.28)] ring-[6px] ring-white/80">
            <div className="flex size-12 items-center justify-center rounded-full bg-[linear-gradient(145deg,#e8f5ee,#ffffff)]">
              <Leaf className="size-6 text-[var(--ds-brand)]" />
            </div>
          </div>
        </div>

        {/* GLP-1 panel */}
        <div
          data-service="glp1"
          className="relative flex flex-1 flex-col overflow-hidden px-6 py-12 pb-10 sm:px-10 md:px-12 md:py-16 md:pb-36 lg:px-14"
        >
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/glp1-hero-banner.webp"
              alt="Doctor consulting patient for GLP-1 weight loss program"
              fill
              className="object-cover object-center saturate-[0.9]"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgb(231_111_81/0.22)_0%,transparent_40%),linear-gradient(210deg,rgb(255_251_245/0.96)_0%,rgb(252_228_220/0.68)_48%,rgb(255_244_236/0.9)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_85%,rgb(244_169_120/0.2)_0%,transparent_35%)]" />
          </div>

          <div className="relative z-10 flex flex-wrap gap-2.5 md:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-[var(--service-badge-accent-ink)] shadow-[0_8px_24px_rgb(231_111_81/0.12)] ring-1 ring-[var(--service-accent)]/20 backdrop-blur-md uppercase">
              <Stethoscope className="size-3.5 text-[var(--service-accent)]" />
              Clinician Guided
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#fce4dc,#fff8f4)] px-3.5 py-2 text-[11px] font-semibold tracking-wide text-[var(--service-badge-accent-ink)] shadow-[0_8px_24px_rgb(231_111_81/0.12)] ring-1 ring-[var(--service-accent)]/25 backdrop-blur-md uppercase">
              <TrendingUp className="size-3.5 text-[var(--service-accent)]" />
              Proven Results
            </span>
          </div>

          <div className="relative z-10 mx-auto mt-auto mb-auto w-full max-w-xl py-10 md:py-12">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-[var(--service-accent)] uppercase">
              Clinician-guided weight care
            </p>
            <h2 className="font-heading text-[2.35rem] font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ds-ink)] sm:text-5xl lg:text-[3.35rem]">
              <span className="whitespace-nowrap">
                GLP-1{" "}
                <span className="bg-[linear-gradient(120deg,#e76f51_0%,#ee8a4f_55%,#d97441_100%)] bg-clip-text text-transparent">
                  Weight Loss
                </span>
              </span>
              <br />
              Program
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[var(--ds-ink-mid)]">
              Personalized GLP-1 programs with licensed clinicians and ongoing
              support for lasting results.
            </p>

            <div className="mt-8 rounded-[1.35rem] bg-[linear-gradient(160deg,rgb(255_255_255/0.95)_0%,rgb(252_228_220/0.55)_100%)] p-px shadow-[0_30px_80px_rgb(231_111_81/0.18)]">
              <div className="rounded-[1.3rem] bg-white/70 p-5 backdrop-blur-2xl sm:p-7">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {glp1Features.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-start gap-3 rounded-2xl bg-white/80 px-3.5 py-3.5 shadow-[0_1px_0_rgb(255_255_255/0.8)] ring-1 ring-[var(--service-accent)]/12 transition-colors hover:bg-white"
                    >
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,#fce4dc,#fff5f0)] text-[var(--service-accent)] shadow-[0_0_18px_rgb(231_111_81/0.15)] ring-1 ring-[var(--service-accent)]/15">
                        <feature.icon className="size-4" />
                      </span>
                      <p className="pt-1 text-[12px] font-semibold leading-snug text-[var(--ds-ink)] sm:text-[13px]">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>

                <Glp1LeadModal
                  trigger={
                    <Button className="group mt-6 h-auto w-full gap-2 rounded-full border-0 bg-[linear-gradient(135deg,#ee8a4f_0%,#e76f51_55%,#d97441_100%)] px-9 py-5 text-[15px] font-semibold text-white shadow-[0_14px_36px_rgb(231_111_81/0.4)] transition-[filter,transform,box-shadow] hover:brightness-105 hover:shadow-[0_18px_44px_rgb(231_111_81/0.5)] sm:w-auto">
                      Start Weight Loss Journey
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  }
                />

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--service-accent)]/15 pt-5 text-[12px] font-medium text-[var(--ds-ink-mid)]">
                  <span className="flex items-center gap-1.5">
                    <Scale className="size-3.5 text-[var(--service-accent)]" />
                    FDA-Approved Meds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Headphones className="size-3.5 text-[var(--service-accent)]" />
                    Dedicated Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared trust bar — in-flow on mobile to avoid overlap; overlaid on md+ */}
      <div className="relative z-30 px-4 pb-6 pt-2 md:pointer-events-none md:absolute md:inset-x-0 md:bottom-0 md:px-8 md:pb-7 md:pt-0">
        <div className="pointer-events-auto mx-auto max-w-6xl rounded-[1.35rem] bg-[linear-gradient(135deg,rgb(255_255_255/0.16)_0%,rgb(255_255_255/0.05)_100%)] p-px shadow-[0_24px_60px_rgb(0_0_0/0.35)]">
          <div className="grid grid-cols-2 gap-3 rounded-[1.3rem] bg-[rgb(12_22_18/0.92)] px-3 py-4 backdrop-blur-2xl sm:grid-cols-4 sm:gap-0 sm:px-2 sm:py-5 md:bg-[rgb(12_22_18/0.78)]">
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className={
                  index < trustItems.length - 1
                    ? "flex items-center gap-3 px-2 sm:justify-center sm:border-r sm:border-white/10 sm:px-4"
                    : "flex items-center gap-3 px-2 sm:justify-center sm:px-4"
                }
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] ring-1 ring-white/10 sm:size-11 ${item.iconClass}`}
                >
                  <item.icon
                    className={`size-5 ${"fill" in item && item.fill ? "fill-current" : ""}`}
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight text-white">
                    {"useStateCount" in item && item.useStateCount
                      ? `${stateCount}+ States`
                      : item.title}
                  </p>
                  <p className="text-[11px] text-white/60">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
