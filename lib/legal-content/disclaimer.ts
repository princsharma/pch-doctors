import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const disclaimerDocument: LegalDocument = {
  slug: "disclaimer",
  title: "Disclaimer & Policies",
  eyebrow: "Important Notice",
  description:
    "Important disclaimers about PCH Doctors' medical marijuana consultation and GLP-1 weight loss telehealth services, including limits on medical guidance.",
  published: "January 1, 2026",
  updated: "August 7, 2026",
  next: {
    label: "Shipping Policy",
    href: "/shipping-policy",
  },
  intro: [
    `At ${SITE.name}, we're committed to providing educational resources and connecting patients with licensed physicians for medical marijuana consultations and GLP-1 weight loss evaluations. The information on this website comes with a few important disclaimers, outlined below. By using this platform, you agree to the following.`,
  ],
  sections: [
    {
      number: "01",
      title: "Informational Purposes Only",
      paragraphs: [
        `${SITE.name} provides content for educational purposes only. It's not a substitute for professional medical advice or care. Everything on this site is meant to help you understand medical marijuana and GLP-1 weight loss options, but any decision should be reviewed with a licensed healthcare provider first. Nothing here diagnoses, treats, cures, or prevents any condition.`,
      ],
    },
    {
      number: "02",
      title: "Not a Substitute for Medical Care",
      paragraphs: [
        `${SITE.name} is not a healthcare provider. We connect you with licensed physicians for medical marijuana and GLP-1 evaluations, but we don't provide direct medical care ourselves, and we don't make the actual medical recommendations. A medical marijuana recommendation is not a prescription, and neither one replaces the judgment of your own doctor.`,
      ],
    },
    {
      number: "03",
      title: "User Responsibility",
      paragraphs: [
        `Your health choices are your own responsibility. Anything you do based on information from this platform is at your own risk. ${SITE.name} isn't responsible for outcomes that result from decisions made without guidance from a licensed healthcare provider, so always talk things through with a physician first.`,
      ],
    },
    {
      number: "04",
      title: "Testimonials and User Experiences",
      paragraphs: [
        "Any testimonials or user stories on this site reflect individual experiences. They're not medical advice, and your results may be completely different. Always consult a healthcare provider before making a medical decision, regardless of what others have experienced.",
      ],
    },
    {
      number: "05",
      title: "No Endorsement of Products or Services",
      paragraphs: [
        "We don't endorse or make claims about the safety or effectiveness of any product, service, or therapy mentioned on this platform, including emerging or alternative treatments. If something appears on our site, that's not a recommendation. Please verify independently and check with your healthcare provider first.",
      ],
    },
    {
      number: "06",
      title: "Emergencies",
      paragraphs: [
        "This platform isn't built for medical emergencies. If you're experiencing one, call 911 or your local emergency services right away rather than using this site.",
      ],
    },
    {
      number: "07",
      title: "Third-Party Websites",
      paragraphs: [
        "Our site may link to third party websites for convenience. We don't control or vouch for their content, security, or privacy practices, so use them at your own discretion and review their own policies.",
      ],
    },
    {
      number: "08",
      title: "Special Considerations",
      paragraphs: [
        "If you're under 18, pregnant, breastfeeding, or managing a chronic or serious health condition, please talk to a licensed healthcare provider before making any decisions based on this site. Personalized medical advice always comes first.",
      ],
    },
    {
      number: "09",
      title: "Changes to This Disclaimer",
      paragraphs: [
        "We may update or remove content on this platform at any time, without prior notice. Please check back periodically, since any changes will be posted right here.",
      ],
    },
  ],
};
