import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const termsOfUseDocument: LegalDocument = {
  slug: "terms-of-use",
  title: "Terms of Use",
  eyebrow: "Legal Terms",
  description:
    "Read the terms governing your use of PCH Doctors' medical marijuana consultation and GLP-1 weight loss telehealth services, including eligibility, fees, and liability.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Refund Policy",
    href: "/refund-policy",
  },
  intro: [
    "PLEASE REVIEW THESE TERMS CAREFULLY BEFORE USING THE PCH DOCTORS WEBSITE OR SERVICES. THEY EXPLAIN YOUR LEGAL RIGHTS, OUR DISCLAIMERS OF WARRANTIES, AND LIMITATIONS OF LIABILITY.",
    "BY ACCESSING OR USING THIS WEBSITE OR ANY SERVICES ON THE PLATFORM, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS OF USE AND OUR PRIVACY POLICY.",
    "PCH DOCTORS IS A TECHNOLOGY PLATFORM THAT CONNECTS YOU WITH INDEPENDENT LICENSED PHYSICIANS FOR MEDICAL MARIJUANA EVALUATIONS AND GLP-1 WEIGHT LOSS CONSULTATIONS. WE DO NOT PROVIDE MEDICAL ADVICE AND DO NOT GUARANTEE ANY RECOMMENDATION OR PRESCRIPTION.",
    "CONTINUED USE OF THE WEBSITE AFTER CHANGES TO THESE TERMS MEANS YOU ACCEPT THOSE CHANGES.",
  ],
  sections: [
    {
      number: "01",
      title: "Overview of Services",
      paragraphs: [
        `${SITE.name} is a technology platform that connects you with independent licensed physicians for medical marijuana evaluations and GLP-1 medical weight loss consultations, delivered through telehealth.`,
        `We are not a medical practice. Every evaluation, recommendation, and prescription comes from an independent licensed physician using their own professional judgment, based on your individual consultation. ${SITE.name} does not influence those decisions and cannot guarantee any outcome.`,
      ],
    },
    {
      number: "02",
      title: "Eligibility",
      paragraphs: [
        `${SITE.name} is available nationwide, though medical marijuana evaluations depend on the laws of the state you are in at the time of your evaluation.`,
        "By using our services, you confirm that:",
      ],
      bullets: [
        "You are at least 18, or the minimum age required in your state",
        "You are located somewhere the requested service is legal",
        "The information you provide is accurate and truthful",
      ],
      paragraphsAfter: [
        "Physicians are licensed in the state where you are located during your consultation. Eligibility varies by state and by your individual health, and approval is never guaranteed. You are responsible for following the laws that apply to you, and we may limit or discontinue services in any jurisdiction where the law requires it.",
      ],
    },
    {
      number: "03",
      title: "Physician-Patient Relationship",
      paragraphs: [
        `A physician-patient relationship begins only once a licensed physician starts your evaluation. ${SITE.name} does not employ or supervise these physicians. They are independent professionals who make their own clinical decisions.`,
        `Any medical advice, evaluation, or recommendation you receive comes from the physician, not from ${SITE.name}.`,
      ],
    },
    {
      number: "04",
      title: "Telehealth Consent",
      paragraphs: [
        "Using our services means you consent to receive evaluations through telehealth, including video, audio, messaging, and other digital communication.",
        "Please keep in mind:",
      ],
      bullets: [
        "Telehealth differs from an in person visit",
        "Some conditions may not be suitable for remote evaluation",
        "Technical issues can delay a consultation",
        "Your physician may require an in person exam",
      ],
      paragraphsAfter: [
        "Telehealth is not intended for medical emergencies. By using our services, you accept these limitations.",
      ],
    },
    {
      number: "05",
      title: "Privacy Policy",
      paragraphs: [
        "Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information, including health information, in compliance with HIPAA. Using our website means you agree to that policy.",
      ],
    },
    {
      number: "06",
      title: "Federal Law Disclosure",
      paragraphs: [
        `Marijuana remains a Schedule I controlled substance under federal law, even in states that permit medical use. ${SITE.name} complies with applicable state laws, but we make no claims about federal legality, and nothing here is legal advice. You are responsible for knowing the laws that apply to you.`,
        "GLP-1 medications, by contrast, are FDA regulated prescription drugs that are legal at the federal level. A prescription is issued only if your physician determines it is medically appropriate, and it is filled through a licensed pharmacy.",
      ],
    },
    {
      number: "07",
      title: "User Responsibilities",
      paragraphs: [
        "You agree to use our platform lawfully and to provide accurate information. You agree not to:",
      ],
      bullets: [
        "Submit false or misleading information",
        "Use someone else's identity",
        "Try to access accounts or systems without authorization",
        "Disrupt the platform",
        "Misuse or copy our content or technology",
      ],
      paragraphsAfter: [
        "We may suspend or terminate your access if you violate these Terms or misuse our services.",
      ],
    },
    {
      number: "08",
      title: "Fees and Refunds",
      paragraphs: [
        "Fees are disclosed before you confirm any service. Refund eligibility depends on factors like physician eligibility determinations and service timelines, detailed in our Refund Policy. Shipping terms for GLP-1 prescriptions are covered in our Shipping Policy.",
      ],
    },
    {
      number: "09",
      title: "Limitation of Liability",
      paragraphs: [
        `To the extent allowed by law, ${SITE.name} is not liable for indirect, incidental, or consequential damages related to your use of our services, including lost profits or data. Our total liability will not exceed what you paid us in the twelve months before a claim arises. Where state law does not allow these limits, liability is capped at what the law permits.`,
      ],
    },
    {
      number: "10",
      title: "Indemnification",
      paragraphs: [
        `You agree to cover ${SITE.name}, its affiliates, and staff against claims or costs, including legal fees, arising from your misuse of the services, your violation of these Terms or applicable law, false information you provide, or your infringement of someone else's rights. This obligation continues after your use of our services ends.`,
      ],
    },
    {
      number: "11",
      title: "Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the State of California, and any legal action must be brought in state or federal courts located there. Claims must be brought individually, not as part of a class action, though either party may still seek injunctive relief where appropriate.",
      ],
    },
    {
      number: "12",
      title: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms at any time. Changes take effect once posted, and continuing to use our services afterward means you accept them. We may also modify or discontinue any part of our services as needed for legal, regulatory, or operational reasons.",
      ],
    },
    {
      number: "13",
      title: "Termination",
      paragraphs: [
        "We may suspend or terminate your access at any time, with or without notice, if we believe you have violated these Terms. Ending your access does not cancel obligations you already owe us, such as payments or indemnification. Sections that are meant to survive termination, like Liability, Indemnification, and Governing Law, continue to apply.",
      ],
    },
  ],
};
