import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const disclaimerDocument: LegalDocument = {
  slug: "disclaimer",
  title: "Disclaimer & Policies",
  eyebrow: "Important Notice",
  description:
    "Important medical and legal disclaimers for using the PCH Doctors website and services.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Shipping Policy",
    href: "/shipping-policy",
  },
  intro: [
    `At ${SITE.name}, we are committed to providing educational resources and connecting patients with licensed healthcare professionals for medical marijuana evaluations and clinician-guided GLP-1 weight management programs. However, please be aware that the information on this website is subject to important disclaimers outlined below.`,
    "By using this platform, you agree to the following terms:",
  ],
  sections: [
    {
      number: "01",
      title: "Informational Purpose Only",
      paragraphs: [
        `${SITE.name} provides content for educational and informational purposes only. It is not intended to be used as a substitute for professional medical advice or healthcare services. The information on this website is designed to help users understand medical marijuana, GLP-1 weight management options, and wellness topics, but should always be reviewed with a licensed healthcare provider before making any decisions.`,
      ],
    },
    {
      number: "02",
      title: "Not a Substitute for Medical Care",
      paragraphs: [
        `${SITE.name} is not a healthcare provider. The platform is designed to connect patients with licensed healthcare professionals for medical marijuana evaluations and clinician-guided weight management consultations. Any decisions regarding medical treatment, including medication or therapy, should be made in consultation with a licensed healthcare professional. Medical marijuana recommendations are not prescriptions and should not be viewed as a substitute for conventional medical care.`,
      ],
    },
    {
      number: "03",
      title: "No Diagnosis or Treatment",
      paragraphs: [
        `The information provided on this platform does not diagnose, treat, cure, or prevent any medical conditions. ${SITE.name} facilitates medical evaluations through licensed professionals, but it does not provide direct medical treatment or advice. Always seek the guidance of a qualified healthcare provider before making any medical decisions.`,
      ],
    },
    {
      number: "04",
      title: "User Responsibility",
      paragraphs: [
        `Your health choices are your responsibility. Any action taken based on information provided by this platform is done at your own risk. ${SITE.name} is not responsible for any outcomes resulting from decisions made without the guidance of a licensed healthcare provider. It is always essential to verify and discuss your healthcare decisions with a licensed physician or healthcare professional.`,
      ],
    },
    {
      number: "05",
      title: "Testimonials and User Experiences",
      paragraphs: [
        "Any testimonials or user-generated content on this site represent individual experiences. These testimonials should not be considered as medical advice and may not reflect your own experience or outcome. Outcomes may vary, and there is no guarantee that you will experience similar results. Always consult a healthcare provider before making any medical decisions.",
      ],
    },
    {
      number: "06",
      title: "No Endorsement of Products or Services",
      paragraphs: [
        `${SITE.name} does not endorse, guarantee, or make any claims about the effectiveness or safety of any products, services, or therapies mentioned on the platform. The inclusion of a product, service, or therapy on this site does not imply that we recommend it. Users should independently verify and consult their healthcare provider before using any such products or services.`,
      ],
    },
    {
      number: "07",
      title: "Platform's Role",
      paragraphs: [
        `${SITE.name} is a technology platform that connects patients with licensed healthcare professionals for medical marijuana evaluations and clinician-guided GLP-1 weight management programs. We do not provide direct medical care, and our services are not intended to replace the doctor-patient relationship. We connect patients to licensed providers who make medical recommendations and treatment decisions, but we do not make those recommendations ourselves.`,
      ],
    },
    {
      number: "08",
      title: "Emergencies",
      paragraphs: [
        "This platform is not designed for emergency medical situations. If you are experiencing a medical emergency, please contact 911 or your local emergency services immediately. Do not delay seeking professional medical attention while using this site.",
      ],
    },
    {
      number: "09",
      title: "Third-Party Websites",
      paragraphs: [
        "Our website may include links to third-party websites for convenience. We do not control or verify the content, security, or privacy practices of these third-party websites. Use of these sites is at your own discretion. Please review the privacy practices and terms of use for any third-party websites you visit.",
      ],
    },
    {
      number: "10",
      title: "Special Considerations",
      paragraphs: [
        "If you are under 18, have chronic or serious health conditions, or are pregnant or breastfeeding, it is essential to consult with a licensed healthcare provider before making any decisions based on the information available on this platform. Always seek personalized advice from a healthcare professional.",
      ],
    },
    {
      number: "11",
      title: "Emerging and Alternative Therapies",
      paragraphs: [
        "Some content on this site may discuss alternative, experimental, or emerging treatments that are not guaranteed to be safe or effective. It is important to consult with a trusted medical professional before pursuing any alternative therapies discussed on this platform.",
      ],
    },
    {
      number: "12",
      title: "Modifications to the Disclaimer",
      paragraphs: [
        `${SITE.name} reserves the right to update, modify, or remove any content or information provided on this platform at any time, without prior notice. We encourage users to review this page regularly to stay informed of any changes. All changes to the Disclaimer will be posted on this page.`,
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
