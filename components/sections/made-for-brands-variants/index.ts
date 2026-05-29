import type { ComponentType } from "react";
import VariantFeaturedSupporting from "./VariantFeaturedSupporting";
import VariantEditorialProfiles from "./VariantEditorialProfiles";
import VariantStockistWall from "./VariantStockistWall";

export type BrandsVariant = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  Component: ComponentType;
};

export const brandsVariants: BrandsVariant[] = [
  {
    id: "1",
    number: 1,
    title: "Featured + supporting",
    tagline: "One brand spotlighted · dark ink",
    description:
      "Tifosi shown large as the ride pick, Maui Jim listed beside it as supporting. Bold and premium, on a dark ink canvas.",
    Component: VariantFeaturedSupporting,
  },
  {
    id: "2",
    number: 2,
    title: "Editorial profiles",
    tagline: "Magazine write-ups · paper",
    description:
      "Each brand as a numbered profile block with its tag as a standfirst, separated by hairline rules. Type-led, on light paper.",
    Component: VariantEditorialProfiles,
  },
  {
    id: "3",
    number: 3,
    title: "Stockist wall",
    tagline: "Balanced grid · cream",
    description:
      "A clean, even grid of brand cells framed by hairline rules — a 'brands we carry' wall. Calm and retail, on warm cream.",
    Component: VariantStockistWall,
  },
];
