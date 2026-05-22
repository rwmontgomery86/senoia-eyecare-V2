import type { ComponentType } from "react";
import VariantEditorialDiptych from "./VariantEditorialDiptych";
import VariantCinematicBanner from "./VariantCinematicBanner";
import VariantTypographicCenterpiece from "./VariantTypographicCenterpiece";

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
    tagline: "Magazine-page balance, photo + text",
    description:
      "Portrait photo on the left; eyebrow, italic headline, paragraph, and frame edit on the right. Quiet, balanced, GQ-profile feel.",
    Component: VariantEditorialDiptych,
  },
  {
    id: "2",
    number: 2,
    title: "Cinematic banner",
    tagline: "Lifestyle-brand, photo dominant",
    description:
      "Full-bleed 21:9 photo with overlaid headline; dark band beneath holds the paragraph, lead frame, and named list. The most dramatic.",
    Component: VariantCinematicBanner,
  },
  {
    id: "3",
    number: 3,
    title: "Typographic centerpiece",
    tagline: "Type IS the image",
    description:
      "Massive italic headline as the visual centerpiece; photo restrained to a narrow accent. Hardest-working layout while photography is still placeholders.",
    Component: VariantTypographicCenterpiece,
  },
];
