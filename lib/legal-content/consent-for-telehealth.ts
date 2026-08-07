import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const consentForTelehealthDocument: LegalDocument = {
  slug: "consent-to-telehealth",
  title: "Consent to Telehealth",
  eyebrow: "Informed Consent",
  description:
    "Understand how telehealth works at PCH Doctors, including the benefits, risks, and privacy protections for our medical marijuana and GLP-1 weight loss consultations.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Terms of Use",
    href: "/terms-of-use",
  },
  intro: [
    `This Consent to Telehealth explains how telehealth services work when you use ${SITE.name}. Telehealth lets you connect with licensed healthcare professionals remotely, using secure electronic communication.`,
    "By using our telehealth services, you confirm that you've read and understood this consent, and you agree to receive care through telehealth technologies where permitted by law.",
  ],
  sections: [
    {
      number: "01",
      title: "Telehealth Services",
      paragraphs: [
        "Telehealth uses electronic communication to let healthcare providers evaluate you and offer medical guidance remotely. This may include live video, phone or audio calls, secure messaging, and digital transmission of your medical information.",
        `${SITE.name} operates a technology platform that connects you with independent licensed physicians for medical marijuana evaluations and GLP-1 weight loss consultations, where permitted by applicable law. More detail on how the platform works is in our Terms of Use.`,
      ],
    },
    {
      number: "02",
      title: "Nature of Telehealth Consultations",
      paragraphs: [
        "Telehealth differs from an in person visit. Because it's conducted remotely, your provider relies on the information you share during the consultation to evaluate you. Some conditions may require an in person exam, and your physician may determine telehealth isn't appropriate for your situation.",
      ],
    },
    {
      number: "03",
      title: "Benefits and Risks of Telehealth",
      paragraphs: [
        "Telehealth can offer real advantages, including easier access to care, more convenience, less travel, and faster communication with your provider.",
        "It also comes with some limitations, such as technical interruptions, restrictions on physical examination, and possible delays in diagnosis or treatment if the information provided is incomplete or inaccurate. You acknowledge these limitations may affect your evaluation.",
      ],
    },
    {
      number: "04",
      title: "Not for Emergency Situations",
      paragraphs: [
        `Telehealth through ${SITE.name} is not intended for medical or psychiatric emergencies. If you're experiencing one, call 911 or go to the nearest emergency department right away.`,
      ],
    },
    {
      number: "05",
      title: "Provider-Patient Relationship",
      paragraphs: [
        "A provider-patient relationship starts only once a licensed physician agrees to evaluate you and begins your consultation. Submitting information or booking an appointment does not, on its own, create that relationship.",
      ],
    },
    {
      number: "06",
      title: "Accuracy of Information",
      paragraphs: [
        "Your provider relies on what you share during registration and your consultation. You agree to give accurate, complete, and truthful information about your health history, symptoms, and conditions. Inaccurate or incomplete information can affect the quality and safety of your care.",
      ],
    },
    {
      number: "07",
      title: "Privacy and Data Security",
      paragraphs: [
        "Telehealth involves communicating through electronic systems like messaging and video platforms. While we use reasonable safeguards to protect your information, electronic communication carries some inherent risk, including technical failures or unauthorized access.",
        `${SITE.name} handles your health information in line with healthcare privacy standards, including HIPAA. You can find more detail in our Privacy Policy and our HIPAA Compliance page.`,
      ],
    },
    {
      number: "08",
      title: "Voluntary Consent",
      paragraphs: [
        "By using our telehealth services, you confirm that you understand how telehealth works, along with its benefits and limitations, that you're voluntarily choosing to receive care this way, and that you've had a chance to review our Terms of Use and Privacy Policy.",
        "Note: If you don't agree with this Consent to Telehealth, please don't proceed with telehealth services through our platform.",
      ],
    },
    {
      number: "09",
      title: "Questions",
      paragraphs: [
        "If you have questions about this consent or our telehealth services, contact us through the information on our Contact Us page.",
      ],
      contact: {
        company: SITE.name,
        website: SITE.url,
        email: SITE.email,
        phone: SITE.phone,
        address: SITE.address,
      },
    },
  ],
};
