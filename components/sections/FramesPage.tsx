import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { brands } from "@/data/brands";
import { images } from "@/data/images";
import { site } from "@/data/site";

const featuredFrame = {
  brand: "STATE Optical · Chicago",
  model: "Reid",
  material: "Titanium with acetate insert",
  story:
    "Named for the Reid Murdoch building and its clocktower that has kept Chicago on time since 1914 — striking titanium against acetates that echo the sun, earth, and water.",
};

export default function FramesPage() {
  return (
    <div className="bg-paper">
      {/* 1 — Intro band */}
      <section className="px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-28 lg:px-16 lg:pb-28 lg:pt-32">
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
              American icons; surgical-grade titanium beside playful acetates.
              Each pair is chosen because we&rsquo;d wear it ourselves — and
              because it earns its place on the wall.
            </p>
          </FadeUp>
          <GoldRule className="mt-14" width="6rem" />
        </div>
      </section>

      {/* 2 — Featured frame: cinematic spread */}
      <section className="px-6 pb-24 md:px-10 md:pb-28 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
            <FadeUp y={20} className="md:col-span-7">
              <div className="group">
                <StripedPlaceholder
                  aspect="5/4"
                  angle={115}
                  image={images.framesFeatured}
                  imageAlt={`${featuredFrame.brand} ${featuredFrame.model}`}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  zoomOnHover
                />
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                Plate №01 · Featured frame
              </div>
            </FadeUp>
            <FadeUp delay={0.15} y={20} className="md:col-span-5 md:pt-12">
              <Eyebrow tone="muted">Featured</Eyebrow>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-wide2 text-accent">
                {featuredFrame.brand}
              </div>
              <div className="mt-4 font-display text-[clamp(3.25rem,6vw,4.75rem)] italic leading-[0.95]">
                {featuredFrame.model}
              </div>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                {featuredFrame.material}
              </div>
              <p className="mt-7 text-[16px] leading-[1.6] text-muted md:text-[17px]">
                {featuredFrame.story}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3 — Brand index: left intro + right 2-col card grid */}
      <section className="border-t border-rule bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Left: intro */}
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
                  Surgical-grade titanium beside playful acetates and
                  polarized sun.
                </p>
                <div className="mt-8 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                  {brands.length.toString().padStart(2, "0")} brands · curated
                </div>
              </FadeUp>
            </div>

            {/* Right: brand cards (2 cols) */}
            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
                {brands.map((b, i) => (
                  <FadeUp key={b.name} delay={0.05 * (i % 4)} y={14}>
                    <li className="flex h-full flex-col justify-between gap-6 bg-paper px-5 py-6 md:px-6 md:py-7">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                        {b.featured ? (
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Styling band: image left, text right */}
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
                {[
                  "One-on-one styling, by appointment or walk-in",
                  "Heat & mechanical adjustments while you wait",
                  "Re-fits for the life of the frame",
                ].map((line) => (
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

      {/* 5 — Sunglasses band: text left, image right (mirror) */}
      <section className="border-t border-rule bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:items-center">
            <FadeUp y={20} className="md:order-2">
              <StripedPlaceholder
                aspect="4/5"
                angle={120}
                caption="[ SUN — 4:5 ]"
                image={images.framesSunglasses}
                imageAlt="Sunglasses at Senoia Eyecare"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </FadeUp>
            <FadeUp delay={0.1} y={20} className="md:order-1">
              <Eyebrow>Sunwear</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.02]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Sun, sharper" },
                    { text: "than memory.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h2>
              <p className="mt-7 max-w-[520px] text-[16px] leading-[1.65] text-muted md:text-[17px]">
                Polarized lenses by Maui Jim. American icons by Ray-Ban.
                Performance frames by Tifosi for the long ride home. Prescription
                or plano — fit and tint matched to how you actually use them.
              </p>
              <ul className="mt-8 space-y-3 border-t border-rule pt-6">
                {[
                  "Polarized prescription & non-prescription",
                  "Lens tints matched to driving, water, sport",
                  "Sunwear add-ons against your eye-exam coverage",
                ].map((line) => (
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

      {/* 6 — CTA */}
      <section className="bg-ink px-6 py-28 text-inverted-text md:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1080px]">
          <Eyebrow tone="accent" symbol={null}>
            Come see them
          </Eyebrow>
          <h2 className="mt-5 font-display font-medium leading-[0.98] text-[clamp(2.75rem,7vw,5.25rem)]">
            <WordReveal
              as="span"
              segments={[
                { text: "Try them on" },
                { text: "in Senoia.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-[560px] text-[17px] leading-[1.6] text-inverted-muted">
              Frames are best chosen in person. Book an exam, or stop in to
              try on the wall.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href={site.bookingUrl}
                external
                variant="filled-accent"
                size="lg"
                arrow
              >
                Book an exam
              </Button>
              <Button
                href={`tel:${site.phone.tel}`}
                variant="outlined-light"
                size="lg"
              >
                {site.phone.display}
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
