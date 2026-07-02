import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { stellestFeatures, myopiaSigns } from "@/data/specialtyLenses";
import { site } from "@/data/site";

export default function StellestLens() {
  return (
    <section
      data-nav-mode="on-light"
      className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="mb-14">
        <Eyebrow>The Lens — Essilor Stellest</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.05]">
          <WordReveal
            as="span"
            segments={[
              { text: "Stellest," },
              { text: " plainly.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
        <FadeUp delay={0.15}>
          <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-muted">
            One lens, two jobs — the clear center corrects your child&apos;s
            vision; the rest of the lens works on where the eye is headed.
          </p>
        </FadeUp>
      </div>

      <FadeUp y={20}>
        <div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-3">
          {stellestFeatures.map((f) => (
            <div
              key={f.eyebrow}
              className="flex flex-col bg-cream px-7 py-10 md:px-8 md:py-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                {f.eyebrow}
              </span>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,2.2vw,1.875rem)] italic leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-muted">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Candidacy strip */}
      <FadeUp y={20}>
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-rule pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow tone="muted">Who it&apos;s for</Eyebrow>
            <p className="mt-5 font-display text-[20px] italic leading-[1.55] text-muted">
              {myopiaSigns.join(" · ")}
            </p>
          </div>
          <div>
            <p className="max-w-[480px] text-[15px] leading-[1.6] text-muted">
              Candidacy is a clinical call — age, prescription trend, and how
              the eye is growing all factor in. We&apos;ll tell you plainly
              whether Stellest makes sense for your child, at a regular annual
              exam.
            </p>
            <div className="mt-7">
              <Button
                href={site.bookingUrl}
                external
                variant="outlined-dark"
                size="md"
                arrow
              >
                Book their exam
              </Button>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
