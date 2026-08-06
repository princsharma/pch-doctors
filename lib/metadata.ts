import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

/**
 * Page SEO copy.
 * Titles: 50–55 characters.
 * Descriptions: up to 130 characters.
 */
export const PAGE_METADATA = {
  home: {
    path: "/",
    title: "Online MMJ Certs & GLP-1 Weight Loss | PCH Doctors",
    description:
      "Get online MMJ certifications and clinician-guided GLP-1 weight loss from licensed doctors. Secure HIPAA-compliant telehealth.",
  },
  mmj: {
    path: "/services/medical-marijuana-consultation",
    title: "Medical Marijuana Certification Online | PCH Doctors",
    description:
      "Same-day medical marijuana recommendations from state-licensed physicians via secure online visits with fast digital delivery.",
  },
  glp1: {
    path: "/services/glp-1-medications",
    title: "Online GLP-1 Weight Loss Program | PCH Doctors Care",
    description:
      "Clinician-guided GLP-1 weight management with online evaluations. Care may include Wegovy, Ozempic, or Mounjaro when appropriate.",
  },
  about: {
    path: "/about",
    title: "About PCH Doctors | Telehealth Care Team",
    description:
      "Learn about PCH Doctors — licensed clinicians, HIPAA-conscious telehealth, MMJ certifications, and GLP-1 weight care.",
  },
  contact: {
    path: "/contact",
    title: "Contact PCH Doctors | Phone, Email & Address",
    description:
      "Reach PCH Doctors by phone, email, or mail in Wilmington, CA for MMJ certifications and GLP-1 weight loss support.",
  },
  sitemap: {
    path: "/sitemap",
    title: "Full Website Sitemap | Pages & Legal | PCH Doctors",
    description:
      "Browse every main PCH Doctors page in one place, including services, legal policies, and key sections for quick navigation.",
  },
  "privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Patient Data Rights | PCH Doctors",
    description:
      "Learn how PCH Doctors collects, uses, and protects personal and health information when you use our website and medical services.",
  },
  "hipaa-compliance": {
    path: "/hipaa-compliance",
    title: "HIPAA Compliance Policy | Patient Privacy | PCH Doctors",
    description:
      "See how PCH Doctors protects health information under HIPAA with administrative, technical, and physical security safeguards.",
  },
  "consent-for-telehealth": {
    path: "/consent-for-telehealth",
    title: "Telehealth Consent Policy | Patient Terms | PCH Doctors",
    description:
      "Review telehealth benefits, risks, and limits before your visit, and how consent applies to online care with PCH Doctors.",
  },
  "terms-of-use": {
    path: "/terms-of-use",
    title: "Terms of Use | Online Care Rules | PCH Doctors Inc",
    description:
      "Read the terms that govern PCH Doctors website and services, including acceptable use, liability limits, and platform role.",
  },
  "refund-policy": {
    path: "/refund-policy",
    title: "Refund Policy | Evaluation Fees | PCH Doctors Care",
    description:
      "Learn when refunds apply for MMJ evaluations and GLP-1 program fees, and how to request a refund from PCH Doctors support.",
  },
  "accessibility-statement": {
    path: "/accessibility-statement",
    title: "Accessibility Statement | Inclusive Care | PCH Doctors",
    description:
      "Our commitment to accessible digital care, the standards we aim to meet, and how to request help if you need assistance.",
  },
  "editorial-policy": {
    path: "/editorial-policy",
    title: "Editorial Policy | Content Standards | PCH Doctors",
    description:
      "How PCH Doctors creates, reviews, and updates medical content so information stays accurate, clear, and useful for patients.",
  },
  disclaimer: {
    path: "/disclaimer",
    title: "Medical Disclaimer | Important Notices | PCH Doctors",
    description:
      "Key disclaimers on educational content and platform role. PCH Doctors information is not a substitute for professional care.",
  },
  "shipping-policy": {
    path: "/shipping-policy",
    title: "Shipping Policy | Medication Delivery | PCH Doctors",
    description:
      "Shipping timelines, address rules, and support for medications fulfilled through partner pharmacies for PCH Doctors programs.",
  },
} as const satisfies Record<string, PageMeta>;

export type PageMetadataKey = keyof typeof PAGE_METADATA;

function ogImageUrl(path: string) {
  const base = path === "/" ? "" : path.replace(/\/$/, "");
  return absoluteUrl(`${base}/opengraph-image`);
}

function twitterImageUrl(path: string) {
  const base = path === "/" ? "" : path.replace(/\/$/, "");
  return absoluteUrl(`${base}/twitter-image`);
}

export function buildPageMetadata(key: PageMetadataKey): Metadata {
  const page = PAGE_METADATA[key];
  const url = absoluteUrl(page.path);
  const image = {
    url: ogImageUrl(page.path),
    width: 1200,
    height: 630,
    alt: page.title,
  };

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: "PCH Doctors",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [twitterImageUrl(page.path)],
    },
  };
}

export function getLegalMetadataKey(slug: string): PageMetadataKey | null {
  if (slug in PAGE_METADATA) {
    return slug as PageMetadataKey;
  }
  return null;
}
