import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { faq } from "@/data/specialtyLenses";

export default function SpecialtyFAQ() {
  return (
    <section
      id="faq"
      data-nav-mode="on-light"
      className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>Common Questions</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "Questions," },
                { text: " answered.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>

        <dl className="border-t border-rule">
          {faq.map((item, i) => (
            <FadeUp key={item.question} delay={0.05 * i} y={20}>
              <div className="border-b border-rule py-8 md:py-10">
                <dt className="font-display text-[clamp(1.375rem,2.2vw,1.625rem)] font-medium leading-tight">
                  {item.question}
                </dt>
                <dd className="mt-3 max-w-[640px] text-[15px] leading-[1.65] text-muted">
                  {item.answer}
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </div>
    </section>
  );
}
