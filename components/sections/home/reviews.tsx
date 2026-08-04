import { Star } from "lucide-react";

const reviews = [
  {
    initials: "VR",
    name: "Vincent R.",
    text: "The process was so much faster than I expected. My doctor was incredibly empathetic and took the time to explain everything about the weight loss program. Highly recommend!",
  },
  {
    initials: "BC",
    name: "Bryan C.",
    text: "Professional, easy to use, and secure. Getting my medical card renewal was completely stress-free. The telemedicine interface worked perfectly on my phone.",
  },
];

export function HomeReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-[#f2a83c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            What Our{" "}
            <span className="relative inline-block">
              Customers
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-[#0d6e74]/15" />
            </span>{" "}
            Say
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-[#f2a83c] text-[#f2a83c]" />
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
              className="flex-1 rounded-2xl bg-[#eef6f6]/70 p-8 ring-1 ring-[#0d6e74]/10"
            >
              <p className="text-lg italic leading-relaxed text-[#0a2733]/80">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4 not-italic">
                <div className="flex size-12 items-center justify-center rounded-full bg-[#0d6e74] text-sm font-bold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#0a2733]">{review.name}</p>
                  <p className="text-sm text-neutral-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
