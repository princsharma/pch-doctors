import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { ContributorProfile } from "@/components/sections/contributors/profile";
import { CONTRIBUTORS, getContributor } from "@/lib/contributors";
import { absoluteUrl } from "@/lib/seo";
import {
  organizationSchema,
  breadcrumbSchema,
  webPageSchema,
  contributorPersonSchema,
} from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CONTRIBUTORS.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getContributor(slug);
  if (!person) return {};

  const title = `${person.displayName} | ${person.roleLabel} | PCH Doctors`;
  const description = person.summary;
  const url = absoluteUrl(`/our-contributors/${person.slug}`);
  const image = person.image
    ? [{ url: absoluteUrl(person.image), alt: person.displayName }]
    : undefined;

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
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image?.map((item) => item.url),
    },
  };
}

export default async function ContributorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const person = getContributor(slug);
  if (!person) notFound();

  const title = `${person.displayName} | ${person.roleLabel} | PCH Doctors`;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={[
          organizationSchema(),
          webPageSchema({
            title,
            description: person.summary,
            path: `/our-contributors/${person.slug}`,
            type: "ProfilePage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Medical Content Team", path: "/our-contributors" },
            {
              name: person.displayName,
              path: `/our-contributors/${person.slug}`,
            },
          ]),
          contributorPersonSchema(person),
        ]}
      />
      <SiteHeader />
      <main>
        <div className="border-b border-[var(--ds-border)] bg-[var(--ds-bg-subtle)]">
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
              <li aria-hidden className="flex items-center">
                <ChevronRight className="size-3.5 text-[var(--ds-ink-soft)]" />
              </li>
              <li>
                <Link
                  href="/our-contributors"
                  className="transition-colors hover:text-[var(--ds-brand)]"
                >
                  Medical Content Team
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
                  {person.displayName}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        <ContributorProfile slug={slug} />
      </main>
      <SiteFooter />
    </div>
  );
}
