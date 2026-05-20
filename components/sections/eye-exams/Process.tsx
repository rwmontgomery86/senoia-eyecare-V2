import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const steps = [
  {
    number: "01",
    title: "Welcome & pre-test",
    body:
      "We start with a relaxed conversation about your vision, your day-to-day, and any concerns. A quick set of pre-tests — refraction, eye pressure, retinal imaging — gives us a baseline before you ever sit in the chair.",
  },
  {
    number: "02",
    title: "The exam",
    body:
      "One-on-one time with the doctor, no rush. We measure your prescription, evaluate the health of your eyes inside and out, and walk through the findings with you in plain language.",
  },
  {
    number: "03",
    title: "Choosing frames",
    body:
      "Stay as long as you like. We help you find frames that fit your face, your prescription, and your style — from independent designers to classic American makers — and handle insurance and lens questions on the spot.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      data-nav-mode="on-light"
      className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>What to expect</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.5rem,5vw,3.5rem)] leading-[1]">
            <WordReveal
              as="span"
              segments={[
                { text: "Three" },
                { text: "unhurried", italic: true, className: "text-accent" },
                { text: "steps." },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-muted">
              No assembly line. No rotating doctors. The same care from the
              moment you arrive to the moment you leave with new frames.
            </p>
          </FadeUp>
        </div>

        <div>
          {steps.map((s, i) => (
            <FadeUp key={s.number} delay={0.05 * i} y={20}>
              <div className="group relative grid grid-cols-[40px_1fr] gap-x-6 gap-y-2 border-t border-rule py-8 md:grid-cols-[60px_1fr] md:gap-x-8 md:items-baseline md:px-4 md:-mx-4">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-px left-0 right-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-expo group-hover:scale-x-100"
                />

                <span className="font-mono text-[12px] tracking-wide2 text-accent">
                  {s.number}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.625rem,2.6vw,2rem)] font-medium leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[560px] text-[15px] leading-[1.6] text-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-rule" />

          <FadeUp delay={0.15} y={16}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href={site.bookingUrl}
                external
                variant="filled-ink"
                size="md"
                arrow
              >
                Book your exam
              </Button>
              <a
                href={`tel:${site.phone.tel}`}
                className="font-mono text-[11px] uppercase tracking-eyebrow text-muted transition-colors duration-200 ease-expo hover:text-accent"
              >
                or call {site.phone.display}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
