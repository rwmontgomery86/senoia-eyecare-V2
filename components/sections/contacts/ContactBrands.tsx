import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import { contactLensBrands } from "@/data/contactLenses";

export default function ContactBrands() {
  return (
    <section
      id="brands"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>Brands</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "The brands" },
                { text: "we trust.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={20}>
            <p className="mt-6 max-w-[420px] text-[15px] leading-[1.6] text-muted">
              We fit a curated short list of major manufacturers — quality
              materials, predictable supply, and a lens for almost every eye.
            </p>
          </FadeUp>
        </div>

        <ul className="border-t border-rule">
          {contactLensBrands.map((brand, i) => (
            <FadeUp key={brand.name} delay={0.04 * i} y={16}>
              <li className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-rule py-6 md:grid-cols-[40px_1fr_auto] md:gap-8 md:px-4 md:-mx-4">
                <span className="hidden font-mono text-[11px] tracking-wide2 text-accent md:inline-block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.5rem,2.4vw,1.875rem)] font-medium leading-tight">
                  {brand.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                  {brand.tag}
                </span>
              </li>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}
