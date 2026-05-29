import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { activities } from "@/data/activities";
import { brands } from "@/data/brands";
import type { Brand } from "@/data/types";

/**
 * Brands variant 01 — Featured + supporting.
 * Lead brand spotlighted large, the rest listed as supporting. Dark ink canvas.
 */
export default function VariantFeaturedSupporting() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const recs = (activity.recommendedBrands ?? [])
    .map((rb) => brands.find((b) => b.name === rb.name))
    .filter((b): b is Brand => Boolean(b));
  const featured = recs[0];
  const supporting = recs.slice(1);
  if (!featured) return null;

  return (
    <section className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow tone="inverted-muted">Recommended brands</Eyebrow>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Featured */}
          <FadeUp y={20}>
            <div className="flex h-full flex-col">
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                For this ride
              </span>
              <div className="mt-6">
                <h2 className="font-display font-medium text-inverted-text text-[clamp(3rem,8vw,6rem)] leading-[0.95]">
                  <WordReveal as="span" text={featured.name} className="block" />
                </h2>
                <p className="mt-4 font-display text-[20px] italic text-inverted-muted">
                  {featured.tag}
                </p>
              </div>
              <div className="mt-10 h-px w-24 bg-accent" />
            </div>
          </FadeUp>

          {/* Supporting */}
          <FadeUp delay={0.1} y={20}>
            <div className="flex h-full flex-col justify-end">
              <Eyebrow tone="inverted-muted">Also worth a look</Eyebrow>
              <ul className="mt-6 border-t border-inverted-rule">
                {supporting.map((b) => (
                  <li
                    key={b.name}
                    className="border-b border-inverted-rule py-6"
                  >
                    <div className="font-display text-[28px] leading-tight text-inverted-text">
                      {b.name}
                    </div>
                    <div className="font-display text-[17px] italic leading-tight text-inverted-muted">
                      {b.tag}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
