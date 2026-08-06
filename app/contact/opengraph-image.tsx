import { PAGE_METADATA } from "@/lib/metadata";
import { createOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og-image";

export const alt = PAGE_METADATA.contact.title;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return createOgImage(
    PAGE_METADATA.contact.title,
    PAGE_METADATA.contact.description
  );
}
