import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

const beats = [
  {
    number: "01",
    label: "Before",
    body: "We ask about milestones, screen time, and what teachers have noticed. No paperwork in a hurry.",
  },
  {
    number: "02",
    label: "During",
    body: "Thirty to forty-five unhurried minutes with the doctor. Parents stay in the room. Drops only when there's a reason.",
  },
  {
    number: "03",
    label: "After",
    body: "A plain-English summary, a written plan, and — if it's time — frames built to take a fall.",
  },
];

export default function VariantEditorialSplit() {
  return (
    <section className="bg-paper">
      {/* Hero — asymmetric split */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <FadeUp y={20}>
            <StripedPlaceholder
              aspect="3/4"
              angle={45}
              caption="[ PEDIATRIC PORTRAIT — 3:4 ]"
              image={images.pedFamHeroPortrait}
              imageAlt="A young patient at Senoia Eyecare"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </FadeUp>
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-20 lg:col-span-6 lg:px-16 lg:py-24">
          <Eyebrow>Pediatric &amp; Family</Eyebrow>
          <h1 className="mt-6 font-display font-medium text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.01em]">
            <WordReveal
              as="span"
              inView={false}
              segments={[
                { text: "Their first eye exam," },
                {
                  text: "unhurried.",
                  italic: true,
                  className: "text-accent",
                },
              ]}
              className="block"
            />
          </h1>
          <FadeUp delay={0.15} y={16}>
            <p className="mt-8 max-w-[520px] text-[17px] leading-[1.6] text-muted">
              Gentle, thorough exams for the youngest patients — from age three,
              with parents in the room and time to do it properly. We track
              sight development year over year, in plain English.
            </p>
          </FadeUp>
          <FadeUp delay={0.25} y={16}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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

      {/* Three beats: Before / During / After */}
      <div className="border-t border-rule px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow>The visit</Eyebrow>
          <h2 className="mt-5 max-w-[820px] font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.15]">
            <WordReveal
              as="span"
              segments={[
                { text: "Three things we" },
                { text: "promise.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {beats.map((b, i) => (
              <FadeUp key={b.number} delay={i * 0.08} y={20}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                    № {b.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wide2 text-muted">
                    {b.label}
                  </span>
                </div>
                <p className="mt-5 font-display text-[19px] leading-[1.5] text-ink">
                  {b.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="bg-cream px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <FadeUp y={20}>
          <figure className="mx-auto max-w-[960px] text-center">
            <blockquote className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] italic leading-[1.25] text-ink">
              “We could see her shoulders drop the moment she sat down. They
              took the time to make her feel ready.”
            </blockquote>
            <figcaption className="mt-8 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              <span className="text-accent">—</span>&nbsp;&nbsp;A parent
              · Senoia
            </figcaption>
          </figure>
        </FadeUp>
      </div>

      {/* Family band */}
      <div className="border-t border-rule px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Eyebrow>The whole family</Eyebrow>
            <h3 className="mt-5 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.2]">
              Schedule back-to-back —{" "}
              <em className="text-accent">same chair, same morning.</em>
            </h3>
            <p className="mt-5 max-w-[560px] text-[15px] leading-[1.6] text-muted">
              Your time off school doesn't have to mean ours too. Tell us the
              names and ages on the booking form and we'll stack the
              appointments in order.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <Button
              href={site.bookingUrl}
              external
              variant="outlined-dark"
              size="lg"
              arrow
            >
              Schedule the family
            </Button>
          </div>
        </div>
      </div>

      {/* Closing CTA — dark */}
      <div className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow tone="inverted-muted">Book</Eyebrow>
          <h2 className="mt-6 max-w-[900px] font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-medium leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "Find a time" },
                { text: "that works for them.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={16}>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
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
