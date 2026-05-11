import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import WordReveal from "@/components/ui/WordReveal";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { site } from "@/data/site";

export default function VariantPhotoSplit() {
  return (
    <section className="bg-paper px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        {/* Left: copy column */}
        <div className="flex flex-col gap-7">
          <Eyebrow>Existing Patients</Eyebrow>
          <h2 className="font-display font-medium text-ink text-[clamp(1.875rem,4vw,3rem)] leading-[1.02] tracking-[-0.015em]">
            <WordReveal
              as="span"
              segments={[
                { text: "Reorder on" },
                { text: "Marlo.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.15} y={16}>
            <p className="max-w-[440px] text-[16px] leading-[1.6] text-muted">
              Your contact lens prescription, on file and ready. Reorder in
              minutes — Marlo ships your lenses straight to your door.
            </p>
          </FadeUp>
          <FadeUp delay={0.25} y={16}>
            <div>
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

        {/* Right: tight macro photo slot */}
        <FadeUp delay={0.1} y={20}>
          <StripedPlaceholder
            aspect="4/3"
            angle={135}
            tone="light"
            caption="[ MACRO — lens case / fingertip ]"
            bottomLeft="Plate №07"
            bottomRight="Marlo"
          />
        </FadeUp>
      </div>
    </section>
  );
}
