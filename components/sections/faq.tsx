import { Sparkles, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const MMJ_FAQS = [
  {
    question: "How long does the certification process take?",
    answer:
      "Most patients receive their medical marijuana recommendation within 15-30 minutes after their consultation. Once approved by our licensed physician, your certification is available immediately for download. In most states, you can start purchasing medical marijuana the same day.",
  },
  {
    question: "What medical conditions qualify for medical marijuana?",
    answer:
      "Qualifying conditions vary by state but commonly include chronic pain, anxiety, PTSD, epilepsy, cancer, glaucoma, arthritis, migraines, insomnia, and many others. Our physicians will evaluate your specific condition during the consultation and determine if medical marijuana is appropriate for your treatment.",
  },
  {
    question: "Is my information secure and private?",
    answer:
      "Absolutely. We are fully HIPAA compliant and use bank-level encryption to protect your personal and medical information. Your data is never shared with third parties, and all consultations are completely confidential between you and your physician.",
  },
  {
    question: "What if I don't qualify for a recommendation?",
    answer:
      "We offer a 100% money-back guarantee. If our physician determines that you don't qualify for a medical marijuana recommendation, you'll receive a full refund, no questions asked. We maintain a 98% approval rate, so most patients do qualify.",
  },
  {
    question: "Do I need medical records to get certified?",
    answer:
      "Medical records are helpful but not always required. Our licensed physicians can often make a recommendation based on your current symptoms and medical history discussed during the consultation. If you have relevant medical records, bringing them can help speed up the process.",
  },
  {
    question: "Can I use my certification in other states?",
    answer:
      "Reciprocity varies by state. Some states accept out-of-state medical marijuana cards, while others require you to register in their state system. Check our State Programs page for specific information about the states you plan to visit or move to.",
  },
];

export function Faq() {
  return (
    <section id="faqs" className="relative overflow-hidden bg-[var(--service-section-bg)] py-20">
      <div className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[var(--service-brand)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[var(--service-accent)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--ds-ink)]/70">
              <Sparkles className="size-3.5 text-[var(--service-accent)]" />
              QUESTIONS &amp; ANSWERS
            </div>

            <h2 className="font-heading mt-4 whitespace-nowrap text-2xl font-medium leading-tight tracking-normal text-[var(--ds-ink)] sm:text-3xl lg:text-4xl">
              Clear <span className="text-[var(--service-brand)]">Answers</span> for Your Care
            </h2>

            <p className="mt-6 max-w-sm text-neutral-600">
              Clear answers on timelines, consultations, privacy, and what to
              expect from your certification.
            </p>

            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="font-heading text-xl font-medium text-[var(--ds-ink)]">
                Still have questions?
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Need clarity before booking? Speak with our support team and
                get direct answers tailored to your situation.
              </p>
              <button className="group mt-6 flex w-fit items-center gap-3 rounded-full bg-[var(--service-accent)] py-1 pl-1 pr-6 text-base font-semibold text-[var(--ds-ink)] transition-colors hover:bg-[var(--service-accent)]/90">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-[var(--ds-ink)] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-4.5" />
                </span>
                Contact Us
              </button>
            </div>
          </div>

          <Accordion className="gap-4 rounded-none border-none">
            {MMJ_FAQS.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="rounded-2xl bg-white px-6 shadow-sm ring-1 ring-black/5 not-last:mb-4 not-last:border-b-0 data-open:bg-white"
              >
                <AccordionTrigger className="py-6 text-base font-medium text-[var(--ds-ink)] hover:no-underline **:data-[slot=accordion-trigger-icon]:!size-8 **:data-[slot=accordion-trigger-icon]:shrink-0 **:data-[slot=accordion-trigger-icon]:rounded-full **:data-[slot=accordion-trigger-icon]:bg-[var(--ds-bg-subtle)] **:data-[slot=accordion-trigger-icon]:p-2 **:data-[slot=accordion-trigger-icon]:text-[var(--ds-ink)]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
