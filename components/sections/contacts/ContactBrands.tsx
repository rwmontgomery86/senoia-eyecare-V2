import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { contactLensBrands, contactLensNeeds } from "@/data/contactLensBrands";

export default function ContactBrands() {
  return (
    <section
      id="brands"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      {/* Header — centered, narrow */}
      <div className="mx-auto max-w-[820px] text-center">
        <Eyebrow>The Brands We Fit</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2.75rem,5.5vw,4rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "Four manufacturers." },
              { text: "Every prescription.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-[1.6] text-muted">
            We&apos;re not tied to one supplier. Your fitting starts with your
            eye and your prescription, and the brand follows. Below is a sample
            of what we fit, not the full list.
          </p>
        </FadeUp>
      </div>

      {/* Mark strip */}
      <FadeUp delay={0.2} y={20}>
        <div className="mt-20 grid grid-cols-2 gap-y-14 md:mt-24 md:grid-cols-4 md:gap-x-8">
          {contactLensBrands.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center text-center"
            >
              <div className="font-display text-[clamp(1.75rem,3vw,2.5rem)] italic leading-[1]">
                {b.name}
              </div>
              <ul className="mt-5 space-y-1.5 font-body text-[13px] leading-[1.5] text-muted">
                {b.series.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Needs caption row */}
      <FadeUp delay={0.3}>
        <div className="mx-auto mt-20 flex max-w-[1080px] flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-rule pt-8 md:mt-24">
          {contactLensNeeds.map((need, i) => (
            <span
              key={need}
              className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-eyebrow text-muted"
            >
              {i > 0 ? (
                <span aria-hidden className="block h-px w-6 bg-accent/70" />
              ) : null}
              {need}
            </span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
