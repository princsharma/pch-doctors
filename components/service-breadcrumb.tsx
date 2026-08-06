import Link from "next/link";
import { CalendarDays, ChevronRight, RefreshCw } from "lucide-react";
import {
  formatServiceDate,
  type ServicePageMeta,
} from "@/lib/service-pages";

type ServiceBreadcrumbProps = {
  page: ServicePageMeta;
};

export function ServiceBreadcrumb({ page }: ServiceBreadcrumbProps) {
  return (
    <div className="border-b border-[var(--service-border)] bg-[var(--service-section-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Breadcrumb" className="min-w-0">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--ds-ink-mid)]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[var(--service-brand)]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="flex items-center">
              <ChevronRight className="size-3.5 text-[var(--ds-ink-soft)]" />
            </li>
            <li>
              <span className="text-[var(--ds-ink-soft)]">Services</span>
            </li>
            <li aria-hidden className="flex items-center">
              <ChevronRight className="size-3.5 text-[var(--ds-ink-soft)]" />
            </li>
            <li>
              <span className="font-medium text-[var(--ds-ink)]" aria-current="page">
                {page.label}
              </span>
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--ds-ink-mid)]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-[var(--service-border)]">
            <CalendarDays
              className="size-3.5 text-[var(--service-brand)]"
              aria-hidden
            />
            <span>
              Published{" "}
              <time dateTime={page.datePublished}>
                {formatServiceDate(page.datePublished)}
              </time>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 ring-1 ring-[var(--service-border)]">
            <RefreshCw
              className="size-3.5 text-[var(--service-accent)]"
              aria-hidden
            />
            <span>
              Updated{" "}
              <time dateTime={page.dateModified}>
                {formatServiceDate(page.dateModified)}
              </time>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
