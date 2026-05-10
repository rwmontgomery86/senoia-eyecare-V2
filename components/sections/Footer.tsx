import Image from "next/image";
import Link from "next/link";
import GlassesMotif from "@/components/ui/GlassesMotif";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-ink px-6 pt-24 text-inverted-text md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              alt={site.name}
              width={240}
              height={155}
              className="h-20 w-auto [filter:brightness(0)_invert(1)]"
            />
            <p className="mt-6 max-w-xs font-body text-sm font-light leading-relaxed text-inverted-muted">
              A boutique optometry practice in the heart of Senoia, Georgia.
              Considered eyewear. Comprehensive care.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a
                href={site.social.facebook.url}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted transition-colors duration-200 ease-expo hover:text-accent"
              >
                <span className="grid h-9 w-9 place-items-center border border-inverted-rule transition-colors duration-200 ease-expo group-hover:border-accent">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
                    <path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </span>
                {site.social.facebook.handle}
              </a>
            </div>
          </div>

          {/* Visit */}
          <div className="md:col-span-3">
            <EyebrowLabel>Visit</EyebrowLabel>
            <ul className="mt-5 space-y-3 font-body text-sm font-light text-inverted-muted">
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li className="pt-2">
                <a href={`tel:${site.phone.tel}`} className="transition-colors duration-200 ease-expo hover:text-accent">
                  {site.phone.display}
                </a>
              </li>
              <li className="text-inverted-muted/70">Fax · {site.fax}</li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors duration-200 ease-expo hover:text-accent">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-2">
            <EyebrowLabel>Hours</EyebrowLabel>
            <ul className="mt-5 space-y-3 font-body text-sm font-light text-inverted-muted">
              {site.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3">
            <EyebrowLabel>Senoia</EyebrowLabel>
            <ul className="mt-5 space-y-3 font-body text-sm font-light text-inverted-muted">
              <li>
                <Link href="/eye-exams" className="transition-colors duration-200 ease-expo hover:text-accent">
                  Eye care
                </Link>
              </li>
              <li>
                <Link href="/frames" className="transition-colors duration-200 ease-expo hover:text-accent">
                  Frames
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="transition-colors duration-200 ease-expo hover:text-accent">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/team" className="transition-colors duration-200 ease-expo hover:text-accent">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="transition-colors duration-200 ease-expo hover:text-accent">
                  Insurance
                </Link>
              </li>
              <li>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener"
                  className="transition-colors duration-200 ease-expo hover:text-accent"
                >
                  Book an exam
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Glasses motif divider */}
        <div className="mt-20 flex items-center justify-center">
          <div className="w-[280px] opacity-70">
            <GlassesMotif animated={false} strokeWidth={1.2} />
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-inverted-rule py-8 font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted/70 md:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Senoia, Georgia · Est. {site.founded}</span>
          <span>
            <Link href="/privacy" className="transition-colors duration-200 ease-expo hover:text-accent">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/accessibility" className="transition-colors duration-200 ease-expo hover:text-accent">
              Accessibility
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
