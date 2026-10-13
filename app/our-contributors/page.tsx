import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { ContributorsListing } from "@/components/sections/contributors/listing";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { contributorsPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("contributors");

export default function OurContributorsPage() {
  const meta = PAGE_METADATA.contributors;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={contributorsPageSchemas({
          title: meta.title,
          description: meta.description,
        })}
      />
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-[var(--ds-border)] bg-white">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-6xl px-6 py-4"
          >
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--ds-ink-mid)]">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[var(--ds-brand)]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5 text-[var(--ds-ink-soft)]" />
              </li>
              <li>
                <span
                  className="font-medium text-[var(--ds-ink)]"
                  aria-current="page"
                >
                  Medical Content Team
                </span>
              </li>
            </ol>
          </nav>
        </div>

        <ContributorsListing />
      </main>

      <SiteFooter />
    </div>
  );
}
