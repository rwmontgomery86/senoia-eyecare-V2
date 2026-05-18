import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Frames from "@/components/sections/Frames";
import Testimonials from "@/components/sections/Testimonials";
import Insurance from "@/components/sections/Insurance";
import Visit from "@/components/sections/Visit";
import BookingCTA from "@/components/sections/BookingCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Senoia Eyecare — Considered Eyewear. Comprehensive Care.",
  },
  description:
    "Boutique optometry in Senoia, Georgia. Hand-picked designer frames and unhurried, comprehensive eye exams for the whole family.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Senoia Eyecare — Considered Eyewear. Comprehensive Care.",
    description:
      "Boutique optometry in Senoia, Georgia. Hand-picked designer frames and unhurried, comprehensive eye exams for the whole family.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Frames />
      <Testimonials />
      <Insurance />
      <Visit />
      <BookingCTA />
    </>
  );
}
