import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { NotFoundIllustration } from "@/components/not-found-illustration";
import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page Not Found | PCH Doctors Online Care Support",
  description:
    "This page does not exist. Return to PCH Doctors for medical marijuana certifications and GLP-1 weight loss care.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Page Not Found",
          description:
            "The requested page does not exist on PCH Doctors.",
          url: absoluteUrl("/404"),
          isPartOf: {
            "@type": "WebSite",
            name: "PCH Doctors",
            url: absoluteUrl("/"),
          },
        }}
      />
      <SiteHeader />
      <main className="relative flex flex-1 items-center overflow-hidden bg-gradient-to-b from-[var(--ds-bg-subtle)] via-white to-[var(--ds-brand-light)]">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-[var(--ds-brand)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-[var(--ds-warning)]/15 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
          <div className="overflow-hidden rounded-[2rem] bg-white/80 shadow-sm ring-1 ring-[var(--ds-brand)]/10 backdrop-blur-sm">
            <div className="grid items-center gap-10 px-8 py-12 sm:px-12 lg:grid-cols-2 lg:gap-6 lg:px-16 lg:py-16">
              <div>
                <p className="font-heading text-7xl font-medium leading-none tracking-normal text-[var(--ds-brand)] sm:text-8xl">
                  404
                </p>
                <h1 className="font-heading mt-6 text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
                  Page not found!
                </h1>
                <p className="mt-3 max-w-md text-base text-neutral-600 sm:text-lg">
                  The page you are looking for does not exist!
                </p>

                <Button
                  nativeButton={false}
                  render={<Link href="/" />}
                  aria-label="Return to the homepage"
                  className="mt-8 h-auto rounded-full border border-[var(--ds-ink)]/25 bg-[var(--ds-bg-subtle)] px-8 py-6 text-sm font-semibold tracking-wide text-[var(--ds-ink)] uppercase hover:bg-white"
                >
                  Take Me To Homepage
                </Button>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="pointer-events-none absolute -right-6 bottom-4 h-40 w-64 rounded-[40%] bg-[var(--ds-brand)]/15 blur-2xl" />
                <div className="pointer-events-none absolute right-10 top-4 h-28 w-40 rounded-[40%] bg-[var(--ds-brand-light)]" />
                <NotFoundIllustration className="relative z-10 w-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
