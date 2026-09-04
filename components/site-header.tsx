"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { ConsultationModal } from "@/components/consultation-modal";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headerCtaClassName =
  "rounded-full bg-[var(--ds-brand)] px-6 py-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgb(var(--ds-brand-rgb)/0.35)] transition-shadow hover:bg-[var(--ds-brand-dark)] hover:shadow-[0_10px_28px_rgb(var(--ds-brand-rgb)/0.45)]";

const headerMobileCtaClassName =
  "mt-1 w-full rounded-full bg-[var(--ds-brand)] py-6 text-sm font-semibold text-white hover:bg-[var(--ds-brand-dark)]";

const MMJ_PATH = "/services/medical-marijuana-consultation";
const GLP1_PATH = "/services/glp-1-medications";
const MMJ_DOCTORS_PATH = "/our-doctors";
const GLP1_DOCTORS_PATH = "/weight-loss-doctors";

const services = [
  { label: "Medical Marijuana Consultation", href: MMJ_PATH },
  { label: "GLP-1 Medications", href: GLP1_PATH },
];

const medicalTeam = [
  { label: "MMJ Doctor", href: MMJ_DOCTORS_PATH },
  { label: "Ongo Weight Loss", href: GLP1_DOCTORS_PATH },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", children: services },
  { label: "Medical Team", href: MMJ_DOCTORS_PATH, children: medicalTeam },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
] as const;

function isActivePath(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const isGlp1Service =
    pathname?.startsWith(GLP1_PATH) ||
    pathname?.startsWith("/services/glp-1-weight-loss-treatment");
  const isMmjService = pathname?.startsWith(MMJ_PATH);
  const isMmjTeam = pathname?.startsWith(MMJ_DOCTORS_PATH);
  const isGlp1Team = pathname?.startsWith(GLP1_DOCTORS_PATH);
  const isServicePage = Boolean(isMmjService || isGlp1Service);
  const isTeamPage = Boolean(isMmjTeam || isGlp1Team);
  const isMmj = Boolean(isMmjService || isMmjTeam);
  const isGlp1 = Boolean(isGlp1Service || isGlp1Team);

  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-gradient-to-r from-[var(--ds-brand-dark)] via-[var(--ds-brand)] to-[var(--ds-brand-dark)] text-sm text-white">
        <div className="hidden items-center justify-center gap-2 px-6 py-3.5 sm:flex">
          <Sparkles className="size-4 text-[var(--ds-warning)]" />
          <p>
            Now also accepting patients for our clinician-guided{" "}
            <Link
              href={GLP1_PATH}
              className="font-semibold text-[var(--ds-warning)] underline decoration-[var(--ds-warning)]/40 underline-offset-2 transition-colors hover:text-white"
            >
              weight loss program
            </Link>{" "}
            and{" "}
            <Link
              href={MMJ_PATH}
              className="font-semibold text-[var(--ds-warning)] underline decoration-[var(--ds-warning)]/40 underline-offset-2 transition-colors hover:text-white"
            >
              MMJ certifications
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-[var(--ds-brand-light)]/90 shadow-sm backdrop-blur-md">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="PCH Doctors home">
            <Image
              src="/pch-logo.webp"
              alt="PCH Doctors logo"
              width={800}
              height={320}
              priority
              className="h-12 w-auto rounded-lg sm:h-14"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/60 p-1 text-sm font-medium text-[var(--ds-ink)]/70 backdrop-blur-md lg:flex"
          >
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-brand)]",
                      (link.label === "Services" ? isServicePage : isTeamPage) &&
                        "bg-white text-[var(--ds-brand)]"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-3.5 transition-transform",
                        openMenu === link.label && "rotate-180"
                      )}
                    />
                  </a>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 transition-all",
                      openMenu === link.label
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-2 overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-3 py-2.5 text-sm text-[var(--ds-ink)]/80 transition-colors hover:bg-[var(--ds-brand)] hover:text-white",
                            isActivePath(pathname, child.href) &&
                              "bg-[var(--ds-brand)] text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 transition-colors hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-brand)]",
                    isActivePath(pathname, link.href) &&
                      "bg-white text-[var(--ds-brand)]"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            {isMmj ? (
              <MmjLeadModal
                trigger={
                  <Button className={headerCtaClassName}>
                    Book Your Consultation
                  </Button>
                }
              />
            ) : isGlp1 ? (
              <Glp1LeadModal
                trigger={
                  <Button className={headerCtaClassName}>
                    Book Your Consultation
                  </Button>
                }
              />
            ) : (
              <ConsultationModal
                trigger={
                  <Button className={headerCtaClassName}>
                    Book Your Consultation
                  </Button>
                }
              />
            )}
          </div>

          <button
            type="button"
            className="rounded-full bg-white/80 p-2 shadow-sm ring-1 ring-[var(--ds-brand)]/15 backdrop-blur-md lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="size-5 text-[var(--ds-ink)]" aria-hidden />
            ) : (
              <Menu className="size-5 text-[var(--ds-ink)]" aria-hidden />
            )}
          </button>
        </div>

        <nav
          id="mobile-primary-nav"
          aria-label="Primary"
          className={cn(
            "mx-4 flex flex-col gap-1 overflow-hidden rounded-2xl bg-white/90 px-4 shadow-md ring-1 ring-[var(--ds-brand)]/15 backdrop-blur-md transition-all lg:hidden",
            open ? "mb-2 max-h-[42rem] py-3" : "max-h-0 py-0"
          )}
        >
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.label} className="flex flex-col">
                <a
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-[var(--ds-ink)]/70 transition-colors hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-brand)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
                <div className="ml-3 flex flex-col gap-1 border-l border-[var(--ds-brand)]/15 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="rounded-lg px-2 py-1.5 text-sm text-[var(--ds-ink)]/60 transition-colors hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-brand)]"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-lg px-2 py-2 text-sm font-medium text-[var(--ds-ink)]/70 transition-colors hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-brand)]",
                  isActivePath(pathname, link.href) && "bg-[var(--ds-bg-subtle)] text-[var(--ds-brand)]"
                )}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          {isMmj ? (
            <MmjLeadModal
              trigger={
                <Button
                  className={headerMobileCtaClassName}
                  onClick={() => setOpen(false)}
                >
                  Book Your Consultation
                </Button>
              }
            />
          ) : isGlp1 ? (
            <Glp1LeadModal
              trigger={
                <Button
                  className={headerMobileCtaClassName}
                  onClick={() => setOpen(false)}
                >
                  Book Your Consultation
                </Button>
              }
            />
          ) : (
            <ConsultationModal
              trigger={
                <Button
                  className={headerMobileCtaClassName}
                  onClick={() => setOpen(false)}
                >
                  Book Your Consultation
                </Button>
              }
            />
          )}
        </nav>
      </div>
    </header>
  );
}
