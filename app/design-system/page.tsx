import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Scale, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Design System | PCH Doctors",
  description:
    "Unified MMJ + GLP-1 design tokens and coexistence patterns for PCH Doctors.",
  robots: {
    index: false,
    follow: false,
  },
};

const sharedSwatches = [
  { name: "Brand (bridge)", varName: "--ds-brand", value: "#1f6b4a" },
  { name: "Brand mid", varName: "--ds-brand-mid", value: "#2f8a62" },
  { name: "Brand dark", varName: "--ds-brand-dark", value: "#154c35" },
  { name: "Ink", varName: "--ds-ink", value: "#1a1a1a" },
  { name: "Ink mid", varName: "--ds-ink-mid", value: "#5c6b73" },
  { name: "Ink soft", varName: "--ds-ink-soft", value: "#8a9a9e" },
  { name: "BG subtle", varName: "--ds-bg-subtle", value: "#f7f9f8" },
  { name: "Border", varName: "--ds-border", value: "#e5e8e6" },
  { name: "Success", varName: "--ds-success", value: "#2f9e6b" },
  { name: "Warning", varName: "--ds-warning", value: "#f4a261" },
  { name: "Error", varName: "--ds-error", value: "#d62828" },
  { name: "Info", varName: "--ds-info", value: "#2a6f97" },
];

const mmjSwatches = [
  { name: "MMJ brand", value: "#0e8140" },
  { name: "MMJ mid", value: "#3fa066" },
  { name: "MMJ dark", value: "#0a6332" },
  { name: "MMJ light", value: "#e8f5ee" },
  { name: "Amber accent", value: "#f59e0b" },
  { name: "Amber soft", value: "#fff8e6" },
];

const glp1Swatches = [
  { name: "GLP brand", value: "#347e5d" },
  { name: "GLP light", value: "#74c69d" },
  { name: "GLP dark", value: "#1b4332" },
  { name: "GLP soft", value: "#d8f3dc" },
  { name: "Coral accent", value: "#e76f51" },
  { name: "Coral soft", value: "#fce4dc" },
];

function Swatch({
  name,
  value,
  style,
}: {
  name: string;
  value: string;
  style?: CSSProperties;
}) {
  return (
    <div className="min-w-0">
      <div
        className="ds-swatch"
        style={{ background: value, ...style }}
        aria-hidden
      />
      <p className="mt-2 text-xs font-semibold text-[var(--ds-ink)]">{name}</p>
      <p className="font-mono text-[11px] text-[var(--ds-ink-soft)]">{value}</p>
    </div>
  );
}

