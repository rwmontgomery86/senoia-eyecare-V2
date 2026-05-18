import type { Metadata } from "next";
import EyeExamsHero from "@/components/sections/eye-exams/EyeExamsHero";
import Process from "@/components/sections/eye-exams/Process";
import Diptych from "@/components/sections/eye-exams/Diptych";
import Technology from "@/components/sections/eye-exams/Technology";
import Pediatric from "@/components/sections/eye-exams/Pediatric";
import Insurance from "@/components/sections/eye-exams/Insurance";
import FAQ, { faqs } from "@/components/sections/eye-exams/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";
import { services } from "@/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Eye Exams",
  description:
    "Comprehensive eye exams in Senoia, Georgia — for the whole family. What to expect on your visit, the technology we use, and how to book.",
  alternates: { canonical: "/eye-exams" },
  openGraph: {
    url: "/eye-exams",
    title: "Eye Exams — Senoia Eyecare",
    description:
      "Comprehensive eye exams in Senoia, Georgia — for the whole family.",
  },
};

const exams = services.find((s) => s.slug === "comprehensive-exams")!;

const schemas = [
  serviceSchema(exams),
  faqSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Eye Exams", path: "/eye-exams" },
  ]),
];

export default function EyeExamsPage() {
  return (
    <>
      <EyeExamsHero />
      <Process />
      <Diptych />
      <Technology />
      <Pediatric />
      <Insurance />
      <FAQ />
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
