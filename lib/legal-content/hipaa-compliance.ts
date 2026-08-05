import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const hipaaComplianceDocument: LegalDocument = {
  slug: "hipaa-compliance",
  title: "HIPAA Compliance and Health Information Privacy",
  eyebrow: "Federal Compliance",
  description:
    "How PCH Doctors protects patient health information under HIPAA privacy and security standards.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Consent for Telehealth",
    href: "/consent-for-telehealth",
  },
  intro: [
    `${SITE.name} is committed to protecting the privacy and security of patient health information. As a telehealth platform that connects patients with licensed clinicians for medical marijuana evaluations and GLP-1 weight management programs, we take the confidentiality of personal and medical information seriously.`,
    "We follow healthcare privacy standards designed to protect patient data, including the requirements established under the Health Insurance Portability and Accountability Act (HIPAA), and maintain the technologies and procedures that support secure telehealth consultations.",
  ],
  sections: [
    {
      number: "01",
      title: "What Is HIPAA?",
      paragraphs: [
        "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a United States federal law that establishes national standards for the protection of sensitive patient health information.",
        "HIPAA requires healthcare providers and organizations that handle medical data to implement safeguards that protect Protected Health Information (PHI) from unauthorized access, disclosure, or misuse.",
        "HIPAA regulations primarily focus on:",
      ],
      bullets: [
        "Protecting the confidentiality of patient health information",
        "Ensuring the security of electronic health records and communications",
        "Giving patients rights regarding access to and control over their medical data",
      ],
      paragraphsAfter: [
        "Organizations that handle health information must comply with HIPAA privacy and security rules to ensure patient data is handled responsibly and securely.",
      ],
    },
    {
      number: "02",
      title: "Our Commitment to HIPAA Compliance",
      paragraphs: [
        `${SITE.name} implements administrative, technical, and physical safeguards designed to support HIPAA privacy and security standards.`,
        "Our privacy and security practices are intended to ensure that patient health information is:",
      ],
      bullets: [
        "Collected only when necessary to provide medical services",
        "Stored using secure systems and access controls",
        "Protected against unauthorized disclosure or misuse",
        "Accessed only by authorized healthcare professionals and necessary personnel",
      ],
      paragraphsAfter: [
        "We continuously review our privacy policies, security systems, and operational procedures to help maintain compliance with healthcare privacy regulations.",
      ],
    },
    {
      number: "03",
      title: "What Is Protected Health Information (PHI)?",
      paragraphs: [
        "Protected Health Information (PHI) refers to identifiable information related to a person's health condition, medical treatment, or healthcare services.",
        "Examples of PHI may include:",
      ],
      bullets: [
        "Medical history or health conditions",
        "Physician consultation records",
        "Telehealth consultation information",
        "Medical marijuana evaluation details",
        "GLP-1 weight management and treatment information",
        "Personal identifiers connected to healthcare records",
      ],
      paragraphsAfter: [
        "Under HIPAA, this information must be protected using appropriate privacy and security safeguards.",
      ],
    },
    {
      number: "04",
      title: `How ${SITE.name} Protects Patient Information`,
      paragraphs: [
        "We use several layers of safeguards to help protect patient health information.",
        "Administrative Safeguards: Policies and procedures that limit access to health information to authorized individuals who require it to perform their duties.",
        "Technical Safeguards: Secure systems for storing and transmitting sensitive data. These systems help protect patient information through encrypted communications, access controls, and secure technologies.",
        "Physical Safeguards: Protection for the infrastructure used to store health information, including servers, networks, and systems that support telehealth services.",
        "Together, these safeguards help maintain the confidentiality and integrity of patient information.",
      ],
    },
    {
      number: "05",
      title: "Telehealth Privacy and Security Standards",
      paragraphs: [
        `${SITE.name} provides telehealth services that allow patients to consult with state-licensed clinicians remotely for medical marijuana evaluations and clinician-guided GLP-1 weight management programs.`,
        "Telehealth consultations may involve:",
      ],
      bullets: [
        "Secure video consultations",
        "Protected electronic messaging",
        "Secure transmission of medical documentation",
      ],
      paragraphsAfter: [
        "These technologies are designed to help protect patient privacy and maintain confidentiality during remote medical evaluations.",
      ],
    },
    {
      number: "06",
      title: "Use and Disclosure of Health Information",
      paragraphs: [
        "Patient health information may be used or disclosed only as permitted under applicable healthcare privacy laws.",
        "This may include uses such as:",
      ],
      bullets: [
        "Facilitating medical evaluations conducted by licensed clinicians",
        "Supporting telehealth consultations",
        "Maintaining necessary administrative and medical records",
        "Complying with legal or regulatory obligations when required by law",
      ],
      paragraphsAfter: [
        `${SITE.name} does not sell patient medical information.`,
      ],
    },
    {
      number: "07",
      title: "Patient Privacy Rights",
      paragraphs: [
        "Patients may have certain rights regarding their protected health information, including the ability to:",
      ],
      bullets: [
        "Request access to their personal health information",
        "Request corrections to inaccurate records",
        "Request restrictions on certain uses or disclosures of information",
        "Request confidential communication when appropriate",
      ],
      paragraphsAfter: [
        "Requests for personal health information may be submitted using the contact information below.",
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
      title: "Data Security Practices",
      paragraphs: [
        `${SITE.name} uses security practices designed to protect patient data from unauthorized access, disclosure, alteration, or destruction.`,
        "Sensitive information transmitted through the platform may be protected using secure communication technologies and controlled access systems.",
        "While no electronic system can guarantee absolute security, we implement reasonable safeguards designed to help protect patient information.",
        "This HIPAA Compliance Notice should be read together with our Privacy Policy and Terms of Use, which provide additional information regarding how personal data is collected, used, and disclosed.",
      ],
    },
    {
      number: "09",
      title: "Frequently Asked Questions",
      faqs: [
        {
          question: `Is ${SITE.name} HIPAA compliant?`,
          answer: `Yes. ${SITE.name} follows privacy and security practices designed to comply with HIPAA standards for protecting patient health information during telehealth consultations, medical marijuana evaluations, and GLP-1 weight management programs.`,
        },
        {
          question: `How does ${SITE.name} protect patient information?`,
          answer:
            "We use secure systems, access controls, and privacy safeguards designed to protect patient information from unauthorized access or disclosure.",
        },
        {
          question: "Are telehealth consultations secure?",
          answer: `Telehealth consultations conducted through ${SITE.name} are designed to support HIPAA-compliant privacy protections, maintaining the confidentiality of patient information during remote medical evaluations.`,
        },
        {
          question: "Is my medical marijuana evaluation confidential?",
          answer:
            "Yes. Medical marijuana evaluations conducted through licensed clinicians are treated as confidential medical information and handled according to healthcare privacy standards and HIPAA guidelines.",
        },
        {
          question: "Who can access my health information?",
          answer:
            "Access to protected health information is limited to authorized healthcare providers and necessary personnel involved in providing services through the platform.",
        },
      ],
    },
  ],
};
