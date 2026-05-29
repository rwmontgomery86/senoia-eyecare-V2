import Image from "next/image";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { activities } from "@/data/activities";

/**
 * Hero variant 02 — Magazine cover.
 * Full-bleed photo with a masthead rule up top and a giant display headline
 * layered across the bottom, plus cover-line copy. Bold and editorial.
 */
export default function VariantMagazineCover() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];

  return (
    <section
      data-nav-mode="on-dark"
      className="relative min-h-[96vh] w-full overflow-hidden bg-ink"
    >
      {activity.heroImage ? (
        <Image
          src={activity.heroImage}
          alt={`${activity.title} lifestyle`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      ) : (
        <div className="absolute inset-0 bg-ink" />
      )}

      {/* Scrims — top for masthead, bottom for cover lines */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/90"
      />

      {/* Masthead row */}
      <div className="absolute inset-x-6 top-[14vh] z-10 flex items-center justify-between border-b border-paper/25 pb-4 md:inset-x-10 lg:inset-x-16">
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-paper">
          Senoia Eyecare
        </span>
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-paper">
          Made For · No. 01
        </span>
      </div>

      {/* Giant cover headline + cover lines */}
      <div className="absolute inset-x-6 bottom-[8vh] z-10 md:inset-x-10 lg:inset-x-16">
        <h1 className="font-display font-medium text-paper text-[clamp(3.5rem,13vw,11rem)] leading-[0.85] tracking-[-0.01em]">
          <WordReveal
            as="span"
            inView={false}
            segments={[
              { text: "Made" },
              { text: "for" },
              {
                text: `${activity.title.toLowerCase()}.`,
                italic: true,
                className: "text-accent",
              },
            ]}
            className="block"
          />
        </h1>

        <div className="mt-8 grid max-w-[680px] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
          <FadeUp delay={0.3} y={14}>
            <p className="text-[15px] leading-[1.6] text-paper/85">
              {activity.intro}
            </p>
          </FadeUp>
          <FadeUp delay={0.4} y={14}>
            <div className="flex items-baseline gap-3 border-t border-paper/25 pt-4 sm:border-t-0 sm:pt-0">
              <span aria-hidden className="font-mono text-[11px] text-accent">
                →
              </span>
              <span className="font-display text-[19px] text-paper">
                {lead.brand}{" "}
                <em className="italic text-paper/70">{lead.model}</em>
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
