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
    path: "/about-us",
    title: "About PCH Doctors | Online MMJ & GLP-1 Telehealth",
    description:
      "Learn about PCH Doctors, a telehealth platform connecting patients with licensed physicians for MMJ and GLP-1 weight loss care.",
  },
  contact: {
    path: "/contact",
    title: "Contact PCH Doctors | Phone, Email & Address",
    description:
      "Reach PCH Doctors by phone, email, or mail in Wilmington, CA for MMJ certifications and GLP-1 weight loss support.",
  },
  doctors: {
    path: "/our-doctors",
    title: "Medical Team | Licensed MMJ Clinicians | PCH Doctors",
    description:
      "Meet the licensed physicians and nurse practitioners who evaluate medical marijuana patients at PCH Doctors. See credentials, states, and book a private video visit.",
  },
  "weight-loss-doctors": {
    path: "/weight-loss-doctors",
    title: "Ongo Weight Loss Doctors | PCH Doctors",
    description:
      "Meet the licensed physicians who run GLP-1 visits through PCH Doctors and Ongo. See training, then book a private online evaluation.",
  },
  sitemap: {
    path: "/sitemap",
    title: "Full Website Sitemap | Pages & Legal | PCH Doctors",
    description:
      "Browse every main PCH Doctors page in one place, including services, legal policies, and key sections for quick navigation.",
  },
  "privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | PCH Doctors",
    description:
      "See how PCH Doctors collects, uses, and protects your personal and health information for MMJ and GLP-1 telehealth services.",
  },
  "hipaa-compliance-policy": {
    path: "/hipaa-compliance-policy",
    title: "HIPAA Compliance | PCH Doctors",
    description:
      "See how PCH Doctors meets HIPAA standards to protect patient health information across our MMJ and GLP-1 telehealth services.",
  },
  "consent-to-telehealth": {
    path: "/consent-to-telehealth",
    title: "Consent to Telehealth | PCH Doctors",
    description:
      "Understand how telehealth works at PCH Doctors: benefits, risks, and privacy protections for MMJ and GLP-1 consultations.",
  },
  "terms-of-use": {
    path: "/terms-of-use",
    title: "Terms of Use | PCH Doctors",
    description:
      "Read the terms governing PCH Doctors' MMJ and GLP-1 telehealth services, including eligibility, fees, and liability.",
  },
  "refund-policy": {
    path: "/refund-policy",
    title: "Refund Policy | PCH Doctors",
    description:
      "Learn when you qualify for a refund on PCH Doctors' MMJ evaluations and GLP-1 program, including our refund process.",
  },
  "accessibility-statement": {
    path: "/accessibility-statement",
    title: "Accessibility Statement | PCH Doctors",
    description:
      "PCH Doctors' commitment to accessible telehealth, covering our accessibility standards, website features, and assistance.",
  },
  "editorial-policy": {
    path: "/editorial-policy",
    title: "Editorial Policy | PCH Doctors",
    description:
      "See the editorial standards behind PCH Doctors' MMJ and GLP-1 content, including our accuracy, ethics, and review process.",
  },
  disclaimer: {
    path: "/disclaimer",
    title: "Disclaimer & Policies | PCH Doctors",
    description:
      "Important disclaimers about PCH Doctors' MMJ and GLP-1 telehealth services, including limits on medical guidance.",
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
