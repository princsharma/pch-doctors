import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  EyeOff,
  ShieldCheck,
  Video,
  CheckCheck,
  HandCoins,
  Accessibility,
  Pencil,
  TriangleAlert,
  Truck,
} from "lucide-react";
import { LEGAL_PAGES } from "@/lib/legal-pages";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "MMJ Doctors", href: "/our-doctors" },
  { label: "Ongo Weight Loss", href: "/weight-loss-doctors" },
  { label: "Contact", href: "/contact" },
  { label: "Process", href: "/#process" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Pricing", href: "/#pricing" },
];

const services = [
  { label: "Medical Marijuana Evaluation", href: "/services/medical-marijuana-consultation" },
  { label: "GLP-1 Medications", href: "/services/glp-1-medications" },
];

const legalIcons = {
  "privacy-policy": EyeOff,
  "hipaa-compliance-policy": ShieldCheck,
  "consent-to-telehealth": Video,
  "terms-of-use": CheckCheck,
  "refund-policy": HandCoins,
  "accessibility-statement": Accessibility,
  "editorial-policy": Pencil,
  disclaimer: TriangleAlert,
  "shipping-policy": Truck,
} as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[var(--ds-brand-dark)] via-[var(--ds-brand-dark)] to-[var(--ds-brand-dark)] text-white">
      <div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-[var(--ds-brand)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[var(--ds-warning)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex w-fit rounded-lg bg-white p-2 transition-opacity hover:opacity-90"
              aria-label="PCH Doctors home"
            >
              <Image
                src="/pch-logo.webp"
                alt="PCH Doctors logo"
                width={800}
                height={320}
                className="h-10 w-auto rounded-md"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Providing high-standard clinician-guided medical solutions through
              a modern, secure telehealth ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12">
            <nav aria-label="Footer quick links" className="min-w-0">
              <p className="font-heading text-sm font-medium text-white/50">
                Quick Links
              </p>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[var(--ds-warning)]"
                    >
                      <ChevronRight className="size-3.5 text-[var(--ds-warning)]" aria-hidden />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer services" className="min-w-0">
              <p className="font-heading text-sm font-medium text-white/50">
                Services
              </p>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[var(--ds-warning)]"
                    >
                      <ChevronRight className="size-3.5 text-[var(--ds-warning)]" aria-hidden />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0">
              <p className="font-heading text-sm font-medium text-white/50">
                <Link
                  href="/contact"
                  className="transition-colors hover:text-[var(--ds-warning)]"
                >
                  Contact Us
                </Link>
              </p>
              <ul className="mt-4 space-y-3" aria-label="Contact information">
                <li className="flex min-w-0 items-center gap-2 text-sm text-white/80">
                  <Mail className="size-4 shrink-0 text-[var(--ds-warning)]" aria-hidden />
                  <a
                    href="mailto:contact@pchdoctors.com"
                    className="break-all transition-colors hover:text-[var(--ds-warning)]"
                    aria-label="Email contact@pchdoctors.com"
                  >
                    contact@pchdoctors.com
                  </a>
                </li>
                <li className="flex min-w-0 items-center gap-2 text-sm text-white/80">
                  <Phone className="size-4 shrink-0 text-[var(--ds-warning)]" aria-hidden />
                  <a
                    href="tel:+14244241618"
                    className="break-words transition-colors hover:text-[var(--ds-warning)]"
                    aria-label="Call +1 424 424 1618"
                  >
                    +1 (424) 424 – 1618
                  </a>
                </li>
                <li className="flex min-w-0 items-start gap-2 text-sm text-white/80">
                  <MapPin className="size-4 shrink-0 text-[var(--ds-warning)]" aria-hidden />
                  <span className="break-words">
                    910 W Pacific Coast Hwy Unit D Wilmington, CA 90744
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav
          aria-label="Legal, compliance, and editorial"
          className="mt-12 border-t border-white/10 pt-10"
        >
          <p className="font-heading text-xs font-semibold tracking-[0.18em] text-[var(--ds-brand-mid)] uppercase">
            Legal, Compliance &amp; Editorial
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LEGAL_PAGES.map((page) => {
              const Icon = legalIcons[page.slug as keyof typeof legalIcons];
              return (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-[var(--ds-warning)]"
                  >
                    <Icon className="size-4 shrink-0 text-[var(--ds-brand-mid)]" aria-hidden />
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} PCH Doctors. All rights reserved.
          </p>
          <Link
            href="/sitemap"
            className="text-xs text-white/50 transition-colors hover:text-[var(--ds-warning)]"
            aria-label="View website sitemap"
          >
            Sitemap
          </Link>
        </div>

        <p className="border-t border-white/10 pb-10 pt-6 text-xs text-white/40">
          Medical Disclaimer: This website provides general information about
          medical marijuana and GLP-1 treatments and is not intended as medical
          advice. Medications are only prescribed by licensed healthcare
          providers after a clinical evaluation. Individual results may vary.
          The information provided has not been evaluated by the FDA.
        </p>
      </div>

    </footer>
  );
}
