import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const consentForTelehealthDocument: LegalDocument = {
  slug: "consent-for-telehealth",
  title: "Consent to Telehealth",
  eyebrow: "Informed Consent",
  description:
    "How telehealth consultations work at PCH Doctors and what you agree to when receiving remote care.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
  intro: [
    `This Consent to Telehealth explains how telehealth services work when you use ${SITE.name}. Telehealth allows patients to communicate with licensed healthcare professionals remotely using secure electronic communication technologies.`,
    `By using telehealth services through ${SITE.name}, you acknowledge that you have read and agree to receive healthcare services through telehealth technologies where permitted under applicable U.S. state law.`,
  ],
  sections: [
    {
      number: "01",
      title: "Telehealth Services",
      paragraphs: [
        "Telehealth services use electronic communications to enable healthcare providers to evaluate, diagnose, and provide medical guidance remotely.",
        "Telehealth consultations may include:",
      ],
      bullets: [
        "Live video consultations",
        "Audio or telephone communication",
        "Secure electronic messaging",
        "Digital transmission of medical information and records",
      ],
      paragraphsAfter: [
        `${SITE.name} operates a technology platform that helps connect patients with independent, state-licensed clinicians for medical marijuana evaluations and clinician-guided GLP-1 weight management programs, where permitted by applicable state law. Additional information about the platform and our services can be found in our Terms of Use.`,
      ],
    },
    {
      number: "02",
      title: "Nature of Telehealth Consultations",
      paragraphs: [
        "Telehealth consultations differ from traditional in-person medical visits. Because telehealth is conducted remotely, healthcare providers rely on the information you provide during the consultation to evaluate your condition.",
        "Certain medical conditions or circumstances may require an in-person examination, and a clinician may determine that telehealth services are not appropriate for your situation.",
      ],
    },
    {
      number: "03",
      title: "Potential Benefits of Telehealth",
      paragraphs: ["Telehealth services may offer several benefits, including:"],
      bullets: [
        "Improved access to healthcare services",
        "Convenience and reduced travel time",
        "Faster communication with licensed healthcare providers",
      ],
    },
    {
      number: "04",
      title: "Potential Risks and Limitations",
      paragraphs: [
        "As with any medical service, telehealth may involve certain limitations, including:",
      ],
      bullets: [
        "Technical interruptions or delays during communication",
        "Limitations in conducting physical examinations remotely",
        "Possible delays in diagnosis or treatment due to incomplete or inaccurate information",
      ],
      paragraphsAfter: [
        "You acknowledge that these limitations may affect the evaluation process.",
      ],
    },
    {
      number: "05",
      title: "Not for Emergency Medical Situations",
      paragraphs: [
        `Telehealth services provided through ${SITE.name} are not intended for emergency medical or psychiatric situations.`,
        "If you are experiencing a medical emergency, call 911 or go to the nearest emergency department immediately.",
      ],
    },
    {
      number: "06",
      title: "Provider-Patient Relationship",
      paragraphs: [
        "A provider-patient relationship is established only after a licensed clinician agrees to evaluate you and begins the medical assessment process through the telehealth consultation.",
        "Submitting information or scheduling an appointment does not automatically establish a provider-patient relationship.",
      ],
    },
    {
      number: "07",
      title: "Accuracy of Information",
      paragraphs: [
        "Healthcare providers rely on the information you provide during registration and consultation. You agree to provide accurate, complete, and truthful information regarding your health history, symptoms, and medical conditions.",
        "Providing inaccurate or incomplete information may affect the quality and safety of your care.",
      ],
    },
    {
      number: "08",
      title: "Communication Through Electronic Systems",
      paragraphs: [
        "Telehealth services may involve communication through electronic systems, including messaging platforms, video conferencing tools, and other digital technologies.",
        "While reasonable safeguards are used to protect your information, electronic communications may carry inherent risks, including technical failures and unauthorized access.",
        "Information about how your personal data is handled can be found in our Privacy Policy.",
      ],
    },
    {
      number: "09",
      title: "Privacy and Compliance",
      paragraphs: [
        `${SITE.name} is committed to protecting the privacy and security of patient health information. Telehealth consultations and related medical communications are handled in accordance with healthcare privacy standards, including the Health Insurance Portability and Accountability Act (HIPAA).`,
        "For more information about how we protect patient health information, please review our HIPAA Compliance Policy.",
      ],
    },
    {
      number: "10",
      title: "Voluntary Consent",
      paragraphs: [
        `By using telehealth services through ${SITE.name}, you acknowledge and agree that:`,
      ],
      bullets: [
        "You understand the nature of telehealth services",
        "You understand the potential benefits and limitations of telehealth consultations",
        "You voluntarily consent to receive healthcare services through telehealth technologies",
        "You have had the opportunity to review related policies, including the Terms of Use and Privacy Policy",
      ],
      paragraphsAfter: [
        "If you do not agree with this Consent to Telehealth, you should not proceed with telehealth services through the platform.",
      ],
    },
    {
      number: "11",
      title: "Questions",
      paragraphs: [
        `If you have any questions about this Consent to Telehealth or the telehealth services offered through ${SITE.name}, please contact us using the information below.`,
      ],
      contact: {
        company: SITE.name,
        website: SITE.url,
        email: SITE.email,
        phone: SITE.phoneDisplay,
        address: SITE.address,
      },
    },
  ],
};
