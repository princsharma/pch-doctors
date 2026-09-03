import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Glp1DoctorsHero } from "@/components/sections/glp1-doctors/hero";
import { Glp1DoctorsGrid } from "@/components/sections/glp1-doctors/grid";
import { Glp1DoctorsWhy } from "@/components/sections/glp1-doctors/why";
import { Glp1DoctorsFocus } from "@/components/sections/glp1-doctors/focus";
import {
  Glp1DoctorsFaq,
  GLP1_TEAM_FAQS,
} from "@/components/sections/glp1-doctors/faq";
import { Glp1DoctorsCta } from "@/components/sections/glp1-doctors/cta";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { glp1DoctorsPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("weight-loss-doctors");

export default function WeightLossDoctorsPage() {
  const meta = PAGE_METADATA["weight-loss-doctors"];

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={glp1DoctorsPageSchemas({
          title: meta.title,
          description: meta.description,
          faqs: GLP1_TEAM_FAQS,
        })}
      />
      <SiteHeader />
      <main data-service="glp1">
        <div className="border-b border-[var(--service-border)] bg-[var(--service-section-bg)]">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-6xl px-6 py-4"
          >
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
                <span
                  className="font-medium text-[var(--ds-ink)]"
                  aria-current="page"
                >
                  Ongo Weight Loss
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <Glp1DoctorsHero />
        <Glp1DoctorsGrid />
        <Glp1DoctorsWhy />
        <Glp1DoctorsFocus />
        <Glp1DoctorsFaq />
        <Glp1DoctorsCta />
      </main>
      <SiteFooter />
    </div>
  );
}
