import type { Metadata } from "next";
import FramesPage from "@/components/sections/FramesPage";

export const metadata: Metadata = {
  title: "Frames",
  description:
    "A small, curated wall of frames in Senoia, Georgia — independents from Spain and Chicago beside American icons. Try them on with one-on-one styling.",
};

export default function Page() {
  return <FramesPage />;
}
