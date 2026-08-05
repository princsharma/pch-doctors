import type { LegalDocument } from "@/lib/legal-pages";
import { SITE } from "@/lib/site";

export const shippingPolicyDocument: LegalDocument = {
  slug: "shipping-policy",
  title: "Shipping Policy",
  eyebrow: "Delivery Information",
  description:
    "Shipping and delivery terms for medications and related products fulfilled through PCH Doctors partners.",
  published: "January 1, 2026",
  updated: "August 5, 2026",
  next: {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  intro: [
    `This Shipping Policy describes how delivery works for products and medications fulfilled through ${SITE.name} and our partner pharmacies or fulfillment providers.`,
    "Shipping availability, carriers, and timelines may vary by product, destination, and partner pharmacy.",
  ],
  sections: [
    {
      number: "01",
      title: "What We Ship",
      paragraphs: [
        "Certain clinician-prescribed medications and related program materials may be shipped by licensed partner pharmacies. Medical marijuana products themselves are not shipped by this platform.",
        "Not all services include a physical shipment. Evaluation and telehealth consultation fees do not include product delivery.",
      ],
    },
    {
      number: "02",
      title: "Processing Times",
      paragraphs: [
        "Orders are typically processed within 1–3 business days after clinical approval and payment confirmation, subject to pharmacy verification and inventory.",
        "Weekends and holidays may extend processing times. You will receive tracking information when your order ships, where available.",
      ],
    },
    {
      number: "03",
      title: "Delivery Estimates",
      paragraphs: [
        "Standard delivery is estimated at 3–7 business days after shipment within the contiguous United States. Expedited options may be offered by the fulfilling pharmacy when available.",
        "Delivery estimates are not guarantees. Weather, carrier delays, and address issues can affect arrival times.",
      ],
    },
    {
      number: "04",
      title: "Shipping Addresses & Restrictions",
      paragraphs: [
        "Packages are shipped only to addresses you provide at checkout. We cannot deliver to P.O. boxes for certain temperature-sensitive or regulated medications.",
        "Shipping may be limited to states where the partner pharmacy is authorized to fulfill prescriptions. International shipping is not available.",
      ],
    },
    {
      number: "05",
      title: "Lost, Damaged, or Delayed Packages",
      paragraphs: [
        "If your package is lost, damaged, or significantly delayed, contact our support team with your order details. We will work with the pharmacy and carrier to investigate and, where appropriate, arrange a replacement or other remedy under applicable pharmacy policies.",
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
      number: "06",
      title: "Updates to This Policy",
      paragraphs: [
        `${SITE.name} may update this Shipping Policy at any time. The “Last updated” date at the top of this page reflects the most recent revision. Continued use of our services after changes constitutes acceptance of the updated policy.`,
      ],
    },
  ],
};
