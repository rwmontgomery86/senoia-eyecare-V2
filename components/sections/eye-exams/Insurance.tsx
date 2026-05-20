import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { site } from "@/data/site";

const whatToBring = [
  "Insurance card",
  "Photo ID",
  "Current glasses or contacts",
  "List of medications",
];

export default function Insurance() {
  return (
    <section
      id="insurance"
      data-nav-mode="on-light"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow>Insurance &amp; pricing</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "We accept" },
                { text: "most major", italic: true, className: "text-accent" },
                { text: " plans." },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-muted">
              VSP, EyeMed, Davis Vision, Spectera and most medical plans are
              welcome. Don&apos;t see yours? Call us at{" "}
              <a
                href={`tel:${site.phone.tel}`}
                className="text-ink underline-offset-4 hover:underline"
              >
                {site.phone.display}
              </a>{" "}
              and we&apos;ll verify your benefits before your visit.
            </p>
            <Link
              href="/insurance"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
            >
              See all carriers
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} y={20}>
          <div className="border-t border-rule pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Eyebrow tone="muted">What to bring</Eyebrow>
            <p className="mt-5 font-display text-[20px] italic leading-[1.55] text-muted">
              {whatToBring.join(" · ")}
            </p>
            <p className="mt-6 max-w-[400px] text-[14.5px] leading-[1.6] text-muted">
              First visit? Plan on about an hour from arrival to checkout. New
              patient forms are sent ahead so the time you spend in the
              office is time with us, not a clipboard.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
