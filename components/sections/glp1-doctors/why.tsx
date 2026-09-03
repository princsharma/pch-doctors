import { ClipboardCheck, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const reasons = [
  {
    n: "01",
    icon: Stethoscope,
    title: "They are licensed physicians",
    text: "MDs, not coaches running the medical decision. The visit is a clinical review of your history and labs.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "GLP-1 is not automatic",
    text: "Wegovy, Zepbound, Ozempic, or Mounjaro are discussed only when they fit. If they do not, you hear that on the call.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "The call stays private",
    text: "HIPAA-compliant video. Your health details are for the clinician, not a marketing list.",
  },
  {
    n: "04",
    icon: HeartPulse,
    title: "They stay with you after",
    text: "Dose changes, side effects, and check-ins are part of the program. You are not left with a prescription and a shrug.",
  },
];

export function Glp1DoctorsWhy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[var(--service-accent)] uppercase">
            How they work
          </p>
          <h2 className="font-heading mt-3 text-3xl font-medium tracking-tight text-[var(--ds-ink)] sm:text-4xl">
            A visit that still feels like medicine
          </h2>
          <p className="mt-4 text-neutral-600">
            The Ongo weight loss program is clinician-guided. That means a
            person with a license looks at your case before anyone talks about
            a pen or a refill.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map((item) => (
            <li
              key={item.n}
              className="relative overflow-hidden rounded-[1.5rem] bg-[#fffbf5] p-7 ring-1 ring-black/5"
            >
              <p className="font-heading text-sm font-semibold tracking-[0.18em] text-[var(--service-accent)]">
                {item.n}
              </p>
              <span className="mt-4 flex size-11 items-center justify-center rounded-2xl bg-white text-[var(--service-brand)] shadow-sm">
                <item.icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading mt-5 text-xl font-medium text-[var(--ds-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
