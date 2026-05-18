"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import WordReveal from "@/components/ui/WordReveal";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import VariantOverlay from "@/components/sections/contacts-hero-variants/VariantOverlay";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function ContactsHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative bg-ink text-inverted-text"
    >
      <div className="lg:hidden">
        <VariantOverlay />
      </div>

      <div className="hidden px-6 pb-24 pt-36 md:px-10 md:pb-28 md:pt-40 lg:block lg:px-16 lg:pb-32 lg:pt-44">
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: text */}
          <motion.div style={{ y: contentY }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[11px] uppercase tracking-eyebrow text-accent"
            >
              <span aria-hidden>§&nbsp;&nbsp;</span>
              Contact Lens Fitting
            </motion.div>

            <h1 className="mt-8 font-display font-medium text-inverted-text text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.98] tracking-[-0.02em]">
              <WordReveal
                as="span"
                inView={false}
                delay={0.4}
                text="Find your fit,"
                className="block"
              />
              <WordReveal
                as="span"
                inView={false}
                delay={0.85}
                segments={[
                  { text: "not just your" },
                  { text: "prescription.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[480px] text-[18px] leading-[1.6] text-inverted-muted"
            >
              Soft, toric, and multifocal contact lenses, fit to your eye in
              our chair. Whether you&apos;ve worn lenses for years or you&apos;re
              trying them for the first time, we&apos;ll take the time to get it
              right.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap gap-3"
            >
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
            </motion.div>
          </motion.div>

          {/* Right: portrait placeholder */}
          <motion.div style={{ y: photoY }}>
            <StripedPlaceholder
              aspect="4/5"
              angle={135}
              tone="dark"
              caption="[ EDITORIAL — fitting room detail ]"
              bottomLeft="Plate №02"
              bottomRight="Senoia Eyecare"
              image={images.contactsHero}
              imageAlt="A patient at Senoia Eyecare being fit for contact lenses"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
