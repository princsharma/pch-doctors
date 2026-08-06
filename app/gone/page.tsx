import type { Metadata } from "next";
import { headers } from "next/headers";
import { GonePage } from "@/components/gone-page";

/**
 * Internal 410 destination.
 *
 * Proxy rewrites permanently removed URLs here while keeping the original
 * browser URL and returning HTTP status 410. Direct visits to `/gone/` are
 * also treated as 410 via Proxy.
 */
export const metadata: Metadata = {
  title: "Page Permanently Removed | PCH Doctors",
  description:
    "This page has been permanently removed from PCH Doctors and will not return.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: undefined,
  },
};

export default async function GoneRoutePage() {
  const headerStore = await headers();
  const requestedPath =
    headerStore.get("x-removed-path") ?? headerStore.get("x-pathname") ?? undefined;

  return <GonePage requestedPath={requestedPath ?? undefined} />;
}
