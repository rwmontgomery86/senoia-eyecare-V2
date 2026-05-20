import WordReveal from "@/components/ui/WordReveal";
import MapsLink from "@/components/ui/MapsLink";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function ContactUs() {
  const fullAddress = `${site.address.line1}, ${site.address.line2}`;

  return (
    <section data-nav-mode="on-dark" className="bg-ink pt-20 md:pt-24 lg:pt-28">
      <div className="grid grid-cols-1 md:min-h-[820px] md:grid-cols-2">
        {/* Left — dark info panel */}
        <div className="flex flex-col justify-center gap-10 bg-ink px-6 py-16 md:gap-12 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
              <span aria-hidden>§&nbsp;&nbsp;</span>Contact · Visit
            </span>
            <h1 className="mt-6 font-display font-medium text-[clamp(2.75rem,5.5vw,4.5rem)] leading-[1] text-inverted-text">
              <WordReveal
                as="span"
                inView={false}
                delay={0.15}
                segments={[
                  { text: "Senoia," },
                  { text: "Georgia.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h1>
            <p className="mt-6 max-w-[440px] text-[15px] leading-[1.55] text-inverted-muted">
              Tucked into the GA-16 corridor, two minutes from downtown.
              Free lot, suite-side parking.
            </p>
          </div>

          {/* Address */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
              Where
            </span>
            <MapsLink
              address={fullAddress}
              className="mt-4 block whitespace-pre-line font-display text-[clamp(1.375rem,2vw,1.875rem)] leading-[1.25] text-inverted-text transition-colors duration-200 ease-expo hover:text-accent"
            >
              {site.address.line1}
              {"\n"}
              {site.address.line2}
            </MapsLink>
          </div>

          {/* Hours */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted">
              Hours
            </span>
            <ul className="mt-4 space-y-1.5 font-display italic text-[clamp(1.125rem,1.5vw,1.375rem)] text-inverted-text">
              {site.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div className="grid grid-cols-1 gap-6 border-t border-inverted-rule pt-8 sm:grid-cols-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                Call
              </span>
              <a
                href={`tel:${site.phone.tel}`}
                className="mt-2 block font-display text-[clamp(1rem,1.3vw,1.125rem)] text-inverted-text transition-colors duration-200 ease-expo hover:text-accent"
              >
                {site.phone.display}
              </a>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                Email
              </span>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-display text-[clamp(1rem,1.3vw,1.125rem)] text-inverted-text transition-colors duration-200 ease-expo hover:text-accent"
              >
                {site.email}
              </a>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                Fax
              </span>
              <div className="mt-2 font-display text-[clamp(1rem,1.3vw,1.125rem)] text-inverted-muted">
                {site.fax}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-8">
            <Button
              href={site.bookingUrl}
              external
              variant="filled-accent"
              size="lg"
              arrow
            >
              Book an Exam
            </Button>
            <a
              href={site.marloUrl}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-eyebrow text-inverted-text transition-colors duration-200 ease-expo hover:text-accent"
            >
              Reorder contacts (Marlo)
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right — map */}
        <div className="relative min-h-[60vh] bg-ink md:min-h-0">
          <iframe
            src={site.mapEmbedUrl}
            title={`Map to ${site.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
