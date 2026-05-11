import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";

export default function VariantDarkPullQuote() {
  return (
    <section className="bg-ink px-6 py-20 text-inverted-text md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center text-center">
        <Eyebrow tone="inverted-muted">Existing Patients</Eyebrow>

        <h2 className="mt-7 font-display font-medium text-inverted-text text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] tracking-[-0.015em]">
          <WordReveal
            as="span"
            segments={[
              { text: "Reorder lenses on" },
              { text: "Marlo.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>

        <FadeUp delay={0.15} y={16}>
          <p className="mx-auto mt-6 max-w-[520px] text-[16px] leading-[1.6] text-inverted-muted">
            Your prescription is on file. Ships to your door.
          </p>
        </FadeUp>

        <FadeUp delay={0.25} y={16}>
          <div className="mt-9">
            <Button
              href={site.marloUrl}
              external
              variant="filled-accent"
              size="md"
              arrow
            >
              Open Marlo
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
