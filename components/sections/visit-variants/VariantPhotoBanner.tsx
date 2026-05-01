import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

const whatToBring = [
  "Insurance card",
  "Photo ID",
  "Current glasses",
  "Medications list",
  "Contact lens Rx",
  "Recent concerns",
];

export default function VariantPhotoBanner() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Header */}
      <div className="mb-10 max-w-[900px]">
        <Eyebrow>Visit</Eyebrow>
        <h2 className="mt-5 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
          <WordReveal
            as="span"
            segments={[
              { text: "In the heart" },
              { text: "of Senoia.", italic: true, className: "text-accent" },
            ]}
            className="block"
          />
        </h2>
      </div>

      {/* Full-width 21:9 banner */}
      <FadeUp y={20}>
        <StripedPlaceholder
          aspect="21/9"
          angle={45}
          caption="[ STOREFRONT — 21:9 ]"
          image={images.storefront}
          imageAlt={`${site.name} storefront`}
          sizes="100vw"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
          />
          <div className="absolute inset-x-8 bottom-8 z-10 flex items-end justify-between md:inset-x-12 md:bottom-12">
            <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
              {site.address.line1} · {site.address.line2}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wide2 text-paper/85">
              [ Plate №07 ]
            </div>
          </div>
        </StripedPlaceholder>
      </FadeUp>

      {/* 3-col detail row */}
      <div className="mt-12 grid grid-cols-1 gap-px border-t border-b border-rule bg-rule sm:grid-cols-3">
        {[
          {
            label: "Address",
            body: `${site.address.line1}\n${site.address.line2}`,
          },
          { label: "Hours", body: site.hours.join("\n") },
          {
            label: "Phone & Email",
            body: `${site.phone.display}\n${site.email}`,
          },
        ].map((d) => (
          <div key={d.label} className="bg-paper px-6 py-8">
            <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
              {d.label}
            </div>
            <div className="mt-3 whitespace-pre-line font-display text-[20px] leading-[1.4]">
              {d.body}
            </div>
          </div>
        ))}
      </div>

      {/* What-to-bring + CTA */}
      <div className="mt-14 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div className="max-w-[640px]">
          <Eyebrow>What to bring</Eyebrow>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {whatToBring.map((i) => (
              <li
                key={i}
                className="flex items-baseline gap-2 font-display text-[16px]"
              >
                <span aria-hidden className="text-accent font-mono text-[10px]">
                  —
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <Button
          href={site.bookingUrl}
          external
          variant="filled-ink"
          size="lg"
          arrow
        >
          Book an Exam
        </Button>
      </div>
    </section>
  );
}
