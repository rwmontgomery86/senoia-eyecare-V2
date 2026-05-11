import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";

export default function VariantTypographicRibbon() {
  return (
    <section className="bg-paper px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center gap-4">
          <GoldRule width="2.5rem" />
          <Eyebrow>Reorder</Eyebrow>
        </div>

        <div className="mt-8 grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <h2 className="font-display font-medium text-ink text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] tracking-[-0.015em]">
            <WordReveal
              as="span"
              text="Already a patient?"
              className="block"
            />
            <WordReveal
              as="span"
              delay={0.15}
              segments={[
                { text: "Reorder on" },
                { text: "Marlo.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>

          <FadeUp delay={0.2} y={16}>
            <div className="flex flex-col gap-6 md:items-start">
              <p className="max-w-[360px] text-[15px] leading-[1.6] text-muted">
                Ships to your door. Your prescription is on file — no
                re-fitting, no friction.
              </p>
              <Button
                href={site.marloUrl}
                external
                variant="outlined-dark"
                size="md"
                arrow
              >
                Open Marlo
              </Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
