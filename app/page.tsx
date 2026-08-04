import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeTrustStrip } from "@/components/sections/home/trust-strip";
import { HomeProcess } from "@/components/sections/home/process";
import { HomeServices } from "@/components/sections/home/services";
import { HomeDoctors } from "@/components/sections/home/doctors";
import { HomePricing } from "@/components/sections/home/pricing";
import { HomeReviews } from "@/components/sections/home/reviews";
import { HomeFaq } from "@/components/sections/home/faq";

export const metadata: Metadata = {
  title: "PCH Doctors | Clinician-Guided Medical Solutions",
  description:
    "Secure, HIPAA-compliant medical marijuana certifications and GLP-1 weight management programs — 100% online.",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <SiteHeader />
      <HomeHero />
      <HomeTrustStrip />
      <HomeProcess />
      <HomeServices />
      <HomeDoctors />
      <HomePricing />
      <HomeReviews />
      <HomeFaq />
      <SiteFooter />
    </div>
  );
}
