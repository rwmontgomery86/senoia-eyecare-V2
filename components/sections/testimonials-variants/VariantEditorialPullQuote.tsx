import Eyebrow from "@/components/ui/Eyebrow";

const RATING = 4.9;
const REVIEW_COUNT = 129;
// TODO: add googleReviewsUrl to data/site.ts and read from there.
const GOOGLE_REVIEWS_URL = "#";

const heroQuote = {
  text: "Dr. Montgomery is the best and above many others. He looks at you and listens intently.",
  name: "Janie M.",
};

const supporting = [
  { name: "Brian R.", note: "Vicki helped us pick our glasses" },
  { name: "Bruce R.", note: "took time to explain my condition" },
];

export default function VariantEditorialPullQuote() {
  return (
    <section className="bg-cream px-6 py-20 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Pull-quote — left, ~8 cols */}
          <figure className="md:col-span-8">
            <Eyebrow>In their words</Eyebrow>
            <blockquote className="mt-6 font-display font-medium italic leading-[1.1] text-ink text-[clamp(2rem,4.2vw,3.5rem)]">
              <span className="text-accent">&ldquo;</span>
              {heroQuote.text}
              <span className="text-accent">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              <span aria-hidden className="block h-px w-10 bg-accent" />
              <span className="text-ink/75">{heroQuote.name}</span>
              <span className="text-ink/40">· Google review</span>
            </figcaption>
          </figure>

          {/* Rating sidebar — right, ~4 cols */}
          <aside className="flex flex-col gap-6 md:col-span-4 md:border-l md:border-rule md:pl-10">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                Rated on Google
              </div>
              <div className="mt-3 font-display text-[clamp(4rem,7vw,6rem)] font-medium leading-none">
                {RATING.toFixed(1)}
              </div>
              <div className="mt-3">
                <Stars label={`${RATING} out of 5 stars`} />
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
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

            <div className="mt-2 border-t border-rule pt-6">
              <ul className="flex flex-col gap-3">
                {supporting.map((s) => (
                  <li
                    key={s.name}
                    className="font-mono text-[11px] uppercase tracking-eyebrow text-muted"
                  >
                    <span className="text-ink/75">— {s.name}</span>
                    <span className="ml-2 text-ink/45">· {s.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M12 2.5l2.95 6.6 7.05.62-5.32 4.78 1.62 7-6.3-3.85L5.7 21.5l1.62-7L2 9.72l7.05-.62L12 2.5z" />
    </svg>
  );
}
