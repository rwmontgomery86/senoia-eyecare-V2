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

export default function Visit() {
  return (
    <section
      id="visit"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
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

      {/* Diptych */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        <FadeUp y={20}>
          <StripedPlaceholder
            aspect="16/10"
            angle={45}
            caption="[ THE FRAME WALL — 16:10 ]"
            image={images.visitFrames}
            imageAlt={`Curated designer frames at ${site.name}`}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
            Plate №01 · The frame wall
          </div>
        </FadeUp>
        <FadeUp delay={0.08} y={20}>
          <StripedPlaceholder
            aspect="16/10"
            angle={120}
            caption="[ EXAM ROOM — 16:10 ]"
            image={images.visitExamRoom}
            imageAlt={`Exam room at ${site.name}`}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
            Plate №02 · The exam room
          </div>
        </FadeUp>
      </div>

      {/* Where / Hours / Reach us */}
      <div className="mt-14 grid grid-cols-1 gap-10 border-t border-rule pt-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Eyebrow>Where</Eyebrow>
          <div className="mt-4 whitespace-pre-line font-display text-[20px] leading-[1.45]">
            {site.address.line1}
            {"\n"}
            {site.address.line2}
          </div>
          <div className="mt-4 font-mono text-[11px] uppercase tracking-wide2 text-muted">
            Free parking on-site
          </div>
        </div>
        <div className="md:col-span-4">
          <Eyebrow>Hours</Eyebrow>
          <ul className="mt-4 space-y-1.5 font-display text-[18px] italic">
            {site.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <Eyebrow>Reach us</Eyebrow>
          <ul className="mt-4 space-y-2 font-display text-[18px]">
            <li>
              <a
                href={`tel:${site.phone.tel}`}
                className="transition-colors duration-200 ease-expo hover:text-accent"
              >
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors duration-200 ease-expo hover:text-accent"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* What-to-bring + CTA */}
      <div className="mt-12 flex flex-col gap-8 border-t border-rule pt-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[640px]">
          <Eyebrow>What to bring</Eyebrow>
          <p className="mt-4 font-display text-[18px] italic leading-[1.55] text-muted">
            {whatToBring.join(" · ")}
          </p>
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
