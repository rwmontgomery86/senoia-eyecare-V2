import type { ComponentType } from "react";
import VariantTypographicRibbon from "./VariantTypographicRibbon";
import VariantPhotoSplit from "./VariantPhotoSplit";
import VariantDeviceMock from "./VariantDeviceMock";
import VariantDarkPullQuote from "./VariantDarkPullQuote";

export type MarloVariant = {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  Component: ComponentType;
};

export const variants: MarloVariant[] = [
  {
    id: "1",
    number: 1,
    title: "Typographic ribbon",
    tagline: "Pull-quote, no image",
    description:
      "Full-bleed cream band. Large italic Cormorant headline on the left, short copy + outlined CTA on the right. Reads like a magazine pull-quote.",
    Component: VariantTypographicRibbon,
  },
  {
    id: "2",
    number: 2,
    title: "Asymmetric photo split",
    tagline: "Copy leads, photo supports",
    description:
      "Two-column. Eyebrow + headline + body + outlined CTA on the left; tight macro photo slot (lens case / fingertip) on the right.",
    Component: VariantPhotoSplit,
  },
  {
    id: "3",
    number: 3,
    title: "Device-mock utility band",
    tagline: "Shows them where they're going",
    description:
      "Copy on the left, a phone mock of the Marlo storefront on the right. The most concrete, product-y treatment.",
    Component: VariantDeviceMock,
  },
  {
    id: "4",
    number: 4,
    title: "Dark inline pull-quote",
    tagline: "Punctuation between sections",
    description:
      "Slim dark band, centered. Italic gold headline, one supporting line, filled-gold button. A quiet moment of emphasis.",
    Component: VariantDarkPullQuote,
  },
];
