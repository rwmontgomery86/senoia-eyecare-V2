import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { activities } from "@/data/activities";

/**
 * Hero variant 01 — Cinematic film still.
 * Full-bleed lifestyle photo, cinema letterbox bars, gradient scrim.
 * Restrained type lives quietly in the lower third; a frame credit sits
 * bottom-right like a film-still caption.
 */
export default function VariantCinematicStill() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];

  return (
    <section data-nav-mode="on-dark" className="relative bg-ink">
      <div className="relative min-h-[92vh] w-full overflow-hidden">
        {activity.heroImage ? (
          <Image
            src={activity.heroImage}
            alt={`${activity.title} lifestyle`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
          />
        ) : (
          <div className="absolute inset-0 bg-ink" />
        )}

        {/* Cinema letterbox bars */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[7vh] bg-ink"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[7vh] bg-ink"
        />

        {/* Scrim — darken bottom for legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40"
        />

        {/* Eyebrow — top */}
        <div className="absolute inset-x-6 top-[9vh] z-10 md:inset-x-10 lg:inset-x-16">
          <Eyebrow tone="inverted-muted">Made For · No. 01</Eyebrow>
        </div>

        {/* Headline + intro — lower left */}
        <div className="absolute inset-x-6 bottom-[11vh] z-10 md:inset-x-10 lg:inset-x-16">
          <h1 className="max-w-[16ch] font-display font-medium text-paper text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98]">
            <WordReveal
              as="span"
              inView={false}
              segments={[
                { text: "Made for" },
                {
                  text: `${activity.title.toLowerCase()}.`,
                  italic: true,
                  className: "text-accent",
                },
              ]}
              className="block"
            />
          </h1>
          <FadeUp delay={0.3} y={16}>
            <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.65] text-inverted-muted md:text-[16px]">
              {activity.intro}
            </p>
          </FadeUp>
        </div>

        {/* Frame credit — bottom right, film-still caption */}
        <div className="absolute bottom-[9vh] right-6 z-10 hidden text-right md:right-10 md:block lg:right-16">
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
            {lead.brand} · {lead.model}
          </span>
        </div>
      </div>
    </section>
  );
}
