import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { activities } from "@/data/activities";

export default function VariantCinematicBanner() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];
  const rest = activity.frames.filter((f) => f !== lead);

  return (
    <section className="bg-ink">
      {/* Full-bleed cinematic banner */}
      <FadeUp y={20}>
        <StripedPlaceholder
          aspect="21/9"
          angle={45}
          tone="dark"
          caption={`[ ${activity.title.toUpperCase()} — 21:9 ]`}
          image={activity.heroImage}
          imageAlt={`${activity.title} lifestyle`}
          sizes="100vw"
        >
          {/* Gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30"
          />
          {/* Eyebrow */}
          <div className="absolute left-6 top-6 z-10 md:left-10 md:top-10 lg:left-16 lg:top-12">
            <Eyebrow tone="inverted-muted">Made For · No. 01</Eyebrow>
          </div>
          {/* Headline (desktop overlay only) */}
          <div className="absolute inset-x-6 bottom-8 z-10 hidden md:inset-x-10 md:bottom-12 md:block lg:inset-x-16 lg:bottom-16">
            <h2 className="font-display font-medium text-paper text-[clamp(3rem,8vw,7rem)] leading-[0.95]">
              <WordReveal
                as="span"
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
            </h2>
          </div>
        </StripedPlaceholder>
      </FadeUp>

      {/* Dark band */}
      <div className="px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          {/* Mobile-only headline (stacked above the grid) */}
          <h2 className="font-display font-medium text-paper text-[clamp(2.75rem,9vw,4rem)] leading-[1] md:hidden">
            <WordReveal
              as="span"
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
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-12 md:mt-0 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12 lg:gap-16">
            {/* Col 1 — paragraph + CTA */}
            <FadeUp y={20}>
              <p className="max-w-[50ch] text-[16px] leading-[1.7] text-inverted-muted">
                {activity.summary}
              </p>
              <div className="mt-10">
                <Button
                  href={`/made-for/${activity.slug}`}
                  variant="filled-accent"
                  arrow
                >
                  Read the story
                </Button>
              </div>
            </FadeUp>

            {/* Col 2 — lead frame */}
            <FadeUp delay={0.1} y={20}>
              <div>
                <StripedPlaceholder
                  aspect="1/1"
                  angle={45}
                  tone="light"
                  caption="[ FRAME 01 ]"
                  image={lead.image}
                  imageAlt={`${lead.brand} ${lead.model}`}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="mt-4 font-display text-[18px] leading-tight text-inverted-text">
                  {lead.brand}
                </div>
                <div className="font-display text-[16px] italic leading-tight text-inverted-muted">
                  {lead.model}
                </div>
              </div>
            </FadeUp>

            {/* Col 3 — also good */}
            <FadeUp delay={0.15} y={20}>
              <div>
                <Eyebrow tone="inverted-muted">Also good.</Eyebrow>
                <ul className="mt-6 border-t border-inverted-rule">
                  {rest.map((f) => (
                    <li
                      key={`${f.brand}-${f.model}`}
                      className="border-b border-inverted-rule py-5"
                    >
                      <div className="font-display text-[19px] leading-tight text-inverted-text">
                        {f.brand}
                      </div>
                      <div className="font-display text-[16px] italic leading-tight text-inverted-muted">
                        {f.model}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
