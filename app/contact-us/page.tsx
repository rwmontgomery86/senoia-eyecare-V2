import type { Metadata } from "next";
import ContactUs from "@/components/sections/ContactUs";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Senoia Eyecare — 7280 GA-16 Suite F, Senoia, Georgia. Hours, phone, email, fax, and directions. Two minutes from downtown.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    url: "/contact-us",
    title: "Contact & Visit — Senoia Eyecare",
    description:
      "Address, hours, and directions for Senoia Eyecare in Senoia, Georgia.",
  },
};

const schemas = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact & Visit", path: "/contact-us" },
  ]),
];

export default function ContactUsPage() {
  return (
    <>
      <ContactUs />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
