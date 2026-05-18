import type { Metadata } from "next";
import ContactsHero from "@/components/sections/contacts/ContactsHero";
import MarloReorder from "@/components/sections/contacts/marlo-variants/VariantPhotoSplit";
import LensTypes from "@/components/sections/contacts/LensTypes";
import FittingProcess from "@/components/sections/contacts/FittingProcess";
import ContactBrands from "@/components/sections/contacts/ContactBrands";
import ContactsFAQ from "@/components/sections/contacts/ContactsFAQ";
import BookingCTA from "@/components/sections/BookingCTA";
import { services } from "@/data/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Lens Fitting",
  description:
    "Soft, toric, and multifocal contact lenses fit at Senoia Eyecare. New wearers welcome — every fitting starts with a comprehensive exam and ends with a follow-up.",
  alternates: { canonical: "/contacts" },
  openGraph: {
    url: "/contacts",
    title: "Contact Lens Fitting — Senoia Eyecare",
    description:
      "Soft, toric, and multifocal contact lenses fit in Senoia, Georgia. New wearers welcome.",
  },
};

const contacts = services.find((s) => s.slug === "contact-lens-fitting")!;

const schemas = [
  serviceSchema(contacts),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact Lens Fitting", path: "/contacts" },
  ]),
];

export default function ContactsPage() {
  return (
    <>
      <ContactsHero />
      <MarloReorder />
      <LensTypes />
      <FittingProcess />
      <ContactBrands />
      <ContactsFAQ />
      <BookingCTA />
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
