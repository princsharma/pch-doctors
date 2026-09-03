import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const GLP1_TEAM_FAQS = [
  {
    question: "Who are these doctors?",
    answer:
      "Licensed U.S. physicians who see weight loss patients through PCH Doctors and the Ongo program. Each profile lists training we have on file. If an NPI is listed, you can look it up in the federal registry.",
  },
  {
    question: "Can I pick who I see?",
    answer:
      "If you have a preference, say so when you book. Calendars fill up, so we cannot promise a specific person every time. You will still see a licensed physician.",
  },
  {
    question: "Do they always prescribe a GLP-1?",
    answer:
      "No. Medication is a tool, not the point of the visit. If it is not appropriate, they will tell you and talk through other options.",
  },
  {
    question: "Which medicines might come up?",
    answer:
      "When a prescription is appropriate, clinicians may discuss FDA-approved options such as Wegovy, Zepbound, Ozempic, Mounjaro, or others that fit your case. The clinician chooses. You do not pick from a menu.",
  },
  {
    question: "Is the visit private?",
    answer:
      "Yes. It runs on a HIPAA-compliant connection. Your health information stays between you and the care team.",
  },
  {
    question: "What if I already take a GLP-1?",
    answer:
      "Say so on the intake. The clinician will review how it is going, side effects, and whether the current plan still makes sense.",
  },
];

export function Glp1DoctorsFaq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.2fr]">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-accent)] uppercase">
            Straight answers
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
            Before you book a weight loss visit
          </h2>
          <p className="mt-4 text-neutral-600">
            Still stuck? Write us. A person on the team will get back to you.
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
          {GLP1_TEAM_FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl bg-[#fffbf5] px-5 not-last:mb-3 not-last:border-b-0"
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
