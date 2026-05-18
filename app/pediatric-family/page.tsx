import type { Metadata } from "next";
import PediatricFamily from "@/components/sections/PediatricFamily";
import { services } from "@/data/services";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Pediatric & Family",
  description:
    "Gentle, thorough children's exams in Senoia, Georgia — from age three, with parents in the room. Family appointments scheduled in one quiet morning.",
  alternates: { canonical: "/pediatric-family" },
  openGraph: {
    url: "/pediatric-family",
    title: "Pediatric & Family — Senoia Eyecare",
    description:
      "Gentle children's exams in Senoia, Georgia — from age three, with parents in the room.",
  },
};

const pediatric = services.find((s) => s.slug === "pediatric-family")!;

const schemas = [
  serviceSchema(pediatric),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pediatric & Family", path: "/pediatric-family" },
  ]),
];

export default function Page() {
  return (
    <>
      <PediatricFamily />
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
