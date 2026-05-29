import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import { activities } from "@/data/activities";
import { brands } from "@/data/brands";
import type { Brand } from "@/data/types";

/**
 * Brands variant 03 — Stockist wall.
 * A clean grid of brand cells framed by hairline rules. Each cell carries a
 * heavily-blurred, per-brand frame photo with a dark scrim over it, so the
 * brand names stay legible in paper-white. Section sits on warm cream.
 */
export default function VariantStockistWall() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const recs = (activity.recommendedBrands ?? [])
    .map((rb) => brands.find((b) => b.name === rb.name))
    .filter((b): b is Brand => Boolean(b));

  const leadImage =
    activity.frames.find((f) => f.isLead)?.image ??
    activity.frames[0]?.image ??
    null;
  // Prefer the brand's own frame photo; fall back to the lead frame until a
  // per-brand image is dropped in.
  const backdropFor = (brandName: string) =>
    activity.frames.find((f) => f.brand === brandName && f.image)?.image ??
    leadImage;

  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Eyebrow>Recommended brands</Eyebrow>
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
            Carried at Senoia Eyecare
          </span>
        </div>

        <FadeUp y={20}>
          <div className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
            {recs.map((b) => {
              const backdrop = backdropFor(b.name);
              return (
                <div
                  key={b.name}
                  className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center md:min-h-[340px]"
                >
                  {/* Blurred per-brand backdrop */}
                  {backdrop ? (
                    <Image
                      src={backdrop}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="scale-125 object-cover blur-2xl"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-ink" />
                  )}

                  {/* Dark scrim for legibility */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/70"
                  />

                  {/* Brand */}
                  <div className="relative z-10">
                    <div className="font-display font-medium text-paper text-[clamp(2rem,4vw,3rem)] leading-[1]">
                      {b.name}
                    </div>
                    <div className="mt-3 font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
                      {b.tag}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
