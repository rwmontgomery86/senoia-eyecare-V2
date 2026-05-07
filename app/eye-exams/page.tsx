import type { Metadata } from "next";
import EyeExamsHero from "@/components/sections/eye-exams/EyeExamsHero";
import Process from "@/components/sections/eye-exams/Process";
import Diptych from "@/components/sections/eye-exams/Diptych";
import Technology from "@/components/sections/eye-exams/Technology";
import Pediatric from "@/components/sections/eye-exams/Pediatric";
import Insurance from "@/components/sections/eye-exams/Insurance";
import FAQ, { faqs } from "@/components/sections/eye-exams/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: "Eye Exams",
  description:
    "Comprehensive eye exams in Senoia, Georgia — for the whole family. What to expect on your visit, the technology we use, and how to book.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
