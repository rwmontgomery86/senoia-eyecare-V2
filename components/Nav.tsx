"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "/eye-exams", label: "Eye Exams" },
  { href: "/contacts", label: "Contacts" },
  { href: "/insurance", label: "Insurance" },
  { href: "/team", label: "Team" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sectionDark, setSectionDark] = useState(true);
  const pathname = usePathname();

  // Track whether the user has scrolled past the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize section mode from the first [data-nav-mode] element on the page
  // so the nav matches contrast on first paint.
  useEffect(() => {
    const first = document.querySelector<HTMLElement>("[data-nav-mode]");
    setSectionDark(first?.dataset.navMode !== "on-light");
  }, [pathname]);

  // Observe every [data-nav-mode] section and track which one is currently
  // crossing the top of the viewport.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-mode]"),
    );
    if (targets.length === 0) return;

    const visible = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            visible.add(el);
          } else {
            visible.delete(el);
          }
        }
        // Prefer the element most recently passed the top of the viewport
        // (largest top <= 0), supporting nested sections inside larger ones.
        let bestPassed: HTMLElement | null = null;
        let bestPassedTop = -Number.POSITIVE_INFINITY;
        let bestUpcoming: HTMLElement | null = null;
        let bestUpcomingTop = Number.POSITIVE_INFINITY;
        for (const el of visible) {
          const y = el.getBoundingClientRect().top;
          if (y <= 0) {
            if (y > bestPassedTop) {
              bestPassedTop = y;
              bestPassed = el;
            }
          } else if (y < bestUpcomingTop) {
            bestUpcomingTop = y;
            bestUpcoming = el;
          }
        }
        const winner = bestPassed ?? bestUpcoming;
        if (winner) {
          setSectionDark(winner.dataset.navMode !== "on-light");
        }
      },
      { rootMargin: "0px 0px -90% 0px", threshold: 0 },
    );

    for (const el of targets) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  // Transparent over the very top of a dark section (the editorial hero
  // moment). Glass everywhere else.
  const overHero = !scrolled && sectionDark;
  const barClasses = overHero
    ? "bg-transparent text-inverted-text"
    : "bg-paper/85 backdrop-blur-xl border-b border-ink/5 text-ink";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-700 ease-expo ${barClasses}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Mobile: CALL pill (left) */}
        <div className="flex flex-1 items-center md:hidden">
          <a
            href={`tel:${site.phone.tel}`}
            aria-label={`Call ${site.phone.display}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-wide2 text-ink transition-colors duration-500 ease-expo hover:bg-accent-deep"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call
          </a>
        </div>

        {/* Left links (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center gap-9 md:flex"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-wide2 transition-colors duration-500 ease-expo hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link
          href="/"
          aria-label="Senoia Eyecare home"
          className="flex flex-1 items-center justify-center py-4"
        >
          <Image
            src="/logo.png"
            alt="Senoia Eyecare"
            width={240}
            height={155}
            priority
            className={`w-auto transition-all duration-700 ease-expo ${
              scrolled
                ? "h-10 md:h-12 lg:h-14"
                : "h-12 md:h-16 lg:h-[72px]"
            } ${overHero ? "[filter:brightness(0)_invert(1)]" : ""}`}
          />
        </Link>

        {/* Right: phone + CTA (desktop) */}
        <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
          <a
            href={`tel:${site.phone.tel}`}
            className="font-mono text-[11px] uppercase tracking-wide2 transition-colors duration-500 ease-expo hover:text-accent"
          >
            {site.phone.display}
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className={`group inline-flex shrink-0 items-center gap-2 whitespace-nowrap border px-5 py-2.5 font-mono text-[10px] uppercase tracking-wide2 transition-all duration-500 ease-expo ${
              overHero
                ? "border-inverted-text/40 text-inverted-text hover:border-accent hover:text-accent"
                : "border-ink/30 text-ink hover:border-accent hover:text-accent"
            }`}
          >
            Book an exam
            <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile hamburger (right) */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center"
          >
            <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
              <span
                className={`block h-px w-6 transition-all duration-500 ease-expo ${overHero ? "bg-inverted-text" : "bg-ink"} ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 transition-all duration-300 ${overHero ? "bg-inverted-text" : "bg-ink"} ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-6 transition-all duration-500 ease-expo ${overHero ? "bg-inverted-text" : "bg-ink"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-paper transition-[max-height] duration-700 ease-expo md:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-6 py-10 text-ink">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl uppercase tracking-wide2"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phone.tel}`}
            className="font-mono text-[12px] uppercase tracking-wide2 hover:text-accent"
          >
            {site.phone.display}
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block border border-ink/40 px-5 py-3 font-mono text-[11px] uppercase tracking-wide2 hover:border-accent hover:text-accent"
          >
            Book an exam →
          </a>
        </nav>
      </div>
    </header>
  );
}
