"use client";

import { useEffect, useState, type ComponentType } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  FileText,
  Globe,
  Link2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LegalDocument } from "@/lib/legal-pages";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type LegalDocumentViewProps = {
  doc: LegalDocument;
};

export function LegalDocumentView({ doc }: LegalDocumentViewProps) {
  const [activeId, setActiveId] = useState(doc.sections[0]?.number ?? "");
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<string[]>(
    doc.sections.map((s) => s.number)
  );

  useEffect(() => {
    const sectionEls = doc.sections
      .map((s) => document.getElementById(`section-${s.number}`))
      .filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
      setShowTop(scrollTop > 480);

      let current = doc.sections[0]?.number ?? "";
      for (const el of sectionEls) {
        const top = el.getBoundingClientRect().top;
        if (top <= 140) {
          current = el.id.replace("section-", "");
        }
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [doc.sections]);

  async function copySectionLink(number: string) {
    const url = `${window.location.origin}${window.location.pathname}#section-${number}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(number);
      window.setTimeout(() => setCopiedId(null), 1600);
    } catch {
      // ignore clipboard failures
    }
  }

  function scrollToSection(number: string) {
    const el = document.getElementById(`section-${number}`);
    if (!el) return;
    setOpenSections((prev) => (prev.includes(number) ? prev : [...prev, number]));
    window.setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }

  function expandAll() {
    setOpenSections(doc.sections.map((s) => s.number));
  }

  function collapseAll() {
    setOpenSections([]);
  }

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-[var(--ds-brand)] via-[var(--ds-warning)] to-[var(--ds-brand)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--ds-brand-light)] via-[var(--ds-bg-subtle)] to-white">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-white/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-24 size-80 rounded-full bg-[var(--ds-brand)]/10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-0 size-64 rounded-full bg-[var(--ds-warning)]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-14 lg:pt-14 lg:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--ds-ink)]/55"
          >
            <Link href="/" className="transition-colors hover:text-[var(--ds-brand)]">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span>Legal Policies</span>
            <ChevronRight className="size-3.5" />
            <span className="font-medium text-[var(--ds-ink)]">{doc.title}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--ds-ink)] shadow-sm ring-1 ring-[var(--ds-brand)]/10 backdrop-blur">
                <Sparkles className="size-3.5 text-[var(--ds-warning)]" />
                {doc.eyebrow}
              </span>
              <h1 className="font-heading mt-5 text-4xl font-medium leading-[1.1] tracking-normal text-[var(--ds-ink)] sm:text-5xl">
                {doc.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
                {doc.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium text-[var(--ds-ink)]/70">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-[var(--ds-brand)]/10">
                  <CalendarDays className="size-3.5 text-[var(--ds-brand)]" />
                  Published {doc.published}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-[var(--ds-brand)]/10">
                  <FileText className="size-3.5 text-[var(--ds-warning)]" />
                  Updated {doc.updated}
                </span>
              </div>
            </div>

            <div className="rounded-3xl bg-white/70 p-5 shadow-sm ring-1 ring-white/80 backdrop-blur-sm sm:p-6">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ds-brand)] uppercase">
                At a glance
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[var(--ds-ink)]/80">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--ds-brand)]" />
                  HIPAA-aligned handling of health information
                </li>
                <li className="flex items-start gap-2.5">
                  <FileText className="mt-0.5 size-4 shrink-0 text-[var(--ds-warning)]" />
                  {doc.sections.length} clearly organized policy sections
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-[var(--ds-brand)]" />
                  Jump to any section with the interactive guide
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={expandAll}
                  className="rounded-full bg-[var(--ds-brand)] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[var(--ds-brand-dark)]"
                >
                  Expand all
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[var(--ds-ink)] ring-1 ring-[var(--ds-brand)]/15 transition hover:bg-[var(--ds-bg-subtle)]"
                >
                  Collapse all
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-[var(--ds-bg-subtle)] p-4 ring-1 ring-[var(--ds-brand)]/10">
              <p className="px-2 text-xs font-semibold tracking-[0.16em] text-[var(--ds-brand)] uppercase">
                On this page
              </p>
              <nav
                aria-label="On this page"
                className="mt-3 max-h-[min(70vh,28rem)] space-y-1 overflow-y-auto pr-1"
              >
                {doc.sections.map((section) => (
                  <button
                    key={section.number}
                    type="button"
                    onClick={() => scrollToSection(section.number)}
                    aria-label={`Go to section ${section.number}: ${section.title}`}
                    aria-current={activeId === section.number ? "true" : undefined}
                    className={cn(
                      "flex w-full items-start gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm transition-all",
                      activeId === section.number
                        ? "bg-white text-[var(--ds-ink)] shadow-sm ring-1 ring-[var(--ds-brand)]/10"
                        : "text-[var(--ds-ink)]/65 hover:bg-white/70 hover:text-[var(--ds-ink)]"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 font-heading text-xs font-medium",
                        activeId === section.number
                          ? "text-[var(--ds-warning)]"
                          : "text-[var(--ds-brand)]/70"
                      )}
                    >
                      {section.number}
                    </span>
                    <span className="leading-snug">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="rounded-3xl bg-gradient-to-br from-[var(--ds-bg-subtle)] to-white p-6 ring-1 ring-[var(--ds-brand)]/10 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.16em] text-[var(--ds-brand)] uppercase">
                Overview
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700">
                {doc.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <Accordion
              multiple
              value={openSections}
              onValueChange={(value) => setOpenSections(value as string[])}
              className="mt-8 gap-4 rounded-none border-none"
            >
              {doc.sections.map((section) => (
                <AccordionItem
                  key={section.number}
                  value={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-28 overflow-hidden rounded-2xl border-0 bg-white shadow-sm ring-1 ring-black/5 not-last:mb-0 not-last:border-b-0 data-open:bg-white"
                >
                  <div className="flex items-stretch">
                    <AccordionTrigger
                      asHeading="h2"
                      className="flex-1 px-5 py-5 text-left hover:no-underline sm:px-6 **:data-[slot=accordion-trigger-icon]:!size-8 **:data-[slot=accordion-trigger-icon]:shrink-0 **:data-[slot=accordion-trigger-icon]:rounded-full **:data-[slot=accordion-trigger-icon]:bg-[var(--ds-bg-subtle)] **:data-[slot=accordion-trigger-icon]:p-2 **:data-[slot=accordion-trigger-icon]:text-[var(--ds-ink)]"
                    >
                      <span className="flex min-w-0 items-start gap-3 sm:gap-4">
                        <span className="font-heading text-lg font-medium text-[var(--ds-brand)] sm:text-xl">
                          {section.number}
                        </span>
                        <span className="font-heading text-base font-medium text-[var(--ds-ink)] sm:text-lg">
                          {section.title}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <button
                      type="button"
                      onClick={() => copySectionLink(section.number)}
                      className="m-3 flex size-9 shrink-0 items-center justify-center self-center rounded-full text-[var(--ds-ink)]/45 transition hover:bg-[var(--ds-bg-subtle)] hover:text-[var(--ds-brand)]"
                      aria-label={`Copy link to ${section.title}`}
                      title="Copy section link"
                    >
                      {copiedId === section.number ? (
                        <Check className="size-4 text-[var(--ds-brand)]" />
                      ) : (
                        <Link2 className="size-4" />
                      )}
                    </button>
                  </div>

                  <AccordionContent className="px-5 pb-6 sm:px-6">
                    <div className="space-y-4 border-t border-[var(--ds-brand)]/10 pt-5 text-base leading-relaxed text-neutral-700">
                      {section.paragraphs?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                      {section.bullets && (
                        <ul className="space-y-2.5">
                          {section.bullets.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 rounded-xl bg-[var(--ds-bg-subtle)]/70 px-3.5 py-2.5"
                            >
                              <Check className="mt-0.5 size-4 shrink-0 text-[var(--ds-brand)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.paragraphsAfter?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                      {section.bulletsAfter && (
                        <ul className="space-y-2.5">
                          {section.bulletsAfter.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 rounded-xl bg-[var(--ds-bg-subtle)]/70 px-3.5 py-2.5"
                            >
                              <Check className="mt-0.5 size-4 shrink-0 text-[var(--ds-brand)]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.paragraphsFinal?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                      {section.faqs && section.faqs.length > 0 && (
                        <div className="space-y-3">
                          {section.faqs.map((faq) => (
                            <div
                              key={faq.question}
                              className="rounded-2xl bg-[var(--ds-bg-subtle)] p-4 ring-1 ring-[var(--ds-brand)]/10 sm:p-5"
                            >
                              <p className="font-heading text-base font-medium text-[var(--ds-ink)]">
                                {faq.question}
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.contact && (
                        <div className="grid gap-3 sm:grid-cols-2">
                          <ContactCard
                            icon={Building2}
                            label="Company"
                            value={section.contact.company}
                          />
                          <ContactCard
                            icon={Globe}
                            label="Website"
                            value={section.contact.website}
                            href={section.contact.website}
                          />
                          <ContactCard
                            icon={Mail}
                            label="Email"
                            value={section.contact.email}
                            href={`mailto:${section.contact.email}`}
                          />
                          <ContactCard
                            icon={Phone}
                            label="Phone"
                            value={section.contact.phone}
                            href={`tel:${section.contact.phone.replace(/[^\d+]/g, "")}`}
                          />
                          {section.contact.address && (
                            <ContactCard
                              icon={MapPin}
                              label="Address"
                              value={section.contact.address}
                              className="sm:col-span-2"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {doc.next && (
              <Link
                href={doc.next.href}
                className="group mt-10 flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-[var(--ds-brand-dark)] via-[var(--ds-brand-dark)] to-[var(--ds-brand-dark)] p-6 text-white shadow-lg transition hover:shadow-xl sm:p-8"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">
                    Next Document
                  </p>
                  <p className="font-heading mt-2 text-2xl font-medium">
                    {doc.next.label}
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Continue reviewing our legal and compliance policies.
                  </p>
                </div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--ds-warning)] text-[var(--ds-ink)] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center rounded-full bg-[var(--ds-brand)] text-white shadow-[0_12px_28px_rgb(var(--ds-brand-rgb)/0.35)] transition-all hover:bg-[var(--ds-brand-dark)]",
          showTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  className,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  className?: string;
}) {
  const content = (
    <>
      <span className="flex size-9 items-center justify-center rounded-full bg-[var(--ds-brand)]/10 text-[var(--ds-brand)]">
        <Icon className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold tracking-wide text-[var(--ds-brand)] uppercase">
          {label}
        </span>
        <span className="mt-0.5 block break-words text-sm font-medium text-[var(--ds-ink)]">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "flex items-start gap-3 rounded-2xl bg-[var(--ds-bg-subtle)] p-4 ring-1 ring-[var(--ds-brand)]/10 transition hover:bg-white hover:shadow-sm",
          className
        )}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl bg-[var(--ds-bg-subtle)] p-4 ring-1 ring-[var(--ds-brand)]/10",
        className
      )}
    >
      {content}
    </div>
  );
}
