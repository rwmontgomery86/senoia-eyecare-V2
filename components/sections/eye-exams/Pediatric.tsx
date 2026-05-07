"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function Pediatric() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      id="pediatric"
      className="relative isolate overflow-hidden bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      {/* Striped fallback (visible if no image set) */}
      <div
        aria-hidden
        className="absolute inset-0 -inset-y-12 opacity-40"
        style={{
          background:
            "repeating-linear-gradient(45deg, #3a332e 0 14px, #4a423d 14px 15px)",
        }}
      />

      {/* Filename label (only when no image is set) */}
      {!images.eyeExamsPediatric ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-6 z-10 flex items-start justify-between font-mono text-[10px] uppercase tracking-wide2 text-inverted-muted/70 md:inset-x-10 lg:inset-x-16"
        >
          <span>[ PEDIATRIC BG — 16:9 ]</span>
          <span>eye-exams-pediatric.jpg</span>
        </div>
      ) : null}

      {/* Parallax bg image */}
      {images.eyeExamsPediatric ? (
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -inset-y-12 opacity-50"
        >
          <Image
            src={images.eyeExamsPediatric}
            alt=""
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        </motion.div>
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/95"
      />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <Eyebrow tone="accent">For the whole family</Eyebrow>
          <h2 className="mt-6 font-display font-medium text-inverted-text text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.01em]">
            <WordReveal
              as="span"
              segments={[
                { text: "Little eyes," },
                { text: "big care.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-7"
        >
          <p className="max-w-[520px] text-[17px] leading-[1.65] text-inverted-muted">
            We see kids of every age — from infants through high school. As an{" "}
            <span className="font-display italic text-inverted-text">
              InfantSEE
            </span>{" "}
            provider, we offer no-cost vision assessments for babies between 6
            and 12 months, when so much of how a child learns to see is taking
            shape.
          </p>
          <p className="max-w-[520px] text-[15px] leading-[1.6] text-inverted-muted">
            Patient appointments, gentle pacing, and unhurried explanations
            for parents. Whether it&apos;s a back-to-school exam or a
            first-ever visit, we keep it calm, thorough, and (when possible)
            a little fun.
          </p>
          <div className="mt-2">
            <Button
              href={site.bookingUrl}
              external
              variant="outlined-light"
              size="md"
              arrow
            >
              Book a family visit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
