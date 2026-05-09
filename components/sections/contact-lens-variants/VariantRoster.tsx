import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { contactLensBrands } from "@/data/contactLensBrands";

const stripeAngles = [35, 110, 60, 145];

export default function VariantRoster() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Header */}
      <div className="mb-20 max-w-[900px] md:mb-24">
        <Eyebrow>The Brands We Fit</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2.75rem,5.5vw,4rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "Four chemistries." },
              { text: "One careful fit.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-muted">
            Every manufacturer brings a different surface chemistry, water
            content, and oxygen profile. Here&apos;s how we think about each one
            when fitting your eyes.
          </p>
        </FadeUp>
      </div>

      {/* Roster — alternating rows */}
      <div className="flex flex-col gap-px bg-rule">
        {contactLensBrands.map((b, i) => {
          const reverse = i % 2 === 1;
          return (
            <FadeUp key={b.name} delay={0.06 * i} y={20}>
              <article
                className={`grid grid-cols-1 items-center gap-10 bg-paper py-14 md:gap-16 md:py-20 lg:grid-cols-2 lg:gap-20 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* Image side */}
                <div>
                  <StripedPlaceholder
                    aspect="4/3"
                    angle={stripeAngles[i] ?? 45}
                    caption={`[ ${b.name.toUpperCase()} — 4:3 ]`}
                  />
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                    Plate №0{i + 1} · {b.name}
                  </div>
                </div>

                {/* Text side */}
                <div className="max-w-[520px]">
                  <div className="font-mono text-[10px] uppercase tracking-wide2 text-accent">
                    Manufacturer · 0{i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-[clamp(2.75rem,5.5vw,4.5rem)] italic leading-[0.95]">
                    {b.name}
                  </h3>
                  <p className="mt-6 text-[16px] leading-[1.55] text-muted">
                    {b.dna}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <div>
                      <Eyebrow symbol={null} tone="muted" className="!text-[10px]">
                        Series we fit
                      </Eyebrow>
                      <ul className="mt-3 space-y-1 font-display text-[16px] leading-[1.45]">
                        {b.series.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Eyebrow symbol={null} tone="muted" className="!text-[10px]">
                        Best suited for
                      </Eyebrow>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {b.needs.map((n) => (
                          <li
                            key={n}
                            className="font-mono text-[11px] uppercase tracking-eyebrow text-accent"
                          >
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
