import { ClipboardCheck, Activity, HeartPulse } from "lucide-react";

const timeline = [
  {
    phase: "Initial",
    label: "Phase",
    icon: ClipboardCheck,
    description:
      "Comprehensive clinical evaluation and development of a personalized dosing strategy based on your medical history and health goals.",
  },
  {
    phase: "Adjustment",
    label: "Phase",
    icon: Activity,
    description:
      "Ongoing assessment of treatment response with dose modifications guided by established clinical protocols.",
  },
  {
    phase: "Ongoing",
    label: "Care",
    icon: HeartPulse,
    description:
      "Continued medical supervision with integrated lifestyle support to promote sustainable, long-term weight management.",
  },
];

export function Glp1Timeline() {
  return (
    <section
      id="timeline"
      className="bg-[var(--color-surface)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            What to <span className="text-[var(--service-accent)]">Expect</span>{" "}
            During Treatment
          </h2>
          <p className="mt-4 text-[var(--ds-ink-mid)]">
            Below is a general overview of how your medically supervised
            weight management timeline may progress. Individual experiences
            may vary.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-0 top-10 hidden h-px bg-[var(--service-border)] sm:block" />

          {timeline.map((step, i) => (
            <div
              key={step.phase}
              className="relative rounded-2xl bg-[var(--service-section-bg)] p-6 ring-1 ring-[var(--service-border)]"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--service-accent)] text-white">
                  <step.icon className="size-5" />
                </span>
                <span className="text-xs font-semibold tracking-widest text-[var(--ds-ink-soft)]">
                  STEP {i + 1}
                </span>
              </div>
              <h3 className="font-heading mt-4 text-lg font-medium text-[var(--ds-ink)]">
                {step.phase}{" "}
                <span className="text-[var(--service-accent)]">{step.label}</span>
              </h3>
              <p className="mt-2 text-sm text-[var(--ds-ink-mid)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-[var(--ds-ink-soft)]">
          Large clinical trials, including{" "}
          <span className="font-semibold text-[var(--ds-ink)]">STEP</span> and{" "}
          <span className="font-semibold text-[var(--ds-ink)]">SURMOUNT</span>,
          show GLP-1 therapies combined with lifestyle support can aid
          sustained weight reduction in appropriate patients. Individual
          results vary.
        </p>
      </div>
    </section>
  );
}
