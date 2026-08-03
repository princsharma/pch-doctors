import Image from "next/image";
import { Laptop2, Video, Phone, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#dcf0f1] via-[#eef6f6] to-white">
      <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 size-80 rounded-full bg-[#0d6e74]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-0 size-64 rounded-full bg-white/50 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center lg:py-28">
        <Badge
          variant="outline"
          className="h-11 gap-2.5 rounded-full border-neutral-200 bg-white/80 px-5 text-sm shadow-sm backdrop-blur"
        >
          <span className="font-semibold text-[#0a2733]">4.9/5</span>
          <Star className="size-4.5 fill-[#f2a83c] text-[#f2a83c]" />
          <span className="text-neutral-500">Rated by Patients</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#e0342a] text-xs font-bold text-white">
            P
          </span>
        </Badge>

        <h1 className="mt-8 font-heading text-4xl font-medium leading-[1.05] tracking-normal sm:text-[65px] sm:leading-[80px]">
          <span className="text-[#0a2733]">Get Your Medical</span>{" "}
          <span className="text-neutral-400">Marijuana</span>
          <br />
          <span className="text-[#0a2733]">Certification</span>{" "}
          <span className="text-neutral-400">Online</span>
        </h1>

        <p className="mt-6 max-w-xl text-neutral-600">
          Connect with qualified doctors nationwide for safe, legal medical
          marijuana consultations. Same-day certifications available with
          our trusted telemedicine platform.
        </p>

        <Button className="mt-8 rounded-full bg-[#f2a83c] px-9 py-7 text-base font-semibold text-[#0a2733] hover:bg-[#f2a83c]/90">
          Book Your Doctor Consultation Today
        </Button>

        <div className="relative mt-16 w-full max-w-4xl overflow-hidden rounded-2xl bg-white text-left shadow-2xl ring-1 ring-black/5">
          <div className="flex items-center gap-1.5 border-b px-4 py-3">
            <span className="size-2.5 rounded-full bg-[#e0342a]" />
            <span className="size-2.5 rounded-full bg-[#f2a83c]" />
            <span className="size-2.5 rounded-full bg-[#0d6e74]" />
          </div>

          <div className="relative aspect-16/9 w-full bg-neutral-900">
            <Image
              src="/hero-section.webp"
              alt="Licensed physician consulting via video call"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
              {[Laptop2, Video, Phone, ShieldCheck].map((Icon, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-white shadow-md",
                    i === 2 ? "bg-[#e0342a]" : "bg-black/40 backdrop-blur"
                  )}
                >
                  <Icon className="size-4" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
