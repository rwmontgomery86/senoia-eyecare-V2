"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function VariantNav({
  currentNumber,
  currentTitle,
  prevId,
  nextId,
  total,
}: {
  currentNumber: number;
  currentTitle: string;
  prevId: string;
  nextId: string;
  total: number;
}) {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        router.push(`/made-for-hero-variants/${prevId}`);
      } else if (e.key === "ArrowRight") {
        router.push(`/made-for-hero-variants/${nextId}`);
      } else if (e.key === "Escape") {
        router.push("/made-for-hero-variants");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prevId, nextId, router]);

  return (
    <div className="sticky top-0 z-40 border-b border-inverted-rule bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/made-for-hero-variants"
          className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-text transition-colors duration-200 ease-expo hover:text-accent"
        >
          ← All variants
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
            № 0{currentNumber} / 0{total}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
            {currentTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/made-for-hero-variants/${prevId}`}
            aria-label="Previous variant"
            className="group inline-flex h-9 w-9 items-center justify-center border border-inverted-rule text-inverted-text transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
          >
            ←
          </Link>
          <Link
            href={`/made-for-hero-variants/${nextId}`}
            aria-label="Next variant"
            className="group inline-flex h-9 w-9 items-center justify-center border border-inverted-rule text-inverted-text transition-colors duration-200 ease-expo hover:border-accent hover:text-accent"
          >
            →
          </Link>
        </div>
      </div>
      <div className="border-t border-inverted-rule px-6 py-2 font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted md:hidden">
        № 0{currentNumber} · {currentTitle}
      </div>
    </div>
  );
}
