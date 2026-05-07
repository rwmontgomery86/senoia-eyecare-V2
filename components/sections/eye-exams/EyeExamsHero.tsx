import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import GoldRule from "@/components/ui/GoldRule";
import FadeUp from "@/components/ui/FadeUp";

export default function EyeExamsHero() {
  return (
    <section className="bg-paper px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44">
      <div className="max-w-[1100px]">
        <Eyebrow>Eye care</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.01em]">
          <WordReveal
            as="span"
            inView={false}
            delay={0.2}
            segments={[{ text: "An exam," }]}
            className="block"
          />
          <WordReveal
            as="span"
            inView={false}
            delay={0.55}
            segments={[
              { text: "without", italic: true, className: "text-accent" },
              { text: " the rush." },
            ]}
            className="block"
          />
        </h1>

        <FadeUp delay={0.9} y={16}>
          <p className="mt-8 max-w-[600px] text-[18px] leading-[1.6] text-muted">
            Comprehensive eye care for the whole family — one patient at a time,
            in a room without a clock on the wall. From your first hello to the
            moment you choose new frames, here&apos;s what to expect when you
            visit.
          </p>
        </FadeUp>

        <FadeUp delay={1.1} y={12}>
          <GoldRule className="mt-12" width="9rem" />
        </FadeUp>
      </div>
    </section>
  );
}
