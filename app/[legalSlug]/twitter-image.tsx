import { notFound } from "next/navigation";
import { PAGE_METADATA, getLegalMetadataKey } from "@/lib/metadata";
import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = "PCH Doctors legal policy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

type Props = {
  params: Promise<{ legalSlug: string }>;
};

export default async function Image({ params }: Props) {
  const { legalSlug } = await params;
  const key = getLegalMetadataKey(legalSlug);
  if (!key) notFound();

  const page = PAGE_METADATA[key];
  return createOgImage(page.title, page.description);
}
