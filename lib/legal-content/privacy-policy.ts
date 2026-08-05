import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const privacyPolicyDocument: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  eyebrow: "Data Privacy",
  description:
    "How PCH Doctors collects, uses, and protects your personal and health information.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "HIPAA Compliance",
    href: "/hipaa-compliance",
  },
  intro: [
    `${SITE.name} ("${SITE.name}," "we," "our," or "us") is committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, and protect information when you access our website or use our clinician-guided telehealth services, including medical marijuana evaluations and GLP-1 weight management programs.`,
    "We are dedicated to protecting your personal health information in compliance with applicable privacy laws, including HIPAA (Health Insurance Portability and Accountability Act). The privacy and security of your health data are critically important to us, and we have implemented industry-standard measures to help keep your information confidential.",
    "By using our Services, you agree to the practices described in this Privacy Policy. Please read it thoroughly to understand how we handle your personal and health information.",
    'This Privacy Policy applies to our website and related services (collectively, the "Services"). Our Services are intended for individuals located in U.S. states where the applicable services are legally permitted and offered by our licensed clinicians.',
  ],
  sections: [
    {
      number: "01",
      title: "Information We Collect",
      paragraphs: [
        "When you create an account, schedule an evaluation, communicate with us, or otherwise use our Services, we collect information necessary to provide medical consultations and maintain regulatory compliance. This may include contact information, identification details required for verification, and health-related information relevant to your evaluation or treatment plan.",
        "We may also collect information from publicly available databases or identity verification services, as required, for fraud prevention or compliance purposes.",
        "When you visit our website, certain technical information is collected automatically. This may include your IP address, browser type, device type, operating system, and general usage data. We may use analytics tools such as Google Analytics and Microsoft Clarity to better understand how users interact with our website through behavioral metrics and site performance analysis. This information is used for security, fraud prevention, performance optimization, and service improvement.",
        "We may also collect general location information, such as IP-based geographic data, state selection, or zip code, to confirm you are located in a state where we offer services and to provide care in accordance with applicable state regulations.",
      ],
    },
    {
      number: "02",
      title: "Health Information",
      paragraphs: [
        "In connection with medical marijuana evaluations and GLP-1 weight management programs, state-licensed clinicians may collect health-related information necessary to assess eligibility and determine clinically appropriate care under applicable law. We take the privacy and security of your health information seriously and ensure compliance with the Health Insurance Portability and Accountability Act (HIPAA) where applicable. This means that personal health information you provide—including medical history, qualifying conditions, medications, and treatment details—is protected by strict confidentiality standards.",
        "We use health-related information solely for evaluation and treatment purposes and to comply with applicable state and federal regulations. Health data is stored securely and used only to provide requested services, maintain accurate records, and verify eligibility. We do not use your personal health information for marketing purposes or disclose it to third parties without your consent, except as required by law.",
      ],
    },
    {
      number: "03",
      title: "How We Use Information",
      paragraphs: [
        "We use the collected information to:",
      ],
      bullets: [
        "Facilitate medical marijuana evaluations and GLP-1 consultations with licensed clinicians",
        "Verify identity and eligibility in accordance with applicable state law",
        "Process payments and manage appointments",
        "Communicate regarding appointments, service updates, and support",
        "Maintain regulatory compliance and business records",
        "Improve website functionality and user experience",
        "Prevent fraud, abuse, and unauthorized access",
      ],
      paragraphsAfter: [
        "We may also use aggregated or de-identified information for research, reporting, and service improvement purposes.",
      ],
    },
    {
      number: "04",
      title: "Payment Processing",
      paragraphs: [
        "Payments are processed securely through third-party providers, which may include credit cards and other payment platforms available at checkout.",
        "We do not store full credit card numbers, bank account credentials, or authentication codes on our servers. Payment information is encrypted and processed directly by the respective payment provider in accordance with their own privacy and security standards.",
        "When using a third-party payment platform, you may be redirected to their site to complete your transaction. Information provided to those services is governed by their independent privacy policies.",
      ],
    },
    {
      number: "05",
      title: "Cookies, Tracking Technologies, and Analytics",
      paragraphs: [
        "Our website uses cookies and similar technologies to enhance functionality and improve user experience. Cookies help us understand visitor preferences, measure site traffic, and maintain security.",
        "We may use analytics and performance tools, including Google Analytics and Microsoft Clarity, to evaluate how visitors use the website, analyze trends, and improve our Services. These tools may use cookies and other tracking technologies to collect behavioral and interaction data in a manner consistent with their respective privacy practices.",
        "You may adjust your browser settings to decline cookies; however, certain website features may not function properly if cookies are disabled.",
      ],
    },
    {
      number: "06",
      title: "Communications and Email Lists",
      paragraphs: [
        "If you provide your contact information, we may communicate with you via email, SMS/text message, telephone, or automated messaging regarding appointments, account activity, service updates, and limited promotional information.",
        'By providing your phone number, you consent to receive service-related communications. You may opt out of promotional communications at any time by following unsubscribe instructions or replying "STOP" to text messages where applicable. Message and data rates may apply depending on your mobile carrier.',
        "We may maintain email distribution lists for newsletters or updates. Email addresses are not sold, and access to such lists is restricted to authorized personnel and service providers.",
      ],
    },
    {
      number: "07",
      title: "Sharing of Information",
      paragraphs: [
        "We may share information with:",
      ],
      bullets: [
        "Licensed clinicians providing evaluations or treatment through the platform",
        "Service providers assisting with website hosting, analytics, payment processing, communications, identity verification, scheduling platforms, and fraud prevention",
        "Affiliates or related business entities for operational support",
        "Legal or regulatory authorities, when required by applicable law or to protect legal rights",
        "Successor entities in connection with a merger, acquisition, or business transfer",
      ],
      paragraphsAfter: [
        "We do not sell personal health information. Information shared with third parties is limited to what is necessary for legitimate business, medical, or legal purposes.",
      ],
    },
    {
      number: "08",
      title: "Data Security",
      paragraphs: [
        "We implement administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction.",
        "Sensitive data, including health-related information and payment transactions, is transmitted using industry-standard encryption technologies. Access to personal information is restricted to authorized personnel and trusted service providers.",
        "Our security practices are designed to align with applicable healthcare privacy and security standards where required. While we use commercially reasonable safeguards, no electronic transmission or storage system can guarantee absolute security.",
      ],
    },
    {
      number: "09",
      title: "Your Privacy Rights",
      paragraphs: [
        "Depending on your state of residence, you may have certain rights regarding your personal information, including:",
      ],
      bullets: [
        "The right to access your personal data",
        "The right to request deletion of your personal data, subject to certain exceptions",
        "The right to request correction of any inaccuracies in your data",
      ],
      paragraphsAfter: [
        "You may submit a privacy-related request by contacting us. We will respond to your request within 30 days.",
      ],
    },
    {
      number: "10",
      title: "International Data Protection Laws",
      paragraphs: [
        "We have reviewed our business operations and data-handling practices in light of international privacy laws. As of the effective date of this Privacy Policy, we do not believe we are governed by the GDPR (General Data Protection Regulation), because we do not collect personal information from individuals located in the European Economic Area, the United Kingdom, or Switzerland, and we do not specifically target or tailor our website or services to those jurisdictions.",
        "If you believe a data protection law outside the United States applies to your use of our Services and you have questions about whether or how they apply to us, you may contact us using the details below. We are committed to providing transparency and assisting with any privacy-related concerns.",
      ],
    },
    {
      number: "11",
      title: "Children's Privacy",
      paragraphs: [
        "Our Services are intended solely for individuals aged 18 and over who meet the legal eligibility requirements in the state where services are provided. We do not knowingly collect or solicit personal information from anyone under the age of 18. If we become aware that personal information has been collected from someone under 18, we will delete it promptly.",
        "Additionally, our Services are not intended for minors under the age of 18. If we learn that a minor has submitted personal information, we will delete it and notify the appropriate guardians where required.",
      ],
    },
    {
      number: "12",
      title: "U.S. Jurisdiction",
      paragraphs: [
        "Our Services are operated within the United States and are intended for users located in states where our medical marijuana evaluations and/or GLP-1 weight management services are legally permitted and offered. This Privacy Policy is governed by applicable United States federal law and the laws of the states in which we operate, including California where our business is based.",
      ],
    },
    {
      number: "13",
      title: "Contact Information",
      paragraphs: [
        "For questions regarding this Privacy Policy or to submit a privacy-related request, please contact:",
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
