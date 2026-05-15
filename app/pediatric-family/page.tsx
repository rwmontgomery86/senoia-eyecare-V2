import type { Metadata } from "next";
import PediatricFamily from "@/components/sections/PediatricFamily";

export const metadata: Metadata = {
  title: "Pediatric & Family",
  description:
    "Gentle, thorough children's exams in Senoia, Georgia — from age three, with parents in the room. Family appointments scheduled in one quiet morning.",
};

export default function Page() {
  return <PediatricFamily />;
}
