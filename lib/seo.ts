export const SITE_URL = "https://pchdoctors.com";

/**
 * Build an absolute site URL with a trailing slash.
 * Leaves file-like paths (e.g. .xml, .txt, .png) without a trailing slash.
 */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") {
    return `${SITE_URL}/`;
  }

  const pathname = path.startsWith("http")
    ? path.replace(SITE_URL, "")
    : path.startsWith("/")
      ? path
      : `/${path}`;

  const full = `${SITE_URL}${pathname}`;
  const [withoutQuery, query = ""] = full.split("?");
  const isFile = /\.[a-z0-9]+$/i.test(withoutQuery);

  if (isFile) {
    return query ? `${withoutQuery}?${query}` : withoutQuery;
  }

  const withSlash = withoutQuery.endsWith("/")
    ? withoutQuery
    : `${withoutQuery}/`;

  return query ? `${withSlash}?${query}` : withSlash;
}
