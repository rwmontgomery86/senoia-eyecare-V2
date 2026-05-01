import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { brands } from "@/data/brands";
import { images } from "@/data/images";

const sideImages = [images.framesSide1, images.framesSide2, images.framesSide3];

const featuredFrame = {
  brand: "STATE Optical · Chicago",
  model: "Reid",
  material: "Titanium with acetate insert",
  story:
    "Named for the Reid Murdoch building and its clocktower that has kept Chicago on time since 1914 — striking titanium against acetates that echo the sun, earth, and water.",
};

export default function Frames() {
  const sideBrands = brands.filter((b) => !b.featured).slice(0, 3);

  return (
    <section
      id="frames"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      {/* Header */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow>The Frame Wall</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.75rem,5.5vw,4rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Frames worth" },
                { text: "a second look.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>
        <Link
          href="/frames"
          className="group inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
        >
          See the full collection
          <span
            aria-hidden
            className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.6fr_1fr]">
        {/* Featured */}
        <FadeUp y={20}>
          <Link
            href="/frames"
            aria-label={`${featuredFrame.brand} ${featuredFrame.model} — explore frames`}
            className="group block h-full"
          >
            <StripedPlaceholder
              aspect="5/4"
              angle={115}
              className="h-full"
              image={images.framesFeatured}
              imageAlt={`${featuredFrame.brand} ${featuredFrame.model}`}
              sizes="(min-width: 768px) 60vw, 100vw"
              zoomOnHover
            >
              {/* Bottom-up gradient for legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-transparent"
              />

              {/* FEATURED tag */}
              <div className="absolute right-6 top-6 z-10 inline-flex items-center bg-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide2 text-ink">
                Featured
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-6 bottom-6 z-10 md:inset-x-10 md:bottom-10">
                <div className="font-mono text-[10px] uppercase tracking-wide2 text-accent">
                  {featuredFrame.brand}
                </div>
                <div className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] italic leading-[0.95] text-paper">
                  {featuredFrame.model}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
                  {featuredFrame.material}
                </div>
                <p className="mt-5 max-w-md text-[14px] leading-[1.55] text-paper/85">
                  {featuredFrame.story}
                </p>
              </div>
            </StripedPlaceholder>
          </Link>
        </FadeUp>

        {/* Side stack */}
        <div className="grid grid-rows-3 gap-4">
          {sideBrands.map((b, i) => {
            const hasImage = !!sideImages[i];
            return (
              <FadeUp key={b.name} delay={0.08 * (i + 1)} y={16}>
                <Link
                  href="/frames"
                  aria-label={`${b.name} — explore frames`}
                  className="group block h-full"
                >
                  <StripedPlaceholder
                    aspect="auto"
                    angle={30 + i * 45}
                    className="h-full min-h-[140px]"
                    image={sideImages[i]}
                    imageAlt={b.name}
                    sizes="(min-width: 768px) 38vw, 100vw"
                    zoomOnHover
                  >
                    {/* Gradient for legibility (only when image is present) */}
                    {hasImage ? (
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
                      />
                    ) : null}

                    <div className="absolute inset-x-5 bottom-5 z-10 flex items-end justify-between gap-3">
                      <span
                        className={`font-display text-[clamp(1.25rem,2.4vw,1.625rem)] italic ${hasImage ? "text-paper" : "text-ink"}`}
                      >
                        {b.name}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wide2 ${hasImage ? "text-paper/85" : "text-muted"}`}
                      >
                        {b.tag}
                      </span>
                    </div>
                  </StripedPlaceholder>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
