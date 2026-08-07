import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const hipaaComplianceDocument: LegalDocument = {
  slug: "hipaa-compliance-policy",
  title: "HIPAA Compliance and Health Information Privacy",
  eyebrow: "Federal Compliance",
  description:
    "See how PCH Doctors protects patient health information and meets HIPAA standards across our medical marijuana consultation and GLP-1 weight loss telehealth services.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Consent for Telehealth",
    href: "/consent-to-telehealth",
  },
  intro: [
    `${SITE.name} is committed to protecting the privacy and security of patient health information. As a telehealth platform connecting patients with licensed physicians for medical marijuana consultations and GLP-1 weight loss evaluations, we take the confidentiality of your personal and medical information seriously.`,
    "We follow healthcare privacy standards designed to meet the requirements of the Health Insurance Portability and Accountability Act (HIPAA). This page explains what HIPAA is, how we protect your information, and how privacy and security work when you use our telehealth services.",
  ],
  sections: [
    {
      number: "01",
      title: "What Is HIPAA?",
      paragraphs: [
        "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal law that sets national standards for protecting sensitive patient health information. It requires healthcare providers and organizations that handle medical data to safeguard Protected Health Information (PHI) from unauthorized access, disclosure, or misuse, while giving patients rights over their own medical data.",
      ],
    },
    {
      number: "02",
      title: "What Is Protected Health Information (PHI)?",
      paragraphs: [
        "PHI is identifiable information related to your health condition, medical treatment, or healthcare services. This can include your medical history, physician consultation records, telehealth session details, medical marijuana or GLP-1 evaluation details, and personal identifiers tied to your healthcare records. HIPAA requires this information to be protected with appropriate privacy and security safeguards.",
      ],
    },
    {
      number: "03",
      title: "How We Protect Your Information",
      paragraphs: [
        `${SITE.name} uses administrative, technical, and physical safeguards to protect patient health information, including:`,
      ],
      bullets: [
        "Policies that limit access to health information to staff who need it to do their job",
        "Encrypted communications and access controls for storing and transmitting sensitive data",
        "Secure infrastructure protecting the servers and systems behind our telehealth services",
      ],
      paragraphsAfter: [
        "We continuously review our privacy policies, security systems, and procedures to help maintain compliance with healthcare privacy regulations.",
      ],
    },
    {
      number: "04",
      title: "Telehealth Privacy and Data Security",
      paragraphs: [
        "Our telehealth consultations use secure video, protected messaging, and secure transmission of medical documentation to help protect your privacy during a remote evaluation. While no electronic system can guarantee absolute security, we use reasonable safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction.",
      ],
    },
    {
      number: "05",
      title: "Use and Disclosure of Health Information",
      paragraphs: [
        `Your health information is used or disclosed only as permitted under applicable healthcare privacy laws, such as to facilitate your medical evaluation, support your telehealth consultation, maintain necessary records, or comply with a legal requirement. ${SITE.name} does not sell patient medical information.`,
      ],
    },
    {
      number: "06",
      title: "Your Privacy Rights",
      paragraphs: [
        "You may have the right to access your personal health information, request corrections to inaccurate records, request restrictions on certain uses or disclosures, and request confidential communication when appropriate. You can submit these requests using the contact information below.",
        "Note: This HIPAA Compliance page should be read together with our Privacy Policy and Terms of Use, which cover how your personal data is collected, used, and protected in more detail.",
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
      number: "07",
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: `Is ${SITE.name} HIPAA compliant?`,
          answer:
            "Yes. We follow privacy and security practices designed to meet HIPAA standards for protecting your health information during telehealth consultations and evaluations.",
        },
        {
          question: `How does ${SITE.name} protect patient information?`,
          answer:
            "Through secure systems, access controls, and privacy safeguards designed to prevent unauthorized access or disclosure.",
        },
        {
          question: "Are telehealth consultations secure?",
          answer:
            "Yes. Consultations use technologies designed to support HIPAA compliant privacy protections and keep your information confidential.",
        },
        {
          question: "Who can access my health information?",
          answer:
            "Only authorized healthcare providers and the personnel necessary to provide your care through the platform.",
        },
      ],
    },
  ],
};
