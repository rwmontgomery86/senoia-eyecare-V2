"use client";

import Image from "next/image";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function VariantBlurred() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-ink text-inverted-text">
      <div className="absolute inset-0">
        {images.contactsHero ? (
          <Image
            src={images.contactsHero}
            alt="A patient at Senoia Eyecare being fit for contact lenses"
            fill
            priority
            sizes="100vw"
            style={{
              objectPosition: "center",
              filter: "blur(18px)",
              transform: "scale(1.15)",
            }}
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "repeating-linear-gradient(135deg, #3a332e 0 14px, #4a423d 14px 15px)",
            }}
          />
        )}
      </div>

      <div aria-hidden className="absolute inset-0 bg-ink/70" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full px-6 py-28 text-center">
          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
            <span aria-hidden>§&nbsp;&nbsp;</span>
            Contact Lens Fitting
          </div>

          <h1 className="mt-7 font-display font-medium text-[clamp(2.5rem,11vw,3.5rem)] leading-[1] tracking-[-0.02em]">
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
            <p className="mx-auto mt-7 max-w-[360px] text-[16px] leading-[1.6] text-inverted-muted">
              Soft, toric, and multifocal contact lenses, fit to your eye in
              our chair. We&apos;ll take the time to get it right.
            </p>
          </FadeUp>

          <FadeUp delay={1.35} y={12}>
            <div className="mt-9 flex flex-col items-center gap-3">
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
