import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const refundPolicyDocument: LegalDocument = {
  slug: "refund-policy",
  title: "Refund Policy",
  eyebrow: "Money-Back Guarantee",
  description:
    "Learn when you qualify for a refund on PCH Doctors' medical marijuana evaluation and GLP-1 weight loss program, plus our missed appointment and refund process.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Accessibility Statement",
    href: "/accessibility-statement",
  },
  intro: [
    `${SITE.name} offers a refund on your evaluation fee for medical marijuana consultations, subject to the conditions below. Our GLP-1 weight loss program follows a separate set of terms, since it involves prescription medication. Please review this policy before scheduling your evaluation.`,
  ],
  sections: [
    {
      number: "01",
      title: "Medical Marijuana Evaluation Refunds",
      paragraphs: [
        "You're eligible for a full refund of your evaluation fee if:",
      ],
      bullets: [
        "Physician Denial: The licensed physician determines, in their professional judgment, that you don't qualify for a medical marijuana recommendation",
        "Delayed Recommendation: We fail to deliver your approved recommendation within the stated timeframe, typically 24 to 48 hours after your evaluation is approved",
        "Verification Failure: Your issued recommendation can't be verified due to an error on our end or the issuing physician's end",
      ],
      paragraphsAfter: [
        `Refund eligibility applies only to the evaluation fee paid to ${SITE.name}, not to any state application fees, government fees, or third party charges.`,
        "Refunds are not issued if you cancel after completing your evaluation but before the physician's decision, if you receive a valid recommendation and simply change your mind, if you provide false or misleading information during the evaluation, or if you're denied for failing to meet state eligibility requirements.",
      ],
    },
    {
      number: "02",
      title: "GLP-1 Weight Loss Program Refunds",
      paragraphs: [
        "If the evaluating physician determines you don't qualify for a GLP-1 prescription, your consultation fee is fully refundable.",
        "Once a prescription is approved and your medication ships, it can't be refunded or returned. This follows standard pharmacy and FDA safety practices for prescription drugs. If your shipment arrives damaged, incorrect, or defective, see our Shipping Policy for how to request a replacement.",
      ],
    },
    {
      number: "03",
      title: "Missed Appointment Policy",
      paragraphs: [
        "If you can't make your scheduled appointment, contact our support team in advance to reschedule. Missing an appointment without notice may result in a fee of $30 in most states, or $25 for California residents. This fee may be deducted from any refund you're otherwise owed.",
      ],
    },
    {
      number: "04",
      title: "How to Request a Refund",
      paragraphs: [
        `Email our support team at ${SITE.email} with your full name, the email address used at registration, and a short explanation of your request.`,
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
      number: "05",
      title: "Refund Processing",
      paragraphs: [
        "Approved refunds are typically processed within 7 to 10 business days, depending on your payment method.",
      ],
    },
    {
      number: "06",
      title: "Final Determination",
      paragraphs: [
        `${SITE.name} reserves the right to review and determine refund eligibility in accordance with this policy and applicable law.`,
      ],
    },
  ],
};
