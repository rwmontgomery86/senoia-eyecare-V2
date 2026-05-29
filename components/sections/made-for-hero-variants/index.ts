import type { ComponentType } from "react";
import VariantCinematicStill from "./VariantCinematicStill";
import VariantMagazineCover from "./VariantMagazineCover";
import VariantProductLaunch from "./VariantProductLaunch";

export type HeroVariant = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  Component: ComponentType;
};

export const heroVariants: HeroVariant[] = [
  {
    id: "1",
    number: 1,
    title: "Cinematic film still",
    tagline: "Atmospheric, photo-pure",
    description:
      "Full-bleed lifestyle photo with cinema letterbox bars and a gradient scrim; restrained type sits quietly in the lower third. Moody and immersive.",
    Component: VariantCinematicStill,
  },
  {
    id: "2",
    number: 2,
    title: "Magazine cover",
    tagline: "Big type, masthead energy",
    description:
      "Full-bleed photo with a masthead rule up top and a giant display headline layered across the bottom, plus cover-line copy. Bold and editorial.",
    Component: VariantMagazineCover,
  },
  {
    id: "3",
    number: 3,
    title: "Product launch",
    tagline: "Structured, technical reveal",
    description:
      "Two-column reveal: headline + intro + a spec table on the left, the photo framed with corner ticks and metadata rails on the right. Crisp and engineered.",
    Component: VariantProductLaunch,
  },
];
