import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";

function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="aspect-[9/19] border-[3px] border-ink bg-cream">
        {/* notch */}
        <div className="mx-auto mt-2 h-1.5 w-16 bg-ink/80" />

        {/* "browser" chrome */}
        <div className="mt-3 flex items-center justify-between border-b border-rule px-4 pb-2">
          <span className="font-mono text-[8px] uppercase tracking-eyebrow text-muted">
            meetmarlo.com
          </span>
          <span className="font-mono text-[8px] uppercase tracking-eyebrow text-muted">
            •••
          </span>
        </div>

        {/* wordmark */}
        <div className="px-5 pt-6">
          <span className="font-display text-[22px] italic leading-none text-accent">
            marlo
          </span>
        </div>

        {/* faux list rows */}
        <div className="mt-5 flex flex-col gap-3 px-5">
          <div className="flex items-center justify-between border-b border-rule pb-3">
            <div className="flex flex-col gap-1.5">
              <span
                className="block h-1.5 w-20 bg-ink/70"
                style={{ borderRadius: 0 }}
              />
              <span
                className="block h-1.5 w-14 bg-muted/50"
                style={{ borderRadius: 0 }}
              />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-eyebrow text-accent">
              Reorder
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-rule pb-3">
            <div className="flex flex-col gap-1.5">
              <span
                className="block h-1.5 w-24 bg-ink/70"
                style={{ borderRadius: 0 }}
              />
              <span
                className="block h-1.5 w-12 bg-muted/50"
                style={{ borderRadius: 0 }}
              />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-eyebrow text-accent">
              Reorder
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
              <span
                className="block h-1.5 w-16 bg-ink/70"
                style={{ borderRadius: 0 }}
              />
              <span
                className="block h-1.5 w-10 bg-muted/50"
                style={{ borderRadius: 0 }}
              />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-eyebrow text-accent">
              Reorder
            </span>
          </div>
        </div>

        {/* footer button */}
        <div className="absolute bottom-6 left-5 right-5 bg-accent py-3 text-center">
          <span className="font-mono text-[9px] uppercase tracking-eyebrow text-ink">
            Ship My Lenses →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function VariantDeviceMock() {
  return (
    <section className="bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
        {/* Left: copy */}
        <div className="flex flex-col gap-7">
          <Eyebrow>Reorder</Eyebrow>
          <h2 className="font-display font-medium text-ink text-[clamp(1.875rem,4vw,3rem)] leading-[1.02] tracking-[-0.015em]">
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
          <FadeUp delay={0.25} y={16}>
            <p className="max-w-[420px] text-[15px] leading-[1.6] text-muted">
              Your prescription, on file. Reorder in two taps and your lenses
              ship straight to your door.
            </p>
          </FadeUp>
          <FadeUp delay={0.35} y={16}>
            <div>
              <Button
                href={site.marloUrl}
                external
                variant="filled-ink"
                size="md"
                arrow
              >
                Open Marlo
              </Button>
            </div>
          </FadeUp>
        </div>

        {/* Right: phone mock */}
        <FadeUp delay={0.15} y={20}>
          <PhoneMock />
        </FadeUp>
      </div>
    </section>
  );
}
