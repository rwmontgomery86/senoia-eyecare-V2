import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { activities } from "@/data/activities";
import { brands } from "@/data/brands";
import type { Brand } from "@/data/types";

/**
 * Brands variant 02 — Editorial profiles.
 * Each brand as a numbered write-up block with its tag as a standfirst,
 * separated by hairline rules. Type-led, on light paper.
 */
export default function VariantEditorialProfiles() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const recs = (activity.recommendedBrands ?? [])
    .map((rb) => brands.find((b) => b.name === rb.name))
    .filter((b): b is Brand => Boolean(b));

  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Eyebrow>Recommended brands</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
          <WordReveal
            as="span"
            segments={[
              { text: "The" },
              { text: "shortlist.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>

        <div className="mt-12 border-t border-rule">
          {recs.map((b, i) => (
            <FadeUp key={b.name} delay={0.05 * i} y={16}>
              <article className="grid grid-cols-1 gap-4 border-b border-rule py-10 md:grid-cols-[auto_1fr] md:gap-12 md:py-12">
                <span className="font-mono text-[12px] uppercase tracking-eyebrow text-accent md:pt-3">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display font-medium text-[clamp(2.25rem,5vw,3.5rem)] leading-[1]">
                    {b.name}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[17px] leading-[1.6] text-muted">
                    {b.tag}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
