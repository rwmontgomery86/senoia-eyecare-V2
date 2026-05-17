import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { insurances } from "@/data/insurances";
import { site } from "@/data/site";

export default function Insurance() {
  const carriers = insurances.slice(0, 7);

  return (
    <section
      id="insurance"
      className="bg-ink text-inverted-text px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <Eyebrow>Insurance</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1] text-inverted-text">
            <WordReveal
              as="span"
              segments={[
                { text: "In-network with" },
                { text: "most major plans.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-[400px] text-[16px] leading-[1.6] text-inverted-muted">
              We accept most vision and medical insurance. Don&apos;t see your
              plan listed? Call us at{" "}
              <a href={`tel:${site.phone.tel}`} className="text-inverted-text underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
              . We&apos;ll verify your benefits before your visit.
            </p>
          </FadeUp>
        </div>

        <FadeUp y={20}>
          <div className="grid grid-cols-2 gap-px bg-inverted-rule sm:grid-cols-4">
            {carriers.map((c) => (
              <div
                key={c}
                className="bg-ink px-4 py-9 text-center font-display text-[clamp(1.25rem,2vw,1.625rem)] italic"
              >
                {c}
              </div>
            ))}
            <Link
              href="/insurance"
              className="flex items-center justify-center bg-accent px-4 py-9 text-center font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:bg-accent-deep"
            >
              + more
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
