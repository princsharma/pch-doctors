export type ServicePageMeta = {
  key: "mmj" | "glp1";
  label: string;
  path: string;
  /** ISO date YYYY-MM-DD */
  datePublished: string;
  /** ISO date YYYY-MM-DD */
  dateModified: string;
};

export const SERVICE_PAGES: Record<"mmj" | "glp1", ServicePageMeta> = {
  mmj: {
    key: "mmj",
    label: "Medical Marijuana Consultation",
    path: "/services/medical-marijuana-consultation",
    datePublished: "2026-07-31",
    dateModified: "2026-08-06",
  },
  glp1: {
    key: "glp1",
    label: "GLP-1 Medications",
    path: "/services/glp-1-medications",
    datePublished: "2026-07-31",
    dateModified: "2026-08-06",
  },
};

export function formatServiceDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
