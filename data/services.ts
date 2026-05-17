import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "comprehensive-exams",
    number: "01",
    title: "Comprehensive Exams",
    summary:
      "Annual evaluations with advanced retinal imaging. We look at vision, eye health, and the things you can't see for yourself. About 45 minutes per exam.",
    href: "/eye-exams",
  },
  {
    slug: "contact-lens-fitting",
    number: "02",
    title: "Contact Lens Fitting",
    summary:
      "Soft, toric, and multifocal lenses fit to your eye in our chair, not assumed from your glasses prescription. New wearers welcome.",
    href: "/contacts",
  },
  {
    slug: "pediatric-family",
    number: "03",
    title: "Pediatric & Family",
    summary:
      "Gentle exams for kids, with sight-development tracking from age three. Parents stay in the room.",
    href: "/pediatric-family",
  },
];
