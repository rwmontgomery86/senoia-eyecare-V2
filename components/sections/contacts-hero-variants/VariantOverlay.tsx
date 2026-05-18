"use client";

import Image from "next/image";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function VariantOverlay() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-ink text-inverted-text">
      {images.contactsHero ? (
        <Image
          src={images.contactsHero}
          alt="A patient at Senoia Eyecare being fit for contact lenses"
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: "50% 30%" }}
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(30deg, #3a332e 0 14px, #4a423d 14px 15px)",
          }}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/80 to-ink/55"
      />

      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-16 pt-32">
          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
            <span aria-hidden>§&nbsp;&nbsp;</span>
            Contact Lens Fitting
          </div>

          <h1 className="mt-6 font-display font-medium text-[clamp(2.5rem,11vw,3.5rem)] leading-[1] tracking-[-0.02em]">
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
            <p className="mt-6 max-w-[440px] text-[16px] leading-[1.6] text-inverted-muted">
              Soft, toric, and multifocal contact lenses, fit to your eye in
              our chair. Whether you&apos;ve worn lenses for years or you&apos;re
              trying them for the first time, we&apos;ll take the time to get
              it right.
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
      </div>
    </section>
  );
}
