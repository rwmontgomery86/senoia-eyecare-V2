import FadeUp from "@/components/ui/FadeUp";

const RATING = 4.9;
const REVIEW_COUNT = 129;
// TODO: add googleReviewsUrl to data/site.ts once the Google Business profile URL is provided.
const GOOGLE_REVIEWS_URL = "#";

const quotes = [
  {
    text: "Vicki did an awesome job helping us pick out our glasses.",
    name: "Brian R.",
  },
  {
    text: "Dr. Montgomery looks at you and listens intently.",
    name: "Janie M.",
  },
  {
    text: "They took the time to explain my condition, answering all my questions.",
    name: "Bruce R.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="words"
      className="bg-cream px-6 py-20 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <FadeUp y={20}>
          <div className="flex flex-col items-center text-center">
            <Stars label={`${RATING} out of 5 stars`} />
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-baseline gap-3 font-display text-[clamp(1.25rem,2vw,1.625rem)] text-ink transition-colors duration-200 ease-expo hover:text-accent"
            >
              <span>
                <span className="font-medium">{RATING.toFixed(1)}</span>
                <span className="text-ink/55">
                  {" "}
                  from {REVIEW_COUNT}+ Google reviews
                </span>
              </span>
              <span
                aria-hidden
                className="font-mono text-[12px] tracking-eyebrow transition-transform duration-200 ease-expo group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </FadeUp>

        <div
          aria-hidden
          className="mx-auto mt-12 h-px w-16 bg-accent md:mt-14"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-10 lg:gap-14">
          {quotes.map((q, i) => (
            <FadeUp key={q.name} y={20} delay={i * 0.08}>
              <figure className="flex flex-col border-t border-rule pt-8">
                <blockquote className="font-display text-[19px] italic leading-[1.5] text-ink/85 lg:text-[20px]">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                  <span className="text-ink/75">— {q.name}</span>
                  <span className="ml-2 text-ink/45">· Google</span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      className="flex items-center gap-2 text-accent"
    >
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} />
      ))}
    </div>
  );
}

function Star() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M12 2.5l2.95 6.6 7.05.62-5.32 4.78 1.62 7-6.3-3.85L5.7 21.5l1.62-7L2 9.72l7.05-.62L12 2.5z" />
    </svg>
  );
}
