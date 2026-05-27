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
    body: "Tinted at the molecular level. It doesn't fade or flake.",
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
  { label: "HieHie", angle: 30, image: "mauiJimHiehie" },
  { label: "Kaulike", angle: 75, image: "mauiJimKaulike" },
  { label: "Ho‘okipa", angle: 120, image: "mauiJimHookipa" },
] as const;

export default function Frames() {
  return (
    <section id="frames" data-nav-mode="on-light" className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* MOBILE — cinematic banner + 2x2 tech ledger */}
      <div className="md:hidden">
        <div className="mb-8">
          <Eyebrow>Maui Jim · Polarized Sunwear</Eyebrow>
          <h2 className="mt-5 font-display font-medium leading-[1.02] text-[clamp(2.5rem,9vw,3.75rem)]">
            <WordReveal
              as="span"
              segments={[
                { text: "From" },
                { text: "Lahaina", italic: true, className: "text-accent" },
                { text: "to" },
                { text: "Senoia.", italic: true },
              ]}
              className="block"
            />
          </h2>
          <FadeUp y={16}>
            <p className="mt-5 font-display text-[17px] italic leading-[1.55] text-muted">
              PolarizedPlus2® lenses, made for the Georgia sun.{" "}
              <span className="not-italic text-ink/85">Available in Rx.</span>
            </p>
          </FadeUp>
        </div>

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
            <div className="absolute inset-x-6 bottom-6 z-10 flex items-end justify-between">
              <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
                Plate №01
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
                [ PolarizedPlus2® ]
              </div>
            </div>
          </StripedPlaceholder>
        </FadeUp>

        <div className="mt-10 grid grid-cols-2 gap-px border-t border-b border-rule bg-rule">
          {ledger.map((cell, i) => (
            <FadeUp key={cell.label} delay={0.05 * i} className="bg-paper">
              <div className="px-5 py-7">
                <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                  {cell.label}
                </div>
                <div className="mt-3 font-display italic leading-[1.1] text-[clamp(1.25rem,5vw,1.75rem)]">
                  {cell.title}
                </div>
                <p className="mt-3 font-display text-[14px] leading-[1.45] text-muted">
                  {cell.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <p className="font-display text-[17px] italic leading-[1.55] text-muted">
            Born on a Maui beach. Fitted in our chair.
          </p>
          <Button href="/frames" variant="filled-ink" size="lg" arrow>
            Explore Maui Jim
          </Button>
        </div>
      </div>

      {/* DESKTOP — typographic poster + 3-up product grid */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1440px]">
          {/* Top half — typographic poster */}
          <div className="pb-12 md:pb-20">
            {/* Marginalia */}
            <div className="mb-10 flex items-start justify-between gap-6">
              <Eyebrow>Maui Jim · № 01</Eyebrow>
              <span className="font-mono text-[10px] uppercase tracking-wide2 text-muted text-right">
                Polarized sunwear · Available in Rx
              </span>
            </div>

            {/* Statement */}
            <h2 className="font-display font-medium tracking-[-0.02em] text-[clamp(4rem,11vw,9rem)] leading-[0.92]">
              <WordReveal
                as="span"
                segments={[
                  { text: "From" },
                  { text: "Lahaina", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
              <WordReveal
                as="span"
                segments={[{ text: "to" }, { text: "Senoia.", italic: true }]}
                delay={0.25}
                className="block"
              />
            </h2>

            <FadeUp y={16} delay={0.4}>
              <p className="mt-6 max-w-[40ch] font-display italic leading-[1.4] text-muted text-[clamp(1.25rem,2vw,1.625rem)]">
                The lens technology born on a Maui beach, fitted in our chair.
              </p>
            </FadeUp>
          </div>

          {/* Hairline divider */}
          <div className="border-t border-rule" />

          {/* Bottom half — 3-up product grid */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {grid.map((cell, i) => (
              <FadeUp key={cell.label} y={16} delay={0.08 * i}>
                <div className="group block">
                  <StripedPlaceholder
                    aspect="4/5"
                    angle={cell.angle}
                    image={images[cell.image]}
                    imageAlt={`Maui Jim ${cell.label}`}
                    sizes="33vw"
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

          {/* Info band */}
          <div className="mt-12 grid grid-cols-[1.6fr_1fr] items-end gap-8 border-t border-rule pt-10">
            <div>
              <Eyebrow>PolarizedPlus2®</Eyebrow>
              <p className="mt-4 max-w-[60ch] font-display text-[17px] italic leading-[1.55] text-muted">
                Lens technology that cuts glare, restores color, and protects
                from UV and HEV. Every model also available in your
                prescription.
              </p>
            </div>
            <div className="justify-self-end">
              <Button href="/frames" variant="filled-ink" size="lg" arrow>
                Explore Maui Jim
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
