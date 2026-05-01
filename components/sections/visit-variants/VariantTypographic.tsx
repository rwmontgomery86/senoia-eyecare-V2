import Eyebrow from "@/components/ui/Eyebrow";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

const days: { label: string; hours: string }[] = [
  { label: "Mon", hours: "8 — 5" },
  { label: "Tue", hours: "8 — 5" },
  { label: "Wed", hours: "8 — 5" },
  { label: "Thu", hours: "8 — 5" },
  { label: "Fri", hours: "8 — 5" },
  { label: "Sat", hours: "Closed" },
  { label: "Sun", hours: "Closed" },
];

const whatToBring = [
  "Insurance card",
  "Photo ID",
  "Current glasses",
  "Medications list",
  "Contact lens Rx",
  "Recent concerns",
];

export default function VariantTypographic() {
  return (
    <section className="bg-paper px-6 py-32 md:px-10 md:py-44 lg:px-16 lg:py-52">
      {/* Top eyebrow + small headline as marginalia */}
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
        <Eyebrow>Visit</Eyebrow>
        <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
          In the heart of Senoia, Georgia
        </span>
      </div>

      {/* Centerpiece — giant address */}
      <FadeUp y={20}>
        <div className="mx-auto mt-16 max-w-[1280px] md:mt-24">
          <div className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-[-0.02em]">
            7280 GA-16,
            <br />
            <em className="text-accent">Suite F.</em>
          </div>
          <div className="mt-6 font-display text-[clamp(1.5rem,2.6vw,2rem)] italic text-muted">
            Senoia, Georgia 30276
          </div>
        </div>
      </FadeUp>

      {/* Hours row — 7 days */}
      <FadeUp delay={0.1} y={16}>
        <div className="mx-auto mt-20 max-w-[1280px] md:mt-28">
          <Eyebrow>Hours</Eyebrow>
          <div className="mt-6 grid grid-cols-7 gap-px border-t border-b border-rule bg-rule">
            {days.map((d) => (
              <div
                key={d.label}
                className="flex flex-col items-center bg-paper px-2 py-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                  {d.label}
                </span>
                <span className="mt-3 font-display text-[clamp(1rem,1.4vw,1.25rem)] italic">
                  {d.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Phone / email / parking — quiet 3-up row */}
      <FadeUp delay={0.15} y={16}>
        <div className="mx-auto mt-16 grid max-w-[1280px] grid-cols-1 gap-10 md:mt-24 md:grid-cols-3">
          {[
            { label: "Phone", body: site.phone.display, href: `tel:${site.phone.tel}` },
            { label: "Email", body: site.email, href: `mailto:${site.email}` },
            { label: "Parking", body: "Ample on-site\nat Suite F" },
          ].map((d) => (
            <div key={d.label} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <GoldRule width="2rem" />
                <Eyebrow symbol={null}>{d.label}</Eyebrow>
              </div>
              {d.href ? (
                <a
                  href={d.href}
                  className="whitespace-pre-line font-display text-[clamp(1.25rem,2vw,1.625rem)] italic transition-colors hover:text-accent"
                >
                  {d.body}
                </a>
              ) : (
                <div className="whitespace-pre-line font-display text-[clamp(1.25rem,2vw,1.625rem)] italic">
                  {d.body}
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeUp>

      {/* What to bring + CTA */}
      <div className="mx-auto mt-20 grid max-w-[1280px] grid-cols-1 items-end gap-12 border-t border-rule pt-12 md:mt-28 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow>What to bring</Eyebrow>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {whatToBring.map((i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 font-display text-[17px]"
              >
                <span aria-hidden className="text-accent font-mono text-[11px]">
                  —
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:justify-self-end">
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
      </div>
    </section>
  );
}
