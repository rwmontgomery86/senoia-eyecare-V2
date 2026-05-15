import type { ComponentType } from "react";
import VariantCinematicLedger from "./VariantCinematicLedger";
import VariantMagazineSplit from "./VariantMagazineSplit";
import VariantTypePoster from "./VariantTypePoster";

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
    title: "Built for the light",
    tagline: "Cinematic banner + tech ledger",
    description:
      "Full-bleed 21:9 sunwear photo anchors the section; headline pinned bottom-left over a dark gradient. Below: a 4-column tech ledger separated by hairlines — PolarizedPlus2, Color Infusion, UV+HEV, Available in Rx. Horizontal-dominant.",
    Component: VariantCinematicLedger,
  },
  {
    id: "2",
    number: 2,
    title: "Polarized in Senoia",
    tagline: "Magazine split spread",
    description:
      "50/50 two-column. Left: tall 3:4 portrait plus a smaller 4:5 detail beneath. Right: eyebrow → big italic display headline → three paragraphs (Place / Light / Fit) separated by gold rules → CTA. Vertical-dominant, reading-driven.",
    Component: VariantMagazineSplit,
  },
  {
    id: "3",
    number: 3,
    title: "From Lahaina to Senoia",
    tagline: "Typographic poster + product grid",
    description:
      "Top half: oversized italic statement filling the viewport like a printed poster. Bottom half: a 3-up grid of frame shots (4:5) with placeholder model labels. Thin info band at base — PolarizedPlus2 brief, Rx mention, CTA. Type-led / bold.",
    Component: VariantTypePoster,
  },
];
