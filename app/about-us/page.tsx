import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Ban,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Lock,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Doctors } from "@/components/sections/doctors";
import { SITE } from "@/lib/site";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { aboutPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("about");

const pillars = [
  {
    icon: Stethoscope,
    title: "Legal Compliance",
    description:
      "Every evaluation is conducted by a licensed physician in accordance with applicable medical and telehealth regulations.",
  },
  {
    icon: Lock,
    title: "Secure Telemedicine",
    description:
      "Our platform uses HIPAA compliant, encrypted technology to protect your data at every stage.",
  },
  {
    icon: BadgeCheck,
    title: "Unbiased Medical Judgment",
    description:
      "Physicians make independent clinical decisions based solely on your medical history, qualifying conditions, and applicable law.",
  },
];

const team = [
  {
    name: "Gourav Sharma",
    role: "Founder",
    bio: "Gourav Sharma oversees platform strategy and operations, with a focus on scaling compliant digital healthcare services while maintaining regulatory integrity and a seamless patient experience.",
    image: "/images/gaurav.webp",
  },
  {
    name: "Prince Sharma",
    role: "Chief Marketing Officer (CMO)",
    bio: "Leads brand strategy, growth initiatives, and patient education with a focus on ethical, compliant healthcare marketing.",
    image: "/images/PRINCE.webp",
  },
];

const steps = [
  {
    title: "Connect",
    description:
      "Complete a short online intake form with basic personal and medical information.",
  },
  {
    title: "Book",
    description: "Schedule a convenient appointment with a licensed physician.",
  },
  {
    title: "Consult",
    description:
      "Attend a secure video consultation, typically 10 to 15 minutes.",
  },
  {
    title: "Receive",
    description:
      "If approved, get your medical marijuana recommendation or GLP-1 prescription digitally.",
  },
];

const credibility = [
  "State licensed doctors only",
  "HIPAA compliant technology",
  "State specific medical evaluations",
  "Transparent medical standards",
];

const pricingPoints = [
  "No hidden fees",
  "No product sales",
  "No commissions",
  "Clear pricing",
];

const principles = [
  {
    label: "Our Mission",
    text: "To simplify access to medical marijuana and GLP-1 weight loss care through a secure, affordable, patient focused telehealth experience, while upholding the highest standards of medical ethics, privacy, and legal compliance.",
  },
  {
    label: "Our Vision",
    text: "To become a trusted digital healthcare platform recognized for transparency, responsible evaluations, and a genuine commitment to patient well being.",
  },
  {
    label: "Our Core Values",
    text: "Patient trust and privacy first, medical integrity through independent physician judgment, compliance with applicable laws, and care that stays accessible, affordable, and patient focused.",
  },
];

const notExpect = [
  {
    title: "Direct Medical Treatment",
    description:
      "We don't provide treatment ourselves. Our platform offers independent physician evaluations and recommendations only.",
  },
  {
    title: "Guaranteed Approvals",
    description:
      "Recommendations and prescriptions are never guaranteed. Eligibility is determined solely by the evaluating physician.",
  },
  {
    title: "Product Sales or Distribution",
    description:
      "We don't sell, distribute, or supply cannabis or GLP-1 medications ourselves.",
  },
  {
    title: "Influenced Medical Decisions",
    description:
      "Physicians evaluate patients using their own professional judgment, not pricing or platform policy.",
  },
  {
    title: "Legal Advice",
    description:
      "We don't provide legal advice or interpretation of marijuana or healthcare law.",
  },
  {
    title: "Pharmacy or Dispensary Commissions",
    description:
      "We don't take commissions for cannabis dispensary referrals or medication choices. Any pharmacy we work with to fill and ship GLP-1 prescriptions is there only to fulfill your order, not to influence what's prescribed.",
  },
];

const trustSignals = [
  { icon: ShieldCheck, label: "HIPAA compliant" },
  { icon: Stethoscope, label: "Licensed physicians" },
  { icon: Lock, label: "Encrypted visits" },
];

export default function AboutPage() {
  const meta = PAGE_METADATA.about;

  return (
    <div className="flex flex-1 flex-col bg-[var(--ds-bg)]">
      <JsonLd
        data={aboutPageSchemas({
          title: meta.title,
          description: meta.description,
        })}
      />
      <SiteHeader />

      <main className="relative flex-1 overflow-hidden">
        {/* Atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_-10%,rgb(var(--ds-brand-rgb)/0.18),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_20%,rgb(231_111_81/0.1),transparent_50%),linear-gradient(180deg,#f3faf6_0%,#ffffff_28%,#f7f9f8_70%,#fffbf5_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-40 -left-32 size-[28rem] rounded-full bg-[var(--ds-brand)]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[32rem] -right-24 size-[24rem] rounded-full bg-[rgb(231_111_81/0.12)] blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 lg:pt-14 lg:pb-28">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--ds-ink-mid)]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--ds-brand)]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5 text-[var(--ds-ink-soft)]" />
              </li>
              <li>
                <span
                  className="font-medium text-[var(--ds-ink)]"
                  aria-current="page"
                >
                  About Us
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--ds-brand)] uppercase">
                About {SITE.name}
              </p>
              <h1 className="font-heading mt-4 text-[2.6rem] font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ds-ink)] sm:text-5xl lg:text-[3.35rem]">
                Online telehealth for{" "}
                <span className="relative inline-block text-[var(--ds-brand)]">
                  MMJ &amp; GLP-1
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15"
                  />
                </span>{" "}
                care
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
                PCH Doctors is a 100% online telehealth platform built to make
                medical marijuana consultations and GLP-1 weight loss care
                simple, affordable, and legally compliant. We connect qualifying
                patients with state licensed physicians through secure virtual
                consultations, so you can skip the confusion and delays that
                come with in-person visits.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
                We&apos;ve helped patients nationwide access medical marijuana
                recommendations and GLP-1 weight loss care efficiently and
                responsibly. Our platform is built to reduce access barriers,
                protect patient privacy, and make sure every evaluation meets
                the medical and legal requirements that apply to you.
              </p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {trustSignals.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-2 text-xs font-semibold text-[var(--ds-ink)] shadow-sm ring-1 ring-[var(--ds-border)] backdrop-blur"
                    >
                      <Icon
                        className="size-3.5 text-[var(--ds-brand)]"
                        aria-hidden
                      />
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-[var(--ds-brand)]/20 via-transparent to-[rgb(231_111_81/0.18)] blur-2xl"
              />
              <div
                aria-hidden
                className="absolute -top-3 -right-3 size-28 rounded-3xl bg-[var(--ds-brand)]/15 ring-1 ring-[var(--ds-brand)]/20"
              />
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 size-24 rounded-full bg-[rgb(231_111_81/0.2)]"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_32px_80px_rgb(21_76_53/0.28)] ring-1 ring-black/5">
                <Image
                  src="/secure-sections.webp"
                  alt="Doctor joining a secure telehealth consultation with a patient"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ds-brand-dark)]/70 via-[var(--ds-brand-dark)]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm font-medium text-white">
                    Secure visits with licensed physicians from home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why we exist */}
          <section className="mt-28" aria-labelledby="why-heading">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-[var(--ds-brand)] uppercase">
                  Purpose
                </p>
                <h2
                  id="why-heading"
                  className="font-heading mt-3 text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl"
                >
                  Why We{" "}
                  <span className="relative inline-block">
                    Exist
                    <span
                      aria-hidden
                      className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15"
                    />
                  </span>
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed text-neutral-600">
                <p>
                  Accessing medical marijuana or prescription weight loss care
                  shouldn&apos;t feel confusing, intimidating, or overpriced. Too
                  many patients run into complex regulations, long wait times,
                  and unreliable information. We exist to simplify that.
                </p>
                <p>
                  Our purpose is to give patients clear guidance, transparent
                  pricing, and legitimate medical evaluations, without
                  unnecessary friction. By pairing technology with
                  compassionate, patient centered care, we help you focus on
                  your health instead of paperwork.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="group relative overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-[0_18px_50px_rgb(21_76_53/0.08)] ring-1 ring-[var(--ds-border)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgb(21_76_53/0.14)]"
                  >
                    <div
                      aria-hidden
                      className="absolute -top-10 -right-10 size-32 rounded-full bg-[var(--ds-brand)]/5 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--ds-brand)] text-white shadow-md shadow-[rgb(var(--ds-brand-rgb)/0.35)]">
                          <Icon className="size-5" aria-hidden />
                        </span>
                        <span className="font-heading text-4xl font-medium text-[var(--ds-brand)]/15">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="font-heading mt-6 text-xl font-medium text-[var(--ds-ink)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        {pillar.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <Doctors />

        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
          {/* Leadership team */}
          <section aria-labelledby="team-heading">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--ds-brand)] uppercase">
                Leadership
              </p>
              <h2
                id="team-heading"
                className="font-heading mt-3 text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl"
              >
                Meet Our{" "}
                <span className="relative inline-block">
                  Team
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15"
                  />
                </span>
              </h2>
              <p className="mt-4 text-neutral-600">
                The people guiding platform strategy, growth, and a seamless
                patient experience.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_22px_60px_rgb(21_76_53/0.1)] ring-1 ring-[var(--ds-border)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgb(21_76_53/0.16)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(min-width: 640px) 40vw, 90vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ds-brand-dark)]/55 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xs font-semibold tracking-[0.18em] text-white/80 uppercase">
                        {member.role}
                      </p>
                      <h3 className="font-heading mt-1 text-lg font-medium text-white">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-7 sm:p-8">
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {member.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="mt-28" aria-labelledby="how-heading">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="how-heading"
                className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl"
              >
                How Our Platform{" "}
                <span className="relative inline-block">
                  Works
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15"
                  />
                </span>
              </h2>
              <p className="mt-4 text-neutral-600">
                Our platform is secure and HIPAA compliant, with a process built
                to be simple and patient friendly.
              </p>
            </div>

            <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div
                aria-hidden
                className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--ds-brand)]/25 to-transparent lg:block"
              />
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-[1.75rem] bg-white p-7 shadow-[0_16px_40px_rgb(21_76_53/0.07)] ring-1 ring-[var(--ds-border)]"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-[var(--ds-brand)] font-heading text-lg font-medium text-white shadow-md shadow-[rgb(var(--ds-brand-rgb)/0.3)]">
                    {index + 1}
                  </span>
                  <h3 className="font-heading mt-5 text-xl font-medium text-[var(--ds-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-neutral-600">
              All evaluations are handled by state licensed physicians who
              operate independently. We don&apos;t promise approvals, and no
              medical decision is influenced by pricing, timelines, or platform
              policies.
            </p>
          </section>

          {/* Credibility + Pricing */}
          <section className="mt-28 grid gap-5 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[1.75rem] bg-white p-8 shadow-[0_22px_60px_rgb(21_76_53/0.1)] ring-1 ring-[var(--ds-border)] sm:p-10">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 size-48 rounded-full bg-[var(--ds-brand)]/8"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--ds-brand)]/10 px-3 py-1 text-xs font-semibold text-[var(--ds-brand)]">
                  <ShieldCheck className="size-3.5" aria-hidden />
                  Integrity first
                </span>
                <h2 className="font-heading mt-4 text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
                  Medical Credibility and Compliance
                </h2>
                <p className="mt-4 text-neutral-600">
                  Medical integrity is at the core of everything we do.
                </p>
                <ul className="mt-7 space-y-3.5">
                  {credibility.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[var(--ds-ink)]"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--ds-brand)]/10">
                        <CheckCircle2
                          className="size-3.5 text-[var(--ds-brand)]"
                          aria-hidden
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-sm leading-relaxed text-neutral-600">
                  Our platform guides you through each step of the evaluation
                  with clarity, but the medical decision always stays with the
                  evaluating physician. Approvals are never guaranteed, and
                  they&apos;re based on your individual history and qualifying
                  conditions, not automation or shortcuts.
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.75rem] bg-[var(--ds-brand-dark)] p-8 text-white shadow-[0_22px_60px_rgb(21_76_53/0.28)] sm:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(47_138_98/0.45),transparent_55%)]"
              />
              <div
                aria-hidden
                className="absolute -bottom-20 -left-10 size-56 rounded-full bg-[rgb(244_162_97/0.18)] blur-2xl"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/15">
                  <CreditCard className="size-3.5" aria-hidden />
                  Clear costs
                </span>
                <h2 className="font-heading mt-4 text-3xl font-medium tracking-normal sm:text-4xl">
                  Transparent Pricing
                </h2>
                <p className="mt-4 text-white/75">
                  We believe patients deserve clear, honest pricing with no
                  surprises. All costs are communicated upfront and limited to
                  your medical evaluation.
                </p>
                <ul className="mt-7 space-y-3.5">
                  {pricingPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <CheckCircle2
                          className="size-3.5 text-[var(--ds-warning)]"
                          aria-hidden
                        />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-sm leading-relaxed text-white/70">
                  You pay only for your evaluation. Any required state
                  registration fees for your MMJ card are paid directly to the
                  state, not through our platform.
                </p>
              </div>
            </article>
          </section>

          {/* Guiding principles */}
          <section className="mt-28" aria-labelledby="principles-heading">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="principles-heading"
                className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl"
              >
                Our Guiding{" "}
                <span className="relative inline-block">
                  Principles
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15"
                  />
                </span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map((item, index) => (
                <article
                  key={item.label}
                  className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-white to-[var(--ds-brand-xlight)] p-8 shadow-[0_16px_40px_rgb(21_76_53/0.07)] ring-1 ring-[var(--ds-border)]"
                >
                  <span className="font-heading text-5xl font-medium text-[var(--ds-brand)]/10">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-[var(--ds-brand)] uppercase">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* What not to expect */}
          <section className="mt-28" aria-labelledby="not-expect-heading">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="not-expect-heading"
                className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl"
              >
                What Not to{" "}
                <span className="relative inline-block">
                  Expect
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15"
                  />
                </span>
              </h2>
              <p className="mt-4 text-neutral-600">
                We believe transparency builds trust. Here&apos;s what falls
                outside what we do:
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {notExpect.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] bg-white/90 p-6 shadow-[0_12px_32px_rgb(21_76_53/0.06)] ring-1 ring-[var(--ds-border)]"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-[var(--ds-brand)]/10 text-[var(--ds-brand)]">
                    <Ban className="size-4" aria-hidden />
                  </span>
                  <h3 className="font-heading mt-4 text-xl font-medium text-[var(--ds-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative mt-28 overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0">
              <Image
                src="/glp-1-hero-section.webp"
                alt="Doctor in telehealth consultation for online medical marijuana and GLP-1 weight loss care"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[var(--ds-brand-dark)]/90" />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(47_138_98/0.35),transparent_50%)]"
              />
            </div>
            <div className="relative flex flex-col gap-8 px-8 py-16 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:py-20">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-medium tracking-normal sm:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mt-4 text-white/75">
                  Contact our team or begin a consultation for the service that
                  fits your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--ds-ink)] transition-colors hover:bg-white/90"
                >
                  Contact us
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
