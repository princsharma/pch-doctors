import { PAGE_METADATA } from "@/lib/metadata";
import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = PAGE_METADATA.about.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return createOgImage(
    PAGE_METADATA.about.title,
    PAGE_METADATA.about.description
  );
}
