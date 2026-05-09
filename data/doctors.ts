import type { Doctor } from "./types";

export const doctors: Doctor[] = [
  {
    slug: "ross-montgomery",
    name: "Ross Montgomery",
    credentials: "OD",
    role: "Owner & Optometrist",
    oneLiner:
      "A long-form approach to eye care — forty-five unhurried minutes, every patient.",
    photo: "/images/ross-montgomery.jpg",
  },
  {
    slug: "taylor-williamson",
    name: "Taylor Williamson",
    credentials: "OD",
    role: "Optometrist",
    oneLiner:
      "Pediatric, family, and contact lens care, with a steady, patient hand.",
    photo: "/images/taylor-williamson.jpg",
  },
];
