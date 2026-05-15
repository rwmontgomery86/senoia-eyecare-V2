import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import BookingCTA from "@/components/sections/BookingCTA";
import { brands } from "@/data/brands";
import { images } from "@/data/images";

const pillars = [
  {
    label: "Place",
    body: "Picked for the porch hours, the patio, the back nine in Coweta County.",
  },
  {
    label: "Light",
    body: "PolarizedPlus2® lenses pull glare off pavement and water. Color comes back. Depth comes back.",
  },
  {
    label: "Fit",
    body: "Every Maui Jim model, fitted in our chair, available in your prescription.",
  },
];

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

const grid = [
  { label: "Model № 01", angle: 30 },
  { label: "Model № 02", angle: 75 },
  { label: "Model № 03", angle: 120 },
] as const;

const gridImages = ["mauiJimModel1", "mauiJimModel2", "mauiJimModel3"] as const;

const stylingNotes = [
  "One-on-one styling, by appointment or walk-in",
  "Heat & mechanical adjustments while you wait",
  "Re-fits for the life of the frame",
];

export default function VariantMagazineHub() {
  return (
    <div className="bg-paper">
      {/* 1 — Magazine hero */}
      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
            {/* Left — stacked photos */}
            <div>
              <FadeUp y={20}>
                <StripedPlaceholder
                  aspect="3/4"
                  angle={45}
                  image={images.mauiJimPortrait}
                  imageAlt="Maui Jim sunwear, polarized in Senoia"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  bottomLeft="Plate №01 · Polarized in Senoia"
                />
              </FadeUp>
              <FadeUp y={20} delay={0.12}>
                <div className="mt-6 ml-auto max-w-[68%]">
                  <StripedPlaceholder
                    aspect="4/5"
                    angle={120}
                    image={images.mauiJimDetail}
                    imageAlt="Maui Jim PolarizedPlus2 lens detail"
                    sizes="(min-width: 768px) 35vw, 70vw"
                    bottomLeft="Plate №02 · Lens detail"
                  />
                </div>
              </FadeUp>
            </div>

            {/* Right — editorial body */}
            <div className="flex flex-col justify-center">
              <Eyebrow>Maui Jim · Polarized Sunwear</Eyebrow>
              <h1 className="mt-5 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Built for" },
                    { text: "the light.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h1>

              <div className="mt-8">
                {pillars.map((p, i) => (
                  <div key={p.label}>
                    {i > 0 ? <GoldRule width="3rem" className="my-6" /> : null}
                    <FadeUp y={16} delay={0.05 * i}>
                      <Eyebrow symbol={null}>{p.label}</Eyebrow>
                      <p className="mt-3 font-display text-[17px] leading-[1.55] text-ink/85">
                        {p.body}
                      </p>
                    </FadeUp>
                  </div>
                ))}
              </div>

              <FadeUp delay={0.3}>
                <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <Button href="#tech" variant="filled-ink" size="lg" arrow>
                    See the tech
                  </Button>
                  <a
                    href="#lineup"
                    className="group inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
                  >
                    Browse models
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — PolarizedPlus2 tech ledger */}
      <section
        id="tech"
        className="border-t border-rule bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-[900px]">
            <Eyebrow>PolarizedPlus2®</Eyebrow>
            <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.02]">
              <WordReveal
                as="span"
                segments={[
                  { text: "Performance" },
                  { text: "meets place.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-px border-t border-b border-rule bg-rule md:grid-cols-4">
            {ledger.map((cell, i) => (
              <FadeUp key={cell.label} delay={0.05 * i} className="bg-cream">
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
        </div>
      </section>

      {/* 3 — Maui Jim 3-up model grid */}
      <section
        id="lineup"
        className="border-t border-rule bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 max-w-[900px]">
            <Eyebrow>The lineup</Eyebrow>
            <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.02]">
              <WordReveal
                as="span"
                segments={[
                  { text: "Three to" },
                  { text: "try first.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {grid.map((cell, i) => (
              <FadeUp key={cell.label} y={16} delay={0.08 * i}>
                <div className="group block">
                  <StripedPlaceholder
                    aspect="4/5"
                    angle={cell.angle}
                    image={images[gridImages[i]]}
                    imageAlt={`Maui Jim ${cell.label}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    zoomOnHover
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                    />
                    <div className="absolute inset-x-6 bottom-6 z-10">
                      <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
                        Maui Jim
                      </div>
                      <div className="mt-1 font-display italic leading-[1.05] text-paper text-[clamp(1.5rem,2.4vw,1.875rem)]">
                        {cell.label}
                      </div>
                    </div>
                  </StripedPlaceholder>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Brand index (nine more makers) */}
      <section className="border-t border-rule bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <Eyebrow>The index</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Nine more" },
                    { text: "makers.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h2>
              <FadeUp delay={0.2}>
                <p className="mt-8 max-w-[440px] text-[16px] leading-[1.65] text-muted md:text-[17px]">
                  Beyond the headliner — independents from Spain and Chicago
                  beside American icons; surgical-grade titanium beside playful
                  acetates.
                </p>
                <div className="mt-8 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                  {brands.length.toString().padStart(2, "0")} brands · curated
                </div>
              </FadeUp>
            </div>

            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
                {brands.map((b, i) => {
                  const isMauiJim = b.name === "Maui Jim";
                  return (
                    <FadeUp key={b.name} delay={0.05 * (i % 4)} y={14}>
                      <li className="relative flex h-full flex-col justify-between gap-6 bg-cream px-5 py-6 md:px-6 md:py-7">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                            {(i + 1).toString().padStart(2, "0")}
                          </span>
                          {isMauiJim ? (
                            <span className="font-mono text-[10px] uppercase tracking-wide2 text-accent">
                              · Featured
                            </span>
                          ) : null}
                        </div>
                        <div>
                          <div className="font-display text-[clamp(1.5rem,2.6vw,1.875rem)] leading-[1.1]">
                            {b.name}
                          </div>
                          <div className="mt-2 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                            {b.tag}
                          </div>
                        </div>
                      </li>
                    </FadeUp>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Styling & fit */}
      <section className="border-t border-rule bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:items-center">
            <FadeUp y={20}>
              <StripedPlaceholder
                aspect="4/5"
                angle={45}
                caption="[ FITTING — 4:5 ]"
                image={images.framesStyling}
                imageAlt="Frame fitting at Senoia Eyecare"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </FadeUp>
            <FadeUp delay={0.1} y={20}>
              <Eyebrow>Styling &amp; fit</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.02]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Tried on," },
                    { text: "not just sold.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h2>
              <p className="mt-7 max-w-[520px] text-[16px] leading-[1.65] text-muted md:text-[17px]">
                We pull what suits your face, your prescription, and your day.
                Bridge widths are measured. Temples are adjusted on a heated
                bench, by hand. You leave with frames that sit right —
                not frames that almost do.
              </p>
              <ul className="mt-8 space-y-3 border-t border-rule pt-6">
                {stylingNotes.map((line) => (
                  <li
                    key={line}
                    className="flex items-baseline gap-3 font-display text-[17px]"
                  >
                    <span aria-hidden className="font-mono text-[10px] text-accent">
                      —
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 6 — Shared BookingCTA */}
      <BookingCTA />
    </div>
  );
}
