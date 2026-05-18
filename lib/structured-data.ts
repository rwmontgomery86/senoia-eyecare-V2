import { site } from "@/data/site";
import { services } from "@/data/services";
import type { Doctor, Faq, Service } from "@/data/types";

const BUSINESS_ID = `${site.url}#business`;
const WEBSITE_ID = `${site.url}#website`;

const AREA_SERVED = [
  "Senoia",
  "Newnan",
  "Sharpsburg",
  "Tyrone",
  "Peachtree City",
  "Fayetteville",
].map((name) => ({
  "@type": "City",
  name,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Coweta County, Georgia",
  },
}));

export function optometristSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Optometrist",
    "@id": BUSINESS_ID,
    additionalType: "https://schema.org/MedicalBusiness",
    medicalSpecialty: "Optometric",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/opengraph-image`,
    telephone: site.phone.tel,
    faxNumber: site.fax,
    email: site.email,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Insurance, HSA, FSA",
    availableLanguage: ["English"],
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Senoia",
      addressRegion: "GA",
      postalCode: "30276",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2941,
      longitude: -84.5752,
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "00:00",
        closes: "00:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: s.href ? `${site.url}${s.href}` : undefined,
          provider: { "@id": BUSINESS_ID },
        },
      })),
    },
    sameAs: [site.social.facebook.url],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.tagline,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: service.href ? `${site.url}${service.href}` : site.url,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREA_SERVED,
    serviceType: service.title,
  };
}

export function personSchema(doctor: Doctor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${doctor.name}, ${doctor.credentials}`,
    jobTitle: doctor.role,
    description: doctor.oneLiner,
    image: `${site.url}${doctor.photo}`,
    worksFor: { "@id": BUSINESS_ID },
    url: `${site.url}/team`,
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function jsonLdScript(schema: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
