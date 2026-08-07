import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { LEGAL_PAGES } from "@/lib/legal-pages";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { sitemapPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("sitemap");

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Process", href: "/#process" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Pricing", href: "/#pricing" },
];

const serviceLinks = [
  {
    label: "Medical Marijuana Evaluation",
    href: "/services/medical-marijuana-consultation",
  },
  {
    label: "GLP-1 Medications",
    href: "/services/glp-1-medications",
  },
];

function SitemapGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section>
      <h2 className="font-heading text-xs font-semibold tracking-[0.18em] text-[var(--ds-brand)] uppercase">
        {title}
      </h2>
      <ul className="mt-4 divide-y divide-[var(--ds-brand)]/10 rounded-2xl bg-[var(--ds-bg-subtle)] ring-1 ring-[var(--ds-brand)]/10">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="flex items-center justify-between gap-3 px-5 py-3.5 text-sm text-[var(--ds-ink)] transition-colors hover:bg-white/70 hover:text-[var(--ds-brand)]"
            >
              <span>{link.label}</span>
              <ChevronRight className="size-4 shrink-0 text-[var(--ds-brand)]/50" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function SitemapPage() {
  const legalLinks = LEGAL_PAGES.map((page) => ({
    label: page.title,
    href: `/${page.slug}`,
  }));

  const meta = PAGE_METADATA.sitemap;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={sitemapPageSchemas({
          title: meta.title,
          description: meta.description,
        })}
      />
      <SiteHeader />
      <main className="relative flex-1">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--ds-brand)]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-[var(--ds-warning)]/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-6 py-16 lg:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ds-brand)] transition-colors hover:text-[var(--ds-brand-dark)]"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>

            <h1 className="font-heading mt-6 text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
              Sitemap
            </h1>
            <p className="mt-3 text-neutral-600">
              A quick index of the main pages on PCH Doctors.
            </p>

            <div className="mt-12 space-y-10">
              <SitemapGroup title="Site" links={siteLinks} />
              <SitemapGroup title="Services" links={serviceLinks} />
              <SitemapGroup title="Legal, Compliance & Editorial" links={legalLinks} />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
