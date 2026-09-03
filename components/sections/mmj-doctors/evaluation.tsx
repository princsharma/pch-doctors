const steps = [
  {
    number: "01",
    title: "You fill in the basics",
    description:
      "A short intake covers who you are, where you are sitting, and what has been going on with your health.",
  },
  {
    number: "02",
    title: "You get on a private call",
    description:
      "The clinician walks through your history, asks follow-up questions, and checks how your state treats those conditions.",
  },
  {
    number: "03",
    title: "They make a clinical call",
    description:
      "If a recommendation is appropriate, you receive it digitally. If it is not, they will say so. There is no guaranteed yes.",
  },
];

export function MmjDoctorsEvaluation() {
  return (
    <section className="relative overflow-hidden bg-[var(--ds-brand-dark)] py-20 text-white">
      <div className="pointer-events-none absolute -left-24 top-0 size-80 rounded-full bg-[var(--service-brand)]/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#9ad4b2] uppercase">
            What the visit looks like
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Three steps. One honest answer.
          </h2>
          <p className="mt-4 text-white/75">
            Nobody is trying to rush you through a maze. The point is a clear
            medical decision you can understand.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-[1.5rem] bg-white/[0.06] p-7 ring-1 ring-white/10"
            >
              <p className="font-heading text-4xl font-medium text-[#9ad4b2]/80">
                {step.number}
              </p>
              <h3 className="font-heading mt-5 text-xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
