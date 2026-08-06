import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { HomeHero } from "@/components/sections/home/hero";
import { HomeProcess } from "@/components/sections/home/process";
import { HomeServices } from "@/components/sections/home/services";
import { HomeDoctors } from "@/components/sections/home/doctors";
import { HomePricing } from "@/components/sections/home/pricing";
import { HomeReviews } from "@/components/sections/home/reviews";
import { HomeFaq, HOME_FAQS } from "@/components/sections/home/faq";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { homeSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("home");

export default function Home() {
  const meta = PAGE_METADATA.home;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={homeSchemas({
          title: meta.title,
          description: meta.description,
          faqs: HOME_FAQS,
        })}
      />
      <SiteHeader />
      <HomeHero />
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
