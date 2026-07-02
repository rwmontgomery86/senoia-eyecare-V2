import { Fragment } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { enchromaFacts } from "@/data/specialtyLenses";
import { images } from "@/data/images";

export default function ColorVisionIntro() {
  return (
    <section
      id="color-blindness"
      data-nav-mode="on-dark"
      className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        {/* Left: act statement */}
        <div>
          <Eyebrow tone="accent">Act II — Color Vision</Eyebrow>
          <h2 className="mt-6 font-display font-medium text-inverted-text text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.01em]">
            <WordReveal
              as="span"
              segments={[{ text: "The world," }]}
              className="block"
            />
            <WordReveal
              as="span"
              delay={0.12}
              segments={[
                { text: "with the" },
                { text: " contrast up.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>

        {/* Right: honesty, then the invitation */}
        <FadeUp delay={0.3} y={16}>
          <div className="flex flex-col gap-7">
            <p className="max-w-[520px] text-[17px] leading-[1.65] text-inverted-muted">
              EnChroma lenses don&apos;t cure color blindness. They filter the
              wavelengths where red and green signals overlap, so the
              difference between colors comes through with more contrast. They
              work best for red-green deficiency — protan and deutan types,
              about four in five cases — and results genuinely vary from
              person to person.
            </p>
            <p className="max-w-[520px] text-[15px] leading-[1.6] text-inverted-muted">
              Which is exactly why we keep demo pairs in the shop. We&apos;re
              an authorized EnChroma retailer, and one of the few practices in
              Georgia where you can put the lenses on your face before
              spending anything — walk in any weekday, no appointment needed.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Mono facts row */}
      <FadeUp delay={0.1} y={16}>
        <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-6">
          {enchromaFacts.map((fact, i) => (
            <Fragment key={fact}>
              {i > 0 ? (
                <span aria-hidden className="h-px w-6 bg-accent/70" />
              ) : null}
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
                {fact}
              </span>
            </Fragment>
          ))}
        </div>
      </FadeUp>

      {/* Wide plate — the photo carries the color against the ink */}
      <FadeUp delay={0.15} y={24}>
        <div className="mt-14">
          <StripedPlaceholder
            aspect="21/9"
            angle={45}
            tone="dark"
            caption="[ WIDE PLATE — color, outdoors ]"
            bottomLeft={
              images.specialtyEnchroma
                ? undefined
                : "specialty-lenses/enchroma-color.jpg"
            }
            bottomRight="Plate №02"
            image={images.specialtyEnchroma}
            imageAlt="A color-saturated outdoor scene, as seen through EnChroma lenses"
            sizes="100vw"
          />
        </div>
      </FadeUp>
    </section>
  );
}
