import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { Glp1DoctorProfile } from "@/components/sections/glp1-doctors/profile";
import { GLP1_DOCTORS } from "@/lib/doctors";
import { getGlp1DoctorProfile } from "@/lib/glp1-doctor-profiles";
import { absoluteUrl } from "@/lib/seo";
import {
  organizationSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GLP1_DOCTORS.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getGlp1DoctorProfile(slug);
  if (!doctor) return {};

  const title = `${doctor.name}, ${doctor.credential} | Ongo Weight Loss`;
  const description = doctor.bio;
  const url = absoluteUrl(`/weight-loss-doctors/${doctor.slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "PCH Doctors",
      type: "profile",
      images: doctor.image ? [{ url: absoluteUrl(doctor.image) }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Glp1DoctorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getGlp1DoctorProfile(slug);
  if (!doctor) notFound();

  const title = `${doctor.name}, ${doctor.credential} | Ongo Weight Loss`;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={[
          organizationSchema(),
          webPageSchema({
            title,
            description: doctor.bio,
            path: `/weight-loss-doctors/${doctor.slug}`,
            type: "ProfilePage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Ongo Weight Loss", path: "/weight-loss-doctors" },
            {
              name: doctor.name,
              path: `/weight-loss-doctors/${doctor.slug}`,
            },
          ]),
        ]}
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
                <Link
                  href="/weight-loss-doctors"
                  className="transition-colors hover:text-[var(--service-brand)]"
                >
                  Ongo Weight Loss
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
                  {doctor.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <Glp1DoctorProfile slug={slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
