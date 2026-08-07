import { Sparkles, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const HOME_FAQS = [
  {
    question: "How long does the certification process take?",
    answer:
      "Most patients receive their medical recommendation within 15-30 minutes after their consultation. Once approved, your certification is available immediately for download. In most states, you can start purchasing from dispensaries the same day.",
  },
  {
    question: "Is my medical information secure?",
    answer:
      "Yes. Our platform is 100% HIPAA compliant. We use bank-level encryption (AES-256) to ensure your data and video consultations remain private and secure at all times.",
  },
  {
    question: "Do I need medical records to get certified?",
    answer:
      "While having previous records can speed up the process, our physicians can perform an evaluation during your video consultation to determine if you meet your state's qualifying conditions.",
  },
  {
    question: "What GLP-1 medications do you prescribe?",
    answer:
      "Based on your medical evaluation, our doctors can prescribe Ozempic, Wegovy, Mounjaro, Zepbound, or Rybelsus. Our clinicians will determine the best option based on your clinical needs and insurance coverage.",
  },
];

export function HomeFaq() {
  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-gradient-to-b from-[#f3fbf6] via-white to-[#fffbf5] py-20"
    >
      <div
        data-service="mmj"
        className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[var(--service-brand)]/10 blur-3xl"
      />
      <div
        data-service="glp1"
        className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[var(--service-accent)]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[var(--ds-ink)]/70">
            <Sparkles className="size-3.5 text-[#f59e0b]" />
            QUESTIONS &amp; ANSWERS
          </div>
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Frequently Asked{" "}
            <span className="relative inline-block">
              Questions
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15" />
            </span>
          </h2>
        </div>

        <Accordion className="gap-4 overflow-visible rounded-none border-none">
          {HOME_FAQS.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              data-service={index % 2 === 0 ? "mmj" : "glp1"}
              className="rounded-2xl border border-[var(--service-border)] bg-white px-6 shadow-sm not-last:mb-4 data-open:bg-[var(--service-section-bg)]"
            >
              <AccordionTrigger className="py-6 text-base font-medium text-[var(--ds-ink)] hover:no-underline **:data-[slot=accordion-trigger-icon]:!size-8 **:data-[slot=accordion-trigger-icon]:shrink-0 **:data-[slot=accordion-trigger-icon]:rounded-full **:data-[slot=accordion-trigger-icon]:bg-[var(--service-brand-light)] **:data-[slot=accordion-trigger-icon]:p-2 **:data-[slot=accordion-trigger-icon]:text-[var(--service-brand-dark)]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm text-neutral-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="mb-4 text-neutral-600">Still have questions?</p>
          <button className="group inline-flex items-center gap-3 rounded-full bg-[var(--ds-brand)] py-1 pl-1 pr-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--ds-brand-dark)]">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-[var(--ds-brand)] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4.5" />
            </span>
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
