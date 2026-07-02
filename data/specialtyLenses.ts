import type { Faq, FeatureCard, FittingStep } from "./types";

/** Hero jump-cards — one per act, anchored to the act's statement section. */
export type SpecialtyAct = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  blurb: string;
  linkLabel: string;
};

export const acts: SpecialtyAct[] = [
  {
    id: "myopia",
    number: "01",
    eyebrow: "Myopia Management",
    title: "For nearsighted kids",
    blurb:
      "Essilor Stellest lenses slow the progression of myopia while your child wears them like any other pair.",
    linkLabel: "Read about Stellest",
  },
  {
    id: "color-blindness",
    number: "02",
    eyebrow: "Color Vision",
    title: "For color blindness",
    blurb:
      "EnChroma lenses sharpen the difference between reds and greens — and you can try them here before you buy.",
    linkLabel: "Read about EnChroma",
  },
];

export const stellestFeatures: FeatureCard[] = [
  {
    eyebrow: "H.A.L.T. Technology",
    title: "A constellation of lenslets",
    body: "Rings of highly aspherical lenslets across the lens create an optical signal that slows the eye's elongation — the mechanism behind worsening myopia.",
  },
  {
    eyebrow: "The Evidence",
    title: "Progression slowed by 67%",
    body: "In Essilor's two-year clinical trial, Stellest lenses slowed myopia progression by 67% on average compared with single-vision lenses — in children wearing them at least 12 hours a day.",
  },
  {
    eyebrow: "Daily Life",
    title: "Looks like any other pair",
    body: "No contacts to handle, no drops, no routine to manage. Stellest looks and wears like a standard lens — school photos included.",
  },
];

export const myopiaSigns: string[] = [
  "Squinting at the board",
  "Sitting closer to screens",
  "A stronger Rx each year",
  "Two nearsighted parents",
];

export const demoSteps: FittingStep[] = [
  {
    number: "01",
    title: "Walk in and try.",
    body: "Demo pairs are in the shop — indoor and outdoor lenses both. Stop by any weekday, no appointment needed, and step outside with the outdoor pair; daylight is where the effect shows its range. Give it a few minutes — adaptation isn't instant.",
  },
  {
    number: "02",
    title: "Test your color vision.",
    body: "Two routes. Color vision screening is already part of every comprehensive exam we do — or book a standalone assessment. Either way, we confirm your type — protan or deutan — and how strong it is, which tells us whether EnChroma is likely to help and which lens suits you.",
  },
  {
    number: "03",
    title: "Order your pair.",
    body: "If the demo earns it, we order through EnChroma as an authorized retailer — indoor or outdoor lenses, non-prescription or built to your Rx, in frames from our floor.",
  },
];

/** Short mono facts for the dark-band row in the Color Vision intro. */
export const enchromaFacts: string[] = [
  "Red-green CVD",
  "Indoor & outdoor lenses",
  "Available in prescription",
];

export const faq: Faq[] = [
  {
    question: "Does my child have to wear Stellest lenses all day?",
    answer:
      "The results were measured in children wearing them at least 12 hours a day, so the honest answer is: the more they're worn, the better they work. Full-time wear is the goal — school, homework, weekends. They look and feel like regular glasses, which makes that an easier ask.",
  },
  {
    question: "Is there a program or extra visits involved?",
    answer:
      "No. It stays simple here: an annual comprehensive exam to track how the eye is changing, and the lenses themselves. If a prescription is moving quickly we may suggest checking in sooner, but there's nothing to enroll in.",
  },
  {
    question: "Will vision insurance cover myopia-control lenses?",
    answer:
      "Partially, in many cases. Stellest is billed as a premium spectacle lens, so your plan's standard lens benefit usually applies — but plans rarely cover the full cost of a myopia-control design. We'll price it against your benefits before you decide.",
  },
  {
    question: "Do EnChroma glasses work for everyone?",
    answer:
      "No — and we'd rather say so up front. They're designed for red-green color vision deficiency, which is about 80% of cases, and the strength of the effect varies from person to person. The in-office test and the demo pairs exist so you're not guessing.",
  },
  {
    question: "Do I need an appointment to try them?",
    answer:
      "No. Demo pairs are in the shop, and you're welcome to walk in any weekday between 8 and 5. If you'd like to know your type and severity first — it helps in choosing between the indoor and outdoor lenses — book a standalone color vision assessment, or simply ask at your annual exam; screening is part of every comprehensive exam we do.",
  },
  {
    question: "Will EnChroma lenses help me pass a color vision test?",
    answer:
      "No. They increase contrast between colors in everyday life, but they don't restore normal color vision, and they aren't permitted during occupational screening tests. If you're pursuing a career with a color vision requirement, we're glad to talk through what the test involves.",
  },
  {
    question: "Does insurance cover EnChroma lenses?",
    answer:
      "Typically not — color-blindness lenses are considered elective, so vision plans don't usually contribute. If your lenses are made in your prescription, some plans will apply a frame or lens allowance, and HSA or FSA funds can often be used. We'll check yours before you order.",
  },
];
