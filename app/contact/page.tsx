import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/lib/site";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { contactPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("contact");

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;

const contactChannels = [
  {
    label: "Email",
    value: SITE.email,
    detail: "We typically respond within one business day.",
    href: `mailto:${SITE.email}`,
    icon: Mail,
    cta: "Send an email",
  },
  {
    label: "Phone",
    value: SITE.phoneDisplay,
    detail: "Speak with our care coordination team.",
    href: "tel:+14244241618",
    icon: Phone,
    cta: "Call now",
  },
  {
    label: "Visit",
    value: SITE.address,
    detail: "Wilmington, California · United States",
    href: mapsUrl,
    icon: MapPin,
    cta: "Open in Maps",
    external: true,
  },
] as const;

export default function ContactPage() {
  const meta = PAGE_METADATA.contact;

  return (
    <div className="flex flex-1 flex-col bg-[var(--ds-bg)]">
      <JsonLd
        data={contactPageSchemas({
          title: meta.title,
          description: meta.description,
        })}
      />
      <SiteHeader />

      <main className="relative flex-1 overflow-hidden">
        {/* Atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgb(var(--ds-brand-rgb)/0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgb(244_162_97/0.14),transparent_50%),linear-gradient(180deg,#f7f9f8_0%,#ffffff_45%,#fffbf5_100%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
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
                  Contact
                </span>
              </li>
            </ol>
          </nav>

          {/* Hero composition */}
          <section className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--ds-brand)] uppercase">
                PCH Doctors
              </p>
              <h1 className="font-heading mt-4 max-w-xl text-5xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
                Let&rsquo;s talk about{" "}
                <span className="text-[var(--ds-brand)]">your care</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--ds-ink-mid)] sm:text-lg">
                Reach our team for questions about medical marijuana
                certifications, GLP-1 weight management, or your upcoming
                telehealth visit.
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-[1.75rem] bg-[var(--ds-brand-dark)] px-7 py-8 text-white shadow-[0_24px_60px_rgb(21_76_53/0.28)]">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[var(--ds-warning)]/25 blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 left-8 size-36 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/85 ring-1 ring-white/15">
                  <ShieldCheck className="size-3.5 text-[var(--ds-warning)]" aria-hidden />
                  HIPAA-conscious support
                </span>
                <p className="font-heading mt-5 text-2xl font-medium leading-snug">
                  Secure telehealth. Real clinicians. Clear answers.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li className="flex items-center gap-2.5">
                    <Clock3 className="size-4 shrink-0 text-[var(--ds-warning)]" aria-hidden />
                    Mon–Fri support during business hours
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="size-4 shrink-0 text-[var(--ds-warning)]" aria-hidden />
                    Email replies within one business day
                  </li>
                </ul>
              </div>
            </aside>
          </section>

          {/* Contact channels */}
          <section className="mt-16" aria-labelledby="contact-channels-heading">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2
                  id="contact-channels-heading"
                  className="font-heading text-2xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-3xl"
                >
                  Contact details
                </h2>
                <p className="mt-2 text-sm text-[var(--ds-ink-mid)]">
                  Choose the channel that works best for you.
                </p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {contactChannels.map((channel, index) => {
                const Icon = channel.icon;
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-[var(--ds-brand)]/10 text-[var(--ds-brand)] transition-colors group-hover:bg-[var(--ds-brand)] group-hover:text-white">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <ArrowUpRight
                        className="size-5 text-[var(--ds-ink-soft)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--ds-brand)]"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-[var(--ds-ink-soft)] uppercase">
                      {String(index + 1).padStart(2, "0")} · {channel.label}
                    </p>
                    <p className="font-heading mt-3 text-xl font-medium leading-snug text-[var(--ds-ink)] sm:text-2xl">
                      {channel.value}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--ds-ink-mid)]">
                      {channel.detail}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ds-brand)]">
                      {channel.cta}
                      <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </>
                );

                const className =
                  "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white/80 p-7 shadow-[0_10px_40px_rgb(26_26_26/0.05)] ring-1 ring-[var(--ds-border)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgb(26_26_26/0.1)] hover:ring-[var(--ds-brand)]/25";

                if ("external" in channel && channel.external) {
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <a key={channel.label} href={channel.href} className={className}>
                    {content}
                  </a>
                );
              })}
            </div>
          </section>

          {/* Location band + service shortcuts */}
          <section className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[var(--ds-brand-xlight)] p-8 ring-1 ring-[var(--ds-brand)]/10 sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 top-0 size-56 rounded-full bg-[var(--ds-brand)]/10 blur-3xl"
              />
              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--ds-brand)] uppercase">
                  Clinic address
                </p>
                <h2 className="font-heading mt-3 text-3xl font-medium tracking-normal text-[var(--ds-ink)]">
                  Wilmington, California
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--ds-ink-mid)]">
                  {SITE.address}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--ds-brand)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ds-brand-dark)]"
                >
                  <MapPin className="size-4" aria-hidden />
                  Get directions
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[1.75rem] bg-white p-8 shadow-sm ring-1 ring-[var(--ds-border)] sm:p-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[var(--ds-ink-soft)] uppercase">
                  Looking for care?
                </p>
                <h2 className="font-heading mt-3 text-2xl font-medium text-[var(--ds-ink)]">
                  Explore our services
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ds-ink-mid)]">
                  Start with the program that fits your goals.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <Link
                  href="/services/medical-marijuana-consultation"
                  className="group flex items-center justify-between gap-3 rounded-2xl bg-[#f3fbf6] px-4 py-4 transition-colors hover:bg-[#e8f5ee]"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-[var(--ds-ink)]">
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#0e8140]/12 text-[#0e8140]">
                      <Leaf className="size-4" aria-hidden />
                    </span>
                    Medical Marijuana Certifications
                  </span>
                  <ChevronRight className="size-4 text-[var(--ds-ink-soft)] transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
                <Link
                  href="/services/glp-1-medications"
                  className="group flex items-center justify-between gap-3 rounded-2xl bg-[#fffbf5] px-4 py-4 transition-colors hover:bg-[#fce4dc]"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-[var(--ds-ink)]">
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#e76f51]/15 text-[#e76f51]">
                      <Scale className="size-4" aria-hidden />
                    </span>
                    GLP-1 Weight Loss
                  </span>
                  <ChevronRight className="size-4 text-[var(--ds-ink-soft)] transition-transform group-hover:translate-x-0.5" aria-hidden />
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
