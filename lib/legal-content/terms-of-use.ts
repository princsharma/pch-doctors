import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const termsOfUseDocument: LegalDocument = {
  slug: "terms-of-use",
  title: "Terms of Use",
  eyebrow: "Legal Terms",
  description:
    "Legal terms governing your use of the PCH Doctors website and telehealth services.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Refund Policy",
    href: "/refund-policy",
  },
  intro: [
    `Please carefully review these Terms of Use before accessing or using the ${SITE.name} website or services. These terms contain important information regarding your legal rights, disclaimers of warranties, and limitations of liability.`,
    `By accessing, browsing, registering for, or using this website or any services provided through the platform, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Use, our Privacy Policy, and any other policies referenced herein.`,
    `${SITE.name} operates as a technology platform that facilitates access to independent licensed clinicians for medical marijuana evaluations and clinician-guided GLP-1 weight management programs where permitted by applicable state law. ${SITE.name} does not provide medical advice, diagnosis, or treatment and does not guarantee that any individual will receive a medical recommendation, certification, or prescription.`,
    "Your continued use of the website following any modifications to these Terms constitutes your acceptance of those changes.",
  ],
  sections: [
    {
      number: "01",
      title: "Overview of Services",
      paragraphs: [
        `${SITE.name} operates a technology-based platform that facilitates access to independent licensed clinicians who provide medical marijuana evaluations and clinician-guided GLP-1 weight management services in U.S. states where such services are legally permitted.`,
        `${SITE.name} is not a medical practice and does not provide medical advice, diagnosis, or treatment. All clinical evaluations, medical marijuana recommendations, and treatment decisions are provided solely by independent licensed clinicians who are responsible for their own professional judgment and compliance with applicable state law.`,
        `The role of ${SITE.name} is limited to providing administrative, technological, and communication support that enables patients to connect with licensed clinicians for telehealth evaluations.`,
        `All medical marijuana recommendations and GLP-1 treatment decisions, if issued, are granted solely at the discretion of the evaluating clinician following an individualized medical assessment. ${SITE.name} does not influence or control medical decisions and does not guarantee that any user will qualify for or receive a recommendation, certification, or prescription.`,
        "Services are available where the applicable evaluations and treatments via telehealth are permitted under applicable state law.",
      ],
    },
    {
      number: "02",
      title: "Eligibility and Compliance",
      paragraphs: [
        `Services offered through ${SITE.name} are available only to individuals who are physically located in a U.S. state where the requested service is legally permitted and offered at the time of their evaluation.`,
        "By using this website and its services, you represent and warrant that:",
      ],
      bullets: [
        "You are at least 18 years of age, or the minimum legal age required under applicable state law",
        "You are physically located in a state where the requested services are legally permitted",
        "You will provide accurate, complete, and truthful information during registration and evaluation",
      ],
      paragraphsAfter: [
        "Clinicians providing services through the platform are licensed in the applicable state(s) where care is provided. You understand that eligibility requirements for medical marijuana recommendations and GLP-1 treatment are set by applicable state and federal standards, and approval is subject to clinical and regulatory requirements.",
        "You are solely responsible for complying with all applicable local, state, and federal laws relating to medical marijuana use, possession, prescribed medications, and related activities.",
        `${SITE.name} reserves the right to limit, deny, or discontinue services if legal or regulatory changes restrict such services.`,
      ],
    },
    {
      number: "03",
      title: "Physician-Patient Relationship",
      paragraphs: [
        "A clinician-patient relationship is established only once a licensed clinician agrees to evaluate you and begins the medical assessment process through the platform.",
        `${SITE.name} does not employ, control, or supervise the clinical practice of clinicians providing services through the platform. All clinicians are independent licensed professionals who exercise their own professional judgment in evaluating patients and determining whether a medical marijuana recommendation or GLP-1 treatment plan is appropriate under applicable law.`,
        `${SITE.name} does not influence medical decisions or treatment recommendations and does not guarantee that any individual will receive a medical marijuana recommendation or prescription. You understand and agree that any medical advice, evaluation, recommendation, or prescription you receive is provided solely by the clinician and not by ${SITE.name}.`,
      ],
    },
    {
      number: "04",
      title: "Telehealth Consent and Limitations",
      paragraphs: [
        `By using the services available through ${SITE.name}, you consent to receive medical evaluations and related services through telehealth technologies, where permitted by applicable law.`,
        "Telehealth services are delivered using electronic communication methods, which may include video conferencing, audio communication, electronic messaging, and digital transmission of medical information.",
        "You acknowledge and understand that:",
      ],
      bullets: [
        "Telehealth consultations may differ from in-person medical visits",
        "Certain conditions may not be suitable for telehealth evaluation",
        "Technical difficulties may interrupt or delay communication",
        "The evaluating clinician may determine that an in-person examination is necessary",
      ],
      paragraphsAfter: [
        "Telehealth services are not intended for emergency medical situations. By proceeding with telehealth services, you voluntarily accept any limitations associated with remote medical evaluations as permitted by law. Additional details are provided in our Consent for Telehealth.",
      ],
    },
    {
      number: "05",
      title: "Privacy Policy",
      paragraphs: [
        "Your use of the website and services is also governed by our Privacy Policy, which describes how we collect, use, disclose, and safeguard your personal information, including information submitted during medical evaluations. All personal health information is collected, transmitted, and stored in compliance with HIPAA privacy and security standards where applicable.",
        "By accessing or using the website, you acknowledge that you have read and agree to the terms of our Privacy Policy.",
      ],
    },
    {
      number: "06",
      title: "Federal Law and Regulatory Disclosure",
      paragraphs: [
        "Medical marijuana laws vary by state, and eligibility requirements differ depending on applicable state regulations. While certain states permit medical use of marijuana under state law, marijuana remains classified as a Schedule I controlled substance under United States federal law. Federal law may prohibit certain activities related to marijuana, including possession, distribution, and use.",
        `${SITE.name} operates in compliance with applicable state laws governing medical marijuana evaluations and clinician-guided weight management services where offered. However, we make no representation regarding the legality of marijuana under federal law.`,
        "You are solely responsible for understanding and complying with all local, state, and federal laws that apply to you, including laws related to the possession, use, transportation, or distribution of medical marijuana and the use of prescribed medications.",
        "Nothing on this website should be interpreted as legal advice regarding marijuana laws or prescription medications.",
      ],
    },
    {
      number: "07",
      title: "User Responsibilities and Prohibited Conduct",
      paragraphs: [
        "By accessing or using the website and services, you agree to use the platform only for lawful purposes and in accordance with these Terms.",
        "You agree that you will:",
      ],
      bullets: [
        "Provide accurate, complete, and truthful information during registration and medical evaluation",
        "Maintain the confidentiality of your account credentials",
        "Comply with all applicable laws and regulations",
      ],
      paragraphsAfter: ["You agree that you will not:"],
      bulletsAfter: [
        "Provide false, misleading, or fraudulent information",
        "Use another person's identity or credentials",
        "Attempt to gain unauthorized access to the website, systems, or accounts",
        "Interfere with or disrupt the operation of the platform",
        "Use the services for any unlawful purpose",
        "Copy, modify, distribute, reverse engineer, or otherwise misuse website content or technology",
      ],
      paragraphsFinal: [
        `${SITE.name} reserves the right to suspend, restrict, or terminate access to the website or services if you violate these Terms or engage in conduct that we determine, in our sole discretion, is unlawful, fraudulent, abusive, or harmful.`,
      ],
    },
    {
      number: "08",
      title: "Fees and Refund Policy",
      paragraphs: [
        "Fees for medical marijuana evaluations and weight management program services are disclosed at the time of scheduling and prior to confirmation of services.",
        "Refund eligibility is subject to specific conditions, including but not limited to clinician eligibility determinations and service delivery timelines.",
        "Complete details regarding refunds, eligibility criteria, and procedures are set forth in our Refund Policy.",
      ],
    },
    {
      number: "09",
      title: "Limitation of Liability",
      paragraphs: [
        `To the fullest extent permitted by applicable law, ${SITE.name}, its affiliates, officers, directors, employees, and representatives shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising out of or related to your use of the website or services.`,
        `This includes, but is not limited to, loss of profits, data, business opportunities, or service interruptions or delays in evaluation. In no event shall ${SITE.name}'s total liability exceed the amount paid by you for services through the platform in the twelve (12) months preceding the event giving rise to the claim.`,
        "Some states do not allow certain limitations of liability. In such cases, liability shall be limited to the maximum extent permitted by applicable law.",
      ],
    },
    {
      number: "10",
      title: "Indemnification",
      paragraphs: [
        `You agree to indemnify, defend, and hold harmless ${SITE.name}, its affiliates, officers, directors, employees, contractors, and representatives from and against any claims, demands, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:`,
      ],
      bullets: [
        "Your use or misuse of the website or services",
        "Your violation of these Terms of Use",
        "Your violation of any applicable law or regulation",
        "Any false, inaccurate, or misleading information you provide",
        "Your infringement of the rights of any third party",
      ],
      paragraphsAfter: [
        "This indemnification obligation survives termination of your use of the website or services.",
      ],
    },
    {
      number: "11",
      title: "Governing Law and Dispute Resolution",
      paragraphs: [
        "These Terms of Use and any disputes arising out of or relating to your access to or use of the website or services shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.",
        "You agree that any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the state or federal courts located in California, and you consent to the personal jurisdiction and venue of such courts.",
        "To the fullest extent permitted by law, any claim arising out of or relating to your use of the website or services must be brought in your individual capacity and not as a plaintiff or class member in any purported class, collective, or representative proceeding. Nothing in these Terms shall prevent either party from seeking equitable or injunctive relief where appropriate.",
      ],
    },
    {
      number: "12",
      title: "Modifications to Terms and Services",
      paragraphs: [
        `${SITE.name} reserves the right to update, modify, or replace these Terms of Use at any time in its sole discretion. Any changes will be effective upon posting the revised Terms on the website, unless otherwise stated. Your continued access to or use of the website or services after any changes are posted constitutes your acceptance of the revised Terms.`,
        "We also reserve the right to modify, suspend, or discontinue any aspect of the website or services at any time, including availability in certain jurisdictions, without prior notice, where required by legal, regulatory, or operational considerations.",
      ],
    },
    {
      number: "13",
      title: "Termination",
      paragraphs: [
        `${SITE.name} reserves the right to suspend, restrict, or terminate your access to the website or services at any time, with or without notice, if we believe that you have engaged in conduct that is unlawful, fraudulent, abusive, or harmful. We may discontinue use of the website and services at any time.`,
        "Termination of access does not relieve you of any obligations incurred prior to termination, including payment obligations or indemnification responsibilities.",
        "The provisions of these Terms that by their nature should survive termination, including but not limited to Limitation of Liability, Indemnification, Governing Law, and Dispute Resolution, shall remain in full force and effect after termination.",
      ],
    },
    {
      number: "14",
      title: "Contact Information and Notices",
      paragraphs: [
        "If you have any questions regarding these Terms of Use, you may contact us using the information below:",
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
