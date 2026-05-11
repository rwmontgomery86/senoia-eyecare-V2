import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const LAST_UPDATED = "May 2026";

export default function Report() {
  return (
    <section className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="max-w-[900px]">
        <Eyebrow tone="accent" symbol={null}>
          Report a barrier
        </Eyebrow>
        <h2 className="mt-6 font-display font-medium leading-[0.98] text-inverted-text text-[clamp(2.75rem,6.5vw,5rem)] tracking-[-0.01em]">
          <WordReveal
            as="span"
            segments={[
              { text: "If something" },
              { text: "gets in your way.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>

        <FadeUp delay={0.3} y={20}>
          <p className="mt-10 max-w-[640px] text-[17px] leading-[1.7] text-inverted-muted">
            We&apos;d rather hear about it than not. If any part of this site
            keeps you from finding what you need, booking an exam, or reaching
            us — let us know and we&apos;ll fix it. In the meantime, our staff
            is happy to complete any booking by phone.
          </p>
        </FadeUp>

        <FadeUp delay={0.45} y={16}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Button
              href={`tel:${site.phone.tel}`}
              variant="filled-accent"
              size="md"
              arrow
            >
              Call {site.phone.display}
            </Button>
            <Button
              href={`mailto:${site.email}?subject=Website%20accessibility`}
              variant="outlined-light"
              size="md"
            >
              Email {site.email}
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.6} y={12}>
          <p className="mt-16 font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
            <span aria-hidden>§&nbsp;&nbsp;</span>
            Last updated · {LAST_UPDATED}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
