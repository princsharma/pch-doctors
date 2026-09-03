const conditions = [
  {
    title: "Obesity and overweight",
    text: "If extra weight is affecting daily life or other conditions, the visit starts there.",
    wide: true,
  },
  {
    title: "Type 2 diabetes",
    text: "Some GLP-1 medicines also help blood sugar. Your clinician will say if that overlap matters for you.",
    wide: false,
  },
  {
    title: "Prediabetes",
    text: "Catching this early can change the plan. Medication is still a maybe, not a default.",
    wide: false,
  },
  {
    title: "Metabolic health",
    text: "Energy, cholesterol, blood pressure, and how your body handles food all belong in the same conversation.",
    wide: true,
  },
  {
    title: "Appetite and cravings",
    text: "If hunger is running the day, say so. That is clinical information, not a character flaw.",
    wide: false,
  },
  {
    title: "Women's health overlap",
    text: "PCOS, postpartum weight, and hormone-related changes can sit on the same visit when they are relevant.",
    wide: false,
  },
];

export function Glp1DoctorsFocus() {
  return (
    <section className="bg-[var(--ds-brand-dark)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#f4a261] uppercase">
            What they review
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            The health picture, not just the scale
          </h2>
          <p className="mt-4 text-white/75">
            These are the kinds of cases this team sees. None of them guarantee
            a prescription. That call is made on the visit.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {conditions.map((item) => (
            <div
              key={item.title}
              className={`rounded-[1.5rem] p-7 ring-1 ring-white/10 ${
                item.wide
                  ? "bg-white/[0.08] sm:col-span-2 lg:col-span-1"
                  : "bg-white/[0.04]"
              }`}
            >
              <h3 className="font-heading text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
