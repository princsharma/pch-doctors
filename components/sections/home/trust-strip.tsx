import { Shield, BadgeCheck, Lock, ThumbsUp } from "lucide-react";

const trustItems = [
  { icon: Lock, label: "256-bit Encryption" },
  { icon: BadgeCheck, label: "Licensed Doctors" },
  { icon: Shield, label: "HIPAA Secure" },
  { icon: ThumbsUp, label: "99% Approval Rate" },
];

export function HomeTrustStrip() {
  return (
    <section className="border-b border-[#0d6e74]/10 bg-[#eef6f6]/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 md:justify-between">
        {trustItems.map((item) => (
          <span
            key={item.label}
            className="flex items-center gap-2 text-sm font-semibold text-[#0a2733]/70"
          >
            <item.icon className="size-5 text-[#0d6e74]" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
