"use client";

import { motion, type Variants } from "motion/react";
import { ElementType, ReactNode } from "react";

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export type WordRevealSegment = {
  text: string;
  italic?: boolean;
  className?: string;
};

export default function WordReveal({
  text,
  segments,
  as: Tag = "h1",
  className = "",
  delay = 0,
  stagger = 0.08,
  once = true,
  inView = true,
}: {
  text?: string;
  segments?: WordRevealSegment[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  inView?: boolean;
}) {
  const motionProps = inView
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once, amount: 0.3 },
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
      };

  // Build word list from either `text` or `segments` (segments allow per-word styling).
  const words: { word: string; italic?: boolean; className?: string }[] = [];
  if (segments && segments.length) {
    segments.forEach((seg) => {
      seg.text.split(" ").forEach((w) => {
        if (w.length === 0) return;
        words.push({ word: w, italic: seg.italic, className: seg.className });
      });
    });
  } else if (text) {
    text.split(" ").forEach((w) => {
      if (w.length === 0) return;
      words.push({ word: w });
    });
  }

  let content: ReactNode = (
    <motion.span
      {...motionProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      style={{ display: "block" }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.14em",
            lineHeight: 1.05,
          }}
        >
          <motion.span
            variants={wordVariants}
            style={{ display: "inline-block", fontStyle: w.italic ? "italic" : undefined }}
            className={w.className}
          >
            {w.word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );

  return <Tag className={className}>{content}</Tag>;
}
