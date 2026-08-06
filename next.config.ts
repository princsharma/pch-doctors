import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Normalize page URLs to always use a trailing slash (e.g. /privacy-policy/).
  trailingSlash: true,
};

export default nextConfig;
