import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Normalize page URLs to always use a trailing slash (e.g. /privacy-policy/).
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/hipaa-compliance",
        destination: "/hipaa-compliance-policy/",
        permanent: true,
      },
      {
        source: "/hipaa-compliance/",
        destination: "/hipaa-compliance-policy/",
        permanent: true,
      },
      {
        source: "/consent-for-telehealth",
        destination: "/consent-to-telehealth/",
        permanent: true,
      },
      {
        source: "/consent-for-telehealth/",
        destination: "/consent-to-telehealth/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us/",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/about-us/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
