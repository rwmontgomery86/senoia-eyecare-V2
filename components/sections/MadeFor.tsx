import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { activities } from "@/data/activities";

export default function MadeFor() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];
  const rest = activity.frames.filter((f) => f !== lead);

  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — portrait hero */}
          <FadeUp y={20}>
            <StripedPlaceholder
              aspect="4/5"
              angle={45}
              tone="light"
              caption={`[ ${activity.title.toUpperCase()} — 4:5 ]`}
              image={activity.heroImage}
              imageAlt={`${activity.title} lifestyle`}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </FadeUp>

          {/* Right — editorial column */}
          <div className="flex flex-col justify-center">
            <Eyebrow>Made For · No. 01</Eyebrow>
            <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,4rem)] leading-[1]">
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

            <FadeUp delay={0.1} y={16}>
              <p className="mt-7 max-w-[50ch] text-[16px] leading-[1.65] text-muted">
                {activity.summary}
              </p>
            </FadeUp>

            <FadeUp delay={0.15} y={16}>
              <div className="mt-12">
                <Eyebrow>Frames for this</Eyebrow>
                <div className="mt-6 grid grid-cols-[140px_1fr] items-end gap-6 md:grid-cols-[160px_1fr] md:gap-8">
                  {/* Lead frame */}
                  <div>
                    <StripedPlaceholder
                      aspect="1/1"
                      angle={45}
                      tone="light"
                      caption="[ FRAME 01 ]"
                      image={lead.image}
                      imageAlt={`${lead.brand} ${lead.model}`}
                      sizes="160px"
                    />
                    <div className="mt-3 font-display text-[15px] leading-tight">
                      <div>{lead.brand}</div>
                      <div className="italic text-muted">{lead.model}</div>
                    </div>
                  </div>

                  {/* Named list */}
                  {rest.length > 0 && (
                    <ul className="border-t border-rule">
                      {rest.map((f) => (
                        <li
                          key={`${f.brand}-${f.model}`}
                          className="flex items-baseline gap-3 border-b border-rule py-4"
                        >
                          <span
                            aria-hidden
                            className="font-mono text-[10px] text-accent"
                          >
                            —
                          </span>
                          <span className="font-display text-[17px]">
                            {f.brand}
                            <span className="text-muted"> · </span>
                            <em className="italic">{f.model}</em>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} y={16}>
              <div className="mt-12">
                <Button
                  href={`/made-for/${activity.slug}`}
                  variant="outlined-dark"
                  arrow
                >
                  Read the story
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
