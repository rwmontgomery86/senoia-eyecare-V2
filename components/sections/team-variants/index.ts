import type { ComponentType } from "react";
import VariantFeature from "./VariantFeature";
import VariantDirectory from "./VariantDirectory";
import VariantChapters from "./VariantChapters";

export type Variant = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  Component: ComponentType;
};

export const variants: Variant[] = [
  {
    id: "feature",
    number: 1,
    title: "The Feature",
    tagline: "Magazine spread — long-form profiles",
    description:
      "Each doctor gets an alternating 50/50 portrait + pull-quote feature. A compact 'Behind the counter' module handles supporting staff. High whitespace, very editorial.",
    Component: VariantFeature,
  },
  {
    id: "directory",
    number: 2,
    title: "The Directory",
    tagline: "Utility grid — every member equal",
    description:
      "A three-up card grid where doctors and staff share identical layout. Hierarchy comes from a subtle '§ Optometrist' / '§ Support' marker and gold rule. Scales effortlessly as the team grows.",
    Component: VariantDirectory,
  },
  {
    id: "chapters",
    number: 3,
    title: "The Chapters",
    tagline: "Immersive scroll — one person per viewport",
    description:
      "Each team member is a full-viewport chapter with parallaxed portrait and oversized typography. Opening + closing chapters bookend the sequence. Cinematic, atmospheric, ink-dark.",
    Component: VariantChapters,
  },
];
