import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { contactLensBrands } from "@/data/contactLensBrands";

export default function VariantEditorialGrid() {
  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Split header + grid layout */}
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        {/* Left column — section intro */}
        <div className="lg:sticky lg:top-32">
          <Eyebrow>The Brands We Fit</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Four manufacturers," },
                { text: "no house brand.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-[400px] text-[15px] leading-[1.6] text-muted">
              We fit and supply every major contact lens manufacturer.
              Each brand brings a different chemistry and a different best fit —
              the table below is how we think about them.
            </p>
          </FadeUp>
        </div>

        {/* Right column — 2x2 card grid */}
        <div className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
          {contactLensBrands.map((b, i) => (
            <FadeUp key={b.name} delay={0.08 * i} y={20}>
              <article className="flex h-full flex-col bg-cream px-7 py-9 md:px-9 md:py-11">
                {/* Wordmark */}
                <div className="font-display text-[clamp(1.75rem,2.6vw,2.25rem)] italic leading-[1]">
                  {b.name}
                </div>

                {/* Gold rule */}
                <span aria-hidden className="mt-5 block h-px w-12 bg-accent" />

                {/* Series */}
                <div className="mt-6">
                  <Eyebrow symbol={null} tone="muted" className="!text-[10px]">
                    Series we fit
                  </Eyebrow>
                  <ul className="mt-3 space-y-1.5 font-display text-[16px] leading-[1.4]">
                    {b.series.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Needs — pinned to bottom */}
                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule pt-5">
                  {b.needs.map((n, j) => (
                    <span
                      key={n}
                      className="font-mono text-[10px] uppercase tracking-eyebrow text-accent"
                    >
                      {n}
                      {j < b.needs.length - 1 ? (
                        <span aria-hidden className="ml-3 text-muted">
                          ·
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
