import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import Button from "@/components/ui/Button";
import { insurances } from "@/data/insurances";
import { site } from "@/data/site";

const verifySteps = [
  {
    label: "Bring your card",
    body: "Both vision and medical cards if you carry them. We photocopy them at the front desk.",
  },
  {
    label: "Tell us why you're visiting",
    body: "Routine exams bill to vision insurance. Medical concerns like dry eye, an infection, or a sudden change bill to medical insurance. Mention which it is when you book.",
  },
  {
    label: "We verify in advance",
    body: "Before the visit, we call your carrier to confirm covered services, allowances, and your copay. That way nothing changes at checkout.",
  },
  {
    label: "Pay at checkout",
    body: "We file directly with your carrier. You pay your copay plus any non-covered services on the day of the visit.",
  },
];

const faqs = [
  {
    q: "Do you bill my insurance directly?",
    a: "Yes. We file with all listed carriers, and you pay only your copay and any non-covered services at the visit. You don't have to deal with reimbursement paperwork on your end.",
  },
  {
    q: "What if my plan isn't listed?",
    a: "Call us. Coverage networks shift year to year, and we may still be in-network through a plan administrator that isn't named on this page.",
  },
  {
    q: "Does insurance cover contact lenses?",
    a: "Most vision plans include a contact lens allowance, usually in place of the frame allowance. We apply it directly during your fitting.",
  },
  {
    q: "My visit is for a medical issue. Does that change billing?",
    a: "Yes. Visits for red eye, dry eye, infections, diabetes follow-up, or new vision symptoms bill to your medical insurance, not your vision plan.",
  },
];

