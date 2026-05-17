import type { Faq, FittingStep, LensType } from "./types";

export const lensTypes: LensType[] = [
  {
    number: "01",
    title: "Soft, every day.",
    tag: "Daily, biweekly, monthly",
    summary:
      "Comfortable disposables for everyday wear. Fresh pair each morning, or a biweekly/monthly schedule. A good starting point for first-time wearers.",
  },
  {
    number: "02",
    title: "Toric, for astigmatism.",
    tag: "Astigmatism correction",
    summary:
      "Specially-designed soft lenses that stay oriented to correct the irregular curvature of an astigmatic eye. Sharp, stable vision throughout the day.",
  },
  {
    number: "03",
    title: "Multifocal, for presbyopia.",
    tag: "Reading and distance, in one",
    summary:
      "A single lens that handles distance, intermediate, and reading — the lens for presbyopia. A good alternative to readers if you'd rather not switch glasses all day.",
  },
];

export const fittingSteps: FittingStep[] = [
  {
    number: "01",
    title: "Comprehensive exam.",
    body: "Every fitting starts with a full evaluation of your vision and eye health. Your contact lens prescription is shaped by what we find. We don't assume it from your glasses Rx.",
  },
  {
    number: "02",
    title: "Measurements & topography.",
    body: "We map the curvature of your cornea and measure tear film quality. These details determine which lens designs will sit comfortably on your eye and stay clear all day.",
  },
  {
    number: "03",
    title: "Trial pair.",
    body: "You leave with a trial pair to wear in real life. Comfort and vision after a few days at home tell us more than any in-office check.",
  },
  {
    number: "04",
    title: "Follow-up.",
    body: "We'll reach out to confirm the trial pair is comfortable and your vision is clear. Once both check out, we finalize your prescription so you can order.",
  },
];

export const faq: Faq[] = [
  {
    question: "How often do I replace them?",
    answer:
      "It depends on the lens. Daily disposables are a fresh pair each morning. Biweeklies and monthlies are replaced on schedule and cleaned nightly between wears. Your prescription specifies which style fits your eyes and lifestyle best.",
  },
  {
    question: "Can I sleep in my contacts?",
    answer:
      "Generally, no. Overnight wear meaningfully raises the risk of infection and corneal complications, even with lenses approved for it. We recommend taking them out before bed. If you want a sleep-in option, we'll walk through the trade-offs.",
  },
  {
    question: "Are contacts covered by my insurance?",
    answer:
      "Most major vision plans include a contact lens benefit alongside the eye exam. The fitting itself is typically a separate visit from the comprehensive exam, and coverage varies by plan. We'll verify your benefits before the appointment.",
  },
  {
    question: "What if I have astigmatism, need readers, or have dry eyes?",
    answer:
      "All three are solvable. Toric lenses correct astigmatism; multifocals handle reading and distance in a single lens; and modern materials are formulated to stay comfortable through long screen days. We'll match the lens to the eye.",
  },
];
