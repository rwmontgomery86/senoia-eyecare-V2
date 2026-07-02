import type { Metadata } from "next";
import SpecialtyHero from "@/components/sections/specialty-lenses/SpecialtyHero";
import MyopiaIntro from "@/components/sections/specialty-lenses/MyopiaIntro";
import StellestLens from "@/components/sections/specialty-lenses/StellestLens";
import ColorVisionIntro from "@/components/sections/specialty-lenses/ColorVisionIntro";
import EnChromaDemo from "@/components/sections/specialty-lenses/EnChromaDemo";
import SpecialtyFAQ from "@/components/sections/specialty-lenses/SpecialtyFAQ";
import BookingCTA from "@/components/sections/BookingCTA";
import { services } from "@/data/services";
import { faq } from "@/data/specialtyLenses";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Specialty Lenses",
  description:
    "Essilor Stellest myopia-control lenses for kids and EnChroma color-blindness glasses in Senoia, Georgia — in-office color vision testing and walk-in demo pairs.",
  alternates: { canonical: "/specialty-lenses" },
  openGraph: {
    url: "/specialty-lenses",
    title: "Specialty Lenses — Senoia Eyecare",
    description:
      "Stellest myopia control for kids and EnChroma color-blindness lenses — try them in person in Senoia, Georgia.",
  },
};

const specialty = services.find((s) => s.slug === "specialty-lenses")!;

const schemas = [
  serviceSchema(specialty),
  faqSchema(faq),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Specialty Lenses", path: "/specialty-lenses" },
  ]),
];

export default function SpecialtyLensesPage() {
  return (
    <>
      <SpecialtyHero />
      <MyopiaIntro />
      <StellestLens />
      <ColorVisionIntro />
      <EnChromaDemo />
      <SpecialtyFAQ />
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
