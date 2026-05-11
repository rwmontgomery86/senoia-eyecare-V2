import type { ComponentType } from "react";
import VariantTrustStrip from "./VariantTrustStrip";
import VariantEditorialPullQuote from "./VariantEditorialPullQuote";
import VariantCenteredGrid from "./VariantCenteredGrid";

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
    id: "1",
    number: 1,
    title: "Horizontal trust strip",
    tagline: "Rating on the left, three quotes across the row",
    description:
      "A slim band that reads left-to-right. The Google rating anchors the start; three short, specific excerpts fan out beside it. Most compact and scannable.",
    Component: VariantTrustStrip,
  },
  {
    id: "2",
    number: 2,
    title: "Editorial pull-quote",
    tagline: "One voice, with a narrow rating sidebar",
    description:
      "A single Cormorant italic pull-quote dominates. The rating, star row, and link sit in a quiet right-hand column. Highest emotional weight.",
    Component: VariantEditorialPullQuote,
  },
  {
    id: "3",
    number: 3,
    title: "Centered rating + three-up grid",
    tagline: "Rating is the headline, quotes are the proof",
    description:
      "The rating line is centered as the headline. Three equal-weight quotes sit underneath in a symmetric grid. Reads as a balanced 'proof block'.",
    Component: VariantCenteredGrid,
  },
];
