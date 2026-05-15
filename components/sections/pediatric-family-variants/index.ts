import type { ComponentType } from "react";
import VariantEditorialSplit from "./VariantEditorialSplit";
import VariantTypographicQuiet from "./VariantTypographicQuiet";
import VariantAgeTimeline from "./VariantAgeTimeline";

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
    title: "Editorial split",
    tagline: "Photo-led magazine spread",
    description:
      "Asymmetric hero — tall vertical portrait beside a pediatric-first headline and the booking CTA. Below: a three-up Before · During · After grid, a quiet parent pull-quote, and a small family-scheduling band.",
    Component: VariantEditorialSplit,
  },
  {
    id: "2",
    number: 2,
    title: "Typographic & quiet",
    tagline: "No hero image, type does the work",
    description:
      "Oversized italic Cormorant opener, generously whitespaced. Three promises separated by gold rules. One single 21:9 photo band mid-page. The family beat is a single italic line.",
    Component: VariantTypographicQuiet,
  },
  {
    id: "3",
    number: 3,
    title: "Age-stage timeline",
    tagline: "A narrative through the childhood years",
    description:
      "Chapter-opener hero, then a numbered three-column editorial grid by age — Age 3 · Ages 6–10 · Ages 11–17 — each with its own portrait and short paragraph. A quiet family-beat inset closes it out.",
    Component: VariantAgeTimeline,
  },
];
