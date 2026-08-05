import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageLayout } from "@/components/legal-page-layout";
import { LEGAL_PAGES, getLegalPage } from "@/lib/legal-pages";

type LegalSlugPageProps = {
  params: Promise<{ legalSlug: string }>;
};

export function generateStaticParams() {
  return LEGAL_PAGES.map((page) => ({ legalSlug: page.slug }));
}

export async function generateMetadata({
  params,
}: LegalSlugPageProps): Promise<Metadata> {
  const { legalSlug } = await params;
  const page = getLegalPage(legalSlug);
  if (!page) return {};

  return {
    title: `${page.title} - PCH Doctors`,
    description: page.description,
  };
}

export default async function LegalSlugPage({ params }: LegalSlugPageProps) {
  const { legalSlug } = await params;
  const page = getLegalPage(legalSlug);
  if (!page) notFound();

  return <LegalPageLayout page={page} />;
}
