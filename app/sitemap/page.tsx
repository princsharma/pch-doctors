import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LEGAL_PAGES } from "@/lib/legal-pages";

export const metadata: Metadata = {
  title: "Sitemap - PCH Doctors",
  description:
    "Browse all main pages on PCH Doctors, including services and legal policies.",
};

const siteLinks = [
  { label: "Home", href: "/" },
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
      <h2 className="font-heading text-xs font-semibold tracking-[0.18em] text-[#0d6e74] uppercase">
        {title}
      </h2>
      <ul className="mt-4 divide-y divide-[#0d6e74]/10 rounded-2xl bg-[#eef6f6] ring-1 ring-[#0d6e74]/10">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="flex items-center justify-between gap-3 px-5 py-3.5 text-sm text-[#0a2733] transition-colors hover:bg-white/70 hover:text-[#0d6e74]"
            >
              <span>{link.label}</span>
              <ChevronRight className="size-4 shrink-0 text-[#0d6e74]/50" />
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

  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="relative flex-1">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[#0d6e74]/5 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 size-72 rounded-full bg-[#f2a83c]/5 blur-3xl" />

          <div className="relative mx-auto max-w-3xl px-6 py-16 lg:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0d6e74] transition-colors hover:text-[#0a4f54]"
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>

            <h1 className="font-heading mt-6 text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
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
