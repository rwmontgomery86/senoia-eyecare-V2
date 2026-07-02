import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { acts } from "@/data/specialtyLenses";

export default function SpecialtyHero() {
  return (
    <section
      id="top"
      data-nav-mode="on-dark"
      className="bg-ink px-6 pb-20 pt-36 text-inverted-text md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44"
    >
      <div className="max-w-[1100px]">
        <Eyebrow>Specialty Lenses</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-[-0.01em]">
          <WordReveal
            as="span"
            inView={false}
            delay={0.2}
            segments={[{ text: "Lenses that do" }]}
            className="block"
          />
          <WordReveal
            as="span"
            inView={false}
            delay={0.55}
            segments={[
              { text: "more than" },
              { text: " correct.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h1>

        <FadeUp delay={0.9} y={16}>
          <p className="mt-8 max-w-[600px] text-[18px] leading-[1.6] text-inverted-muted">
            Most of what we fit is everyday eyewear. This page is the two
            exceptions — spectacle lenses that slow childhood myopia while
            they&apos;re worn, and glasses that turn up the contrast between
            colors. Both live in our shop, not just on this page.
          </p>
        </FadeUp>

        <FadeUp delay={1.15} y={20}>
          <div className="mt-14 grid grid-cols-1 gap-px border border-inverted-rule bg-inverted-rule md:grid-cols-2">
            {acts.map((act) => (
              <a
                key={act.id}
                href={`#${act.id}`}
                className="group flex flex-col bg-ink px-7 py-10 md:px-8 md:py-12"
              >
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                  {act.number}&ensp;·&ensp;{act.eyebrow}
                </span>
                <span className="mt-4 block font-display text-[clamp(1.5rem,2.4vw,1.875rem)] font-medium leading-tight text-inverted-text transition-colors duration-200 ease-expo group-hover:text-accent">
                  {act.title}
                </span>
                <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-inverted-muted">
                  {act.blurb}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted transition-colors duration-200 ease-expo group-hover:text-accent">
                  {act.linkLabel}
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 ease-expo group-hover:translate-y-1"
                  >
                    ↓
                  </span>
                </span>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
