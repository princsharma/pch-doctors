import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { ServiceBreadcrumb } from "@/components/service-breadcrumb";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { SafeSecure } from "@/components/sections/safe-secure";
import { Reviews } from "@/components/sections/reviews";
import { Doctors } from "@/components/sections/doctors";
import { Pricing } from "@/components/sections/pricing";
import { Faq, MMJ_FAQS } from "@/components/sections/faq";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { mmjSchemas } from "@/lib/schema";

export const metadata = buildPageMetadata("mmj");

export default function MedicalMarijuanaPage() {
  const meta = PAGE_METADATA.mmj;
  const page = SERVICE_PAGES.mmj;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={mmjSchemas({
          title: meta.title,
          description: meta.description,
          faqs: MMJ_FAQS,
        })}
      />
      <SiteHeader />
      <div data-service="mmj">
        <ServiceBreadcrumb page={page} />
        <Hero />
        <Process />
        <SafeSecure />
        <Reviews />
        <Doctors />
        <Pricing />
        <Faq />
      </div>
      <SiteFooter />
    </div>
  );
}
