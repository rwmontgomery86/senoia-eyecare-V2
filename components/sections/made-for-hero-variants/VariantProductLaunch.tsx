import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { activities } from "@/data/activities";

/**
 * Hero variant 03 — Product launch.
 * Two-column reveal: headline + intro + a spec table on the left, the photo
 * framed with corner ticks and metadata rails on the right. Crisp, engineered.
 */
export default function VariantProductLaunch() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];

  const specs = [
    { label: "Discipline", value: activity.title },
    { label: "Lead frame", value: `${lead.brand} ${lead.model}` },
    { label: "Edition", value: "No. 01" },
  ];

  return (
    <section
      data-nav-mode="on-dark"
      className="bg-ink px-6 pb-16 pt-36 text-inverted-text md:px-10 md:pt-44 lg:px-16 lg:pt-52"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Top metadata rail */}
        <div className="flex items-center justify-between border-y border-inverted-rule py-4">
          <Eyebrow tone="inverted-muted">Made For · No. 01</Eyebrow>
          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
            Senoia Eyecare — Frame Series
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left — headline, intro, spec table */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-display font-medium text-inverted-text text-[clamp(2.75rem,6vw,5rem)] leading-[1]">
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
              <FadeUp delay={0.2} y={16}>
                <p className="mt-8 max-w-[46ch] text-[16px] leading-[1.7] text-inverted-muted">
                  {activity.intro}
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.3} y={16}>
              <dl className="mt-12 border-t border-inverted-rule">
                {specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between border-b border-inverted-rule py-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                      {s.label}
                    </dt>
                    <dd className="font-display text-[18px] text-inverted-text">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FadeUp>
          </div>

          {/* Right — framed image with corner ticks */}
          <FadeUp delay={0.1} y={20}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-accent"
              />
              <span
                aria-hidden
                className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-accent"
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-accent"
              />
              <span
                aria-hidden
                className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-accent"
              />
              <StripedPlaceholder
                aspect="4/5"
                angle={45}
                tone="dark"
                caption={`[ ${activity.title.toUpperCase()} ]`}
                image={activity.heroImage}
                imageAlt={`${activity.title} lifestyle`}
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
