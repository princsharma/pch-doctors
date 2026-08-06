import { Calendar, Video, Package, ArrowRight } from "lucide-react";
import { Glp1LeadModal } from "@/components/glp1-lead-modal";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: Calendar,
    number: "1",
    title: "Schedule a Free Visit",
    description:
      "Choose your preferred date and time, complete a brief intake form, and connect with our care team to discuss your treatment goals and appropriate FDA-approved or compounded options.",
    tag: "HIPAA-Compliant Platform",
  },
  {
    icon: Video,
    number: "2",
    title: "Connect With a Clinician",
    description:
      "A licensed clinician reviews your medical history, BMI, contraindications, current medications, and health goals to determine whether GLP-1 treatment is appropriate for you during a confidential video or audio call.",
    tag: "Licensed Medical Provider",
  },
  {
    icon: Package,
    number: "3",
    title: "Receive GLP-1 Prescription",
    description:
      "When deemed clinically appropriate, your provider may prescribe GLP-1 treatment and provide clear guidance on next steps, with a provider–patient relationship established prior to any prescription being issued.",
    tag: "Clinical Eligibility Required",
  },
];

export function Glp1Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[var(--service-section-bg)] py-20"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[var(--service-accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 size-96 rounded-full bg-[var(--service-brand)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--ds-ink-soft)]">
          <span className="size-2 rounded-full bg-[var(--service-accent)]" />
          OUR PROCESS
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            A Simple{" "}
            <span className="text-[var(--service-accent)]">3-Step</span> Process
          </h2>
          <p className="max-w-md text-sm text-[var(--ds-ink-mid)] lg:mb-1">
            Connect with our team, complete a clinician-led evaluation, and
            begin treatment if medically appropriate, supported by ongoing
            care.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-[var(--service-border)]" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex min-h-72 flex-col rounded-2xl bg-[var(--color-surface)] p-6 shadow-sm ring-1 ring-[var(--service-border)] transition-shadow hover:shadow-md"
            >
              <p className="font-heading text-2xl font-medium text-[var(--service-accent)]">
                {step.number}.
              </p>
              <h3 className="font-heading mt-1 text-xl font-medium text-[var(--ds-ink)]">
                {step.title}
              </h3>

              <div className="flex-1" />

              <p className="text-sm text-[var(--ds-ink-mid)]">{step.description}</p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--service-accent-soft)] px-4 py-2 text-sm text-[var(--service-badge-accent-ink)]">
                <step.icon className="size-4 text-[var(--service-accent)]" />
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[var(--service-section-bg-alt)] p-6 ring-1 ring-[var(--service-border)] sm:flex-row sm:justify-between">
          <p className="text-sm text-[var(--ds-ink-mid)]">
            Once prescribed, you may fill your medication at a licensed
            pharmacy of your choice or opt for{" "}
            <span className="font-semibold text-[var(--ds-ink)]">
              coordinated home delivery
            </span>{" "}
            through a licensed pharmacy.
          </p>

          <Glp1LeadModal
            trigger={
              <Button className="group shrink-0 gap-3 rounded-full bg-[var(--service-accent)] py-7 pl-2 pr-6 text-sm font-semibold text-white hover:bg-[var(--service-warm)]">
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-[var(--service-accent)] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="size-4.5" />
                </span>
                Schedule Medical Evaluation
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}
