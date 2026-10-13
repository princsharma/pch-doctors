import Image from "next/image";
import type { Contributor } from "@/lib/contributors";
import { doctorInitials } from "@/lib/doctors";
import { cn } from "@/lib/utils";

export function ContributorPhoto({
  person,
  className,
  initialsClassName,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw",
  priority = false,
}: {
  person: Contributor;
  className?: string;
  initialsClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (person.image) {
    return (
      <Image
        src={person.image}
        alt={person.displayName}
        fill
        priority={priority}
        className={cn("object-cover object-[center_18%]", className)}
        sizes={sizes}
      />
    );
  }

  return (
    <span
      className={cn(
        "flex size-full items-center justify-center bg-[linear-gradient(160deg,#e8f5ee_0%,#d4eadc_100%)] font-heading font-medium text-[var(--ds-brand)]",
        initialsClassName
      )}
      aria-hidden
    >
      {doctorInitials(person.name)}
    </span>
  );
}
