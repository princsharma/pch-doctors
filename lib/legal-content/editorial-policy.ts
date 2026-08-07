import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const editorialPolicyDocument: LegalDocument = {
  slug: "editorial-policy",
  title: "Editorial Policy",
  eyebrow: "Content Standards",
  description:
    "See the editorial standards behind PCH Doctors' content on medical marijuana consultations and GLP-1 weight loss, including our accuracy, ethics, and review process.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  intro: [
    `At ${SITE.name}, we're committed to delivering accurate, reliable, and practical information about medical marijuana, GLP-1 weight loss, and related health and legal topics. Our editorial team holds every piece of content to a high standard of credibility, clarity, and usefulness for our readers.`,
  ],
  sections: [
    {
      number: "01",
      title: "Our Core Principles",
      paragraphs: [
        "Vision: To make safe, legal, and effective medical marijuana and GLP-1 weight loss information accessible to every patient and caregiver.",
        "Mission: To provide clear guidance on MMJ and GLP-1 usage, regulations, and wellness applications, delivered in an accurate, ethical, and approachable way.",
        "Promise: We follow applicable medical and regulatory protocols, and every claim we publish is backed by licensed medical professionals and credible research.",
      ],
    },
    {
      number: "02",
      title: "Editorial Commitment",
      paragraphs: ["Our editorial process is built around these standards:"],
      bullets: [
        "Expertly Written and Reviewed: All content is created and reviewed by a team experienced in cannabis and metabolic health, aiming for information that's informative, actionable, and factually correct.",
        "Accuracy and Credibility: Content is fact checked against peer reviewed studies, state regulations, and official medical sources.",
        "Debunking Myths: We work to clear up common misconceptions around medical marijuana and GLP-1 medications, including their effects and legal status.",
        "Licensed Oversight: Any medical or legal guidance comes from licensed professionals in their field, so recommendations stay legitimate and trustworthy.",
        "Meticulous Editing: Every piece goes through review before publishing, and we continually refine our process to improve accuracy over time.",
      ],
    },
    {
      number: "03",
      title: "Ethical Approach",
      paragraphs: [
        "Kindness and Empathy: We don't publish content that criticizes individuals, providers, or practices. Our goal is to educate with respect for different perspectives.",
        "Objectivity on Sensitive Topics: We approach medical, legal, and wellness topics objectively, always prioritizing patient safety and legal compliance.",
      ],
    },
    {
      number: "04",
      title: "Open to Suggestions",
      paragraphs: [
        `No system is perfect. If you spot an error or have a suggestion, reach out to us at ${SITE.email}. We take feedback seriously and update our content whenever it improves accuracy or usefulness.`,
      ],
      contact: {
        company: SITE.name,
        website: SITE.url,
        email: SITE.email,
        phone: SITE.phone,
        address: SITE.address,
      },
    },
    {
      number: "05",
      title: "Our Promise to You",
      paragraphs: [
        `Our goal is to give patients and caregivers clear, actionable, and trustworthy information. Through our commitment to accuracy, ethics, and patient advocacy, ${SITE.name} aims to be a resource you can rely on for both medical marijuana and GLP-1 weight loss guidance.`,
      ],
    },
  ],
};
