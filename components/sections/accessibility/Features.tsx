import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";

const features = [
  {
    number: "01",
    title: "Semantic structure & alt text",
    body:
      "Pages use proper headings, landmarks, and lists so assistive technologies can present them clearly. Photography includes descriptive alternatives, and decorative imagery is marked as such.",
  },
  {
    number: "02",
    title: "Keyboard navigation",
    body:
      "Every interactive element — links, buttons, the booking CTA, the mobile menu — is reachable and operable with the keyboard alone. Focus styles are preserved, not stripped.",
  },
  {
    number: "03",
    title: "Reduced-motion respect",
    body:
      "If your system requests reduced motion, the site honors it: animations collapse to near-instant transitions, and parallax effects are stilled. No flashing, no aggressive movement.",
  },
  {
    number: "04",
    title: "Readable contrast & type",
    body:
      "Body copy is sized for comfortable reading, line lengths are bounded, and the palette is chosen so text meets contrast targets against every background it appears on.",
  },
];

export default function Features() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>What&apos;s built in</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Four" },
                { text: "quiet", italic: true, className: "text-accent" },
                { text: "defaults." },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-muted">
              The small choices that decide whether a site is usable before
              you ever notice it.
            </p>
          </FadeUp>
        </div>

        <div>
          {features.map((f, i) => (
            <FadeUp key={f.number} delay={0.05 * i} y={20}>
              <div className="group relative grid grid-cols-[40px_1fr] gap-x-6 gap-y-2 border-t border-rule py-8 md:grid-cols-[60px_1fr] md:gap-x-8 md:items-baseline md:px-4 md:-mx-4">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-px left-0 right-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-expo group-hover:scale-x-100"
                />

                <span className="font-mono text-[12px] tracking-wide2 text-accent">
                  {f.number}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.625rem,2.6vw,2rem)] font-medium leading-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-muted">
                    {f.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}
