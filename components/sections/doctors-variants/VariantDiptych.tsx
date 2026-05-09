import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { doctors } from "@/data/doctors";

export default function VariantDiptych() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Header */}
      <div className="mb-14 max-w-[900px]">
        <Eyebrow>Our Doctors</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(2.75rem,5.5vw,4.25rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "Meet the doctors" },
              { text: "behind the chair.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
      </div>

      {/* Diptych */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
        {doctors.map((doc, i) => (
          <FadeUp key={doc.slug} delay={i * 0.08} y={20}>
            <div
              className={
                i === 1
                  ? "md:border-l md:border-rule md:pl-10 lg:pl-14"
                  : undefined
              }
            >
              <StripedPlaceholder
                aspect="4/5"
                angle={i === 0 ? 45 : 120}
                caption={`[ ${doc.name.toUpperCase()} — 4:5 ]`}
                image={doc.photo}
                imageAlt={`Portrait of Dr. ${doc.name}`}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                  {doc.role}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[clamp(1.875rem,3vw,2.5rem)] font-medium leading-[1.05]">
                Dr. {doc.name}
                <span className="ml-2 font-mono text-[13px] uppercase tracking-wide2 text-muted">
                  {doc.credentials}
                </span>
              </h3>
              <p className="mt-4 max-w-[440px] text-[15px] leading-[1.6] text-muted">
                {doc.oneLiner}
              </p>
              <span
                aria-hidden
                className="mt-6 block h-px w-24 bg-accent/70"
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
