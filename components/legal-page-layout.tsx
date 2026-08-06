import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LegalDocumentView } from "@/components/legal-document-view";
import type { LegalPageMeta } from "@/lib/legal-pages";

type LegalPageLayoutProps = {
  page: LegalPageMeta;
};

export function LegalPageLayout({ page }: LegalPageLayoutProps) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <main className="relative flex-1">
        {page.document ? (
          <LegalDocumentView doc={page.document} />
        ) : (
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
                {page.title}
              </h1>
              <p className="mt-3 text-neutral-600">{page.description}</p>

              <div className="mt-10 rounded-2xl bg-[var(--ds-bg-subtle)] p-6 ring-1 ring-[var(--ds-brand)]/10 sm:p-8">
                <p className="text-sm leading-relaxed text-[var(--ds-ink)]/80">
                  {page.placeholder}
                </p>
                <p className="mt-4 text-xs font-medium tracking-wide text-[var(--ds-brand)]/70 uppercase">
                  Content coming soon
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
