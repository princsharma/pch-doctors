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
                {page.title}
              </h1>
              <p className="mt-3 text-neutral-600">{page.description}</p>

              <div className="mt-10 rounded-2xl bg-[#eef6f6] p-6 ring-1 ring-[#0d6e74]/10 sm:p-8">
                <p className="text-sm leading-relaxed text-[#0a2733]/80">
                  {page.placeholder}
                </p>
                <p className="mt-4 text-xs font-medium tracking-wide text-[#0d6e74]/70 uppercase">
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
