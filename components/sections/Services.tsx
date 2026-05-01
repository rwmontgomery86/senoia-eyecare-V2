import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Everything your" },
                { text: "eyes need,", italic: true, className: "text-accent" },
                { text: "in one place." },
              ]}
              className="block"
            />
          </h2>
        </div>

        <div>
          {services.map((s, i) => (
            <FadeUp key={s.slug} delay={0.05 * i} y={20}>
              <Link
                href={`/services/${s.slug}`}
                aria-label={`${s.title} — learn more`}
                className="group relative grid grid-cols-[40px_1fr] gap-x-6 gap-y-2 border-t border-rule py-7 transition-colors duration-300 ease-expo hover:bg-paper md:grid-cols-[60px_1fr_auto] md:gap-x-8 md:items-baseline md:px-4 md:-mx-4"
              >
                {/* Animated bottom rule on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-px left-0 right-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-expo group-hover:scale-x-100"
                />

                <span className="font-mono text-[12px] tracking-wide2 text-accent transition-transform duration-300 ease-expo group-hover:-translate-y-0.5">
                  {s.number}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.4vw,1.875rem)] font-medium leading-tight transition-colors duration-300 ease-expo group-hover:text-accent">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[480px] text-[15px] leading-[1.55] text-muted">
                    {s.summary}
                  </p>
                </div>
                <span className="col-start-2 mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-300 ease-expo group-hover:text-accent md:col-start-3 md:mt-0 md:justify-self-end">
                  Learn more
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeUp>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}
