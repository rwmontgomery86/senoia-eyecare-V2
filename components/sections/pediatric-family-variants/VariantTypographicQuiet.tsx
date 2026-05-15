import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import WordReveal from "@/components/ui/WordReveal";
import GoldRule from "@/components/ui/GoldRule";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

const promises = [
  {
    label: "Parents in the room",
    body: "Always. Every exam, every age. You see what we see.",
  },
  {
    label: "No rushing",
    body: "Forty-five unhurried minutes. We work at their pace, not ours.",
  },
  {
    label: "From age three",
    body: "Before kindergarten. Plain-English answers about what's developing — and what isn't yet.",
  },
];

export default function VariantTypographicQuiet() {
  return (
    <section className="bg-paper">
      {/* Centered opener — type-led, no image */}
      <div className="px-6 pt-32 md:px-10 md:pt-44 lg:px-16 lg:pt-52">
        <div className="mx-auto max-w-[1280px] text-center">
          <FadeUp y={12}>
            <Eyebrow>Pediatric &amp; Family</Eyebrow>
          </FadeUp>

          <h1 className="mx-auto mt-10 max-w-[1100px] font-display font-medium text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em]">
            <WordReveal
              as="span"
              inView={false}
              segments={[
                { text: "For the" },
                {
                  text: "youngest",
                  italic: true,
                  className: "text-accent",
                },
                { text: "patients." },
              ]}
              className="block"
            />
          </h1>

          <FadeUp delay={0.2} y={16}>
            <p className="mx-auto mt-10 max-w-[640px] text-[17px] leading-[1.65] text-muted">
              Comprehensive children's exams from age three, with parents in
              the room and the time to do it properly. Family appointments
              scheduled in one quiet morning.
            </p>
          </FadeUp>

          <FadeUp delay={0.32} y={16}>
            <div className="mt-12 flex flex-col items-center gap-5">
              <Button
                href={site.bookingUrl}
                external
                variant="filled-ink"
                size="lg"
                arrow
              >
                Book a Pediatric Exam
              </Button>
              <a
                href={`tel:${site.phone.tel}`}
                className="font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors duration-200 ease-expo hover:text-accent"
              >
                Or call {site.phone.display}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Three promises — gold-rule separated */}
      <div className="px-6 pt-32 md:px-10 md:pt-44 lg:px-16 lg:pt-52">
        <div className="mx-auto max-w-[1280px]">
          <FadeUp y={12}>
            <Eyebrow>Three promises</Eyebrow>
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {promises.map((p, i) => (
              <FadeUp key={p.label} delay={i * 0.08} y={20}>
                <div className="flex flex-col gap-5">
                  <GoldRule width="2.5rem" />
                  <div className="font-display text-[clamp(1.5rem,2.2vw,1.875rem)] italic leading-[1.2]">
                    {p.label}
                  </div>
                  <p className="max-w-[340px] text-[15px] leading-[1.6] text-muted">
                    {p.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Single 21:9 photo band */}
      <div className="px-6 pt-32 md:px-10 md:pt-44 lg:px-16 lg:pt-52">
        <div className="mx-auto max-w-[1440px]">
          <FadeUp y={20}>
            <StripedPlaceholder
              aspect="21/9"
              angle={75}
              caption="[ EDITORIAL BAND — 21:9 ]"
              image={images.pedFamHeroBand}
              imageAlt="Pediatric care at Senoia Eyecare"
              sizes="100vw"
            />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
              Plate №01 · The youngest patients
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Family beat — single italic line */}
      <div className="px-6 pt-32 md:px-10 md:pt-44 lg:px-16 lg:pt-52">
        <div className="mx-auto max-w-[1100px] text-center">
          <FadeUp y={16}>
            <p className="font-display text-[clamp(2rem,4.2vw,3.25rem)] italic leading-[1.2] tracking-[-0.01em] text-ink">
              And the rest of the family?{" "}
              <span className="text-accent">Same chair, same morning.</span>
            </p>
          </FadeUp>
          <FadeUp delay={0.15} y={12}>
            <p className="mx-auto mt-8 max-w-[520px] text-[15px] leading-[1.6] text-muted">
              Note ages on the booking form. We'll stack the appointments and
              hand back your morning.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Closing CTA — dark */}
      <div className="mt-32 bg-ink px-6 py-24 text-inverted-text md:mt-44 md:px-10 md:py-32 lg:mt-52 lg:px-16">
        <div className="mx-auto max-w-[1280px] text-center">
          <Eyebrow tone="inverted-muted">Book</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-[900px] font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-medium leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "A calmer first" },
                { text: "exam.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={16}>
            <div className="mt-10 flex flex-col items-center gap-5">
              <Button
                href={site.bookingUrl}
                external
                variant="filled-accent"
                size="lg"
                arrow
              >
                Book a Pediatric Exam
              </Button>
              <a
                href={`tel:${site.phone.tel}`}
                className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted transition-colors duration-200 ease-expo hover:text-accent"
              >
                Or call {site.phone.display}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
