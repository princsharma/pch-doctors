import { Star } from "lucide-react";

const reviews = [
  {
    initials: "VR",
    name: "Vincent R.",
    text: "The process was so much faster than I expected. My doctor was incredibly empathetic and took the time to explain everything about the weight loss program. Highly recommend!",
    service: "glp1" as const,
  },
  {
    initials: "BC",
    name: "Bryan C.",
    text: "Professional, easy to use, and secure. Getting my medical card renewal was completely stress-free. The telemedicine interface worked perfectly on my phone.",
    service: "mmj" as const,
  },
];

export function HomeReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-20">
      <div
        data-service="glp1"
        className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-[var(--service-accent)]/15 blur-3xl"
      />
      <div
        data-service="mmj"
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-[var(--service-brand)]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[var(--ds-ink)] sm:text-4xl">
            What Our{" "}
            <span className="relative inline-block">
              Customers
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[var(--ds-brand)]/15" />
            </span>{" "}
            Say
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-5 fill-[#f59e0b] text-[#f59e0b]"
                aria-hidden
              />
            ))}
          </div>
          <p className="mt-2 text-neutral-600">
            Trusted by thousands of patients nationwide.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          {reviews.map((review) => (
            <div
              key={review.name}
              data-service={review.service}
              className="flex-1 rounded-2xl bg-[var(--service-section-bg)] p-8 ring-1 ring-[var(--service-border)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[var(--service-accent)] text-[var(--service-accent)]"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-lg italic leading-relaxed text-[var(--ds-ink)]/80">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4 not-italic">
                <div className="flex size-12 items-center justify-center rounded-full bg-[var(--service-accent)] text-sm font-bold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-[var(--ds-ink)]">{review.name}</p>
                  <p className="text-sm text-[var(--service-brand-dark)]">
                    Verified Patient
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
