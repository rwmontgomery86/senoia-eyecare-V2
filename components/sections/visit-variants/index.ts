import type { ComponentType } from "react";
import VariantPhotoBanner from "./VariantPhotoBanner";
import VariantTypographic from "./VariantTypographic";
import VariantDiptych from "./VariantDiptych";
import VariantInfoCard from "./VariantInfoCard";

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
    title: "Photo-led banner",
    tagline: "One photo, full-width, doing the work",
    description:
      "A 21:9 storefront photo anchors the section. Beneath it, a simple 3-column detail row and a single inline CTA.",
    Component: VariantPhotoBanner,
  },
  {
    id: "2",
    number: 2,
    title: "Typographic address card",
    tagline: "No images. The address is the centerpiece",
    description:
      "Massive italic Cormorant address. Hours arranged as a Mon–Sun grid. Quiet, distinctive — feels like a printed calling card.",
    Component: VariantTypographic,
  },
  {
    id: "3",
    number: 3,
    title: "Editorial diptych",
    tagline: "Two equal photos, magazine-spread",
    description:
      "Storefront exterior beside an interior detail, both 16:10. A compact info row pinned beneath the spread.",
    Component: VariantDiptych,
  },
  {
    id: "4",
    number: 4,
    title: "Vertical photo + info card",
    tagline: "Practical, structured, photo-supported",
    description:
      "Vertical storefront on the left. On the right, a tall info card — Address / Hours / Phone / Parking — separated by gold rules.",
    Component: VariantInfoCard,
  },
];
