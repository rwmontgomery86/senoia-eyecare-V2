import Link from "next/link";
import { variants } from "@/components/sections/frames-page-variants";

export const metadata = { title: "Frames Page — Variants" };

const PREVIEW_WIDTH = 1440;
const SCALE = 0.34;
const CARD_HEIGHT = 820;

export default function FramesPageVariantsIndex() {
  return (
    <div className="bg-paper px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
              Sandbox · Frames page
            </span>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1]">
              Frames page — <em className="text-accent">three directions.</em>
            </h1>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.55] text-muted">
              Three macro-different takes on the /frames page, each featuring
              Maui Jim with a different page identity. Click any variant to see
              it full-page with prev / next nav.
            </p>
          </div>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
          >
            ← Back home
          </Link>
        </header>

        {/* 2-up grid; V03 spans both columns at lg+ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:[&>*:nth-child(3)]:col-span-2">
          {variants.map((v) => {
            const Comp = v.Component;
            return (
              <div
                key={v.id}
                className="group relative overflow-hidden border border-rule bg-paper"
              >
                {/* Scaled-down preview (non-interactive; nested anchors inside the
                    variants would otherwise produce invalid HTML when wrapped in a Link) */}
                <div
                  aria-hidden
                  className="pointer-events-none relative bg-paper"
                  style={{
                    height: `${CARD_HEIGHT}px`,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="origin-top-left"
                    style={{
                      width: `${PREVIEW_WIDTH}px`,
                      transform: `scale(${SCALE})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <Comp />
                  </div>

                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 ease-expo group-hover:bg-ink/[0.04]" />
                </div>

                {/* Caption */}
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
                    <p className="mt-2 max-w-[480px] text-[14px] leading-[1.5] text-muted">
                      {v.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo group-hover:text-accent">
                    View →
                  </span>
                </div>

                {/* Click target — overlay anchor, sibling of the preview so no nested <a> */}
                <Link
                  href={`/frames-page-variants/${v.id}`}
                  aria-label={`View ${v.title}`}
                  className="absolute inset-0 z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
