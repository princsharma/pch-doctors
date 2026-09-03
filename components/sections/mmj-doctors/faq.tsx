import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const MMJ_TEAM_FAQS = [
  {
    question: "Are these clinicians actually licensed?",
    answer:
      "Yes. Each profile lists credentials and, when we have it, an NPI you can check in the federal registry. We only list people who can legally evaluate patients in the states shown on their card.",
  },
  {
    question: "Can I choose who I see?",
    answer:
      "If a clinician is licensed in your state, you can request them. If their calendar is full, we will place you with another licensed clinician who can see you in that state.",
  },
  {
    question: "How long is the visit?",
    answer:
      "Plan on 15 to 30 minutes once you are on the call. Complicated histories can run a little longer. The clinician will not rush past details that matter.",
  },
  {
    question: "Do I have to bring medical records?",
    answer:
      "Bring them if you have them. They help. Plenty of people are evaluated from the history they share on the call. Your clinician will tell you if something extra is needed.",
  },
  {
    question: "What if they say no?",
    answer:
      "Then you do not get a recommendation. Eligibility is a medical decision, not a purchase. If you do not qualify, ask support about our refund policy.",
  },
  {
    question: "Is the call private?",
    answer:
      "Yes. Visits use a HIPAA-compliant connection. Your health information is treated as confidential between you and the clinician.",
  },
];

export function MmjDoctorsFaq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.2fr]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-brand)] uppercase">
            Straight answers
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
            Questions people ask before they book
          </h2>
          <p className="mt-4 text-neutral-600">
            Still stuck? Write us. A person on our team will get back to you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--service-brand)] hover:text-[var(--service-brand-dark)]"
          >
            Contact support
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <Accordion className="gap-3 rounded-none border-none">
          {MMJ_TEAM_FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl bg-[#f6f3ee] px-5 not-last:mb-3 not-last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-[var(--ds-ink)] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-neutral-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
