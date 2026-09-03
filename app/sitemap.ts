import type { MetadataRoute } from "next";
import { LEGAL_PAGES } from "@/lib/legal-pages";
import { isRemovedPath } from "@/lib/removed-routes";
import { absoluteUrl } from "@/lib/seo";
import { GLP1_DOCTORS, MMJ_DOCTORS } from "@/lib/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services/medical-marijuana-consultation"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/services/glp-1-medications"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about-us"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/our-doctors"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/weight-loss-doctors"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/sitemap"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const doctorRoutes: MetadataRoute.Sitemap = [
    ...MMJ_DOCTORS.map((doctor) => ({
      url: absoluteUrl(`/our-doctors/${doctor.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...GLP1_DOCTORS.map((doctor) => ({
      url: absoluteUrl(`/weight-loss-doctors/${doctor.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const legalRoutes: MetadataRoute.Sitemap = LEGAL_PAGES.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Never advertise permanently removed URLs to crawlers.
  return [...staticRoutes, ...doctorRoutes, ...legalRoutes].filter((entry) => {
    try {
      const pathname = new URL(entry.url).pathname;
      return !isRemovedPath(pathname);
    } catch {
      return true;
    }
  });
}
