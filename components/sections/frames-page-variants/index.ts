import type { ComponentType } from "react";
import VariantMagazineHub from "./VariantMagazineHub";
import VariantBrandImmersive from "./VariantBrandImmersive";
import VariantCuratedHub from "./VariantCuratedHub";

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
    title: "Magazine hub",
    tagline: "Maui-Jim-led general frames hub",
    description:
      "Page opens with a magazine-style vertical Maui Jim spread (50/50 portrait + editorial body), then a PolarizedPlus2 tech ledger, a 3-up model grid, the full 10-brand index with Maui Jim called out, styling & fit diptych, BookingCTA. Balanced — Maui Jim is the lead but the page still tours the curation.",
    Component: VariantMagazineHub,
  },
  {
    id: "2",
    number: 2,
    title: "Brand immersive",
    tagline: "Maui Jim brand page",
    description:
      "Cinematic dark hero (full-bleed 21:9 with parallax + 'From Lahaina to Senoia.' over a gradient). Three vertical pillars — Place / Light / Fit — each with its own photo. PolarizedPlus2 statement + 3-up model grid. A single quiet 'more makers' sweep replaces the brand index. Compact styling & fit. BookingCTA.",
    Component: VariantBrandImmersive,
  },
  {
    id: "3",
    number: 3,
    title: "Curated hub",
    tagline: "Maui Jim as one peer feature",
    description:
      "Lightweight rebuild: keeps the 'small wall, carefully chosen' intro, demotes Maui Jim to a single asymmetric featured-frame spread (with sun copy folded in), full 10-brand index with Maui Jim tagged 'Featured', diptych styling & fit, BookingCTA. Reads as a general frames hub with Maui Jim as the current pick.",
    Component: VariantCuratedHub,
  },
];
