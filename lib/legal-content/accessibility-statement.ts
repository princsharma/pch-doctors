import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const accessibilityStatementDocument: LegalDocument = {
  slug: "accessibility-statement",
  title: "Accessibility Statement",
  eyebrow: "Inclusive Access",
  description:
    "PCH Doctors' commitment to accessible telehealth, covering our accessibility standards, website features, and how to get assistance or share feedback.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Editorial Policy",
    href: "/editorial-policy",
  },
  intro: [
    `At ${SITE.name}, we're committed to making our website and telehealth services accessible to everyone, including people with disabilities. We want every patient to be able to access information, check eligibility, and schedule a consultation with ease, and we treat accessibility as an ongoing priority.`,
  ],
  sections: [
    {
      number: "01",
      title: "Our Commitment",
      paragraphs: [
        "We're dedicated to making our website usable for people with diverse abilities and assistive technology needs, so everyone can navigate our site and access information about our medical marijuana consultation and GLP-1 weight loss services.",
        "As a telehealth provider, we know how important it is for patients to connect with licensed physicians online without unnecessary barriers. We regularly review and update our website to improve usability and accessibility as technology and standards evolve.",
      ],
    },
    {
      number: "02",
      title: "Accessibility Standards",
      paragraphs: [
        "Our website is designed with accessibility best practices in mind and aligns with the Web Content Accessibility Guidelines (WCAG) 2.1, developed by the World Wide Web Consortium. These are internationally recognized standards meant to improve accessibility for people with visual, auditory, motor, and cognitive disabilities, and to support compatibility with assistive technology.",
      ],
    },
    {
      number: "03",
      title: "Website Accessibility Features",
      paragraphs: ["To support accessibility, our website may include:"],
      bullets: [
        "Clear and consistent page structure",
        "Logical heading hierarchy",
        "Screen reader compatibility",
        "Alternative text for images",
        "Responsive design for mobile and desktop",
        "Readable font sizes and scalable text",
        "Sufficient color contrast for readability",
      ],
    },
    {
      number: "04",
      title: "Third-Party Services",
      paragraphs: [
        "Some features on our site, like scheduling tools or payment processors, rely on third party services. We work to keep our platform accessible, but we can't guarantee the accessibility of tools outside our direct control. If you run into an issue with a third party tool, please contact us for help.",
      ],
    },
    {
      number: "05",
      title: "Assistance and Feedback",
      paragraphs: [
        "If you have trouble accessing any part of our website, or need help with our content or services in another format, please contact us. We'll make reasonable efforts to get you what you need.",
        "We also welcome feedback on accessibility. If you notice a barrier or have a suggestion, let us know. It helps us keep improving.",
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
      number: "06",
      title: "Related Policies",
      paragraphs: [
        "Accessibility is part of our broader commitment to protecting patient rights and providing secure telehealth services. For more detail on how we handle your information, see our:",
      ],
      bullets: [
        "Privacy Policy",
        "Terms of Use",
        "HIPAA Compliance page",
      ],
    },
  ],
};
