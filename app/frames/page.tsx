import type { Metadata } from "next";
import FramesPage from "@/components/sections/FramesPage";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Frames",
  description:
    "A small, curated wall of frames in Senoia, Georgia — independents from Spain and Chicago beside American icons. Try them on with one-on-one styling.",
  alternates: { canonical: "/frames" },
  openGraph: {
    url: "/frames",
    title: "Frames — Senoia Eyecare",
    description:
      "A curated wall of frames in Senoia, Georgia. Independents alongside American icons.",
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Frames", path: "/frames" },
]);

export default function Page() {
  return (
    <>
      <FramesPage />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
