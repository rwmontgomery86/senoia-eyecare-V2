import type { ComponentType } from "react";
import VariantDiptych from "./VariantDiptych";
import VariantTypographic from "./VariantTypographic";
import VariantStacked from "./VariantStacked";

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
    title: "Editorial diptych",
    tagline: "Two equal portraits, magazine-spread",
    description:
      "Both doctors at equal weight, side-by-side 4:5 portraits with name, role, and one-liner beneath each. A thin gold rule under each profile and a hairline divider between columns.",
    Component: VariantDiptych,
  },
  {
    id: "2",
    number: 2,
    title: "Typographic-led",
    tagline: "Oversized italic names, portraits supporting",
    description:
      "Each doctor occupies a band: a massive italic Cormorant name dominates, with a smaller square portrait floated to the alternating side. Type does the work — like a printed program.",
    Component: VariantTypographic,
  },
  {
    id: "3",
    number: 3,
    title: "Stacked profile blocks",
    tagline: "Horizontal rows, contributors-page feel",
    description:
      "Two wide horizontal rows divided by hairline rules. Each row pairs a 4:5 portrait with a generous text block — number, role, name, gold accent rule, one-liner. Linear and narrative.",
    Component: VariantStacked,
  },
];
