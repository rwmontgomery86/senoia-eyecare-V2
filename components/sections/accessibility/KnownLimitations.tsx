import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";

export default function KnownLimitations() {
  return (
    <section className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="max-w-[820px]">
        <Eyebrow>Honest about gaps</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "Where the site" },
              { text: "falls short", italic: true, className: "text-accent" },
              { text: " today." },
            ]}
            className="block"
          />
        </h2>

        <FadeUp delay={0.2} y={20}>
          <GoldRule className="mt-10" width="6rem" />
        </FadeUp>

        <div className="mt-10 space-y-6">
          <FadeUp y={20}>
            <p className="max-w-[680px] text-[16px] leading-[1.7] text-muted">
              Some pieces of the site are delivered through third parties whose
              accessibility we don&apos;t fully control — most notably the
              online booking flow (operated by Eyefinity) and the embedded
              Google map on the Visit page. We&apos;ve chosen vendors who take
              accessibility seriously, but their experience is governed by
              them, not by us.
            </p>
          </FadeUp>

          <FadeUp delay={0.1} y={20}>
            <p className="max-w-[680px] text-[16px] leading-[1.7] text-muted">
              Older photography and any embedded third-party widget may not yet
              meet the same bar as the rest of the site. Remediation is
              ongoing — when we find a gap, we fix it; if you find one first,
              please tell us and we&apos;ll move it up the list.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
