import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import WordReveal from "@/components/ui/WordReveal";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

const stages = [
  {
    number: "01",
    ageLabel: "Age 3",
    title: "The first exam",
    body: "Before kindergarten. We screen for amblyopia, focusing issues, and eye turn — the things a school nurse can miss.",
    image: images.pedFamAge3,
    imageCaption: "[ AGE 3 — 3:4 ]",
  },
  {
    number: "02",
    ageLabel: "Ages 6–10",
    title: "School years",
    body: "When the work moves up close. Annual exams catch the focusing problems that pretend to be a reading problem.",
    image: images.pedFamAge6to10,
    imageCaption: "[ AGES 6–10 — 3:4 ]",
  },
  {
    number: "03",
    ageLabel: "Ages 11–17",
    title: "Teens & screens",
    body: "Contact lens fittings when they're ready. Myopia control when it matters. Frames that survive a high-school hallway.",
    image: images.pedFamAge11to17,
    imageCaption: "[ AGES 11–17 — 3:4 ]",
  },
];

export default function PediatricFamily() {
  return (
    <section data-nav-mode="on-light" className="bg-paper">
      {/* Chapter-opener hero — wide photo + overlay copy */}
      <div className="relative">
        <StripedPlaceholder
          aspect="16/9"
          angle={30}
          caption="[ STORY HERO — 16:9 ]"
          image={images.pedFamStoryHero}
          imageAlt="A young patient at Senoia Eyecare"
          sizes="100vw"
          priority
          objectPosition="70% center"
          className="min-h-[520px] md:min-h-[640px] lg:min-h-[720px]"
        />

        {/* Overlay tint — heavy bottom-up on mobile so overlaid copy stays legible against any photo; left-to-right on desktop */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/35 md:bg-gradient-to-r md:from-ink/70 md:via-ink/40 md:to-ink/10"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 pb-16 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-[820px] text-inverted-text">
              <Eyebrow tone="inverted-muted">Pediatric &amp; Family</Eyebrow>
              <h1 className="mt-6 font-display font-medium text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.01em]">
                <WordReveal
                  as="span"
                  inView={false}
                  segments={[
                    { text: "From first exam" },
                    {
                      text: "to first frames.",
                      italic: true,
                      className: "text-accent",
                    },
                  ]}
                  className="block"
                />
              </h1>
              <FadeUp delay={0.15} y={16}>
                <p className="mt-8 max-w-[560px] text-[16px] leading-[1.6] text-inverted-muted">
                  Vision changes more in childhood than at any other stage of
                  life. Here's how we follow it — and when to come in.
                </p>
              </FadeUp>
              <FadeUp delay={0.25} y={16}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
                    className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-text transition-colors duration-200 ease-expo hover:text-accent"
                  >
                    Or call {site.phone.display}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>

      {/* Age timeline — three stages */}
      <div className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <FadeUp y={12}>
            <Eyebrow>The years</Eyebrow>
            <h2 className="mt-5 max-w-[820px] font-display text-[clamp(1.875rem,3.4vw,2.75rem)] font-medium leading-[1.15]">
              <WordReveal
                as="span"
                segments={[
                  { text: "A plan for each" },
                  { text: "stage.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h2>
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {stages.map((s, i) => (
              <FadeUp key={s.number} delay={i * 0.1} y={24}>
                <article className="flex flex-col">
                  <StripedPlaceholder
                    aspect="3/4"
                    angle={45 + i * 30}
                    caption={s.imageCaption}
                    image={s.image}
                    imageAlt={`Senoia Eyecare patient, ${s.ageLabel}`}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                      № {s.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wide2 text-muted">
                      {s.ageLabel}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[clamp(1.5rem,2.2vw,1.875rem)] italic leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.6] text-muted">
                    {s.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Family-beat inset */}
      <div data-nav-mode="on-light" className="bg-cream px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-14">
          <div className="md:col-span-7">
            <FadeUp y={20}>
              <StripedPlaceholder
                aspect="16/10"
                angle={110}
                caption="[ FAMILY INSET — 16:10 ]"
                image={images.pedFamFamilyInset}
                imageAlt="Family in the Senoia Eyecare waiting room"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </FadeUp>
          </div>
          <div className="md:col-span-5">
            <Eyebrow>And the grown-ups</Eyebrow>
            <h3 className="mt-5 font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-medium leading-[1.15]">
              In the same waiting room.{" "}
              <em className="text-accent">Same morning.</em>
            </h3>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.6] text-muted">
              Tell us the names and ages on the booking form. We'll stack
              appointments in order so the family leaves together.
            </p>
            <div className="mt-8">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
              >
                Schedule the family
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA — dark */}
      <div data-nav-mode="on-dark" className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow tone="inverted-muted">Book</Eyebrow>
          <h2 className="mt-6 max-w-[900px] font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-medium leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "Catch it" },
                { text: "early.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.1} y={16}>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.65] text-inverted-muted">
              Most childhood vision problems hide. An annual exam is the only
              way to find them before they shape the school year.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} y={16}>
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
