import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import GoldRule from "@/components/ui/GoldRule";
import FadeUp from "@/components/ui/FadeUp";

export const LAST_UPDATED = "May 11, 2026";

export default function PrivacyHero() {
  return (
    <section data-nav-mode="on-light" className="bg-paper px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44">
      <div className="max-w-[1100px]">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.01em]">
          <WordReveal
            as="span"
            inView={false}
            delay={0.2}
            segments={[{ text: "The information" }]}
            className="block"
          />
          <WordReveal
            as="span"
            inView={false}
            delay={0.55}
            segments={[
              { text: "we" },
              { text: "hold.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h1>

        <FadeUp delay={0.9} y={16}>
          <p className="mt-8 max-w-[600px] text-[18px] leading-[1.6] text-muted">
            A plain-English account of what this website collects, why, and the
            choices you have. Patient health information handled in our office
            is covered separately by our HIPAA Notice of Privacy Practices.
          </p>
        </FadeUp>

        <FadeUp delay={1.1} y={12}>
          <GoldRule className="mt-12" width="9rem" />
        </FadeUp>

        <FadeUp delay={1.25} y={8}>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
            Last updated · {LAST_UPDATED}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
