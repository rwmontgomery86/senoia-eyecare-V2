import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { activities } from "@/data/activities";

/**
 * Frames variant 01 — Two-up gallery.
 * Both frames as large, equal image cards side by side, each with name and a
 * cycling 'why' line. Balanced product duo, on warm cream.
 */
export default function VariantTwoUpGallery() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const frames = activity.frames;

  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Frames for {activity.title.toLowerCase()}.</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
          <WordReveal as="span" text="The edit." className="block" />
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-16">
          {frames.map((f, i) => (
            <FadeUp key={`${f.brand}-${f.model}`} delay={0.05 * i} y={20}>
              <StripedPlaceholder
                aspect="4/3"
                angle={45}
                tone="light"
                caption={`[ ${f.brand.toUpperCase()} ]`}
                image={f.image}
                imageAlt={`${f.brand} ${f.model}`}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="mt-5 font-display text-[24px] leading-tight">
                {f.brand}
                <span className="text-muted"> · </span>
                <em className="italic text-accent">{f.model}</em>
              </div>
              {f.note ? (
                <p className="mt-2 max-w-[34ch] text-[16px] leading-[1.6] text-muted">
                  {f.note}
                </p>
              ) : null}
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
