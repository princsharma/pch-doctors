import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const refundPolicyDocument: LegalDocument = {
  slug: "refund-policy",
  title: "Refund Policy",
  eyebrow: "Money-Back Guarantee",
  description:
    "When refunds apply for PCH Doctors evaluation and program fees, and how to request one.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Accessibility Statement",
    href: "/accessibility-statement",
  },
  intro: [
    `${SITE.name} offers a 100% money-back guarantee for qualifying medical marijuana evaluation services, subject to the eligibility conditions outlined below. Where applicable, refund terms for clinician-guided GLP-1 weight management program fees are also described in this policy.`,
    "Please review this policy carefully before scheduling your evaluation or enrolling in a program.",
  ],
  sections: [
    {
      number: "01",
      title: "Eligibility for a Full Refund",
      paragraphs: [
        "You are eligible for a 100% refund of your medical marijuana evaluation fee under the following circumstances:",
      ],
      bullets: [
        "Physician Denial: If the state-licensed clinician determines, in their professional judgment, that you do not qualify for a medical marijuana recommendation.",
        "Failure to Deliver Recommendation Within Stated Timeframe: If we fail to provide your approved medical marijuana recommendation within the stated timeframe (typically 24–48 hours following completion of your clinician evaluation and approval).",
        "Verification Failure: If your issued medical marijuana recommendation cannot be verified due to an error attributable to the issuing clinician or our platform.",
      ],
      paragraphsAfter: [
        `Refund eligibility applies only to the evaluation fee paid to ${SITE.name} and does not include any state application fees, registry fees, pharmacy costs, medication costs, or other third-party charges, if applicable.`,
        "For GLP-1 weight management program fees, refund eligibility is determined based on enrollment status, clinical evaluation completion, and whether medication or ongoing care services have already been initiated. Program-specific refund details may also be disclosed at checkout or in your enrollment materials.",
      ],
    },
    {
      number: "02",
      title: "Non-Refundable Situations",
      paragraphs: [
        "Refunds will not be issued under the following circumstances:",
      ],
      bullets: [
        "If you request cancellation after completing your evaluation but before receiving a decision from the clinician",
        "If you receive a valid medical marijuana recommendation or GLP-1 treatment plan and later change your mind",
        "If you provide false, incomplete, or misleading information during the evaluation process",
        "If services are denied due to your failure to meet applicable state eligibility requirements",
        "If medication, pharmacy, shipping, or other third-party costs have already been incurred and are non-recoverable",
      ],
    },
    {
      number: "03",
      title: "Missed Appointment Policy",
      paragraphs: [
        "If you are unable to attend your scheduled appointment, you must contact our support team in advance to reschedule.",
        "Failure to attend a scheduled evaluation without prior notice may result in a $30 missed appointment fee. This fee may be deducted from any eligible refund, where applicable.",
      ],
    },
    {
      number: "04",
      title: "Refund Request Process",
      paragraphs: [
        "To request a refund, please contact our support team using the information below.",
        "Refund requests must include your full name, email address used at registration, and a brief explanation of your request.",
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
      number: "05",
      title: "Refund Processing",
      paragraphs: [
        "Approved refunds are typically processed within 7–10 business days, depending on your payment method.",
      ],
    },
    {
      number: "06",
      title: "Final Determination",
      paragraphs: [
        `${SITE.name} reserves the right to review and determine refund eligibility in accordance with this Refund Policy and applicable law.`,
      ],
    },
  ],
};
