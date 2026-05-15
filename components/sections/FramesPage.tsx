"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import BookingCTA from "@/components/sections/BookingCTA";
import { brands } from "@/data/brands";
import { images } from "@/data/images";

const pillars = [
  {
    label: "Place",
    title: "Made for the islands.",
    body: "Picked for the porch hours, the patio, the back nine in Coweta County.",
    image: "mauiJimPlace" as const,
    angle: 45,
  },
  {
    label: "Light",
    title: "Glare, gone.",
    body: "PolarizedPlus2® lenses pull glare off pavement and water. Color comes back. Depth comes back.",
    image: "mauiJimLight" as const,
    angle: 120,
  },
  {
    label: "Fit",
    title: "Fitted in our chair.",
    body: "Every Maui Jim model, by hand. Available in your prescription.",
    image: "mauiJimFit" as const,
    angle: 30,
  },
];

const grid = [
  { label: "HieHie", angle: 60, image: "mauiJimHiehie" },
  { label: "Kaulike", angle: 105, image: "mauiJimKaulike" },
  { label: "Ho‘okipa", angle: 150, image: "mauiJimHookipa" },
] as const;

export default function FramesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="bg-paper">
      {/* 1 — Full-bleed cinematic hero */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[80vh] flex-col justify-end overflow-hidden bg-ink px-6 pb-20 pt-36 text-inverted-text md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pb-28 lg:pt-44"
      >
        {/* Striped fallback */}
        <div
          aria-hidden
          className="absolute inset-0 -inset-y-16 opacity-50"
          style={{
            background:
              "repeating-linear-gradient(135deg, #3a332e 0 14px, #4a423d 14px 15px)",
          }}
        />

        {/* Parallax bg image */}
        {images.framesSide3 ? (
          <motion.div
            style={{ y: heroBgY }}
            className="absolute inset-0 -inset-y-16 opacity-70"
          >
            <Image
              src={images.framesSide3}
              alt="Maui Jim polarized sunwear, worn outdoors"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        ) : null}

        {/* Dark overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/40"
        />

        <div className="relative mx-auto w-full max-w-[1280px]">
          <Eyebrow tone="inverted-muted">Maui Jim · Polarized Sunwear</Eyebrow>
          <h1 className="mt-5 font-display font-medium tracking-[-0.01em] text-[clamp(3.5rem,9vw,6.5rem)] leading-[0.95]">
            <WordReveal
              as="span"
              segments={[
                { text: "From" },
                { text: "Lahaina", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
            <WordReveal
              as="span"
              segments={[{ text: "to" }, { text: "Senoia.", italic: true }]}
              delay={0.25}
              className="block"
            />
          </h1>
          <FadeUp delay={0.5}>
            <p className="mt-8 max-w-[560px] font-display italic leading-[1.4] text-inverted-muted text-[clamp(1.125rem,1.6vw,1.375rem)]">
              The lens technology born on a Maui beach, fitted in our chair on
              Main Street. Polarized — and available in your prescription.
            </p>
            <div className="mt-10 font-mono text-[10px] uppercase tracking-wide2 text-paper/70">
              Plate №01 · Worn outdoors
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2 — Place / Light / Fit pillars */}
      <section className="border-t border-rule bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-[900px]">
            <Eyebrow>Three things</Eyebrow>
            <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1]">
              <WordReveal
                as="span"
                segments={[
                  { text: "Performance" },
                  { text: "meets place.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-10">
            {pillars.map((p, i) => (
              <FadeUp key={p.label} y={20} delay={0.08 * i}>
                <div className="flex flex-col gap-6">
                  <StripedPlaceholder
                    aspect="3/4"
                    angle={p.angle}
                    image={images[p.image]}
                    imageAlt={`Maui Jim — ${p.label}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div>
                    <Eyebrow symbol={null}>{p.label}</Eyebrow>
                    <div className="mt-3 font-display italic text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.05]">
                      {p.title}
                    </div>
                    <p className="mt-4 font-display text-[16px] leading-[1.55] text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — PolarizedPlus2 statement + 3-up model grid */}
      <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow>The tech</Eyebrow>
              <h2 className="mt-5 font-display font-medium italic tracking-[-0.01em] text-[clamp(3rem,7vw,5.5rem)] leading-[1]">
                <WordReveal
                  as="span"
                  text="PolarizedPlus2®"
                  className="block"
                />
              </h2>
            </div>
            <div className="md:col-span-5">
              <FadeUp y={16}>
                <p className="font-display italic text-[clamp(1.125rem,1.5vw,1.25rem)] leading-[1.55] text-muted">
                  Tinted at the molecular level. Cuts glare, restores color,
                  filters UV and HEV. The lens technology Maui Jim is known for —
                  and every model is also available in your prescription.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {grid.map((cell, i) => (
              <FadeUp key={cell.label} y={16} delay={0.08 * i}>
                <div className="group block">
                  <StripedPlaceholder
                    aspect="4/5"
                    angle={cell.angle}
                    image={images[cell.image]}
                    imageAlt={`Maui Jim ${cell.label}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    zoomOnHover
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                    />
                    <div className="absolute inset-x-6 bottom-6 z-10">
                      <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
                        Maui Jim
                      </div>
                      <div className="mt-1 font-display italic leading-[1.05] text-paper text-[clamp(1.5rem,2.4vw,1.875rem)]">
                        {cell.label}
                      </div>
                    </div>
                  </StripedPlaceholder>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Brand index (sticky-left intro + right 2-col card grid) */}
      <section className="border-t border-rule bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <Eyebrow>The index</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Nine more" },
                    { text: "makers.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h2>
              <FadeUp delay={0.2}>
                <p className="mt-8 max-w-[440px] text-[16px] leading-[1.65] text-muted md:text-[17px]">
                  Beyond the headliner — independents from Spain and Chicago
                  beside American icons; surgical-grade titanium beside playful
                  acetates.
                </p>
                <div className="mt-8 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                  {brands.length.toString().padStart(2, "0")} brands · curated
                </div>
              </FadeUp>
            </div>

            <div className="md:col-span-7">
              <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
                {brands.map((b, i) => {
                  const isMauiJim = b.name === "Maui Jim";
                  return (
                    <FadeUp key={b.name} delay={0.05 * (i % 4)} y={14}>
                      <li className="flex h-full flex-col justify-between gap-6 bg-cream px-5 py-6 md:px-6 md:py-7">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                            {(i + 1).toString().padStart(2, "0")}
                          </span>
                          {isMauiJim ? (
                            <span className="font-mono text-[10px] uppercase tracking-wide2 text-accent">
                              · Featured
                            </span>
                          ) : null}
                        </div>
                        <div>
                          <div className="font-display text-[clamp(1.5rem,2.6vw,1.875rem)] leading-[1.1]">
                            {b.name}
                          </div>
                          <div className="mt-2 font-mono text-[10px] uppercase tracking-wide2 text-muted">
                            {b.tag}
                          </div>
                        </div>
                      </li>
                    </FadeUp>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Compact styling & fit */}
      <section className="border-t border-rule bg-paper px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1080px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-center md:gap-14">
            <div className="max-w-[640px]">
              <Eyebrow>Styling &amp; fit</Eyebrow>
              <h2 className="mt-5 font-display font-medium text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Tried on," },
                    { text: "by hand.", italic: true, className: "text-accent" },
                  ]}
                  className="block"
                />
              </h2>
              <p className="mt-7 font-display text-[16px] leading-[1.6] text-muted md:text-[17px]">
                Bridge widths measured, temples adjusted on a heated bench, re-fits
                for the life of the frame. By appointment or walk-in.
              </p>
              <FadeUp delay={0.15}>
                <div className="mt-8">
                  <Button
                    href="#book"
                    variant="outlined-dark"
                    size="lg"
                    arrow
                  >
                    Book a styling session
                  </Button>
                </div>
              </FadeUp>
            </div>
            <FadeUp y={20} delay={0.1}>
              <div className="w-full max-w-[420px] md:w-[420px]">
                <StripedPlaceholder
                  aspect="16/10"
                  angle={45}
                  image={images.framesStyling}
                  imageAlt="Frame fitting at Senoia Eyecare"
                  sizes="(min-width: 768px) 420px, 100vw"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 6 — Shared BookingCTA */}
      <BookingCTA />
    </div>
  );
}
