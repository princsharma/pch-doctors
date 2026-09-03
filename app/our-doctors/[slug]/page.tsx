import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { MmjDoctorProfile } from "@/components/sections/mmj-doctors/profile";
import { MMJ_DOCTORS } from "@/lib/doctors";
import { getDoctorProfile } from "@/lib/doctor-profiles";
import { absoluteUrl } from "@/lib/seo";
import { organizationSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MMJ_DOCTORS.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorProfile(slug);
  if (!doctor) return {};

  const title = `${doctor.name}, ${doctor.credential} | PCH Doctors`;
  const description = doctor.bio;
  const url = absoluteUrl(`/our-doctors/${doctor.slug}`);

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

export default async function DoctorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorProfile(slug);
  if (!doctor) notFound();

  const title = `${doctor.name}, ${doctor.credential} | PCH Doctors`;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={[
          organizationSchema(),
          webPageSchema({
            title,
            description: doctor.bio,
            path: `/our-doctors/${doctor.slug}`,
            type: "ProfilePage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Medical Team", path: "/our-doctors" },
            {
              name: doctor.name,
              path: `/our-doctors/${doctor.slug}`,
            },
          ]),
        ]}
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
                <Link
                  href="/our-doctors"
                  className="transition-colors hover:text-[var(--service-brand)]"
                >
                  Medical Team
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
        <MmjDoctorProfile slug={slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
