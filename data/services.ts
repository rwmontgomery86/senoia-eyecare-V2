import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "comprehensive-exams",
    number: "01",
    title: "Comprehensive Exams",
    summary:
      "Annual evaluations using advanced retinal imaging — for vision, ocular health, and what's beneath. Forty-five unhurried minutes.",
    href: "/eye-exams",
  },
  {
    slug: "contact-lens-fitting",
    number: "02",
    title: "Contact Lens Fitting",
    summary:
      "Soft, toric, and multifocal lenses fit to the eye in front of us — not assumed from your glasses prescription. New wearers welcome.",
    href: "/contacts",
  },
  {
    slug: "pediatric-family",
    number: "03",
    title: "Pediatric & Family",
    summary:
      "Gentle, thorough exams for the youngest patients, with sight-development tracking from age three. Parents in the room, no rushing.",
  },
];
