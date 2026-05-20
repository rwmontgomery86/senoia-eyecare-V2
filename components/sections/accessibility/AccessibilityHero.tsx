import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import GoldRule from "@/components/ui/GoldRule";
import FadeUp from "@/components/ui/FadeUp";

export default function AccessibilityHero() {
  return (
    <section data-nav-mode="on-light" className="bg-paper px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44">
      <div className="max-w-[1100px]">
        <Eyebrow>Access</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.01em]">
          <WordReveal
            as="span"
            inView={false}
            delay={0.2}
            segments={[{ text: "Designed to" }]}
            className="block"
          />
          <WordReveal
            as="span"
            inView={false}
            delay={0.55}
            segments={[
              { text: "welcome", italic: true, className: "text-accent" },
              { text: " everyone." },
            ]}
            className="block"
          />
        </h1>

        <FadeUp delay={0.9} y={16}>
          <p className="mt-8 max-w-[620px] text-[18px] leading-[1.6] text-muted">
            Good care begins before a patient ever walks through the door — it
            starts with how easy we are to find, read, and reach. Here&apos;s
            where we stand on web accessibility, what we&apos;ve built in, and
            what to do if something gets in your way.
          </p>
        </FadeUp>

        <FadeUp delay={1.1} y={12}>
          <GoldRule className="mt-12" width="9rem" />
        </FadeUp>
      </div>
    </section>
  );
}
