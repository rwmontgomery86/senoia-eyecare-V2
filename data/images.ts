/**
 * Homepage image paths.
 *
 * To enable an image:
 *   1. Drop the file into `public/images/` with the filename shown.
 *   2. Change `null` below to the matching path string.
 *
 * Until a value is set to a string, the section shows a striped placeholder.
 * Recommended specs are listed for each.
 */

export const images = {
  /**
   * Hero — editorial portrait of a model wearing frames.
   * 4:5 aspect, ~1200×1500px or larger. Warm tones to match palette.
   * Drop file at: public/images/hero-model.jpg
   */
  heroPortrait: "/images/hero-model.jpg" as string | null,

  /**
   * Frames — featured (Etnia Barcelona).
   * 5:4 aspect, ~1500×1200px. Detail or still life.
   * Drop file at: public/images/frames-featured-etnia.jpg
   */
  framesFeatured: "/images/frames-featured.jpg" as string | null,

  /**
   * Frames — side stack 1 (STATE).
   * Roughly 5:3 wide crop, ~900×540px+.
   * Drop file at: public/images/frames-state.jpg
   */
  framesSide1: "/images/frames-state.jpg" as string | null,

  /**
   * Frames — side stack 2 (OVVO).
   * Drop file at: public/images/frames-ovvo.jpg
   */
  framesSide2: null as string | null, // "/images/frames-ovvo.jpg"

  /**
   * Frames — side stack 3 (Maui Jim).
   * Drop file at: public/images/frames-maui-jim.jpg
   */
  framesSide3: "/images/frames-maui-jim.jpg" as string | null,

  /**
   * Visit — storefront photo.
   * 5:8 vertical, ~1000×1600px.
   * Drop file at: public/images/storefront.jpg
   */
  storefront: "/images/storefront.jpg" as string | null,

  /**
   * Visit — left diptych photo (the frame wall / curated frames).
   * 16:10 horizontal, ~1600×1000px.
   * Drop file at: public/images/visit-frames.jpg
   */
  visitFrames: "/images/visit-frames.jpg" as string | null,

  /**
   * Visit — right diptych photo (exam room / the chair).
   * 16:10 horizontal, ~1600×1000px.
   * Drop file at: public/images/visit-exam-room.jpg
   */
  visitExamRoom: "/images/visit-exam-room.jpg" as string | null,

  /**
   * BookingCTA — full-bleed dark/atmospheric photo behind the CTA section.
   * 16:9 or wider, 2000px+ (will be cropped to fit the section height).
   * Drop file at: public/images/booking-cta-bg.jpg
   */
  bookingBackground: "/images/booking-cta-bg.jpg" as string | null,

  /**
   * Contacts page — hero portrait. Editorial close-up of someone wearing
   * (or holding) a contact lens. Calm, warm-toned to match the palette.
   * 4:5 vertical, ~1200×1500px or larger.
   * Drop file at: public/images/contact-lens/hero.jpg
   */
  contactsHero: "/images/contact-lens/hero.jpg" as string | null,

  /**
   * Contacts page — mid-page accent (alongside the fitting process).
   * Could be a clinical detail (topographer, slit lamp) or a quiet still life.
   * 16:10 horizontal, ~1600×1000px.
   * Drop file at: public/images/contact-lens/contacts-accent.jpg
   */
  contactsAccent: "/images/contact-lens/contacts-accent.jpg" as string | null,

  /**
   * Eye Exams — parallax background for the Pediatric section.
   * 16:9 or wider, 2000px+. Soft, family-warm tone (e.g., child being examined).
   * Drop file at: public/images/eye-exams/childrens-exams.jpg
   */
  eyeExamsPediatric: "/images/eye-exams/childrens-exams.jpg" as string | null,

  /**
   * Eye Exams — accent image for the Technology section.
   * 4:3 horizontal, ~1600×1200px. Equipment detail (Optomap monitor, slit lamp, phoropter).
   * Drop file at: public/images/eye-exams/equipment-detail.jpg
   */
  eyeExamsTechnology: "/images/eye-exams/equipment-detail.jpg" as string | null,

  /**
   * Eye Exams — diptych left (the exam room / chair).
   * 16:10 horizontal, ~1600×1000px.
   * Drop file at: public/images/eye-exams/visit-exam-room.jpg
   */
  eyeExamsExamRoom: "/images/eye-exams/visit-exam-room.jpg" as string | null,

  /**
   * Eye Exams — diptych right (pretest area / Optomap or autorefractor in use).
   * 16:10 horizontal, ~1600×1000px.
   * Drop file at: public/images/eye-exams/pre-testing.jpg
   */
  eyeExamsPretest: "/images/eye-exams/pre-testing.jpg" as string | null,
};
