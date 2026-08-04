import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Glp1Hero } from "@/components/sections/glp1/hero";
import { Glp1Process } from "@/components/sections/glp1/process";
import { Glp1Medications } from "@/components/sections/glp1/medications";
import { Glp1Benefits } from "@/components/sections/glp1/benefits";
import { Glp1WhyChooseUs } from "@/components/sections/glp1/why-choose-us";
import { Glp1Timeline } from "@/components/sections/glp1/timeline";
import { Glp1Doctors } from "@/components/sections/glp1/doctors";
import { Glp1Pricing } from "@/components/sections/glp1/pricing";
import { Glp1Faq } from "@/components/sections/glp1/faq";
import { Glp1Cta } from "@/components/sections/glp1/cta";

export const metadata: Metadata = {
  title: "GLP-1 Medications - PCH Doctors",
  description:
    "Start with a personalized, online, clinician-guided GLP-1 evaluation based on your medical history and health goals. Treatment is prescribed only when clinically appropriate by your provider.",
};

export default function Glp1MedicationsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <Glp1Hero />
      <Glp1Process />
      <Glp1Medications />
      <Glp1Benefits />
      <Glp1WhyChooseUs />
      <Glp1Timeline />
      <Glp1Doctors />
      <Glp1Pricing />
      <Glp1Faq />
      <Glp1Cta />
      <SiteFooter />
    </div>
  );
}
