import { Shield, BadgeCheck, Lock, ThumbsUp } from "lucide-react";

const trustItems = [
  { icon: Lock, label: "256-bit Encryption", service: "mmj" as const },
  { icon: BadgeCheck, label: "Licensed Doctors", service: "glp1" as const },
  { icon: Shield, label: "HIPAA Secure", service: "mmj" as const },
  { icon: ThumbsUp, label: "99% Approval Rate", service: "glp1" as const },
];

export function HomeTrustStrip() {
  return (
    <section className="border-b border-[var(--ds-border)] bg-gradient-to-r from-[#f3fbf6] via-white to-[#fffbf5] py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 md:justify-between">
        {trustItems.map((item) => (
          <span
            key={item.label}
            data-service={item.service}
            className="flex items-center gap-2 text-sm font-semibold text-[var(--ds-ink)]/70"
          >
            <item.icon className="size-5 text-[var(--service-accent)]" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
