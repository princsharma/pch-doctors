import { accessibilityStatementDocument } from "@/lib/legal-content/accessibility-statement";
import { consentForTelehealthDocument } from "@/lib/legal-content/consent-for-telehealth";
import { disclaimerDocument } from "@/lib/legal-content/disclaimer";
import { editorialPolicyDocument } from "@/lib/legal-content/editorial-policy";
import { hipaaComplianceDocument } from "@/lib/legal-content/hipaa-compliance";
import { privacyPolicyDocument } from "@/lib/legal-content/privacy-policy";
import { refundPolicyDocument } from "@/lib/legal-content/refund-policy";
import { shippingPolicyDocument } from "@/lib/legal-content/shipping-policy";
import { termsOfUseDocument } from "@/lib/legal-content/terms-of-use";

export type LegalFaq = {
  question: string;
  answer: string;
};

export type LegalSection = {
  number: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
  /** Optional second bullet list (e.g. "you will not"). */
  bulletsAfter?: string[];
  paragraphsFinal?: string[];
  faqs?: LegalFaq[];
  contact?: {
    company: string;
    website: string;
    email: string;
    phone: string;
    address?: string;
  };
};

export type LegalDocument = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  published: string;
  updated: string;
  intro: string[];
  sections: LegalSection[];
  next?: {
    label: string;
    href: string;
  };
};

export type LegalPageMeta = {
  slug: string;
  title: string;
  description: string;
  /** Used only when full document content is not ready yet. */
  placeholder?: string;
  document?: LegalDocument;
};

export const LEGAL_PAGES: LegalPageMeta[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: privacyPolicyDocument.description,
    document: privacyPolicyDocument,
  },
  {
    slug: "hipaa-compliance",
    title: "HIPAA Compliance",
    description: hipaaComplianceDocument.description,
    document: hipaaComplianceDocument,
  },
  {
    slug: "consent-for-telehealth",
    title: "Consent for Telehealth",
    description: consentForTelehealthDocument.description,
    document: consentForTelehealthDocument,
  },
  {
    slug: "terms-of-use",
    title: "Terms of Use",
    description: termsOfUseDocument.description,
    document: termsOfUseDocument,
  },
  {
    slug: "refund-policy",
    title: "Refund Policy",
    description: refundPolicyDocument.description,
    document: refundPolicyDocument,
  },
  {
    slug: "accessibility-statement",
    title: "Accessibility Statement",
    description: accessibilityStatementDocument.description,
    document: accessibilityStatementDocument,
  },
  {
    slug: "editorial-policy",
    title: "Editorial Policy",
    description: editorialPolicyDocument.description,
    document: editorialPolicyDocument,
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description: disclaimerDocument.description,
    document: disclaimerDocument,
  },
  {
    slug: "shipping-policy",
    title: "Shipping Policy",
    description: shippingPolicyDocument.description,
    document: shippingPolicyDocument,
  },
];

export function getLegalPage(slug: string) {
  return LEGAL_PAGES.find((page) => page.slug === slug);
}
