import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import BookingCTA from "@/components/sections/BookingCTA";
import { brands } from "@/data/brands";
import { images } from "@/data/images";

const featured = {
  brand: "Maui Jim · Lahaina, Hawaii",
  model: "Maui Jim",
  material: "PolarizedPlus2® · Available in Rx",
};

const stylingNotes = [
  "One-on-one styling, by appointment or walk-in",
  "Heat & mechanical adjustments while you wait",
  "Re-fits for the life of the frame",
];

export default function VariantCuratedHub() {
  return (
    <div className="bg-paper">
      {/* 1 — Intro band */}
      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow>The Frame Wall</Eyebrow>
          <h1 className="mt-5 font-display font-medium text-[clamp(3rem,7vw,5.5rem)] leading-[0.98]">
            <WordReveal
              as="span"
              segments={[
                { text: "A small wall," },
                { text: "carefully chosen.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h1>
          <FadeUp delay={0.2}>
            <p className="mt-10 max-w-[680px] text-[17px] leading-[1.65] text-muted md:text-[18px]">
              We carry ten makers. Independents from Spain and Chicago beside
              American icons; surgical-grade titanium beside playful acetates and
              polarized sun. Each pair is chosen because we&rsquo;d wear it
              ourselves — and because it earns its place on the wall.
            </p>
          </FadeUp>
          <GoldRule className="mt-14" width="6rem" />
          <FadeUp delay={0.3}>
            <a
              href="#featured"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-wide2 text-accent transition-colors duration-200 ease-expo hover:text-accent-deep"
            >
              Featured this season
              <span aria-hidden className="text-ink/40">→</span>
              <span className="text-ink transition-colors duration-200 ease-expo group-hover:text-accent">
                Maui Jim
              </span>
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
              >
                ↓
              </span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* 2 — Featured frame: cinematic spread (Maui Jim) */}
      <section
        id="featured"
        className="border-t border-rule px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32 scroll-mt-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
            <FadeUp y={20} className="md:col-span-7">
              <div className="group">
                <StripedPlaceholder
                  aspect="5/4"
                  angle={115}
                  image={images.mauiJimPortrait}
                  imageAlt="Maui Jim polarized sunwear"
                  sizes="(min-width: 768px) 58vw, 100vw"
                  zoomOnHover
                />
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                Plate №01 · Featured · Maui Jim
              </div>
            </FadeUp>
            <FadeUp delay={0.15} y={20} className="md:col-span-5 md:pt-12">
              <Eyebrow tone="muted">Featured</Eyebrow>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-wide2 text-accent">
                {featured.brand}
              </div>
              <div className="mt-4 font-display text-[clamp(3.25rem,6vw,4.75rem)] italic leading-[0.95]">
                {featured.model}
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                {featured.material}
              </div>
              <p className="mt-7 text-[16px] leading-[1.6] text-muted md:text-[17px]">
                PolarizedPlus2® lenses, born on a Maui beach and fitted in our
                chair on Main Street. Cuts glare, restores color, filters UV
                and HEV. Every model also available in your prescription —
                made for the Georgia sun.
              </p>
              <FadeUp delay={0.2}>
                <a
                  href="#book"
                  className="group mt-8 inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
                >
                  Try them in the chair
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </FadeUp>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3 — Brand index */}
      <section className="border-t border-rule bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <Eyebrow>The index</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Ten makers," },
                    { text: "one wall.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h2>
              <FadeUp delay={0.2}>
                <p className="mt-8 max-w-[440px] text-[16px] leading-[1.65] text-muted md:text-[17px]">
                  Independents from Spain and Chicago beside American icons.
                  Surgical-grade titanium beside playful acetates and polarized
                  sun.
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
                      <li className="flex h-full flex-col justify-between gap-6 bg-cream px-5 py-6 md:px-6 md:py-7">
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

      {/* 4 — Styling & fit (with sun note folded in) */}
      <section className="border-t border-rule bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:items-center">
            <FadeUp y={20} className="md:order-2">
              <StripedPlaceholder
                aspect="4/5"
                angle={45}
                caption="[ FITTING — 4:5 ]"
                image={images.framesStyling}
                imageAlt="Frame fitting at Senoia Eyecare"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </FadeUp>
            <FadeUp delay={0.1} y={20} className="md:order-1">
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
              <GoldRule width="2rem" className="mt-10" />
              <p className="mt-6 max-w-[520px] font-display text-[15px] italic leading-[1.6] text-muted">
                <span className="not-italic text-ink/85">Sun protection.</span>{" "}
                Maui Jim polarized as the headline. Ray-Ban for the icons.
                Tifosi for the long ride home. All available in prescription.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 5 — Shared BookingCTA */}
      <BookingCTA />
    </div>
  );
}
