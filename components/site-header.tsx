"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";
import { ConsultationModal } from "@/components/consultation-modal";
import { MmjLeadModal } from "@/components/mmj-lead-modal";
import { Button } from "@/components/ui/button";
import { ONGO_WEIGHT_LOSS_URL } from "@/lib/ongo";
import { cn } from "@/lib/utils";

const headerCtaClassName =
  "rounded-full bg-[#f2a83c] px-6 py-6 text-sm font-semibold text-[#0a2733] shadow-[0_8px_24px_rgba(242,168,60,0.35)] transition-shadow hover:bg-[#f2a83c]/90 hover:shadow-[0_10px_28px_rgba(242,168,60,0.45)]";

const headerMobileCtaClassName =
  "mt-1 w-full rounded-full bg-[#f2a83c] py-6 text-sm font-semibold text-[#0a2733] hover:bg-[#f2a83c]/90";

const MMJ_PATH = "/services/medical-marijuana-consultation";
const GLP1_PATH = "/services/glp-1-medications";

const services = [
  { label: "Medical Marijuana Consultation", href: MMJ_PATH },
  { label: "GLP-1 Medications", href: GLP1_PATH },
];

const homeNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", children: services },
  { label: "Process", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQs", href: "/#faqs" },
];

const mmjNavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: MMJ_PATH, children: services },
  { label: "Process", href: `${MMJ_PATH}#process` },
  { label: "Consultations", href: `${MMJ_PATH}#consultations` },
  { label: "Reviews", href: `${MMJ_PATH}#reviews` },
  { label: "Pricing", href: `${MMJ_PATH}#pricing` },
  { label: "FAQs", href: `${MMJ_PATH}#faqs` },
];

const glp1NavLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: GLP1_PATH, children: services },
  { label: "Process", href: `${GLP1_PATH}#process` },
  { label: "Benefits", href: `${GLP1_PATH}#benefits` },
  { label: "Why Choose Us", href: `${GLP1_PATH}#why-choose-us` },
  { label: "Pricing", href: `${GLP1_PATH}#pricing` },
  { label: "FAQs", href: `${GLP1_PATH}#faqs` },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isGlp1 = pathname?.startsWith(GLP1_PATH) || pathname?.startsWith("/services/glp-1-weight-loss-treatment");
  const isMmj = pathname?.startsWith(MMJ_PATH);
  const navLinks = isGlp1 ? glp1NavLinks : isMmj ? mmjNavLinks : homeNavLinks;

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          "overflow-hidden bg-gradient-to-r from-[#0a4f54] via-[#0d6e74] to-[#0a4f54] text-sm text-white transition-all duration-300",
          scrolled
            ? "max-h-0 opacity-0"
            : "max-h-14 opacity-100"
        )}
      >
        <div className="hidden items-center justify-center gap-2 px-6 py-3.5 sm:flex">
          <Sparkles className="size-4 text-[#f2a83c]" />
          <p>
            Now also accepting patients for our clinician-guided{" "}
            <Link
              href={GLP1_PATH}
              className="font-semibold text-[#f2a83c] underline decoration-[#f2a83c]/40 underline-offset-2 transition-colors hover:text-white"
            >
              weight loss program
            </Link>
            {" "}and{" "}
            <Link
              href={MMJ_PATH}
              className="font-semibold text-[#f2a83c] underline decoration-[#f2a83c]/40 underline-offset-2 transition-colors hover:text-white"
            >
              MMJ certifications
            </Link>
            .
          </p>
        </div>
      </div>

      <div
        className={cn(
          "bg-[#dcf0f1]/90 backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-sm"
        )}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/pch-doctors-logo.png"
              alt="PCH Doctors"
              width={1251}
              height={512}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-white/60 p-1 text-sm font-medium text-[#0a2733]/70 backdrop-blur-md lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 transition-colors hover:bg-[#eef6f6] hover:text-[#0d6e74]"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </a>

                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 transition-all",
                      servicesOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0"
                    )}
                  >
                    <div className="overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-[#0a2733]/80 transition-colors hover:bg-[#0d6e74] hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 transition-colors hover:bg-[#eef6f6] hover:text-[#0d6e74]",
                    link.href === "/" && pathname === "/" && "bg-white text-[#0d6e74]"
                  )}
                >
                  {link.label}
                </a>
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
              <Button
                nativeButton={false}
                render={<a href={ONGO_WEIGHT_LOSS_URL} />}
                className={headerCtaClassName}
              >
                Book Your Consultation
              </Button>
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
            className="rounded-full bg-white/80 p-2 shadow-sm ring-1 ring-[#0d6e74]/15 backdrop-blur-md lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5 text-[#0a2733]" /> : <Menu className="size-5 text-[#0a2733]" />}
          </button>
        </div>

        <div
          className={cn(
            "mx-4 flex flex-col gap-1 overflow-hidden rounded-2xl bg-white/90 px-4 shadow-md ring-1 ring-[#0d6e74]/15 backdrop-blur-md transition-all lg:hidden",
            open ? "mb-2 max-h-[32rem] py-3" : "max-h-0 py-0"
          )}
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="flex flex-col">
                <a
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-[#0a2733]/70 transition-colors hover:bg-[#eef6f6] hover:text-[#0d6e74]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
                <div className="ml-3 flex flex-col gap-1 border-l border-[#0d6e74]/15 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="rounded-lg px-2 py-1.5 text-sm text-[#0a2733]/60 transition-colors hover:bg-[#eef6f6] hover:text-[#0d6e74]"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-[#0a2733]/70 transition-colors hover:bg-[#eef6f6] hover:text-[#0d6e74]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
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
            <Button
              nativeButton={false}
              render={<a href={ONGO_WEIGHT_LOSS_URL} onClick={() => setOpen(false)} />}
              className={headerMobileCtaClassName}
            >
              Book Your Consultation
            </Button>
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
        </div>
      </div>
    </header>
  );
}