export default function InsuranceLedger() {
  return (
    <section className="relative overflow-x-clip bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:grid lg:grid-cols-[minmax(0,38%)_1fr] lg:gap-16 lg:px-16 lg:py-28">
        {/* LEFT — sticky utility column */}
        <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
          <Eyebrow>Insurance & benefits</Eyebrow>
          <h1 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.4vw,3.25rem)] leading-[1.02]">
            <WordReveal
              as="span"
              segments={[
                { text: "Most major" },
                { text: "plans accepted.", italic: true, className: "text-accent" },
              ]}
              className="block"
              inView={false}
            />
          </h1>

          <FadeUp delay={0.15}>
            <p className="mt-5 text-[15px] leading-[1.6] text-muted">
              The full carrier list, and how to verify your benefits before you
              arrive.
            </p>
          </FadeUp>

          {/* Carrier list — dense column with thin rules */}
          <div className="mt-10 border-t border-rule">
            {insurances.map((c, i) => (
              <FadeUp key={c} delay={i * 0.03} y={10} duration={0.7}>
                <div className="flex items-baseline justify-between gap-4 border-b border-rule py-4">
                  <span className="font-display text-[clamp(1.125rem,1.6vw,1.375rem)]">
                    {c}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-[10px] uppercase tracking-eyebrow text-muted"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Verify CTA + book */}
          <div className="mt-10 border-l-2 border-accent pl-5">
            <Eyebrow symbol={null}>Don&apos;t see your plan?</Eyebrow>
            <p className="mt-3 text-[15px] leading-[1.6] text-ink/85">
              Call us. Coverage shifts each year, and we may still be
              in-network.
            </p>
            <a
              href={`tel:${site.phone.tel}`}
              className="mt-4 block font-display text-[clamp(1.5rem,2.4vw,1.875rem)] italic transition-colors hover:text-accent"
            >
              {site.phone.display}
            </a>
          </div>

          <div className="mt-8">
            <Button
              href={site.bookingUrl}
              external
              variant="filled-ink"
              size="lg"
              arrow
              className="w-full justify-center"
            >
              Book an Exam
            </Button>
          </div>
        </aside>

        {/* RIGHT — scrolling editorial column */}
        <div className="relative isolate mt-20 lg:mt-0">
          {/* lg+: full-bleed cream backdrop extending past the viewport's right edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[-2rem] right-[-100vw] -z-10 hidden bg-cream lg:block"
          />
          {/* lg+: vertical gold hairline at the cream's left edge (sits in the gap) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-[-2rem] hidden w-px bg-rule lg:block"
          />

          {/* Vision vs medical */}
          <div className="max-w-[640px]">
            <Eyebrow>§ 01 · Vision vs. medical</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.875rem,3.2vw,2.5rem)] font-medium leading-[1.08]">
              Two different plans. Two different visits.
            </h2>

            <FadeUp delay={0.1}>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div className="border-t border-accent pt-6">
                  <Eyebrow symbol={null}>Vision plan</Eyebrow>
                  <p className="mt-4 text-[15px] leading-[1.65] text-ink/85">
                    Routine exams, glasses, and contacts every 12 to 24 months.
                  </p>
                  <p className="mt-3 font-display italic text-[14px] leading-[1.6] text-muted">
                    VSP · EyeMed · Spectera · Superior · Davis
                  </p>
                </div>
                <div className="border-t border-accent pt-6">
                  <Eyebrow symbol={null}>Medical plan</Eyebrow>
                  <p className="mt-4 text-[15px] leading-[1.65] text-ink/85">
                    Eye conditions: dry eye, infections, diabetes follow-up,
                    glaucoma, sudden vision changes.
                  </p>
                  <p className="mt-3 font-display italic text-[14px] leading-[1.6] text-muted">
                    Medicare · Aetna · BCBS · Cigna · UMR · UHC · Humana
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-7 text-[15px] leading-[1.65] text-muted">
                Not sure which applies? Mention it when you book and
                we&apos;ll sort it before you arrive.
              </p>
            </FadeUp>
          </div>

          <div className="my-16">
            <GoldRule width="8rem" />
          </div>

          {/* Verify steps */}
          <div className="max-w-[640px]">
            <Eyebrow>§ 02 · How verification works</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.875rem,3.2vw,2.5rem)] font-medium leading-[1.08]">
              How we verify your benefits.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {verifySteps.map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.06} y={16}>
                  <div className="border-t border-rule pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                      0{i + 1}
                    </span>
                    <div className="mt-3 font-display text-[1.125rem] font-medium leading-[1.25]">
                      {s.label}
                    </div>
                    <p className="mt-3 text-[14px] leading-[1.65] text-muted">
                      {s.body}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="my-16">
            <GoldRule width="8rem" />
          </div>

          {/* Self-pay */}
          <div className="max-w-[640px]">
            <Eyebrow>§ 03 · Self-pay & out-of-network</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.875rem,3.2vw,2.5rem)] font-medium leading-[1.08]">
              Paying out of pocket.
            </h2>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-[16px] leading-[1.7] text-ink/85">
                We publish flat self-pay pricing for exams, contact lens
                fittings, and frames. We don&apos;t inflate prices to make up
                for missing insurance. If you&apos;re between plans or your
                carrier isn&apos;t listed, call{" "}
                <a
                  href={`tel:${site.phone.tel}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {site.phone.display}
                </a>{" "}
                and we&apos;ll walk you through it.
              </p>
            </FadeUp>
          </div>

          <div className="my-16">
            <GoldRule width="8rem" />
          </div>

          {/* FAQ */}
          <div className="max-w-[640px]">
            <Eyebrow>§ 04 · Frequently asked</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.875rem,3.2vw,2.5rem)] font-medium leading-[1.08]">
              Questions we get asked.
            </h2>
            <div className="mt-8 divide-y divide-rule border-y border-rule">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group py-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-baseline justify-between gap-6 list-none">
                    <span className="font-display text-[1.0625rem] font-medium leading-[1.35] transition-colors duration-200 ease-expo group-hover:text-accent">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="font-mono text-[16px] text-accent transition-transform duration-300 ease-expo group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[14.5px] leading-[1.7] text-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
