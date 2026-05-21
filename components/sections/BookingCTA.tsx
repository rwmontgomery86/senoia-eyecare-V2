"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function BookingCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="book"
      data-nav-mode="on-dark"
      className="relative isolate overflow-hidden bg-ink px-6 py-32 text-inverted-text md:px-10 md:py-44 lg:px-16 lg:py-52"
    >
      {/* Striped fallback (visible if no image set) */}
      <div
        aria-hidden
        className="absolute inset-0 -inset-y-16 opacity-50"
        style={{
          background:
            "repeating-linear-gradient(135deg, #3a332e 0 14px, #4a423d 14px 15px)",
        }}
      />

      {/* Parallax bg image */}
      {images.bookingBackground ? (
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -inset-y-16 opacity-60"
        >
          <Image
            src={images.bookingBackground}
            alt="Inside Senoia Eyecare"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </motion.div>
      ) : null}

      {/* Dark overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink/95"
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start">
        <Eyebrow tone="accent" symbol={null}>
          Schedule
        </Eyebrow>
        <h2 className="mt-6 font-display font-medium leading-[0.96] text-inverted-text text-[clamp(3.25rem,9vw,7.5rem)] tracking-[-0.01em]">
          <WordReveal
            as="span"
            segments={[
              { text: "Book your" },
              { text: "eye exam.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 items-end gap-10 md:grid-cols-12"
        >
          <p className="md:col-span-6 max-w-[520px] text-base leading-relaxed text-inverted-muted md:text-lg">
            Comprehensive evaluations by appointment. New patients welcome.
            Personal care, on schedule. Every patient gets the full chair.
          </p>
          <div className="flex flex-wrap gap-4 md:col-span-6 md:justify-end">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:bg-accent-deep"
            >
              Book online
              <span className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="group inline-flex items-center gap-3 border border-inverted-text/50 px-8 py-4 font-mono text-[11px] uppercase tracking-eyebrow text-inverted-text transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
            >
              {site.phone.display}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
