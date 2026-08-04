import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { SafeSecure } from "@/components/sections/safe-secure";
import { Reviews } from "@/components/sections/reviews";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Medical Marijuana Consultation - PCH Doctors",
  description:
    "Connect with qualified doctors nationwide for safe, legal medical marijuana consultations. Same-day certifications available with our trusted telemedicine platform.",
};

export default function MedicalMarijuanaPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <Hero />
      <Process />
      <SafeSecure />
      <Reviews />
      <Pricing />
      <Faq />
      <SiteFooter />
    </div>
  );
}
