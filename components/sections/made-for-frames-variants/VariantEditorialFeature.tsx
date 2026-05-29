import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { activities } from "@/data/activities";

/**
 * Frames variant 02 — Editorial feature.
 * The lead frame hero-sized, the rest supporting alongside. Dramatic, dark ink.
 */
export default function VariantEditorialFeature() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];
  const rest = activity.frames.filter((f) => f !== lead);

  return (
    <section className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow tone="inverted-muted">
          Frames for {activity.title.toLowerCase()}.
        </Eyebrow>
        <h2 className="mt-5 font-display font-medium text-inverted-text text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
          <WordReveal as="span" text="The edit." className="block" />
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Lead — hero */}
          <FadeUp y={20}>
            <StripedPlaceholder
              aspect="4/3"
              angle={45}
              tone="dark"
              caption={`[ ${lead.brand.toUpperCase()} — LEAD ]`}
              image={lead.image}
              imageAlt={`${lead.brand} ${lead.model}`}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="mt-5 font-display text-[28px] leading-tight text-inverted-text">
              {lead.brand}
              <span className="text-inverted-muted"> · </span>
              <em className="italic text-accent">{lead.model}</em>
            </div>
            {lead.note ? (
              <p className="mt-3 max-w-[42ch] text-[17px] leading-[1.65] text-inverted-muted">
                {lead.note}
              </p>
            ) : null}
          </FadeUp>

          {/* Supporting */}
          <div className="flex flex-col justify-center gap-12">
            {rest.map((f, i) => (
              <FadeUp
                key={`${f.brand}-${f.model}`}
                delay={0.1 + 0.05 * i}
                y={20}
              >
                <StripedPlaceholder
                  aspect="3/2"
                  angle={45}
                  tone="dark"
                  caption={`[ ${f.brand.toUpperCase()} ]`}
                  image={f.image}
                  imageAlt={`${f.brand} ${f.model}`}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="mt-4 font-display text-[22px] leading-tight text-inverted-text">
                  {f.brand}
                  <span className="text-inverted-muted"> · </span>
                  <em className="italic text-accent">{f.model}</em>
                </div>
                {f.note ? (
                  <p className="mt-2 max-w-[40ch] text-[15px] leading-[1.6] text-inverted-muted">
                    {f.note}
                  </p>
                ) : null}
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
