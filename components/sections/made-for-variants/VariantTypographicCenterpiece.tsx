import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { activities } from "@/data/activities";

export default function VariantTypographicCenterpiece() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];
  const rest = activity.frames.filter((f) => f !== lead);

  return (
    <section className="bg-cream px-6 py-32 md:px-10 md:py-44 lg:px-16 lg:py-52">
      <div className="mx-auto max-w-[1440px]">
        {/* Centered eyebrow */}
        <div className="flex justify-center">
          <Eyebrow>Made For · No. 01</Eyebrow>
        </div>

        {/* Centerpiece: massive type + accent photo */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-[1fr_240px] md:gap-14 lg:grid-cols-[1fr_300px] lg:gap-20">
          <FadeUp y={20}>
            <h2 className="font-display font-medium text-[clamp(4rem,14vw,12rem)] leading-[0.88] tracking-[-0.02em]">
              <span className="block">Made for</span>
              <em className="block italic text-accent">
                {activity.title.toLowerCase()}.
              </em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15} y={20}>
            <StripedPlaceholder
              aspect="3/5"
              angle={45}
              tone="light"
              caption={`[ ${activity.title.toUpperCase()} ]`}
              image={activity.heroImage}
              imageAlt={`${activity.title} lifestyle`}
              sizes="(min-width: 768px) 300px, 100vw"
            />
          </FadeUp>
        </div>

        {/* Below: paragraph + frame edit */}
        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-rule pt-12 md:mt-28 md:grid-cols-[1.4fr_1fr] md:gap-16 md:pt-16">
          {/* Paragraph + CTA */}
          <FadeUp delay={0.2} y={16}>
            <p className="max-w-[60ch] text-[17px] leading-[1.65] text-muted">
              {activity.summary}
            </p>
            <div className="mt-10">
              <Button
                href={`/made-for/${activity.slug}`}
                variant="outlined-dark"
                arrow
              >
                Read the story
              </Button>
            </div>
          </FadeUp>

          {/* Frame edit column */}
          <FadeUp delay={0.25} y={16}>
            <div className="md:max-w-[340px] md:justify-self-end">
              <Eyebrow>Frames for this.</Eyebrow>

              {/* Lead frame */}
              <div className="mt-6">
                <StripedPlaceholder
                  aspect="4/3"
                  angle={45}
                  caption="[ FRAME 01 ]"
                  image={lead.image}
                  imageAlt={`${lead.brand} ${lead.model}`}
                  sizes="(min-width: 768px) 340px, 100vw"
                />
                <div className="mt-3 font-display text-[17px] leading-tight">
                  {lead.brand}
                  <span className="text-muted"> · </span>
                  <em className="italic">{lead.model}</em>
                </div>
              </div>

              {/* Named list separated by gold rules */}
              <ul className="mt-10 space-y-6">
                {rest.map((f, i) => (
                  <li key={`${f.brand}-${f.model}`}>
                    {i === 0 ? <GoldRule width="2.5rem" className="mb-6" /> : null}
                    <div className="font-display text-[17px] leading-tight">
                      {f.brand}
                      <span className="text-muted"> · </span>
                      <em className="italic">{f.model}</em>
                    </div>
                    {i < rest.length - 1 ? (
                      <GoldRule width="2.5rem" className="mt-6" />
                    ) : null}
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
