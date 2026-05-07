import type { ContactLensBrand, Faq, FittingStep, LensType } from "./types";

export const lensTypes: LensType[] = [
  {
    number: "01",
    title: "Soft, every day.",
    tag: "Daily, biweekly, monthly",
    summary:
      "Comfortable disposables for routine wear — fresh pair each morning or a longer-wear schedule. Ideal for first-time wearers who want simplicity.",
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
      "A single lens that handles distance, intermediate, and near — designed for the eyes after forty. An alternative to readers when contacts are preferred.",
  },
];

export const fittingSteps: FittingStep[] = [
  {
    number: "01",
    title: "Comprehensive exam.",
    body: "Every fitting begins with a full evaluation of your vision and ocular health. The contact lens prescription is shaped by what we find here — it's never assumed from your glasses Rx.",
  },
  {
    number: "02",
    title: "Measurements & topography.",
    body: "We map the curvature of your cornea and measure tear film quality. These details determine which lens designs will sit comfortably on your eye and stay clear all day.",
  },
  {
    number: "03",
    title: "Trial pair.",
    body: "You leave with a trial pair to wear in real life — at the screen, behind the wheel, in the evening. Comfort and vision after a few days at home tell us more than any in-office check.",
  },
  {
    number: "04",
    title: "Follow-up.",
    body: "We see you back to confirm fit and finalize the prescription. From there, we order your supply and walk through insertion, removal, and care if you're new to wearing.",
  },
];

export const contactLensBrands: ContactLensBrand[] = [
  { name: "Acuvue", tag: "Daily & monthly" },
  { name: "Biofinity", tag: "Monthly" },
  { name: "Dailies", tag: "Daily disposable" },
  { name: "Bausch + Lomb", tag: "Daily & monthly" },
  { name: "CooperVision", tag: "Toric & multifocal" },
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
      "Generally, no — overnight wear meaningfully raises the risk of infection and corneal complications, even with lenses approved for it. We recommend taking them out before bed. If you want a sleep-in option, we'll talk through the trade-offs.",
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
