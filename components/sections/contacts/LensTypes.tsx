import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { lensTypes } from "@/data/contactLenses";

export default function LensTypes() {
  return (
    <section
      id="lens-types"
      data-nav-mode="on-light"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>The Range</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Three lenses," },
                { text: "one careful fit.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={20}>
            <p className="mt-6 max-w-[420px] text-[15px] leading-[1.6] text-muted">
              The right lens depends on your eye, your prescription, and how
              you spend your day. We&apos;ll talk through the options together.
            </p>
          </FadeUp>
        </div>

        <div>
          {lensTypes.map((lens, i) => (
            <FadeUp key={lens.number} delay={0.05 * i} y={20}>
              <div className="grid grid-cols-[40px_1fr] gap-x-6 gap-y-2 border-t border-rule py-7 md:grid-cols-[60px_1fr_auto] md:gap-x-8 md:items-baseline md:px-4 md:-mx-4">
                <span className="font-mono text-[12px] tracking-wide2 text-accent">
                  {lens.number}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.4vw,1.875rem)] font-medium leading-tight">
                    {lens.title}
                  </h3>
                  <p className="mt-2 max-w-[480px] text-[15px] leading-[1.55] text-muted">
                    {lens.summary}
                  </p>
                </div>
                <span className="col-start-2 mt-2 inline-flex items-center font-mono text-[11px] uppercase tracking-eyebrow text-muted md:col-start-3 md:mt-0 md:justify-self-end">
                  {lens.tag}
                </span>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}
