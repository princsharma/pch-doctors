import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { MmjDoctorsHero } from "@/components/sections/mmj-doctors/hero";
import { MmjDoctorsGrid } from "@/components/sections/mmj-doctors/grid";
import { MmjDoctorsWhyChoose } from "@/components/sections/mmj-doctors/why-choose";
import { MmjDoctorsEvaluation } from "@/components/sections/mmj-doctors/evaluation";
import { MmjDoctorsFaq, MMJ_TEAM_FAQS } from "@/components/sections/mmj-doctors/faq";
import { MmjDoctorsCta } from "@/components/sections/mmj-doctors/cta";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { mmjDoctorsPageSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("doctors");

export default function OurDoctorsPage() {
  const meta = PAGE_METADATA.doctors;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={mmjDoctorsPageSchemas({
          title: meta.title,
          description: meta.description,
          faqs: MMJ_TEAM_FAQS,
        })}
      />
      <SiteHeader />
      <main data-service="mmj">
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
                  Medical Team
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <MmjDoctorsHero />
        <MmjDoctorsGrid />
        <MmjDoctorsWhyChoose />
        <MmjDoctorsEvaluation />
        <MmjDoctorsFaq />
        <MmjDoctorsCta />
      </main>
      <SiteFooter />
    </div>
  );
}
