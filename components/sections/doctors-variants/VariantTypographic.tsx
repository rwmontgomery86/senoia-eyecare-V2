import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { doctors } from "@/data/doctors";

export default function VariantTypographic() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-32 lg:px-16 lg:py-40">
      {/* Header — minimal, centered eyebrow */}
      <div className="mb-20 text-center md:mb-28">
        <Eyebrow>Our Doctors</Eyebrow>
        <h2 className="mt-6 font-display font-medium text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "Two doctors." },
              { text: "One chair.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
      </div>

      {/* Doctor bands */}
      <div className="mx-auto max-w-[1200px]">
        {doctors.map((doc, i) => {
          const portraitOnRight = i % 2 === 0;
          return (
            <div
              key={doc.slug}
              className={`grid grid-cols-1 items-center gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20 ${
                i > 0 ? "border-t border-rule" : ""
              }`}
            >
              {/* Type column */}
              <FadeUp
                delay={0.05}
                y={24}
                className={`md:col-span-8 ${
                  portraitOnRight ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                  № 0{i + 1} · {doc.role}
                </div>
                <h3 className="mt-4 font-display italic font-medium leading-[0.95] text-[clamp(3.5rem,8.5vw,7rem)]">
                  {doc.name}
                </h3>
                <div className="mt-5 font-mono text-[12px] uppercase tracking-wide2 text-muted">
                  {doc.credentials} · Senoia, Georgia
                </div>
                <p className="mt-6 max-w-[520px] font-display text-[clamp(1.125rem,1.5vw,1.375rem)] leading-[1.55] text-ink">
                  {doc.oneLiner}
                </p>
              </FadeUp>

              {/* Portrait column */}
              <FadeUp
                delay={0.12}
                y={24}
                className={`md:col-span-4 ${
                  portraitOnRight ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="mx-auto max-w-[300px] md:max-w-none">
                  <StripedPlaceholder
                    aspect="1/1"
                    angle={i === 0 ? 45 : 120}
                    caption={`[ ${doc.name.toUpperCase()} ]`}
                    image={doc.photo}
                    imageAlt={`Portrait of Dr. ${doc.name}`}
                    sizes="(min-width: 768px) 33vw, 80vw"
                  />
                </div>
              </FadeUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}
