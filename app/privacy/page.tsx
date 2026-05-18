import type { Metadata } from "next";
import PrivacyHero from "@/components/sections/privacy/PrivacyHero";
import PrivacyBody from "@/components/sections/privacy/PrivacyBody";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Senoia Eyecare's website handles your information — in plain English. Covers analytics, advertising pixels, the Eyefinity booking handoff, and how HIPAA sits separately.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyBody />
    </>
  );
}
