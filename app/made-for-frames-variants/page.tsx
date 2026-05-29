import Link from "next/link";
import { framesVariants } from "@/components/sections/made-for-frames-variants";

export const metadata = { title: "Made For — Frames Variants" };

const PREVIEW_WIDTH = 1440;
const SCALE = 0.3;
const CARD_WIDTH = PREVIEW_WIDTH * SCALE; // 432
const CARD_HEIGHT = 340;

export default function MadeForFramesVariantsIndex() {
  return (
    <div className="bg-paper px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1640px]">
        <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
              Sandbox · Frames section
            </span>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1]">
              Frames section — <em className="text-accent">three directions.</em>
            </h1>
            <p className="mt-4 max-w-[680px] text-[15px] leading-[1.55] text-muted">
              Three macro layouts for the Frames-for-cycling section on{" "}
              <code>/made-for/cycling</code>. All three show the same frames
              (Tifosi Rivit + Maui Jim Ho&rsquo;okipa) with a short cycling
              why-line — each on a different canvas. Click any variant to see it
              full-width with prev / next nav.
            </p>
          </div>
          <Link
            href="/made-for/cycling"
            className="font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
          >
            ← Deep page
          </Link>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {framesVariants.map((v) => {
            const Comp = v.Component;
            return (
              <div
                key={v.id}
                className="group relative w-full overflow-hidden border border-rule bg-paper lg:w-auto"
                style={{ maxWidth: `${CARD_WIDTH}px` }}
              >
                <div
                  className="relative bg-paper"
                  style={{ height: `${CARD_HEIGHT}px`, overflow: "hidden" }}
                >
                  <div
                    aria-hidden
                    className="origin-top-left"
                    style={{
                      width: `${PREVIEW_WIDTH}px`,
                      transform: `scale(${SCALE})`,
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                  >
                    <Comp />
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-ink/0 transition-colors duration-300 ease-expo group-hover:bg-ink/[0.04]"
                  />
                </div>

                <div className="flex items-start justify-between gap-6 border-t border-rule px-6 py-5 md:px-8 md:py-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                        № 0{v.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                        {v.tagline}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-[clamp(1.25rem,1.8vw,1.5rem)] font-medium">
                      {v.title}
                    </div>
                    <p className="mt-2 max-w-[420px] text-[14px] leading-[1.5] text-muted">
                      {v.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo group-hover:text-accent">
                    View →
                  </span>
                </div>

                <Link
                  href={`/made-for-frames-variants/${v.id}`}
                  aria-label={`View ${v.title}`}
                  className="absolute inset-0 z-10"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
