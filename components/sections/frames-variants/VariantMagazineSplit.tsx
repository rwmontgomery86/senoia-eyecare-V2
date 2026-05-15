import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { images } from "@/data/images";

const beats = [
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
    body: "Fitted in our chair, by hand. Available in your prescription.",
  },
];

export default function VariantMagazineSplit() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-12 max-w-[900px]">
          <Eyebrow>Maui Jim · Sunwear, since 1980</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Polarized" },
                { text: "in Senoia.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>

        {/* 50/50 split */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Left — stacked photos */}
          <div>
            <FadeUp y={20}>
              <StripedPlaceholder
                aspect="3/4"
                angle={45}
                image={images.mauiJimPortrait}
                imageAlt="Maui Jim sunwear, worn on Main Street"
                sizes="(min-width: 768px) 50vw, 100vw"
                bottomLeft="Plate №01 · Worn on Main Street"
              />
            </FadeUp>
            <FadeUp y={20} delay={0.1}>
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
            <Eyebrow>Three things</Eyebrow>
            <h3 className="mt-5 font-display font-medium text-[clamp(2rem,3.4vw,2.75rem)] leading-[1.05]">
              <WordReveal
                as="span"
                segments={[
                  { text: "Performance" },
                  { text: "meets place.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h3>

            <div className="mt-8">
              {beats.map((b, i) => (
                <div key={b.label}>
                  {i > 0 ? <GoldRule width="3rem" className="my-6" /> : null}
                  <FadeUp y={16} delay={0.05 * i}>
                    <Eyebrow symbol={null}>{b.label}</Eyebrow>
                    <p className="mt-3 font-display text-[17px] leading-[1.55] text-ink/85">
                      {b.body}
                    </p>
                  </FadeUp>
                </div>
              ))}
            </div>

            <FadeUp delay={0.3}>
              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <Button href="/frames" variant="filled-ink" size="lg" arrow>
                  Explore Maui Jim
                </Button>
                <Link
                  href="/frames"
                  className="group inline-flex w-fit items-center gap-2 border-b border-ink pb-1 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
                >
                  Also available in Rx
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
