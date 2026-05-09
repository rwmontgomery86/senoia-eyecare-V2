import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { doctors } from "@/data/doctors";

export default function VariantStacked() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Header — split: eyebrow + headline left, intro right */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 lg:mb-20">
        <div className="md:col-span-7">
          <Eyebrow>Our Doctors</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.75rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "The people" },
                { text: "you'll see.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>
        <FadeUp className="md:col-span-5 md:pt-3" delay={0.1}>
          <p className="max-w-[420px] text-[15px] leading-[1.65] text-muted">
            Two optometrists, one practice. Both unhurried, both Senoia-based, both yours when you book.
          </p>
        </FadeUp>
      </div>

      {/* Stacked rows */}
      <div className="border-t border-rule">
        {doctors.map((doc, i) => (
          <FadeUp key={doc.slug} delay={i * 0.08} y={20}>
            <div className="grid grid-cols-1 gap-8 border-b border-rule py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:py-20">
              {/* Number column */}
              <div className="md:col-span-1">
                <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                  № 0{i + 1}
                </div>
              </div>

              {/* Portrait column */}
              <div className="md:col-span-4">
                <StripedPlaceholder
                  aspect="4/5"
                  angle={i === 0 ? 45 : 120}
                  caption={`[ ${doc.name.toUpperCase()} ]`}
                  image={doc.photo}
                  imageAlt={`Portrait of Dr. ${doc.name}`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>

              {/* Text column */}
              <div className="flex flex-col justify-center md:col-span-7">
                <div className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                  {doc.role}
                </div>
                <h3 className="mt-3 font-display font-medium leading-[1] text-[clamp(2.25rem,4vw,3.25rem)]">
                  Dr. {doc.name}
                  <span className="ml-3 font-mono text-[14px] uppercase tracking-wide2 text-accent">
                    {doc.credentials}
                  </span>
                </h3>
                <span
                  aria-hidden
                  className="mt-6 block h-px w-32 bg-accent/70"
                />
                <p className="mt-6 max-w-[560px] text-[16px] leading-[1.6] text-muted md:text-[17px]">
                  {doc.oneLiner}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
