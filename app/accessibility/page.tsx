import type { Metadata } from "next";
import AccessibilityHero from "@/components/sections/accessibility/AccessibilityHero";
import Commitment from "@/components/sections/accessibility/Commitment";
import Features from "@/components/sections/accessibility/Features";
import KnownLimitations from "@/components/sections/accessibility/KnownLimitations";
import Report from "@/components/sections/accessibility/Report";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Senoia Eyecare is committed to a website that welcomes everyone. Our accessibility statement, known limitations, and how to report a barrier.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <AccessibilityHero />
      <Commitment />
      <Features />
      <KnownLimitations />
      <Report />
    </>
  );
}
