import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const privacyPolicyDocument: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  eyebrow: "Data Privacy",
  description:
    "See how PCH Doctors collects, uses, and protects your personal and health information across our medical marijuana consultation and GLP-1 weight loss services.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "HIPAA Compliance",
    href: "/hipaa-compliance-policy",
  },
  intro: [
    `${SITE.name} ("${SITE.name}," "we," "our," or "us") is committed to protecting your privacy and handling your personal and health information responsibly. This Privacy Policy explains what we collect, how we use it, and how we protect it when you visit our website or use our medical marijuana consultation and GLP-1 weight loss telehealth services.`,
    "We take the security of your health information seriously and follow practices designed to comply with HIPAA (the Health Insurance Portability and Accountability Act) wherever it applies. By using our services, you agree to the practices described here, so please take a few minutes to read through it.",
    'This policy covers our website and related telehealth services (together, the "Services"). Our Services are available to individuals across the United States, though our medical marijuana consultations are only offered where permitted under applicable state law.',
  ],
  sections: [
    {
      number: "01",
      title: "Information We Collect",
      paragraphs: [
        "When you create an account, book an evaluation, or reach out to us, we collect the information needed to provide our services and stay compliant with applicable regulations. This typically includes your contact details, identification information for verification, and health information relevant to your consultation.",
        "We may also verify your identity using publicly available databases or identity verification services, mainly to prevent fraud and meet compliance requirements.",
        "When you visit our website, we automatically collect some technical information, such as your IP address, browser and device type, operating system, and general usage patterns. We use tools like Google Analytics and Microsoft Clarity to understand how people use our site and to improve performance and security.",
        "We may also collect general location information (like IP based location or zip code) to confirm eligibility for services that vary by state.",
      ],
    },
    {
      number: "02",
      title: "Health Information",
      paragraphs: [
        "Our licensed physicians collect health related information to assess your eligibility for medical marijuana consultation or the GLP-1 weight loss program. Depending on the service, this may include your medical history, current medications, weight and health metrics, qualifying conditions, and treatment goals.",
        "This information is used only to provide your evaluation, maintain accurate records, and meet applicable state and federal requirements. We do not use your health information for marketing, and we do not share it with third parties beyond what's needed to deliver your care or as required by law.",
      ],
    },
    {
      number: "03",
      title: "How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      bullets: [
        "Provide medical marijuana consultations and GLP-1 weight loss evaluations with licensed physicians",
        "Verify your identity and eligibility",
        "Process payments and manage appointments",
        "Communicate with you about appointments, prescriptions, and support",
        "Maintain accurate records and meet regulatory requirements",
        "Improve our website and services",
        "Detect and prevent fraud or unauthorized access",
      ],
      paragraphsAfter: [
        "We may also use information that has been aggregated or stripped of identifying details for research and service improvement.",
      ],
    },
    {
      number: "04",
      title: "Payment Processing",
      paragraphs: [
        "Payments are handled securely through third party providers, including credit card processors, PayPal, and Sezzle. We do not store full card numbers or bank account details on our servers. Any payment you make is encrypted and processed directly by the provider, under their own privacy and security policies.",
      ],
    },
    {
      number: "05",
      title: "Cookies and Analytics",
      paragraphs: [
        "Our website uses cookies and similar technologies to help it run smoothly and to understand how visitors use our site. We use analytics tools, including Google Analytics and Microsoft Clarity, to review traffic patterns and improve the experience. You can adjust your browser settings to limit cookies, though some features may not work as intended if you do.",
      ],
    },
    {
      number: "06",
      title: "Communications",
      paragraphs: [
        'If you share your contact details with us, we may reach out by email, text, phone, or automated messaging about appointments, prescriptions, account updates, or occasional promotions. You can opt out of promotional messages anytime by following the unsubscribe link or replying "STOP" to a text. Standard message and data rates may apply.',
      ],
    },
    {
      number: "07",
      title: "How We Share Your Information",
      paragraphs: [
        "We only share information when it is necessary to provide our services or meet legal obligations. This includes sharing with:",
      ],
      bullets: [
        "Licensed physicians conducting your evaluation",
        "Pharmacy or fulfillment partners for GLP-1 prescriptions, where applicable",
        "Service providers who support hosting, payments, identity verification, and communications",
        "Legal or regulatory authorities, when required by law",
        "A successor entity, in the event of a merger, acquisition, or sale of the business",
      ],
      paragraphsAfter: ["We never sell your personal health information."],
    },
    {
      number: "08",
      title: "Data Security",
      paragraphs: [
        "We use administrative, technical, and physical safeguards to protect your information from unauthorized access or disclosure. Sensitive data, including health and payment information, is encrypted in transit, and access is limited to authorized staff and trusted service providers. While we take security seriously, no system can guarantee complete protection, so we encourage you to use a strong password and keep your login details private.",
      ],
    },
    {
      number: "09",
      title: "Your Privacy Rights",
      paragraphs: [
        "Depending on where you live, you may have the right to access, correct, or request deletion of your personal information. If you are a California resident, the California Consumer Privacy Act (CCPA) also gives you the right to know what personal information we hold and to request that it be deleted, subject to certain legal exceptions. We do not sell personal health information, so there is nothing to opt out of on that front.",
        "To make a privacy related request, contact us using the details below. We aim to respond within 30 days.",
      ],
    },
    {
      number: "10",
      title: "Children's Privacy",
      paragraphs: [
        "Our Services are meant for adults aged 18 and older. We do not knowingly collect information from anyone under 13, and if we discover that we have, we will delete it right away. If we learn that someone under 18 has submitted personal information, we will delete it and, where possible, notify a parent or guardian.",
      ],
    },
    {
      number: "11",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. If we make significant changes, we will post the updated policy here with a new effective date.",
      ],
    },
    {
      number: "12",
      title: "Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy or want to submit a privacy related request, reach out to:",
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
