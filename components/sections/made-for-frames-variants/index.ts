import type { ComponentType } from "react";
import VariantTwoUpGallery from "./VariantTwoUpGallery";
import VariantEditorialFeature from "./VariantEditorialFeature";
import VariantSpecSheet from "./VariantSpecSheet";

export type FramesVariant = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  Component: ComponentType;
};

export const framesVariants: FramesVariant[] = [
  {
    id: "1",
    number: 1,
    title: "Two-up gallery",
    tagline: "Equal cards · cream",
    description:
      "Both frames as large, equal image cards side by side, each with its name and a cycling 'why' line. Balanced and visual.",
    Component: VariantTwoUpGallery,
  },
  {
    id: "2",
    number: 2,
    title: "Editorial feature",
    tagline: "Lead + supporting · dark ink",
    description:
      "The lead Rivit hero-sized with the Ho'okipa supporting alongside. Dramatic, and the frames pop on dark.",
    Component: VariantEditorialFeature,
  },
  {
    id: "3",
    number: 3,
    title: "Spec sheet",
    tagline: "Structured rows · paper",
    description:
      "Frames as structured rows under mono column labels — thumbnail, maker, and the 'why' line. Crisp and technical.",
    Component: VariantSpecSheet,
  },
];
