import type { Metadata } from "next";
import InsuranceLedger from "@/components/sections/insurance/InsuranceLedger";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Insurance",
  description:
    "Most major vision and medical insurance accepted at Senoia Eyecare — VSP, EyeMed, Spectera, Medicare, Aetna, Blue Cross Blue Shield, Cigna, UHC, Humana, and more. Verify your benefits before your visit.",
  alternates: { canonical: "/insurance" },
  openGraph: {
    url: "/insurance",
    title: "Insurance — Senoia Eyecare",
    description:
      "Most major vision and medical insurance accepted at Senoia Eyecare.",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Insurance", path: "/insurance" },
]);

export default function InsurancePage() {
  return (
    <>
      <InsuranceLedger />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
