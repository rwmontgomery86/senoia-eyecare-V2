import type { ComponentType } from "react";
import VariantMarkStrip from "./VariantMarkStrip";
import VariantEditorialGrid from "./VariantEditorialGrid";
import VariantRoster from "./VariantRoster";

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
    title: "Mark strip",
    tagline: "Four marks, one quiet row",
    description:
      "Wordmarks set wide and centered. Signature series listed quietly beneath. The four needs we fit run as a single mono caption underneath the strip.",
    Component: VariantMarkStrip,
  },
  {
    id: "2",
    number: 2,
    title: "Editorial grid",
    tagline: "Four cards, equal weight",
    description:
      "Each manufacturer gets a bordered card with their signature series and the patient profiles they suit. Split layout with a sticky intro on the left.",
    Component: VariantEditorialGrid,
  },
  {
    id: "3",
    number: 3,
    title: "Editorial roster",
    tagline: "One brand per row, room to breathe",
    description:
      "Each manufacturer takes a full alternating row with a generous wordmark, a DNA sentence, signature series, patient profiles, and an editorial photo on the opposite side.",
    Component: VariantRoster,
  },
];
