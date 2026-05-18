import type { ComponentType } from "react";
import VariantOverlay from "./VariantOverlay";
import VariantBlurred from "./VariantBlurred";
import VariantSplit from "./VariantSplit";

export type ContactsVariant = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  Component: ComponentType;
};

export const variants: ContactsVariant[] = [
  {
    id: "1",
    number: 1,
    title: "Overlay",
    tagline: "Full-bleed image, copy stacked at the bottom",
    description:
      "Mirrors the /pediatric-family pattern. Bottom-up dark gradient over the contacts photo, copy anchored to the bottom with eyebrow, italic-accent headline, body, and stacked CTAs.",
    Component: VariantOverlay,
  },
  {
    id: "2",
    number: 2,
    title: "Blurred backdrop",
    tagline: "Image as texture, centered copy",
    description:
      "The contacts photo is heavily blurred and tinted dark. Copy floats centered both vertically and horizontally. The image becomes atmosphere rather than content.",
    Component: VariantBlurred,
  },
  {
    id: "3",
    number: 3,
    title: "Split-screen",
    tagline: "Dark text band, clean image below",
    description:
      "Top half is a dark ink panel carrying the eyebrow, headline, body, and CTAs. Bottom half is the contacts photo at 4:3, full-bleed, no overlay. Hard editorial seam between the two.",
    Component: VariantSplit,
  },
];
