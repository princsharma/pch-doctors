import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronRight,
  HeartPulse,
  Leaf,
  Lock,
  Scale,
  ShieldCheck,
  Video,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { aboutPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("about");

const values = [
  {
    icon: ShieldCheck,
    title: "Clinical integrity",
    description:
      "Licensed physicians evaluate every case. Recommendations and prescriptions are issued only when clinically appropriate.",
  },
  {
    icon: Lock,
    title: "Privacy first",
    description:
      "HIPAA-conscious telehealth with encrypted visits and careful handling of your personal health information.",
  },
  {
    icon: Video,
    title: "Care from home",
    description:
      "Secure online consultations designed to be clear, efficient, and accessible wherever you are.",
  },
  {
    icon: HeartPulse,
    title: "Patient-centered",
    description:
      "We focus on practical outcomes — same-day MMJ pathways and guided GLP-1 programs with ongoing support.",
  },
];

const doctors = [
  {
    name: "Johnathan C. Miller, MD",
    role: "Medical Director",
    focus: "Metabolic health & lifestyle medicine",
    image: "/images/johnathan-miller.webp",
  },
  {
    name: "Vanessa Niles, MD",
    role: "Lead Physician",
    focus: "Cannabis therapeutics & evaluations",
    image: "/images/vanessa-niles.webp",
  },
  {
    name: "Benjamin H. Krasne, MD",
    role: "Board-Certified Specialist",
    focus: "Weight management & GLP-1 care",
    image: "/images/benjamin-krasne.webp",
  },
  {
    name: "Cheryl-Lynn M. Bugailiskis, MD",
    role: "Senior Consultant",
    focus: "Holistic wellness programs",
    image: "/images/cheryl-bugailiskis.webp",
  },
];

const trustGallery = [
  {
    src: "/hero-section.webp",
    alt: "Licensed physician consulting with a patient during an online medical evaluation",
    caption: "Clinician-led evaluations",
  },
  {
    src: "/secure-sections.webp",
    alt: "Secure telehealth consultation on a smartphone with a licensed clinician",
    caption: "Private telehealth visits",
  },
  {
    src: "/glp-1-hero-section.webp",
    alt: "Patient receiving clinician-guided GLP-1 weight management care at home",
    caption: "Care that fits your life",
  },
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(var(--ds-brand-rgb)/0.14),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgb(231_111_81/0.1),transparent_45%),linear-gradient(180deg,#f3faf6_0%,#ffffff_40%,#fffbf5_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
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
                <span className="font-medium text-[var(--ds-ink)]" aria-current="page">
                  About
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero with image composition */}
          <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--ds-brand)] uppercase">
                About {SITE.name}
              </p>
              <h1 className="font-heading mt-4 text-5xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-6xl lg:text-[4.2rem] lg:leading-[1.05]">
                Modern telehealth with{" "}
                <span className="text-[var(--ds-brand)]">clinical trust</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ds-ink-mid)] sm:text-lg">
                PCH Doctors connects patients with state-licensed clinicians for
                medical marijuana certifications and clinician-guided GLP-1
                weight management — entirely online, with privacy and clarity at
                the center.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-[var(--ds-ink)] shadow-sm ring-1 ring-[var(--ds-border)]">
                  <ShieldCheck className="size-3.5 text-[var(--ds-brand)]" aria-hidden />
                  HIPAA-conscious
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-[var(--ds-ink)] shadow-sm ring-1 ring-[var(--ds-border)]">
                  <BadgeCheck className="size-3.5 text-[var(--ds-brand)]" aria-hidden />
                  Licensed clinicians
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgb(21_76_53/0.22)] ring-1 ring-black/5">
                <Image
                  src="/secure-sections.webp"
                  alt="Doctor joining a secure telehealth consultation with a patient"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ds-brand-dark)]/55 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
                  Secure visits with licensed physicians — from home.
                </p>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden w-[46%] overflow-hidden rounded-[1.25rem] shadow-xl ring-4 ring-white sm:block lg:-left-8">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/hero-section.webp"
                    alt="Physician consulting with a patient during an online medical marijuana evaluation"
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
              </div>

              <div className="absolute -right-2 top-8 hidden w-[38%] overflow-hidden rounded-[1.25rem] shadow-xl ring-4 ring-white sm:block lg:-right-4">
                <div className="relative aspect-square">
                  <Image
                    src="/glp-1-hero-section.webp"
                    alt="Patient managing clinician-guided GLP-1 care at home"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Trust image gallery */}
          <section className="mt-24" aria-labelledby="care-in-action-heading">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="care-in-action-heading"
                  className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]"
                >
                  Care in action
                </h2>
                <p className="mt-2 max-w-xl text-base text-[var(--ds-ink-mid)]">
                  Real telehealth moments that reflect how patients connect with
                  PCH Doctors every day.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {trustGallery.map((item, index) => (
                <figure
                  key={item.src}
                  className={`group relative overflow-hidden rounded-[1.5rem] shadow-md ring-1 ring-black/5 ${
                    index === 1 ? "md:translate-y-4" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                      {item.caption}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>

          {/* Story + photo */}
          <section className="mt-24 grid items-center gap-8 lg:grid-cols-2">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_rgb(26_26_26/0.1)] ring-1 ring-black/5 lg:order-1">
              <Image
                src="/hero-section.webp"
                alt="Licensed clinician providing thoughtful medical guidance during a telehealth visit"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>

            <div className="order-1 rounded-[1.75rem] bg-white/90 p-8 shadow-[0_12px_40px_rgb(26_26_26/0.05)] ring-1 ring-[var(--ds-border)] backdrop-blur-sm sm:p-10 lg:order-2">
              <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]">
                Who we are
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--ds-ink-mid)]">
                <p>
                  We built PCH Doctors for patients who want high-standard
                  medical care without the friction of traditional clinic
                  visits. Through a secure telehealth platform, you can meet
                  licensed physicians, complete evaluations, and move forward
                  with confidence.
                </p>
                <p>
                  Whether you need a medical marijuana recommendation or a
                  guided GLP-1 weight loss program, our clinicians review your
                  history, discuss your goals, and determine the right next
                  step based on clinical judgment — never one-size-fits-all
                  shortcuts.
                </p>
              </div>

              <aside className="mt-8 rounded-2xl bg-[var(--ds-brand-dark)] p-5 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
                  Based in
                </p>
                <p className="font-heading mt-2 text-2xl font-medium">
                  {SITE.addressShort}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Serving patients nationwide through secure online care.
                </p>
              </aside>
            </div>
          </section>

          {/* Values */}
          <section className="mt-24" aria-labelledby="values-heading">
            <div className="max-w-2xl">
              <h2
                id="values-heading"
                className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]"
              >
                What guides our care
              </h2>
              <p className="mt-3 text-base text-[var(--ds-ink-mid)]">
                A simple standard: clinically sound, private, and easy to
                access.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-[var(--ds-border)] transition-shadow hover:shadow-[0_16px_40px_rgb(26_26_26/0.07)]"
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-[var(--ds-brand)]/10 text-[var(--ds-brand)]">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="font-heading mt-5 text-xl font-medium text-[var(--ds-ink)]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ds-ink-mid)]">
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Dual services with images */}
          <section className="mt-24" aria-labelledby="services-heading">
            <h2
              id="services-heading"
              className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]"
            >
              Two services. One trusted platform.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--ds-ink-mid)]">
              Explore clinician-led pathways for medical marijuana
              certifications and GLP-1 weight management.
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Link
                href="/services/medical-marijuana-consultation"
                data-service="mmj"
                className="group relative min-h-[22rem] overflow-hidden rounded-[1.75rem] shadow-lg"
              >
                <Image
                  src="/hero-section.webp"
                  alt="Medical marijuana telehealth consultation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a6332]/95 via-[#0a6332]/55 to-[#0a6332]/15" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <Leaf className="size-8 text-[#f59e0b]" aria-hidden />
                  <h3 className="font-heading mt-4 text-2xl font-medium">
                    Medical Marijuana Certifications
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Same-day recommendations from state-licensed physicians —
                    secure, digital, and designed for clarity.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f59e0b]">
                    Explore MMJ care
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>

              <Link
                href="/services/glp-1-medications"
                data-service="glp1"
                className="group relative min-h-[22rem] overflow-hidden rounded-[1.75rem] shadow-lg"
              >
                <Image
                  src="/glp-1-hero-section.webp"
                  alt="GLP-1 weight management care at home"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/95 via-[#24553f]/55 to-[#e76f51]/20" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <Scale className="size-8 text-[#e76f51]" aria-hidden />
                  <h3 className="font-heading mt-4 text-2xl font-medium">
                    GLP-1 Weight Management
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    Personalized online evaluations and clinician guidance for
                    medications like Wegovy, Ozempic, or Mounjaro when
                    appropriate.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#e76f51]">
                    Explore weight loss care
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </div>
          </section>

          {/* Doctors */}
          <section className="mt-24" aria-labelledby="doctors-heading">
            <div className="mb-8 max-w-xl">
              <h2
                id="doctors-heading"
                className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)]"
              >
                Our clinicians
              </h2>
              <p className="mt-3 text-base text-[var(--ds-ink-mid)]">
                A team of licensed professionals dedicated to thoughtful,
                evidence-based care.
              </p>
            </div>

            <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative hidden min-h-0 overflow-hidden rounded-[1.5rem] shadow-lg ring-1 ring-black/5 lg:block">
                <Image
                  src="/secure-sections.webp"
                  alt="Clinician ready for a secure video consultation"
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {doctors.map((doctor) => (
                  <article
                    key={doctor.name}
                    className="flex gap-4 rounded-[1.5rem] bg-white/90 p-6 shadow-sm ring-1 ring-[var(--ds-border)]"
                  >
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-[var(--ds-brand)]/10 ring-2 ring-white shadow-sm">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                        sizes="56px"
                      />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-medium text-[var(--ds-ink)]">
                        {doctor.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold tracking-wide text-[var(--ds-brand)] uppercase">
                        {doctor.role}
                      </p>
                      <p className="mt-2 text-sm text-[var(--ds-ink-mid)]">
                        {doctor.focus}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA with background image */}
          <section className="relative mt-24 overflow-hidden rounded-[1.75rem]">
            <div className="absolute inset-0">
              <Image
                src="/glp-1-hero-section.webp"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                aria-hidden
              />
              <div className="absolute inset-0 bg-[var(--ds-brand-dark)]/88" />
            </div>
            <div className="relative flex flex-col gap-8 px-8 py-14 text-white sm:px-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-heading text-3xl font-medium tracking-normal">
                  Ready to get started?
                </h2>
                <p className="mt-3 text-base text-white/75">
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
