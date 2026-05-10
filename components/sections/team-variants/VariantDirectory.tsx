import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { doctors } from "@/data/doctors";
import { staff } from "@/data/staff";
import { site } from "@/data/site";

type Card = {
  slug: string;
  name: string;
  role: string;
  credentials?: string;
  oneLiner: string;
  photo: string | null;
  tier: "doctor" | "staff";
};

const cards: Card[] = [
  ...doctors.map((d) => ({
    slug: d.slug,
    name: d.name,
    role: d.role,
    credentials: d.credentials,
    oneLiner: d.oneLiner,
    photo: d.photo,
    tier: "doctor" as const,
  })),
  ...staff.map((s) => ({
    slug: s.slug,
    name: s.name,
    role: s.role,
    oneLiner: s.oneLiner,
    photo: s.photo,
    tier: "staff" as const,
  })),
];

export default function VariantDirectory() {
  return (
    <div className="bg-paper">
      {/* Editorial intro */}
      <section className="border-b border-rule px-6 pt-32 pb-16 md:px-10 md:pt-40 md:pb-20 lg:px-16 lg:pt-44 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>The Directory</Eyebrow>
            <h1 className="mt-5 font-display font-medium leading-[0.98] text-[clamp(2.75rem,6vw,4.75rem)]">
              <WordReveal
                as="span"
                inView={false}
                segments={[{ text: "The team behind" }]}
                className="block"
              />
              <WordReveal
                as="span"
                inView={false}
                delay={0.3}
                segments={[
                  { text: "Senoia", italic: true, className: "text-accent" },
                  { text: "Eyecare." },
                ]}
                className="block"
              />
            </h1>
          </div>
          <FadeUp className="md:col-span-5 md:pt-4" delay={0.15}>
            <p className="max-w-[440px] text-[15px] leading-[1.65] text-muted">
              Two doctors and an office manager. A small, intentional team —
              listed below, in alphabetical order of role.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-eyebrow text-muted">
              <span>
                <span className="text-accent">{doctors.length}</span> Optometrists
              </span>
              <span>
                <span className="text-accent">{staff.length}</span> Support staff
              </span>
              <span>
                <span className="text-accent">1</span> Practice, Senoia, GA
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Card grid */}
      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {cards.map((c, i) => (
            <FadeUp key={c.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col border-t border-rule pt-6">
                {/* Tier marker */}
                <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-eyebrow">
                  <span className={c.tier === "doctor" ? "text-accent" : "text-muted"}>
                    {c.tier === "doctor" ? "§ Optometrist" : "§ Support"}
                  </span>
                  <span className="text-muted">№ 0{i + 1}</span>
                </div>

                <StripedPlaceholder
                  aspect="4/5"
                  angle={c.tier === "doctor" ? 45 : 90}
                  image={c.photo}
                  imageAlt={`Portrait of ${c.name}`}
                  caption={`[ ${c.name.toUpperCase()} ]`}
                  zoomOnHover
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />

                <div className="mt-6 flex flex-1 flex-col">
                  <div className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                    {c.role}
                  </div>
                  <h3 className="mt-3 font-display font-medium leading-[1.05] text-[clamp(1.5rem,2.2vw,1.875rem)]">
                    {c.tier === "doctor" ? `Dr. ${c.name}` : c.name}
                    {c.credentials ? (
                      <span className="ml-2 font-mono text-[12px] uppercase tracking-wide2 text-accent">
                        {c.credentials}
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-4 flex-1 text-[15px] leading-[1.65] text-muted">
                    {c.oneLiner}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Single CTA */}
      <section className="border-t border-rule bg-cream px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <Eyebrow>Book an Exam</Eyebrow>
          <h2 className="mt-5 font-display font-medium leading-[1] text-[clamp(2rem,4vw,3rem)]">
            <WordReveal
              as="span"
              segments={[
                { text: "Meet them" },
                { text: "in person.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.15} className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={site.bookingUrl} external variant="filled-ink" arrow>
              Book an Exam
            </Button>
            <Button href={`tel:${site.phone.tel}`} variant="outlined-dark">
              {site.phone.display}
            </Button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
