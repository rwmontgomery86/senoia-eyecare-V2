import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { fittingSteps } from "@/data/contactLenses";
import { images } from "@/data/images";

export default function FittingProcess() {
  return (
    <section
      id="process"
      className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[5fr_4fr] lg:gap-20">
        {/* Left: steps */}
        <div>
          <Eyebrow>The Visit</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "What to" },
                { text: "expect.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={20}>
            <p className="mt-6 max-w-[480px] text-[15px] leading-[1.6] text-muted">
              A contact lens evaluation is a separate visit from a comprehensive
              eye exam — it deserves its own time. Here&apos;s the arc of a
              typical fitting.
            </p>
          </FadeUp>

          <ol className="mt-12 border-t border-rule">
            {fittingSteps.map((step, i) => (
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
        </div>

        {/* Right: accent image, sticky on lg */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <FadeUp y={24} delay={0.1}>
            <StripedPlaceholder
              aspect="4/5"
              angle={135}
              tone="light"
              caption="[ DETAIL — topographer / chairside ]"
              bottomLeft="Plate №03"
              bottomRight="The fitting"
              image={images.contactsAccent}
              imageAlt="A clinical detail from a contact lens fitting at Senoia Eyecare"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
