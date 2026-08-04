import { Sparkles, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
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
    <section id="faqs" className="relative overflow-hidden bg-[#eef6f6] py-20">
      <div className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[#0d6e74]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#f2a83c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#0a2733]/70">
            <Sparkles className="size-3.5 text-[#f2a83c]" />
            QUESTIONS &amp; ANSWERS
          </div>
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            Frequently Asked{" "}
            <span className="relative inline-block">
              Questions
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#0d6e74]/15" />
            </span>
          </h2>
        </div>

        <Accordion className="gap-4 rounded-none border-none">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl bg-white px-6 shadow-sm ring-1 ring-black/5 not-last:mb-4 not-last:border-b-0 data-open:bg-white"
            >
              <AccordionTrigger className="py-6 text-base font-medium text-[#0a2733] hover:no-underline **:data-[slot=accordion-trigger-icon]:!size-8 **:data-[slot=accordion-trigger-icon]:shrink-0 **:data-[slot=accordion-trigger-icon]:rounded-full **:data-[slot=accordion-trigger-icon]:bg-[#f7f9f9] **:data-[slot=accordion-trigger-icon]:p-2 **:data-[slot=accordion-trigger-icon]:text-[#0a2733]">
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
          <button className="group inline-flex items-center gap-3 rounded-full bg-[#0d6e74] py-1 pl-1 pr-6 text-sm font-semibold text-white transition-colors hover:bg-[#0a4f54]">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#0d6e74] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4.5" />
            </span>
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}
