import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const editorialPolicyDocument: LegalDocument = {
  slug: "editorial-policy",
  title: "Editorial Policy",
  eyebrow: "Content Standards",
  description:
    "How PCH Doctors creates, reviews, and maintains accurate medical and wellness content.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  intro: [
    `At ${SITE.name}, we are committed to delivering accurate, reliable, and practical information about medical marijuana, clinician-guided GLP-1 weight management, cannabis wellness, and related legal and health topics. Our editorial process is designed so content meets high standards of credibility, clarity, and usefulness for our readers.`,
  ],
  sections: [
    {
      number: "01",
      title: "Our Core Principles",
      paragraphs: [
        "Vision: To make safe, legal, and effective information about medical marijuana and clinician-guided weight management accessible to patients and caregivers in the states we serve.",
        "Mission: To provide clear guidance on medical marijuana use, GLP-1 treatment pathways, applicable regulations, and wellness applications in an accurate, ethical, and approachable manner.",
        "Promise: We aim to follow applicable state and federal healthcare protocols, offering information supported by licensed medical professionals and credible research.",
      ],
    },
    {
      number: "02",
      title: "Editorial Standards",
      paragraphs: [
        "All content is created and reviewed by writers with experience in cannabis, weight management, and healthcare topics, and every piece is fact-checked against peer-reviewed studies, applicable state regulations, and official medical sources before publication.",
        "We work to dispel misinformation about medical marijuana and GLP-1 medications, clarifying misconceptions around cannabis use, effects, prescription treatments, and legal guidelines. Any medical or legal guidance referenced in our content comes from licensed professionals in their respective fields, and only current, trustworthy sources are used to support what we publish.",
      ],
    },
    {
      number: "03",
      title: "Ethical Approach",
      paragraphs: [
        "We avoid publishing content that criticizes individuals, dispensaries, pharmacies, or practitioners. Our focus is on educating readers with respect, not taking sides.",
        "On medical, legal, and wellness topics, we approach the subject matter objectively, prioritizing patient safety, legal compliance, and factual accuracy above all else.",
      ],
    },
    {
      number: "04",
      title: "Review Process",
      paragraphs: [
        "Every piece of content is reviewed before publication for clarity, accuracy, and adherence to these standards. We recognize that no process is perfect. If you notice an error or have a suggestion, contact us using the information below.",
        "Every report is reviewed, and content is updated when it improves accuracy or usefulness.",
      ],
      contact: {
        company: SITE.name,
        website: SITE.url,
        email: SITE.email,
        phone: SITE.phoneDisplay,
        address: SITE.address,
      },
    },
    {
      number: "05",
      title: "Our Promise to You",
      paragraphs: [
        `Our goal is to give patients, caregivers, and readers clear, actionable, and trustworthy information. Through our commitment to accuracy, ethics, and patient advocacy, we aim to be a resource people can rely on for medical marijuana and clinician-guided weight management information.`,
        "Spot an error? Contact us using the details in the Review Process section above.",
      ],
    },
  ],
};
