import type { Metadata } from "next";
import InsuranceLedger from "@/components/sections/insurance/InsuranceLedger";

export const metadata: Metadata = {
  title: "Insurance",
  description:
    "Most major vision and medical insurance accepted at Senoia Eyecare — VSP, EyeMed, Spectera, Medicare, Aetna, Blue Cross Blue Shield, Cigna, UHC, Humana, and more. Verify your benefits before your visit.",
};

export default function InsurancePage() {
  return <InsuranceLedger />;
}
