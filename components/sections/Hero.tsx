"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import WordReveal from "@/components/ui/WordReveal";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
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

  return (
    <section
      ref={ref}
      id="top"
      className="relative bg-ink text-inverted-text"
    >
      <div className="px-6 pb-24 pt-36 md:px-10 md:pb-28 md:pt-40 lg:px-16 lg:pb-32 lg:pt-44">
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: text */}
          <motion.div style={{ y: contentY }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-[11px] uppercase tracking-eyebrow text-accent"
            >
              <span aria-hidden>❊&nbsp;&nbsp;</span>
              Senoia, Georgia &nbsp;—&nbsp; Boutique optometry
            </motion.div>

            <h1 className="mt-8 font-display font-medium text-inverted-text text-[clamp(3rem,8vw,6.5rem)] leading-[0.96] tracking-[-0.02em]">
              <WordReveal
                as="span"
                inView={false}
                delay={0.4}
                text="See clearly."
                className="block"
              />
              <WordReveal
                as="span"
                inView={false}
                delay={0.85}
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
              transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[460px] text-[18px] leading-[1.6] text-inverted-muted"
            >
              A boutique eyecare practice with hand-picked designer frames and
              unhurried, comprehensive exams — all under one roof in Senoia.
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
                Book an Exam
              </Button>
              <Button href="/frames" variant="outlined-light" size="md">
                Browse Frames
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: portrait placeholder */}
          <motion.div style={{ y: photoY }}>
            <StripedPlaceholder
              aspect="4/5"
              angle={135}
              tone="dark"
              caption="[ EDITORIAL PORTRAIT — frames on model ]"
              bottomLeft="Plate №01"
              bottomRight="Etnia Barcelona"
              image={images.heroPortrait}
              imageAlt="A model wearing designer frames from Senoia Eyecare"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 border-t border-b border-inverted-rule md:grid-cols-4"
        >
          {stats.map(([a, b], i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 px-4 py-6 ${
                i < stats.length - 1 ? "md:border-r md:border-inverted-rule" : ""
              } ${i % 2 === 0 ? "border-r border-inverted-rule md:border-r" : ""} ${
                i < 2 ? "border-b border-inverted-rule md:border-b-0" : ""
              }`}
            >
              <span className="font-display text-[22px] italic">{a}</span>
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                {b}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
