import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Kionna M.",
    text: "Dr Joseph Michelson was super helpful with my first time experience here, making everything fast & friendly.. in definitely coming back here",
  },
  {
    name: "Gabriela R.",
    text: "I would expect to meet with someone in person.. not walk into a room with a computer waiting for me to skype. I tried to keep my mind open but the whole thing was glitchy. I was talking to a photo of someone.. so weird.",
  },
  {
    name: "Nat C.",
    text: "Awesome doctor ! He gave me a few pointers on cannabis and they are Super friendly :) second year here will be back",
  },
  {
    name: "Michelle J.",
    text: "My first time getting a recommendation and I must say it was an amazing one. The Dr. Is patient and understanding. The receptionist was amazing as well, left her a $10 tip! Thank you so much!",
  },
  {
    name: "Heather H.",
    text: "If you are looking to simply buy a rec to run off to the dispensary and get high with your homies, do not bother coming here. This is a professional location with doctors that will legitimately evaluate you for real qualifying conditions.",
  },
  {
    name: "BJ F.",
    text: "I've been going there for 3 years now. I can't understand the bad reviews. The doctor is kind and very educational. When I was new to this type of treatment, he explained everything.",
  },
  {
    name: "Cee S.",
    text: "Came in yesterday to renew..easy breezy. You too should come here, no bs. No non sense. Walk in, maybe a line, get paperwork, fill out paperwork, turn in paperwork, wait to be called, go in see doctor. That simple.",
  },
  {
    name: "Matthew A.",
    text: "Great place, great staff, safe location, all around best place to go for your rec, the doctors are actually knowledgeable and allow you to explain your question and they don't rush you.",
  },
  {
    name: "Bryan C.",
    text: "Nice place and fast service, I would recommend. Come through for a rec. the doc is straight to the point and I like that they accept walk ins.",
  },
];

const avatarTones = [
  "bg-[#0d6e74] text-white",
  "bg-[#f2a83c] text-[#0a2733]",
  "bg-[#e0342a] text-white",
  "bg-[#0a4f54] text-white",
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-[#e0342a] text-[#e0342a]" />
      ))}
    </div>
  );
}

function ReviewCard({ review, i }: { review: (typeof reviews)[number]; i: number }) {
  return (
    <Card className="relative mb-6 overflow-hidden p-5 shadow-sm ring-1 ring-black/5">
      <Quote className="pointer-events-none absolute -right-2 -top-2 size-14 text-[#0d6e74]/5" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-full text-xs font-semibold",
              avatarTones[i % avatarTones.length]
            )}
          >
            {review.name.charAt(0)}
          </span>
          <div>
            <p className="font-heading text-sm font-medium text-[#0a2733]">
              {review.name}
            </p>
            <span className="text-[10px] text-[#0d6e74]">Verified</span>
          </div>
        </div>
        <Stars />
      </div>

      <p className="relative mt-3 text-sm text-neutral-600">{review.text}</p>

      <span className="relative mt-3 block text-[10px] text-neutral-400">
        Posted on Yelp
      </span>
    </Card>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration,
}: {
  items: typeof reviews;
  direction: "up" | "down";
  duration: string;
}) {
  return (
    <div className="relative h-[640px] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />

      <div
        className="flex flex-col"
        style={{
          animation: `${direction === "up" ? "marquee-up" : "marquee-down"} ${duration} linear infinite`,
        }}
      >
        {[...items, ...items].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} i={i} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  const col1 = reviews.filter((_, i) => i % 3 === 0);
  const col2 = reviews.filter((_, i) => i % 3 === 1);
  const col3 = reviews.filter((_, i) => i % 3 === 2);

  return (
    <section id="reviews" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-[#0d6e74]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 rounded-full bg-[#f2a83c]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
            What Our <span className="text-[#0d6e74]">Customers</span> Say?
          </h2>
          <p className="mt-4 text-neutral-600">
            Trusted by thousands – real stories of fast, affordable, and
            stress-free medical marijuana evaluations online.
          </p>
        </div>

        <div className="mt-14 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <MarqueeColumn items={col1} direction="up" duration="38s" />
          <MarqueeColumn items={col2} direction="down" duration="44s" />
          <div className="hidden lg:block">
            <MarqueeColumn items={col3} direction="up" duration="32s" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:hidden">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} i={i} />
          ))}
        </div>

        <div className="mt-4 flex flex-col items-center gap-3">
          <Button className="rounded-full bg-[#f2a83c] px-7 py-6 text-sm font-semibold text-[#0a2733] hover:bg-[#f2a83c]/90">
            Read More Reviews
          </Button>
          <p className="text-xs text-neutral-500">
            Every customer&rsquo;s review helps us improve.
          </p>
        </div>
      </div>
    </section>
  );
}
