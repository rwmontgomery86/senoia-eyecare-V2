import type { Metadata } from "next";
import VariantFeature from "@/components/sections/team-variants/VariantFeature";
import { doctors } from "@/data/doctors";
import { breadcrumbSchema, personSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the doctors and staff of Senoia Eyecare — a small, intentional team in Senoia, Georgia.",
  alternates: { canonical: "/team" },
  openGraph: {
    url: "/team",
    title: "Team — Senoia Eyecare",
    description:
      "Meet the doctors and staff of Senoia Eyecare in Senoia, Georgia.",
  },
};

const schemas = [
  ...doctors.map(personSchema),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
  ]),
];

export default function TeamPage() {
  return (
    <>
      <VariantFeature />
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
