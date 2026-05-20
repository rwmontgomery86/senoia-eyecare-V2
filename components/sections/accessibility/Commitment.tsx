import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";

export default function Commitment() {
  return (
    <section data-nav-mode="on-light" className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>Where we stand</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "An" },
                { text: "ongoing", italic: true, className: "text-accent" },
                { text: "effort." },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-muted">
              Accessibility is treated as continuous work, not a one-time
              checkbox.
            </p>
          </FadeUp>
        </div>

        <div className="space-y-6">
          <FadeUp y={20}>
            <p className="max-w-[640px] text-[16px] leading-[1.7] text-muted">
              Senoia Eyecare is committed to a website that welcomes every
              visitor — whether you&apos;re using a screen reader, navigating
              by keyboard, browsing with reduced motion, or simply looking for
              a phone number in larger type.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} y={20}>
            <p className="max-w-[640px] text-[16px] leading-[1.7] text-muted">
              We strive to meet the{" "}
              <span className="italic text-accent">
                Web Content Accessibility Guidelines (WCAG) 2.1, Level&nbsp;AA
              </span>{" "}
              as an evolving target. We have not undertaken a formal third-party
              audit, so we don&apos;t claim full conformance — but we use the
              standard as our reference for everything we publish.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} y={20}>
            <p className="max-w-[640px] text-[16px] leading-[1.7] text-muted">
              As the site grows and the standard evolves, this page will be
              updated to reflect what&apos;s actually true today — not what we
              wish were true.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
