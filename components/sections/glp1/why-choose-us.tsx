import { ShieldCheck, BadgeCheck, Pill, Headset, Star } from "lucide-react";

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Licensed Clinicians",
    description: "Evidence-based care guided by clinical standards",
  },
  {
    icon: Pill,
    title: "FDA-Approved or Compounded Medications",
    description: "Prescribed based on clinical eligibility and provider judgment",
  },
  {
    icon: ShieldCheck,
    title: "Secure and Confidential Evaluations",
    description: "Private one-on-one secure video consultations",
  },
  {
    icon: Headset,
    title: "24/7 Reliable Assistance",
    description: "Dedicated support whenever questions arise",
  },
  {
    icon: Star,
    title: "Trusted Reviews",
    description: "Rated 4.9/5 stars by patients",
  },
];

export function Glp1WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[var(--service-section-bg-alt)] py-20"
    >
      <div className="pointer-events-none absolute -left-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[var(--service-accent)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--ds-ink-soft)]">
          <span className="size-2 rounded-full bg-[var(--service-accent)]" />
          10+ YEARS OF EXPERIENCE
        </div>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            Why <span className="text-[var(--service-accent)]">Choose Us</span>
          </h2>
          <p className="max-w-md text-sm text-[var(--ds-ink-mid)] lg:mb-1">
            We are committed to offering a simple, safe, and
            clinician-guided weight loss program.
          </p>
        </div>

        <div className="mt-6 h-px w-full bg-[var(--service-border)]" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="flex min-h-48 flex-col rounded-2xl bg-[var(--color-surface)] p-6 shadow-sm ring-1 ring-[var(--service-border)] transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--service-accent-soft)] text-[var(--service-accent)]">
                <item.icon className="size-5" />
              </div>
              <h3 className="font-heading mt-4 text-base font-medium text-[var(--ds-ink)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--ds-ink-mid)]">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--ds-ink-soft)]">
          Compounded medications are prepared by licensed compounding
          pharmacies and are not FDA-approved.
        </p>
      </div>
    </section>
  );
}
