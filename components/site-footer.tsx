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
  "hipaa-compliance": ShieldCheck,
  "consent-for-telehealth": Video,
  "terms-of-use": CheckCheck,
  "refund-policy": HandCoins,
  "accessibility-statement": Accessibility,
  "editorial-policy": Pencil,
  disclaimer: TriangleAlert,
  "shipping-policy": Truck,
} as const;

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0a2733] via-[#0d3f45] to-[#0a2733] text-white">
      <div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-[#0d6e74]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[#f2a83c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="w-fit rounded-lg bg-white p-2">
              <Image
                src="/pch-doctors-logo.png"
                alt="PCH Doctors"
                width={1251}
                height={512}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-4 text-sm text-white/60">
              Providing high-standard clinician-guided medical solutions through
              a modern, secure telehealth ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-12">
            <div className="min-w-0">
              <h3 className="font-heading text-sm font-medium text-white/50">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#f2a83c]"
                    >
                      <ChevronRight className="size-3.5 text-[#f2a83c]" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="font-heading text-sm font-medium text-white/50">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-[#f2a83c]"
                    >
                      <ChevronRight className="size-3.5 text-[#f2a83c]" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h3 className="font-heading text-sm font-medium text-white/50">
                Contact Us
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex min-w-0 items-center gap-2 text-sm text-white/80">
                  <Mail className="size-4 shrink-0 text-[#f2a83c]" />
                  <span className="break-all">contact@pchdoctors.com</span>
                </li>
                <li className="flex min-w-0 items-center gap-2 text-sm text-white/80">
                  <Phone className="size-4 shrink-0 text-[#f2a83c]" />
                  <span className="break-words">+1 (424) 424 – 1618</span>
                </li>
                <li className="flex min-w-0 items-start gap-2 text-sm text-white/80">
                  <MapPin className="size-4 shrink-0 text-[#f2a83c]" />
                  <span className="break-words">
                    910 W Pacific Coast Hwy Unit D Wilmington, CA 90744
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="font-heading text-xs font-semibold tracking-[0.18em] text-[#8fd0d4] uppercase">
            Legal, Compliance &amp; Editorial
          </h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {LEGAL_PAGES.map((page) => {
              const Icon = legalIcons[page.slug as keyof typeof legalIcons];
              return (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-[#f2a83c]"
                  >
                    <Icon className="size-4 shrink-0 text-[#8fd0d4]" />
                    {page.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/50">
            © 2025 PCH Doctors. All rights reserved.
          </p>
          <Link
            href="/sitemap"
            className="text-xs text-white/50 transition-colors hover:text-[#f2a83c]"
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

      <div className="pointer-events-none relative overflow-hidden pb-4">
        <p className="font-heading select-none text-center text-[16vw] font-medium leading-none text-white/5">
          PCH Doctors
        </p>
      </div>
    </footer>
  );
}
