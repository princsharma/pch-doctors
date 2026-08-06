import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  GONE_PAGE_PATH,
  isGonePagePath,
  isRemovedPath,
  normalizeRemovedPathname,
} from "@/lib/removed-routes";

/**
 * Next.js 16 Proxy (formerly Middleware).
 *
 * For permanently removed URLs:
 * - Keeps the original URL in the browser (rewrite, not redirect)
 * - Returns HTTP 410 Gone
 * - Renders the custom SSR page at `/gone/`
 *
 * Unknown routes fall through to the normal App Router 404.
 */
export function proxy(request: NextRequest) {
  const pathname = normalizeRemovedPathname(request.nextUrl.pathname);
  const shouldServeGone = isRemovedPath(pathname) || isGonePagePath(pathname);

  if (!shouldServeGone) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = GONE_PAGE_PATH;
  // Do not leak rewrite internals into the public URL bar.
  rewriteUrl.search = "";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-removed-path", pathname);

  const response = NextResponse.rewrite(rewriteUrl, {
    status: 410,
    request: {
      headers: requestHeaders,
    },
  });

  // Help crawlers drop the URL quickly (complements robots metadata on the page).
  response.headers.set("x-robots-tag", "noindex, nofollow");
  response.headers.set("cache-control", "public, max-age=3600, must-revalidate");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - api routes
     * - Next.js internals
     * - static files with extensions (images, fonts, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
