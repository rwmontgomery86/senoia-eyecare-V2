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

const cardRows: { label: string; body: string; href?: string }[] = [
  {
    label: "Address",
    body: `${site.address.line1}\n${site.address.line2}`,
  },
  { label: "Hours", body: site.hours.join("\n") },
  {
    label: "Phone",
    body: site.phone.display,
    href: `tel:${site.phone.tel}`,
  },
  {
    label: "Email",
    body: site.email,
    href: `mailto:${site.email}`,
  },
  { label: "Parking", body: "Ample on-site\nat the Suite F entrance" },
];

export default function VariantInfoCard() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      {/* Header */}
      <div className="mb-12 max-w-[900px]">
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

      {/* Photo + info card split */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1fr] md:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <FadeUp y={20}>
          <StripedPlaceholder
            aspect="5/8"
            angle={45}
            caption="[ STOREFRONT 5:8 ]"
            image={images.storefront}
            imageAlt={`${site.name} storefront`}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </FadeUp>

        <FadeUp delay={0.08} y={20}>
          <div className="border border-rule bg-paper">
            {cardRows.map((row, i) => (
              <div
                key={row.label}
                className={`px-6 py-7 md:px-8 md:py-8 ${i < cardRows.length - 1 ? "border-b border-rule" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span aria-hidden className="block h-px w-6 bg-accent" />
                  <Eyebrow symbol={null}>{row.label}</Eyebrow>
                </div>
                {row.href ? (
                  <a
                    href={row.href}
                    className="mt-3 block whitespace-pre-line font-display text-[clamp(1.25rem,1.8vw,1.5rem)] italic transition-colors hover:text-accent"
                  >
                    {row.body}
                  </a>
                ) : (
                  <div className="mt-3 whitespace-pre-line font-display text-[clamp(1.25rem,1.8vw,1.5rem)] italic">
                    {row.body}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* What to bring + CTA */}
      <div className="mt-14 grid grid-cols-1 items-end gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow>What to bring</Eyebrow>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {whatToBring.map((i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 font-display text-[17px]"
              >
                <span aria-hidden className="text-accent font-mono text-[11px]">
                  —
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:justify-self-end">
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
      </div>
    </section>
  );
}
