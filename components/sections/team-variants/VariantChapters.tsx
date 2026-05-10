"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import WordReveal from "@/components/ui/WordReveal";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Eyebrow from "@/components/ui/Eyebrow";
import { doctors } from "@/data/doctors";
import { staff } from "@/data/staff";

type Person = {
  slug: string;
  name: string;
  role: string;
  credentials?: string;
  oneLiner: string;
  photo: string | null;
  tier: "doctor" | "staff";
};

const people: Person[] = [
  ...doctors.map((d) => ({
    slug: d.slug,
    name: d.name,
    role: d.role,
    credentials: d.credentials,
    oneLiner: d.oneLiner,
    photo: d.photo,
    tier: "doctor" as const,
  })),
  ...staff.map((s) => ({
    slug: s.slug,
    name: s.name,
    role: s.role,
    oneLiner: s.oneLiner,
    photo: s.photo,
    tier: "staff" as const,
  })),
];

function Chapter({
  person,
  index,
  total,
}: {
  person: Person;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.55, 0.4, 0.4, 0.55],
  );
  const alignRight = index % 2 === 1;

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-inverted-text"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <StripedPlaceholder
          aspect="auto"
          tone="dark"
          angle={alignRight ? 120 : 45}
          className="h-full w-full"
          image={person.photo}
          imageAlt={`Portrait of ${person.tier === "doctor" ? "Dr. " : ""}${person.name}`}
          caption={`[ ${person.name.toUpperCase()} ]`}
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <motion.div
        aria-hidden
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/30 to-ink"
      />

      {/* Chapter marker — top center */}
      <div className="absolute left-1/2 top-10 z-10 -translate-x-1/2 font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted md:top-14">
        № 0{index + 1} / 0{total}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className={`relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20 ${alignRight ? "justify-end" : "justify-start"}`}
      >
        <div className="max-w-[640px]">
          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
            <span aria-hidden>❊&nbsp;&nbsp;</span>
            {person.role}
            {person.credentials ? ` · ${person.credentials}` : ""}
          </div>

          <h2 className="mt-6 font-display font-medium leading-[0.95] text-[clamp(3rem,9vw,7rem)] text-inverted-text">
            <WordReveal
              as="span"
              segments={[
                { text: person.tier === "doctor" ? "Dr." : "" },
                { text: person.name.split(" ")[0] },
              ].filter((s) => s.text)}
              className="block"
            />
            <WordReveal
              as="span"
              delay={0.25}
              segments={[
                {
                  text: person.name.split(" ").slice(1).join(" "),
                  italic: true,
                  className: "text-accent",
                },
              ]}
              className="block"
            />
          </h2>

          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "5rem", transformOrigin: "left" }}
            className="mt-10 block h-px bg-accent/80"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[520px] font-display text-[clamp(1.25rem,2vw,1.625rem)] italic leading-[1.4] text-inverted-text"
          >
            &ldquo;{person.oneLiner}&rdquo;
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll hint — bottom (only on first) */}
      {index === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted"
        >
          Scroll ↓
        </motion.div>
      ) : null}
    </section>
  );
}

export default function VariantChapters() {
  return (
    <div className="bg-ink">
      {/* Opening title chapter */}
      <section className="relative flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden bg-ink px-6 text-center text-inverted-text md:px-12">
        <div className="max-w-[820px]">
          <Eyebrow tone="accent">Our Team — In Three Chapters</Eyebrow>
          <h1 className="mt-8 font-display font-medium leading-[0.95] text-[clamp(3.25rem,10vw,8rem)]">
            <WordReveal
              as="span"
              inView={false}
              segments={[{ text: "Meet" }]}
              className="block"
            />
            <WordReveal
              as="span"
              inView={false}
              delay={0.4}
              segments={[
                { text: "the", italic: true, className: "text-accent" },
                { text: "practice." },
              ]}
              className="block"
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-10 max-w-[440px] text-[15px] leading-[1.7] text-inverted-muted"
          >
            Three people. Three chapters. Scroll through to meet the team
            behind every appointment at Senoia Eyecare.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted"
          >
            Scroll to begin ↓
          </motion.div>
        </div>
      </section>

      {/* Chapters */}
      {people.map((person, i) => (
        <Chapter
          key={person.slug}
          person={person}
          index={i}
          total={people.length}
        />
      ))}

      {/* Closing chapter */}
      <section className="bg-ink px-6 py-24 text-center text-inverted-text md:px-12 md:py-32">
        <div className="mx-auto max-w-[640px]">
          <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
            № End
          </div>
          <h2 className="mt-6 font-display font-medium leading-[1] text-[clamp(2rem,4vw,3rem)]">
            <WordReveal
              as="span"
              segments={[
                { text: "We'll see you" },
                { text: "soon.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <p className="mx-auto mt-8 max-w-[420px] text-[15px] leading-[1.65] text-inverted-muted">
            Book an exam and meet the team in person.
          </p>
        </div>
      </section>
    </div>
  );
}
