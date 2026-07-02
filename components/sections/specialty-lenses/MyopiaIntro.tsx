import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { images } from "@/data/images";

export default function MyopiaIntro() {
  return (
    <section
      id="myopia"
      data-nav-mode="on-light"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Left: act statement */}
        <div>
          <Eyebrow>Act I — Myopia Management</Eyebrow>
          <h2 className="mt-6 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.02] tracking-[-0.01em]">
            <WordReveal
              as="span"
              segments={[{ text: "Their eyes are growing." }]}
              className="block"
            />
            <WordReveal
              as="span"
              delay={0.12}
              segments={[
                { text: "The prescription" },
                { text: " doesn't have to.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>

          <FadeUp delay={0.2} y={20}>
            <p className="mt-8 max-w-[520px] text-[17px] leading-[1.65] text-muted">
              Myopia usually shows up in the school years and climbs while a
              child grows — each new prescription a little stronger than the
              last. We fit Essilor Stellest lenses to slow that progression,
              as part of a regular annual exam. No program to join; the lenses
              do their work while they&apos;re worn.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} y={20}>
            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.6] text-muted">
              The reason to act early is practical. Higher myopia carries a
              higher lifetime risk of retinal detachment, myopic maculopathy,
              and glaucoma — and that risk rises with each diopter. Childhood,
              while the eye is still growing, is when slowing it is possible.
            </p>
          </FadeUp>
        </div>

        {/* Right: portrait */}
        <FadeUp delay={0.15} y={24}>
          <StripedPlaceholder
            aspect="4/5"
            angle={135}
            tone="light"
            caption="[ PORTRAIT — kid in glasses ]"
            bottomLeft={
              images.specialtyMyopia
                ? undefined
                : "specialty-lenses/myopia-kid.jpg"
            }
            bottomRight="Plate №01"
            image={images.specialtyMyopia}
            imageAlt="A school-age child wearing glasses at Senoia Eyecare"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </FadeUp>
      </div>
    </section>
  );
}
