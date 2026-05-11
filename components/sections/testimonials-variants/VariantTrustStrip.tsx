import Eyebrow from "@/components/ui/Eyebrow";

const RATING = 4.9;
const REVIEW_COUNT = 129;
// TODO: add googleReviewsUrl to data/site.ts and read from there.
const GOOGLE_REVIEWS_URL = "#";

const quotes = [
  {
    text: "Vicki did an awesome job helping us pick out our glasses.",
    name: "Brian R.",
    note: "on frame help",
  },
  {
    text: "Dr. Montgomery looks at you and listens intently.",
    name: "Janie M.",
    note: "on the doctor",
  },
  {
    text: "They took the time to explain my condition, answering all my questions.",
    name: "Bruce R.",
    note: "on clinical care",
  },
];

export default function VariantTrustStrip() {
  return (
    <section className="bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <Eyebrow>In their words</Eyebrow>

        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Rating block — left */}
          <div className="flex flex-col gap-3 md:col-span-3 md:border-r md:border-rule md:pr-10">
            <div className="font-display text-[clamp(3.5rem,6vw,5rem)] font-medium leading-none">
              {RATING.toFixed(1)}
            </div>
            <Stars label={`${RATING} out of 5 stars`} />
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-1 inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
            >
              {REVIEW_COUNT}+ Google reviews
              <span
                aria-hidden
                className="transition-transform duration-200 ease-expo group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Three quotes — right */}
          <div className="grid grid-cols-1 gap-10 md:col-span-9 md:grid-cols-3 md:gap-8">
            {quotes.map((q) => (
              <figure key={q.name} className="flex flex-col">
                <span
                  aria-hidden
                  className="block h-px w-12 bg-accent"
                />
                <blockquote className="mt-5 font-display text-[18px] italic leading-[1.45] text-ink/85 lg:text-[19px]">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                  <span className="text-ink/75">— {q.name}</span>
                  <span className="ml-2 text-ink/45">· {q.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      className="flex items-center gap-1.5 text-accent"
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
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M12 2.5l2.95 6.6 7.05.62-5.32 4.78 1.62 7-6.3-3.85L5.7 21.5l1.62-7L2 9.72l7.05-.62L12 2.5z" />
    </svg>
  );
}
