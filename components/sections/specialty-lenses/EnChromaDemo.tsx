import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { demoSteps } from "@/data/specialtyLenses";
import { images } from "@/data/images";
import { site } from "@/data/site";

export default function EnChromaDemo() {
  return (
    <section
      data-nav-mode="on-light"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[5fr_4fr] lg:gap-20">
        {/* Left: the demo, step by step */}
        <div>
          <Eyebrow>The Demo</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[{ text: "Try them" }]}
              className="block"
            />
            <WordReveal
              as="span"
              delay={0.12}
              segments={[
                { text: "before you" },
                { text: " buy them.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={20}>
            <p className="mt-6 max-w-[480px] text-[15px] leading-[1.6] text-muted">
              EnChroma sells online, sight unseen. We&apos;d rather you know
              first. A short visit answers the only question that matters —
              what the lenses actually do for your eyes.
            </p>
          </FadeUp>

          <ol className="mt-12 border-t border-rule">
            {demoSteps.map((step, i) => (
              <FadeUp key={step.number} delay={0.05 * i} y={20}>
                <li className="grid grid-cols-[40px_1fr] gap-x-6 gap-y-2 border-b border-rule py-7 md:grid-cols-[60px_1fr] md:gap-x-8">
                  <span className="font-mono text-[12px] tracking-wide2 text-accent">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.375rem,2.2vw,1.625rem)] font-medium leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[520px] text-[15px] leading-[1.6] text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>

          {/* Walk-in panel + booking CTA */}
          <FadeUp delay={0.1} y={20}>
            <div className="mt-10 flex flex-col gap-6">
              <div className="border border-rule px-7 py-6">
                <Eyebrow symbol={null}>No appointment needed</Eyebrow>
                <p className="mt-3 font-display text-[22px] italic leading-snug">
                  Demo pairs are in the shop — stop by.
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wide2 text-muted">
                  {site.hours[0]} · {site.address.line1}, Senoia
                </p>
              </div>
              <div>
                <Button
                  href={site.bookingUrl}
                  external
                  variant="outlined-dark"
                  size="md"
                  arrow
                >
                  Book a color vision assessment
                </Button>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right: demo detail, sticky on lg */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <FadeUp delay={0.1} y={24}>
            <StripedPlaceholder
              aspect="4/5"
              angle={135}
              tone="light"
              caption="[ DETAIL — demo pairs / color plates ]"
              bottomLeft={
                images.specialtyDemo
                  ? undefined
                  : "specialty-lenses/enchroma-demo.jpg"
              }
              bottomRight="The demo"
              image={images.specialtyDemo}
              imageAlt="EnChroma demo pairs ready to try at Senoia Eyecare"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
