/**
 * Central registry of permanently removed URLs.
 *
 * Add a path here when content is intentionally deleted and must never return.
 * Requests to these paths are rewritten to `/gone/` with HTTP 410 (Gone).
 * Do NOT add redirects for these URLs — crawlers should see 410 on the original URL.
 *
 * Paths are stored in trailing-slash form to match `trailingSlash: true` in next.config.
 */

export type RemovedRoute = {
  /** Canonical path with leading slash (trailing slash optional; normalized). */
  path: string;
  /** Optional note for editors (not shown to users). */
  reason?: string;
  /** ISO date the content was removed (optional, for internal tracking). */
  removedAt?: string;
};

export type GoneCtaLink = {
  href: string;
  label: string;
};

/** Primary / secondary CTAs on the 410 page. */
export const GONE_PAGE_CTAS = {
  primary: {
    href: "/",
    label: "Go to Homepage",
  },
  secondary: {
    // Placeholder until a dedicated states index exists.
    href: "/sitemap/",
    label: "Browse Sitemap",
  },
} as const satisfies Record<"primary" | "secondary", GoneCtaLink>;

/**
 * Permanently removed URLs — single source of truth.
 * Keep these OUT of `app/sitemap.ts` and any HTML sitemaps.
 */
export const REMOVED_ROUTES: readonly RemovedRoute[] = [
  {
    path: "/old-blog/",
    reason: "Legacy blog removed; content will not return.",
    removedAt: "2026-08-06",
  },
  {
    path: "/services/glp-1-weight-loss-treatment/",
    reason: "Superseded by /services/glp-1-medications/; old URL retired with 410.",
    removedAt: "2026-08-06",
  },
  {
    path: "/pricing-old/",
    reason: "Legacy pricing page removed.",
    removedAt: "2026-08-06",
  },
] as const;

/** Internal rewrite target that renders the custom 410 UI. */
export const GONE_PAGE_PATH = "/gone/";

/**
 * Normalize a pathname for comparison against REMOVED_ROUTES.
 * - Ensures leading slash
 * - Ensures trailing slash (except root)
 * - Lowercases for case-insensitive matching
 */
export function normalizeRemovedPathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const withoutQuery = pathname.split("?")[0]?.split("#")[0] ?? pathname;
  const withLeading = withoutQuery.startsWith("/")
    ? withoutQuery
    : `/${withoutQuery}`;
  const collapsed = withLeading.replace(/\/{2,}/g, "/");
  const lower = collapsed.toLowerCase();

  if (lower === "/") {
    return "/";
  }

  return lower.endsWith("/") ? lower : `${lower}/`;
}

const removedPathSet: ReadonlySet<string> = new Set(
  REMOVED_ROUTES.map((route) => normalizeRemovedPathname(route.path))
);

/** True when the request path is permanently removed. */
export function isRemovedPath(pathname: string): boolean {
  return removedPathSet.has(normalizeRemovedPathname(pathname));
}

/** True when the request is the internal 410 page itself. */
export function isGonePagePath(pathname: string): boolean {
  return normalizeRemovedPathname(pathname) === GONE_PAGE_PATH;
}

/** Flat list of normalized removed paths (handy for tests / tooling). */
export function getRemovedPathnames(): string[] {
  return Array.from(removedPathSet);
}
