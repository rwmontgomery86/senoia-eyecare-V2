import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { activities } from "@/data/activities";

export const metadata: Metadata = {
  title: "Made For",
  description:
    "A rotating series on activities and the eyewear made for them. From Senoia Eyecare.",
  alternates: { canonical: "/made-for" },
  openGraph: {
    url: "/made-for",
    title: "Made For — Senoia Eyecare",
    description:
      "A rotating series on activities and the eyewear made for them.",
  },
};

export default function MadeForArchive() {
  const sorted = [...activities].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );

  return (
    <div className="bg-paper px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <header className="mb-16 md:mb-20">
          <Eyebrow>Made For</Eyebrow>
          <h1 className="mt-6 font-display font-medium text-[clamp(3rem,7vw,5rem)] leading-[1]">
            <WordReveal
              as="span"
              inView={false}
              segments={[
                { text: "A series on activities" },
                {
                  text: "and the eyewear made for them.",
                  italic: true,
                  className: "text-accent",
                },
              ]}
              className="block"
            />
          </h1>
          <p className="mt-8 max-w-[640px] text-[17px] leading-[1.65] text-muted">
            Every few months we feature an activity and the frames we&rsquo;d
            actually recommend for it. Cycling, pickleball, fly fishing &mdash;
            the way you use your eyes shapes what your glasses should do.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-3">
          {sorted.map((a) => (
            <li key={a.slug}>
              <Link href={`/made-for/${a.slug}`} className="group block">
                <FadeUp y={16}>
                  <div className="relative">
                    <StripedPlaceholder
                      aspect="4/5"
                      angle={45}
                      tone="light"
                      caption={`[ ${a.title.toUpperCase()} ]`}
                      image={a.heroImage}
                      imageAlt={a.title}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      zoomOnHover
                    />
                    {a.featured ? (
                      <div className="absolute left-4 top-4 z-10 bg-accent px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink">
                        Featured
                      </div>
                    ) : null}
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-[22px] font-medium leading-tight transition-colors duration-200 ease-expo group-hover:text-accent">
                      Made for{" "}
                      <em className="italic">{a.title.toLowerCase()}.</em>
                    </h2>
                    <span
                      aria-hidden
                      className="shrink-0 font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors duration-200 ease-expo group-hover:text-accent"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-3 max-w-[420px] text-[14px] leading-[1.55] text-muted">
                    {a.summary.length > 140
                      ? `${a.summary.slice(0, 140).trimEnd()}…`
                      : a.summary}
                  </p>
                </FadeUp>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
