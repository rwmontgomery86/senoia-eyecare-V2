"use client";

import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function VariantSplit() {
  return (
    <section className="flex flex-col bg-paper">
      <div className="bg-ink px-6 pb-12 pt-32 text-inverted-text">
        <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
          <span aria-hidden>§&nbsp;&nbsp;</span>
          Contact Lens Fitting
        </div>

        <h1 className="mt-7 font-display font-medium text-[clamp(2.25rem,10vw,3rem)] leading-[1] tracking-[-0.02em]">
          <WordReveal
            as="span"
            inView={false}
            delay={0.2}
            text="Find your fit,"
            className="block"
          />
          <WordReveal
            as="span"
            inView={false}
            delay={0.65}
            segments={[
              { text: "not just your" },
              { text: "prescription.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h1>

        <FadeUp delay={1.1} y={12}>
          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-inverted-muted">
            Soft, toric, and multifocal contact lenses, fit to your eye in our
            chair. Whether you&apos;ve worn lenses for years or you&apos;re
            trying them for the first time, we&apos;ll take the time to get it
            right.
          </p>
        </FadeUp>

        <FadeUp delay={1.35} y={12}>
          <div className="mt-8 flex flex-col gap-3">
            <Button
              href={site.bookingUrl}
              external
              variant="filled-accent"
              size="md"
            >
              Book a Fitting
            </Button>
            <Button
              href={site.marloUrl}
              external
              variant="outlined-light"
              size="md"
            >
              Reorder on Marlo
            </Button>
          </div>
        </FadeUp>
      </div>

      <div className="border-t border-inverted-rule">
        <StripedPlaceholder
          aspect="4/3"
          angle={135}
          tone="dark"
          caption="[ CONTACTS — 4:3 ]"
          image={images.contactsHero}
          imageAlt="A patient at Senoia Eyecare being fit for contact lenses"
          sizes="100vw"
          priority
          objectPosition="center 30%"
        />
      </div>
    </section>
  );
}
