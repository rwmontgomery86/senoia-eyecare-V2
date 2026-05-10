"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";

const links = [
  { href: "/frames", label: "Frames" },
  { href: "/eye-exams", label: "Eye Exams" },
  { href: "/contacts", label: "Contacts" },
  { href: "/insurance", label: "Insurance" },
  { href: "/team", label: "Team" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-0 z-30 bg-ink text-inverted-text">
      <div className="relative flex items-center justify-between border-b border-inverted-rule px-6 py-5 md:px-10 md:py-6 lg:px-16">
        {/* Left: nav links (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden gap-9 font-mono text-[11px] uppercase tracking-wide2 md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors duration-200 ease-expo hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`block h-px w-6 bg-inverted-text transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-inverted-text transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-inverted-text transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        {/* Center: logo */}
        <Link
          href="/"
          aria-label="Senoia Eyecare home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/logo.png"
            alt="Senoia Eyecare"
            width={240}
            height={155}
            priority
            className="h-12 w-auto md:h-16 lg:h-[72px] [filter:brightness(0)_invert(1)]"
          />
        </Link>

        {/* Right: phone + CTA (desktop) */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${site.phone.tel}`}
            className="font-mono text-[11px] uppercase tracking-wide2 transition-colors duration-200 ease-expo hover:text-accent"
          >
            {site.phone.display}
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors duration-200 ease-expo hover:bg-accent-deep"
          >
            Book an Exam
            <span className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-0.5">→</span>
          </a>
        </div>

        {/* Spacer to balance flex on mobile */}
        <span className="md:hidden w-6" aria-hidden />
      </div>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-inverted-rule md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 font-mono text-[12px] uppercase tracking-wide2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors duration-200 ease-expo hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phone.tel}`}
                className="pt-4 transition-colors duration-200 ease-expo hover:text-accent"
              >
                {site.phone.display}
              </a>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-fit items-center gap-2 bg-accent px-5 py-3 text-ink hover:bg-accent-deep"
              >
                Book an Exam <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
