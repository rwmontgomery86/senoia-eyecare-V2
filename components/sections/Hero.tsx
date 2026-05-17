"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import WordReveal from "@/components/ui/WordReveal";
import GlassesMotif from "@/components/ui/GlassesMotif";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

const stats: [string, string][] = [
  ["New patients", "Welcome"],
  ["Most insurance", "Accepted"],
  ["Same-week", "Appointments"],
  ["Senoia, GA", "Boutique"],
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative bg-ink text-inverted-text">
      {/* Full-bleed photo block */}
      <div className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <motion.div
          style={{ y: photoY }}
          className="absolute inset-0 -inset-y-12"
        >
          <Image
            src={images.heroMobile!}
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center md:hidden"
          />
          <Image
            src={images.heroDesktop!}
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            className="hidden object-cover object-center md:block"
          />
        </motion.div>

        {/* Ink-tinted gradient overlay for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(44,39,36,0.92) 0%, rgba(44,39,36,0.55) 35%, rgba(44,39,36,0.78) 75%, rgba(44,39,36,0.95) 100%)",
          }}
        />

        {/* Content — eyebrow pinned top, headline+body+CTAs pinned bottom */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-14 lg:pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-10 bg-accent/70" />
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-text/85">
              <span aria-hidden>❊&nbsp;&nbsp;</span>
              Senoia, Georgia &nbsp;—&nbsp; Boutique optometry
            </span>
          </motion.div>

          <div className="max-w-[860px]">
            <h1 className="font-display font-medium leading-[0.96] text-[clamp(2.75rem,7.5vw,6rem)] tracking-[-0.02em]">
              <WordReveal
                as="span"
                inView={false}
                delay={0.6}
                text="See clearly."
                className="block"
              />
              <WordReveal
                as="span"
                inView={false}
                delay={1.0}
                segments={[
                  { text: "Look", italic: true, className: "text-accent" },
                  { text: " remarkable." },
                ]}
                className="block"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[460px] font-body text-[16px] leading-[1.6] text-inverted-muted md:text-[18px]"
            >
              A boutique eyecare practice in Senoia, Georgia. Designer frames
              and comprehensive exams in the same room, with the same doctor
              each visit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button
                href={site.bookingUrl}
                external
                variant="filled-accent"
                size="md"
              >
                Book an Exam
              </Button>
              <Button href="/frames" variant="outlined-light" size="md">
                Browse Frames
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Gold glasses motif — bottom-right watermark */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pointer-events-none absolute bottom-10 right-6 z-10 w-[200px] md:bottom-12 md:right-12 md:w-[260px]"
        >
          <GlassesMotif animated />
        </motion.div>
      </div>

      {/* Stats strip — desktop only */}
      <div className="hidden border-t border-inverted-rule md:block">
        <div className="mx-auto grid max-w-[1440px] grid-cols-4 px-6 md:px-10 lg:px-14">
          {stats.map(([a, b], i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 px-4 py-6 ${
                i < stats.length - 1 ? "border-r border-inverted-rule" : ""
              }`}
            >
              <span className="font-display text-[22px] italic">{a}</span>
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
