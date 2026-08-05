import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const accessibilityStatementDocument: LegalDocument = {
  slug: "accessibility-statement",
  title: "Accessibility Statement",
  eyebrow: "Inclusive Access",
  description:
    "How PCH Doctors works to make our website and telehealth services accessible to everyone.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Editorial Policy",
    href: "/editorial-policy",
  },
  intro: [
    `At ${SITE.name}, we are committed to ensuring that our website and telehealth services are accessible to all users, including individuals with disabilities. We strive to provide an inclusive digital experience that allows patients to access information, review eligibility requirements, and schedule online consultations with ease.`,
    "Accessibility is an ongoing priority as we continue to improve our platform.",
  ],
  sections: [
    {
      number: "01",
      title: "Commitment to Accessibility",
      paragraphs: [
        "We are dedicated to making our website usable and accessible for individuals with diverse abilities and assistive technology needs. Our goal is to ensure that all users can navigate our site efficiently and access important information about our online medical marijuana evaluation services and clinician-guided GLP-1 weight management programs.",
        `As a telehealth provider, we recognize the importance of providing accessible digital healthcare services so patients can conveniently connect with state-licensed clinicians online. We continuously review and update our website to improve usability and accessibility for all visitors.`,
        "Accessibility is an ongoing effort, and we remain committed to enhancing the digital experience for our patients.",
      ],
    },
    {
      number: "02",
      title: "Accessibility Standards",
      paragraphs: [
        "Our website is designed with accessibility best practices in mind and aligns with the Web Content Accessibility Guidelines (WCAG) 2.1, developed by the World Wide Web Consortium.",
        "These guidelines are internationally recognized standards intended to improve accessibility for individuals with visual, auditory, motor, and cognitive disabilities and to support compatibility with assistive technologies.",
      ],
    },
    {
      number: "03",
      title: "Website Accessibility Features",
      paragraphs: [
        "To support accessibility, our website may include the following features:",
      ],
      bullets: [
        "Clear and consistent page structure",
        "Logical heading hierarchy",
        "Screen reader compatibility",
        "Alternative text for images",
        "Responsive design for mobile and desktop devices",
        "Readable font sizes and scalable text options",
        "Sufficient color contrast for improved readability",
      ],
      paragraphsAfter: [
        "These features help ensure users can access information about our telehealth services effectively.",
      ],
    },
    {
      number: "04",
      title: "Telehealth Accessibility",
      paragraphs: [
        "Our platform is designed to reduce barriers to healthcare by enabling patients to complete medical marijuana evaluations and GLP-1 consultations online where permitted by applicable state law. We strive to ensure that individuals using assistive technologies can access information related to scheduling, eligibility requirements, and patient support services.",
        "We are committed to making our digital healthcare experience as accessible as possible.",
      ],
    },
    {
      number: "05",
      title: "Ongoing Improvements",
      paragraphs: [
        "We regularly review our website to identify opportunities for improvement and to enhance accessibility and usability. As technology and standards evolve, we continue implementing updates to support a more inclusive experience for all users.",
      ],
    },
    {
      number: "06",
      title: "Third-Party Services",
      paragraphs: [
        "Some website features may rely on third-party tools, such as scheduling systems or payment processors. While we strive to maintain accessibility throughout our platform, we cannot guarantee the accessibility of external services outside our direct control.",
        "If you encounter any issues with third-party tools, please contact us for assistance.",
      ],
    },
    {
      number: "07",
      title: "Accessibility Assistance",
      paragraphs: [
        "If you experience difficulty accessing any part of our website or need assistance with our content or services, please contact us. We will make reasonable efforts to provide the information or support you need in an accessible format.",
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
      number: "08",
      title: "Related Policies",
      paragraphs: [
        "Accessibility is part of our broader commitment to protecting patient rights, maintaining transparency, and providing secure telehealth services. To learn more about how we protect your information and govern the use of our platform, please review the following pages:",
      ],
      bullets: [
        "Privacy Policy",
        "Terms of Use",
        "HIPAA Compliance Policy",
      ],
      paragraphsAfter: [
        "These policies outline how we handle patient data, maintain secure communications, and ensure responsible use of our telehealth services.",
      ],
    },
    {
      number: "09",
      title: "Feedback",
      paragraphs: [
        "We welcome feedback regarding the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know. Your input helps us continue improving the accessibility and usability of our platform.",
        "Need help? Contact us using the information in the Accessibility Assistance section above.",
      ],
    },
  ],
};
