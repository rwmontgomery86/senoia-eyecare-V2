import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { images } from "@/data/images";

const ledger = [
  {
    label: "Polarized",
    title: "PolarizedPlus2®",
    body: "Cuts glare, reveals color, restores depth.",
  },
  {
    label: "Color",
    title: "Color Infusion",
    body: "Tinted at the molecular level. No fade, no flake.",
  },
  {
    label: "Protection",
    title: "UV + HEV",
    body: "Filters 100% UV. Blocks blue-light haze.",
  },
  {
    label: "Rx",
    title: "Also in prescription",
    body: "Every Maui Jim model, fitted to your script.",
  },
];

export default function VariantCinematicLedger() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Header */}
      <div className="mb-10 max-w-[900px]">
        <Eyebrow>Maui Jim · Polarized Sunwear</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "Built for" },
              { text: "the light.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
        <FadeUp y={16}>
          <p className="mt-5 max-w-[640px] font-display text-[18px] italic leading-[1.55] text-muted">
            PolarizedPlus2® lenses, made for the Georgia sun.{" "}
            <span className="not-italic text-ink/85">Available in Rx.</span>
          </p>
        </FadeUp>
      </div>

      {/* Cinematic 21:9 banner */}
      <FadeUp y={20}>
        <StripedPlaceholder
          aspect="21/9"
          angle={45}
          caption="[ MAUI JIM — 21:9 ]"
          image={images.framesSide3}
          imageAlt="Maui Jim polarized sunwear, worn outdoors"
          sizes="100vw"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
          />
          <div className="absolute inset-x-8 bottom-8 z-10 flex items-end justify-between md:inset-x-12 md:bottom-12">
            <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
              Plate №01 · Worn outdoors
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
              [ PolarizedPlus2® ]
            </div>
          </div>
        </StripedPlaceholder>
      </FadeUp>

      {/* Tech ledger — 2 col mobile / 4 col desktop, hairline rules via bg-rule gap-px */}
      <div className="mt-12 grid grid-cols-2 gap-px border-t border-b border-rule bg-rule md:grid-cols-4">
        {ledger.map((cell, i) => (
          <FadeUp key={cell.label} delay={0.05 * i} className="bg-paper">
            <div className="px-6 py-8">
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                {cell.label}
              </div>
              <div className="mt-3 font-display italic leading-[1.1] text-[clamp(1.5rem,2.2vw,2rem)]">
                {cell.title}
              </div>
              <p className="mt-3 font-display text-[15px] leading-[1.45] text-muted">
                {cell.body}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Footer row */}
      <div className="mt-14 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[520px] font-display text-[18px] italic leading-[1.55] text-muted">
          Built for the islands. At home under the Senoia sun.
        </p>
        <Button href="/frames" variant="filled-ink" size="lg" arrow>
          Explore Maui Jim
        </Button>
      </div>
    </section>
  );
}
