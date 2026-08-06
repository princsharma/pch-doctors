import Link from "next/link";
import { ArrowRight, Ban, Home, Map } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoneSearchField } from "@/components/gone-search-field";
import { JsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { GONE_PAGE_CTAS } from "@/lib/removed-routes";
import { absoluteUrl } from "@/lib/seo";

type GonePageProps = {
  /** Optional original path for display (browser URL already shows it via rewrite). */
  requestedPath?: string;
};

/**
 * Reusable, server-rendered 410 Gone experience.
 * Used by `app/gone/page.tsx` after Proxy rewrites removed URLs here with status 410.
 */
export function GonePage({ requestedPath }: GonePageProps) {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-[var(--ds-ink)]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "This Page Has Been Permanently Removed",
          description:
            "This content has been permanently removed from PCH Doctors and will not return.",
          url: absoluteUrl(requestedPath || "/gone/"),
          isPartOf: {
            "@type": "WebSite",
            name: "PCH Doctors",
            url: absoluteUrl("/"),
          },
        }}
      />
      <SiteHeader />
      <main
        id="main-content"
        className="relative flex flex-1 items-center overflow-hidden bg-gradient-to-b from-[var(--ds-bg-subtle)] via-white to-[var(--ds-brand-light)] dark:from-[var(--ds-ink)] dark:via-[#121a16] dark:to-[#0e1a14]"
      >
        <div
          className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--ds-brand)]/10 blur-3xl dark:bg-[var(--ds-brand)]/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-[var(--ds-warning)]/15 blur-3xl dark:bg-[var(--ds-warning)]/10"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
          <article className="overflow-hidden rounded-[2rem] bg-white/85 shadow-sm ring-1 ring-[var(--ds-brand)]/10 backdrop-blur-sm dark:bg-white/[0.04] dark:ring-white/10">
            <div className="grid items-center gap-10 px-8 py-12 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-16 lg:py-16">
              <div>
                <p
                  className="font-heading text-7xl font-medium leading-none tracking-normal text-[var(--ds-brand)] sm:text-8xl dark:text-[var(--ds-brand-mid)]"
                  aria-hidden
                >
                  410
                </p>
                <h1 className="font-heading mt-6 text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl dark:text-white">
                  This Page Has Been Permanently Removed
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-white/70">
                  The content at this address was intentionally removed and will
                  not come back. Bookmarks and search results pointing here are
                  outdated.
                </p>
                {requestedPath ? (
                  <p className="mt-3 max-w-lg break-all text-sm text-[var(--ds-ink-mid)] dark:text-white/50">
                    Requested URL:{" "}
                    <span className="font-medium text-[var(--ds-ink)] dark:text-white/80">
                      {requestedPath}
                    </span>
                  </p>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    nativeButton={false}
                    render={<Link href={GONE_PAGE_CTAS.primary.href} />}
                    aria-label={GONE_PAGE_CTAS.primary.label}
                    className="h-auto gap-2 rounded-full bg-[var(--ds-brand)] px-8 py-6 text-sm font-semibold text-white hover:bg-[var(--ds-brand-dark)]"
                  >
                    <Home className="size-4" aria-hidden />
                    {GONE_PAGE_CTAS.primary.label}
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                  <Button
                    nativeButton={false}
                    render={<Link href={GONE_PAGE_CTAS.secondary.href} />}
                    aria-label={GONE_PAGE_CTAS.secondary.label}
                    className="h-auto gap-2 rounded-full border border-[var(--ds-ink)]/20 bg-[var(--ds-bg-subtle)] px-8 py-6 text-sm font-semibold text-[var(--ds-ink)] hover:bg-white dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    <Map className="size-4" aria-hidden />
                    {GONE_PAGE_CTAS.secondary.label}
                  </Button>
                </div>

                <GoneSearchField />
              </div>

              <aside
                className="relative flex justify-center lg:justify-end"
                aria-label="Why this page is gone"
              >
                <div
                  className="pointer-events-none absolute -right-6 bottom-4 h-40 w-64 rounded-[40%] bg-[var(--ds-brand)]/15 blur-2xl dark:bg-[var(--ds-brand)]/25"
                  aria-hidden
                />
                <div className="relative z-10 w-full max-w-sm rounded-3xl bg-[var(--ds-bg-subtle)] p-8 ring-1 ring-[var(--ds-brand)]/10 dark:bg-white/[0.06] dark:ring-white/10">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-[var(--ds-brand)]/10 text-[var(--ds-brand)] dark:bg-[var(--ds-brand)]/20 dark:text-[var(--ds-brand-mid)]">
                    <Ban className="size-7" aria-hidden />
                  </span>
                  <h2 className="font-heading mt-5 text-xl font-medium text-[var(--ds-ink)] dark:text-white">
                    Gone for good
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-white/65">
                    A 410 response tells search engines this URL is permanently
                    retired — unlike a 404, it will not be treated as a temporary
                    miss.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-[var(--ds-ink-mid)] dark:text-white/55">
                    <li className="flex gap-2">
                      <span aria-hidden className="text-[var(--ds-brand)]">
                        •
                      </span>
                      Content was removed on purpose
                    </li>
                    <li className="flex gap-2">
                      <span aria-hidden className="text-[var(--ds-brand)]">
                        •
                      </span>
                      The same URL will not return
                    </li>
                    <li className="flex gap-2">
                      <span aria-hidden className="text-[var(--ds-brand)]">
                        •
                      </span>
                      Use the links above to continue
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
