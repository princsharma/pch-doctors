import Link from "next/link";
import { Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const GLP1_FAQS = [
  {
    question: "What are GLP-1 Medications and How Do They Help With Weight Loss?",
    answer:
      "GLP-1 medications are prescription treatments that mimic the glucagon-like peptide-1 hormone, which helps regulate appetite, blood sugar, and digestion. For weight loss, they work by reducing hunger, slowing gastric emptying, and improving feelings of fullness, which may support reduced calorie intake when combined with lifestyle changes and medical supervision.",
  },
  {
    question: "Do GLP-1 Medications Require a Prescription from a Doctor?",
    answer:
      "Yes. GLP-1 medications require a prescription from a licensed healthcare provider. A clinician must evaluate your medical history, BMI, and overall health to determine whether treatment is clinically appropriate before prescribing.",
  },
  {
    question: "What's the Difference Between GLP-1 and Other Weight Loss Medications?",
    answer:
      "GLP-1 medications work by targeting hormones that regulate appetite and blood sugar, helping reduce hunger and increase satiety. Other weight loss medications may act on the central nervous system, fat absorption, or metabolism. Because of their hormone-based mechanism, GLP-1 therapies are often used as part of a medically supervised weight management program.",
  },
  {
    question: "What are the Common Side Effects of GLP-1 Medications?",
    answer:
      "Common side effects of GLP-1 medications may include nausea, vomiting, diarrhea, constipation, or decreased appetite, especially during dose adjustments. Most side effects are mild to moderate and improve over time, but ongoing medical monitoring is important to ensure safety and tolerability.",
  },
  {
    question: "Who Should Consider Taking GLP-1 Medications for Weight Loss?",
    answer:
      "GLP-1 medications may be appropriate for adults with obesity (BMI 30 or higher) or overweight individuals (BMI 27 or higher) with weight-related health conditions such as hypertension, type 2 diabetes, or high cholesterol. Eligibility is determined through a licensed clinician's evaluation based on individual medical history and treatment goals.",
  },
];

export function Glp1Faq() {
  return (
    <section id="faqs" className="relative overflow-hidden bg-[var(--service-section-bg)] py-20">
      <div className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-[var(--service-brand)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[var(--service-accent)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Frequently Asked <span className="text-[var(--service-brand)]">Questions</span>
          </h2>
          <p className="mt-4 text-neutral-600">
            Get answers to the most common questions about our GLP-1
            weight loss program.
          </p>
        </div>

        <Accordion className="mt-10 gap-3 rounded-none border-none">
          {GLP1_FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-xl border border-[var(--service-border)] bg-[var(--color-surface)] px-2 not-last:mb-3 not-last:border-b-0"
            >
              <AccordionTrigger className="py-4 text-sm font-medium text-[var(--ds-ink)] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="rounded-full bg-[var(--service-accent)] px-7 py-6 text-sm font-semibold text-white hover:bg-[var(--service-warm)]"
          >
            Still Got Questions
          </Button>
          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Headset className="size-3.5 text-[var(--service-brand)]" />
            Our support team is here to help you
          </p>
        </div>
      </div>
    </section>
  );
}