function ServicePanel({
  service,
  badge,
  title,
  description,
  points,
}: {
  service: "mmj" | "glp1";
  badge: string;
  title: string;
  description: string;
  points: string[];
}) {
  const Icon = service === "mmj" ? Leaf : Scale;

  return (
    <section
      data-service={service}
      className="ds-section flex flex-col rounded-[1.75rem] p-7 sm:p-9"
    >
      <span className="ds-badge w-fit">
        <Icon className="size-3.5" aria-hidden />
        {badge}
      </span>

      <h2 className="font-heading mt-5 text-3xl font-medium tracking-normal text-[var(--ds-ink)]">
        {title}
      </h2>
      <p className="ds-text-muted mt-3 text-sm leading-relaxed sm:text-base">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-[var(--ds-ink)]">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0"
              style={{ color: "var(--service-brand)" }}
              aria-hidden
            />
            {point}
          </li>
        ))}
      </ul>

      <div className="ds-card mt-8 p-5">
        <p className="text-xs font-semibold tracking-wide text-[var(--service-brand-dark)] uppercase">
          Sample card
        </p>
        <p className="ds-text-muted mt-2 text-sm">
          Cards stay white. Borders, badges, and CTAs pick up the active service
          theme.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="ds-badge">Primary badge</span>
          <span className="ds-badge ds-badge-accent">Accent badge</span>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="ds-alert ds-alert-success">Success: evaluation confirmed.</div>
        <div className="ds-alert ds-alert-info">Info: bring your medication list.</div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="ds-btn-primary">
          Primary CTA
          <ArrowRight className="size-4" aria-hidden />
        </Link>
        <Link href="/" className="ds-btn-accent">
          Accent CTA
        </Link>
        <Link href="/" className="ds-btn-outline">
          Outline
        </Link>
      </div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="flex flex-1 flex-col bg-[var(--ds-bg)] text-[var(--ds-ink)]">
      <SiteHeader />

      <main className="flex-1">
        {/* Bridge chrome intro */}
        <section className="ds-section-bridge border-b border-[var(--ds-border)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <p className="ds-badge w-fit bg-[var(--ds-brand-light)] text-[var(--ds-brand-dark)]">
              Design system
            </p>
            <h1 className="font-heading mt-5 max-w-3xl text-4xl font-medium tracking-normal sm:text-5xl">
              One healthcare brand.{" "}
              <span className="text-[var(--ds-brand)]">Two clear service identities.</span>
            </h1>
            <p className="ds-text-muted mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              Shared neutrals and bridge green keep PCH Doctors cohesive. Scoped
              MMJ and GLP-1 themes make each service instantly recognizable
              without feeling like two different websites.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="ds-card p-5">
                <p className="text-sm font-semibold">Shared</p>
                <p className="ds-text-muted mt-2 text-sm">
                  Ink, surfaces, borders, success/warning/error/info, focus rings,
                  site chrome.
                </p>
              </div>
              <div className="ds-card p-5" data-service="mmj">
                <p className="text-sm font-semibold text-[var(--service-brand-dark)]">
                  MMJ
                </p>
                <p className="ds-text-muted mt-2 text-sm">
                  Deep forest greens + amber accents for wellness and medical
                  cannabis trust.
                </p>
              </div>
              <div className="ds-card p-5" data-service="glp1">
                <p className="text-sm font-semibold text-[var(--service-brand-dark)]">
                  GLP-1
                </p>
                <p className="ds-text-muted mt-2 text-sm">
                  Sage greens + coral/warm accents for transformation and energy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coexistence split */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-heading text-3xl font-medium tracking-normal">
              Coexistence sample
            </h2>
            <p className="ds-text-muted mt-3 text-sm sm:text-base">
              Wrap a page or section with{" "}
              <code className="rounded bg-[var(--ds-bg-subtle)] px-1.5 py-0.5 text-xs">
                data-service=&quot;mmj&quot;
              </code>{" "}
              or{" "}
              <code className="rounded bg-[var(--ds-bg-subtle)] px-1.5 py-0.5 text-xs">
                data-service=&quot;glp1&quot;
              </code>{" "}
              to activate service tokens. Header/footer stay on shared bridge
              brand.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <ServicePanel
              service="mmj"
              badge="Medical Marijuana"
              title="Medical Marijuana Certs"
              description="Same-day recommendations from state-licensed physicians. Calm, natural greens with amber CTAs signal wellness and trust."
              points={[
                "Use deep green for headers and primary actions",
                "Use amber for secondary CTAs and highlight badges",
                "Soft mint bands for MMJ section backgrounds",
              ]}
            />
            <ServicePanel
              service="glp1"
              badge="Weight Management"
              title="GLP-1 Weight Loss Program"
              description="Clinician-guided GLP-1 care. Sage greens with coral accents feel optimistic and energetic without breaking the brand."
              points={[
                "Use sage green for structure and primary CTAs",
                "Use coral for accent CTAs, badges, and hover energy",
                "Warm soft canvas for GLP-1 marketing sections",
              ]}
            />
          </div>
        </section>

        {/* Token legend */}
        <section className="border-t border-[var(--ds-border)] bg-[var(--ds-bg-subtle)]">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
            <h2 className="font-heading text-3xl font-medium tracking-normal">
              Token legend
            </h2>
            <p className="ds-text-muted mt-3 max-w-2xl text-sm sm:text-base">
              When to use what: shared tokens for global UI; service tokens only
              inside a service scope.
            </p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold tracking-wide text-[var(--ds-brand-dark)] uppercase">
                Shared (whole website)
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {sharedSwatches.map((swatch) => (
                  <Swatch
                    key={swatch.name}
                    name={swatch.name}
                    value={swatch.value}
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div data-service="mmj">
                <h3 className="text-sm font-semibold tracking-wide text-[var(--service-brand-dark)] uppercase">
                  MMJ primary
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {mmjSwatches.map((swatch) => (
                    <Swatch
                      key={swatch.name}
                      name={swatch.name}
                      value={swatch.value}
                    />
                  ))}
                </div>
                <div
                  className="ds-swatch mt-4"
                  style={{ background: "var(--service-cta)" }}
                  aria-hidden
                />
                <p className="mt-2 text-xs font-semibold">MMJ CTA gradient</p>
              </div>

              <div data-service="glp1">
                <h3 className="text-sm font-semibold tracking-wide text-[var(--service-brand-dark)] uppercase">
                  GLP-1 primary
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {glp1Swatches.map((swatch) => (
                    <Swatch
                      key={swatch.name}
                      name={swatch.name}
                      value={swatch.value}
                    />
                  ))}
                </div>
                <div
                  className="ds-swatch mt-4"
                  style={{ background: "var(--service-cta)" }}
                  aria-hidden
                />
                <p className="mt-2 text-xs font-semibold">GLP-1 CTA gradient</p>
                <div
                  className="ds-swatch mt-3"
                  style={{ background: "var(--service-cta-hover)" }}
                  aria-hidden
                />
                <p className="mt-2 text-xs font-semibold">GLP-1 CTA hover</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage rules */}
        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <h2 className="font-heading text-3xl font-medium tracking-normal">
            How to use
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="ds-card p-6">
              <h3 className="font-semibold">Site chrome</h3>
              <p className="ds-text-muted mt-2 text-sm leading-relaxed">
                Header, footer, legal, and sitemap use shared bridge tokens
                (<code className="mx-1 text-xs">--ds-brand*</code>, ink, and
                borders. Do not paint chrome amber or coral.
              </p>
            </article>
            <article className="ds-card p-6">
              <h3 className="font-semibold">Service content</h3>
              <p className="ds-text-muted mt-2 text-sm leading-relaxed">
                Heroes, pricing, medication grids, and service CTAs live inside
                <code className="mx-1 text-xs">data-service</code> scopes so
                greens and accents swap automatically.
              </p>
            </article>
            <article className="ds-card p-6">
              <h3 className="font-semibold">MMJ CTAs</h3>
              <p className="ds-text-muted mt-2 text-sm leading-relaxed">
                Primary = deep green gradient. Secondary/highlight = amber
                <code className="mx-1 text-xs">.ds-btn-accent</code>. Soft mint
                for section bands.
              </p>
            </article>
            <article className="ds-card p-6">
              <h3 className="font-semibold">GLP-1 CTAs</h3>
              <p className="ds-text-muted mt-2 text-sm leading-relaxed">
                Primary = sage CTA gradient. Accent/hover energy = coral family.
                Warm soft canvas for marketing sections only.
              </p>
            </article>
            <article className="ds-card p-6">
              <h3 className="font-semibold">Alerts & status</h3>
              <p className="ds-text-muted mt-2 text-sm leading-relaxed">
                Success, warning, error, and info are shared everywhere so forms
                and system messages stay consistent across both services.
              </p>
            </article>
            <article className="ds-card p-6">
              <h3 className="font-semibold">Accessibility</h3>
              <p className="ds-text-muted mt-2 text-sm leading-relaxed">
                Prefer ink on white, white on brand-dark, and amber/coral text
                only on soft tinted grounds. Focus rings use the active service
                brand.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <div className="ds-alert ds-alert-success w-full sm:w-auto">
              Success alert (shared)
            </div>
            <div className="ds-alert ds-alert-warning w-full sm:w-auto">
              Warning alert (shared)
            </div>
            <div className="ds-alert ds-alert-error w-full sm:w-auto">
              Error alert (shared)
            </div>
            <div className="ds-alert ds-alert-info w-full sm:w-auto">
              Info alert (shared)
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
