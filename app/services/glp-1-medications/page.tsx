import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { ServiceBreadcrumb } from "@/components/service-breadcrumb";
import { Glp1Hero } from "@/components/sections/glp1/hero";
import { Glp1Process } from "@/components/sections/glp1/process";
import { Glp1Medications } from "@/components/sections/glp1/medications";
import { Glp1Benefits } from "@/components/sections/glp1/benefits";
import { Glp1WhyChooseUs } from "@/components/sections/glp1/why-choose-us";
import { Glp1Timeline } from "@/components/sections/glp1/timeline";
import { Doctors } from "@/components/sections/doctors";
import { Glp1Pricing } from "@/components/sections/glp1/pricing";
import { Glp1Faq, GLP1_FAQS } from "@/components/sections/glp1/faq";
import { Glp1Cta } from "@/components/sections/glp1/cta";
import { PAGE_METADATA, buildPageMetadata } from "@/lib/metadata";
import { SERVICE_PAGES } from "@/lib/service-pages";
import { glp1Schemas } from "@/lib/schema";

export const metadata = buildPageMetadata("glp1");

export default function Glp1MedicationsPage() {
  const meta = PAGE_METADATA.glp1;
  const page = SERVICE_PAGES.glp1;

  return (
    <div className="flex flex-1 flex-col bg-white">
      <JsonLd
        data={glp1Schemas({
          title: meta.title,
          description: meta.description,
          faqs: GLP1_FAQS,
        })}
      />
      <SiteHeader />
      <div data-service="glp1">
        <ServiceBreadcrumb page={page} />
        <Glp1Hero />
        <Glp1Process />
        <Glp1Medications />
        <Glp1Benefits />
        <Glp1WhyChooseUs />
        <Glp1Timeline />
        <Doctors />
        <Glp1Pricing />
        <Glp1Faq />
        <Glp1Cta />
      </div>
      <SiteFooter />
    </div>
  );
}
