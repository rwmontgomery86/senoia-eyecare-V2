import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { activities } from "@/data/activities";

/**
 * Frames variant 03 — Spec sheet.
 * Frames as structured rows aligned to mono column labels, with a thumbnail,
 * maker, and a cycling 'why' line. Crisp and technical, on light paper.
 */
export default function VariantSpecSheet() {
  const activity = activities.find((a) => a.featured) ?? activities[0];
  const frames = activity.frames;

  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Eyebrow>Frames for {activity.title.toLowerCase()}.</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
          <WordReveal as="span" text="The edit." className="block" />
        </h2>

        <div className="mt-12 border-t border-rule">
          {/* Column header (desktop) */}
          <div className="hidden grid-cols-[160px_1fr_1.3fr] gap-8 border-b border-rule py-4 md:grid">
            <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
              Frame
            </span>
            <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
              Maker
            </span>
            <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
              For the ride
            </span>
          </div>

          {frames.map((f, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <FadeUp key={`${f.brand}-${f.model}`} delay={0.05 * i} y={16}>
                <div className="grid grid-cols-1 gap-6 border-b border-rule py-8 md:grid-cols-[160px_1fr_1.3fr] md:items-center md:gap-8">
                  <div className="max-w-[220px] md:max-w-none">
                    <StripedPlaceholder
                      aspect="4/3"
                      angle={45}
                      tone="light"
                      caption={`[ ${num} ]`}
                      image={f.image}
                      imageAlt={`${f.brand} ${f.model}`}
                      sizes="160px"
                    />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                      Frame {num}
                    </div>
                    <div className="mt-2 font-display text-[24px] leading-tight">
                      {f.brand}
                    </div>
                    <div className="font-display text-[18px] italic leading-tight text-accent">
                      {f.model}
                    </div>
                  </div>
                  <p className="text-[16px] leading-[1.6] text-muted">{f.note}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
