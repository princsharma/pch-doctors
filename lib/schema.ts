import { SITE } from "@/lib/site";
import { absoluteUrl, SITE_URL } from "@/lib/seo";
import { LEGAL_PAGES } from "@/lib/legal-pages";
import { SERVICE_PAGES } from "@/lib/service-pages";

type FaqItem = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE.name,
    url: absoluteUrl("/"),
    email: SITE.email,
    telephone: SITE.phone,
    logo: absoluteUrl("/pch-doctors-logo.png"),
    image: absoluteUrl("/opengraph-image"),
    description:
      "Secure, HIPAA-compliant telehealth for medical marijuana certifications and clinician-guided GLP-1 weight management.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "910 W Pacific Coast Hwy Unit D",
      addressLocality: "Wilmington",
      addressRegion: "CA",
      postalCode: "90744",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: SITE.phone,
      email: SITE.email,
      areaServed: "US",
      availableLanguage: ["English"],
    },
    sameAs: [] as string[],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: absoluteUrl("/"),
    name: SITE.name,
    description:
      "Online medical marijuana certifications and clinician-guided GLP-1 weight loss programs.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function webPageSchema(options: {
  title: string;
  description: string;
  path: string;
  type?: string | string[];
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": options.type ?? "WebPage",
    "@id": `${absoluteUrl(options.path)}#webpage`,
    url: absoluteUrl(options.path),
    name: options.title,
    description: options.description,
    ...(options.datePublished
      ? { datePublished: options.datePublished }
      : {}),
    ...(options.dateModified ? { dateModified: options.dateModified } : {}),
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function medicalServiceSchema(options: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${absoluteUrl(options.path)}#service`,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    serviceType: options.serviceType,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  };
}

export function faqPageSchema(faqs: FaqItem[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function homeSchemas(options: {
  title: string;
  description: string;
  faqs: FaqItem[];
}) {
  return [
    organizationSchema(),
    websiteSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: "/",
      type: "MedicalWebPage",
    }),
    medicalServiceSchema({
      name: "Medical Marijuana Certification",
      description:
        "Same-day online medical marijuana evaluations with state-licensed physicians.",
      path: "/services/medical-marijuana-consultation",
      serviceType: "Medical marijuana evaluation",
    }),
    medicalServiceSchema({
      name: "GLP-1 Weight Loss Program",
      description:
        "Clinician-guided GLP-1 weight management with personalized online evaluations.",
      path: "/services/glp-1-medications",
      serviceType: "Weight management",
    }),
    faqPageSchema(options.faqs, "/"),
  ];
}

export function mmjSchemas(options: {
  title: string;
  description: string;
  faqs: FaqItem[];
}) {
  const page = SERVICE_PAGES.mmj;

  return [
    organizationSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: page.path,
      type: "MedicalWebPage",
      datePublished: page.datePublished,
      dateModified: page.dateModified,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.label, path: page.path },
    ]),
    medicalServiceSchema({
      name: "Medical Marijuana Certification",
      description: options.description,
      path: page.path,
      serviceType: "Medical marijuana evaluation",
    }),
    faqPageSchema(options.faqs, page.path),
  ];
}

export function glp1Schemas(options: {
  title: string;
  description: string;
  faqs: FaqItem[];
}) {
  const page = SERVICE_PAGES.glp1;

  return [
    organizationSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: page.path,
      type: "MedicalWebPage",
      datePublished: page.datePublished,
      dateModified: page.dateModified,
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.label, path: page.path },
    ]),
    medicalServiceSchema({
      name: "GLP-1 Weight Loss Program",
      description: options.description,
      path: page.path,
      serviceType: "Weight management",
    }),
    faqPageSchema(options.faqs, page.path),
  ];
}

export function legalPageSchemas(options: {
  title: string;
  description: string;
  slug: string;
}) {
  return [
    organizationSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: `/${options.slug}`,
      type: "WebPage",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: options.title, path: `/${options.slug}` },
    ]),
  ];
}

export function aboutPageSchemas(options: {
  title: string;
  description: string;
}) {
  return [
    organizationSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: "/about-us",
      type: "AboutPage",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about-us" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${absoluteUrl("/about-us")}#aboutpage`,
      url: absoluteUrl("/about-us"),
      name: options.title,
      description: options.description,
      mainEntity: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ];
}

export function contactPageSchemas(options: {
  title: string;
  description: string;
}) {
  return [
    organizationSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: "/contact",
      type: "ContactPage",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/contact")}#contactpage`,
      url: absoluteUrl("/contact"),
      name: options.title,
      description: options.description,
      mainEntity: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ];
}

export function sitemapPageSchemas(options: {
  title: string;
  description: string;
}) {
  return [
    organizationSchema(),
    webPageSchema({
      title: options.title,
      description: options.description,
      path: "/sitemap",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Sitemap", path: "/sitemap" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "PCH Doctors Sitemap",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          url: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          url: absoluteUrl("/about-us"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact",
          url: absoluteUrl("/contact"),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Medical Marijuana Consultation",
          url: absoluteUrl("/services/medical-marijuana-consultation"),
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "GLP-1 Medications",
          url: absoluteUrl("/services/glp-1-medications"),
        },
        ...LEGAL_PAGES.map((page, index) => ({
          "@type": "ListItem",
          position: index + 6,
          name: page.title,
          url: absoluteUrl(`/${page.slug}`),
        })),
      ],
    },
  ];
}
