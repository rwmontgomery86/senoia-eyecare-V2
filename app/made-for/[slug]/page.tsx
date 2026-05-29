import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { activities } from "@/data/activities";
import { brands } from "@/data/brands";
import { site } from "@/data/site";

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) return { title: "Made For" };
  return {
    title: `Made for ${activity.title}`,
    description: activity.summary,
    alternates: { canonical: `/made-for/${activity.slug}` },
    openGraph: {
      url: `/made-for/${activity.slug}`,
      title: `Made for ${activity.title} — Senoia Eyecare`,
      description: activity.summary,
    },
  };
}

export default async function MadeForActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = activities.find((a) => a.slug === slug);
  if (!activity) notFound();
  const lead = activity.frames.find((f) => f.isLead) ?? activity.frames[0];
  const rest = activity.frames.filter((f) => f !== lead);
  const specs = activity.heroSpecs ?? [
    { label: "Discipline", value: activity.title },
    { label: "Lead frame", value: `${lead.brand} ${lead.model}` },
  ];
  const recBrands = (activity.recommendedBrands ?? [])
    .map((rb) => {
      const brand = brands.find((b) => b.name === rb.name);
      return brand ? { name: brand.name, note: rb.note ?? brand.tag } : null;
    })
    .filter((b): b is { name: string; note: string } => Boolean(b));
  const leadImage =
    activity.frames.find((f) => f.isLead)?.image ??
    activity.frames[0]?.image ??
    null;
  const backdropFor = (brandName: string) =>
    activity.frames.find((f) => f.brand === brandName && f.image)?.image ??
    leadImage;

  return (
    <>
      {/* Hero — product launch */}
      <section
        data-nav-mode="on-dark"
        className="bg-ink px-6 pb-20 pt-40 text-inverted-text md:px-10 md:pb-24 md:pt-48 lg:px-16 lg:pb-28 lg:pt-56"
      >
        <div className="mx-auto max-w-[1280px]">
          {/* Metadata rail */}
          <div className="flex items-center justify-between gap-4 border-y border-inverted-rule py-4">
            <Eyebrow tone="inverted-muted">Made For · No. 01</Eyebrow>
            <span className="hidden font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted sm:inline">
              Senoia Eyecare &mdash; Frame Series
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* Text column — headline, intro, spec table */}
            <div className="order-2 flex flex-col lg:order-1">
              <div>
                <h1 className="font-display font-medium text-inverted-text text-[clamp(2.75rem,6vw,5rem)] leading-[1]">
                  <WordReveal
                    as="span"
                    inView={false}
                    segments={[
                      { text: "Made for" },
                      {
                        text: `${activity.title.toLowerCase()}.`,
                        italic: true,
                        className: "text-accent",
                      },
                    ]}
                    className="block"
                  />
                </h1>
                <FadeUp delay={0.2} y={16}>
                  <p className="mt-8 max-w-[46ch] text-[16px] leading-[1.7] text-inverted-muted md:text-[17px]">
                    {activity.intro}
                  </p>
                </FadeUp>
              </div>

              <FadeUp delay={0.3} y={16} className="lg:mt-auto">
                <dl className="mt-12 border-t border-inverted-rule lg:mt-0 lg:pt-12">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-6 border-b border-inverted-rule py-4"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-eyebrow text-inverted-muted">
                        {s.label}
                      </dt>
                      <dd className="text-right font-display text-[18px] text-inverted-text">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </FadeUp>
            </div>

            {/* Image column — framed, corner ticks */}
            <FadeUp y={20} className="order-1 lg:order-2">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-2 -top-2 z-10 h-5 w-5 border-l border-t border-accent"
                />
                <span
                  aria-hidden
                  className="absolute -right-2 -top-2 z-10 h-5 w-5 border-r border-t border-accent"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-2 -left-2 z-10 h-5 w-5 border-b border-l border-accent"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-2 -right-2 z-10 h-5 w-5 border-b border-r border-accent"
                />
                <StripedPlaceholder
                  aspect="4/5"
                  angle={45}
                  tone="dark"
                  caption={`[ ${activity.title.toUpperCase()} ]`}
                  image={activity.heroImage}
                  imageAlt={`${activity.title} lifestyle`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  objectPosition="center 32%"
                  priority
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Body — paper */}
      <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[900px]">
          {activity.sections.map((section, i) => (
            <FadeUp key={i} delay={0.05 * i} y={16}>
              <div className={i > 0 ? "mt-16 md:mt-20" : ""}>
                <Eyebrow>Note 0{i + 1}</Eyebrow>
                <h2 className="mt-5 font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] italic">
                  {section.heading}
                </h2>
                <p className="mt-6 text-[17px] leading-[1.7] text-muted">
                  {section.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Frame edit — ink (editorial feature) */}
      <section
        data-nav-mode="on-dark"
        className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow tone="inverted-muted">
            Frames for {activity.title.toLowerCase()}.
          </Eyebrow>
          <h2 className="mt-5 font-display font-medium text-inverted-text text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
            <WordReveal as="span" text="The edit." className="block" />
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Lead — hero */}
            <FadeUp y={20}>
              <StripedPlaceholder
                aspect="4/3"
                angle={45}
                tone="dark"
                caption={`[ ${lead.brand.toUpperCase()} — LEAD ]`}
                image={lead.image}
                imageAlt={`${lead.brand} ${lead.model}`}
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="mt-5 font-display text-[28px] leading-tight text-inverted-text">
                {lead.brand}
                <span className="text-inverted-muted"> · </span>
                <em className="italic text-accent">{lead.model}</em>
              </div>
              {lead.note ? (
                <p className="mt-3 max-w-[42ch] text-[17px] leading-[1.65] text-inverted-muted">
                  {lead.note}
                </p>
              ) : null}
            </FadeUp>

            {/* Supporting */}
            <div className="flex flex-col justify-center gap-12">
              {rest.map((f, i) => (
                <FadeUp
                  key={`${f.brand}-${f.model}`}
                  delay={0.1 + 0.05 * i}
                  y={20}
                >
                  <StripedPlaceholder
                    aspect="3/2"
                    angle={45}
                    tone="dark"
                    caption={`[ ${f.brand.toUpperCase()} ]`}
                    image={f.image}
                    imageAlt={`${f.brand} ${f.model}`}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="mt-4 font-display text-[22px] leading-tight text-inverted-text">
                    {f.brand}
                    <span className="text-inverted-muted"> · </span>
                    <em className="italic text-accent">{f.model}</em>
                  </div>
                  {f.note ? (
                    <p className="mt-2 max-w-[40ch] text-[15px] leading-[1.6] text-inverted-muted">
                      {f.note}
                    </p>
                  ) : null}
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended brands — paper */}
      {recBrands.length > 0 ? (
        <section className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
              <Eyebrow>Recommended brands</Eyebrow>
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-muted">
                Carried at Senoia Eyecare
              </span>
            </div>

            <div className="mt-5 max-w-[680px]">
              <h2 className="font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "The" },
                    {
                      text: "shortlist.",
                      italic: true,
                      className: "text-accent",
                    },
                  ]}
                  className="block"
                />
              </h2>
              {activity.recommendedBrandsIntro ? (
                <FadeUp delay={0.1} y={16}>
                  <p className="mt-6 text-[17px] leading-[1.7] text-muted">
                    {activity.recommendedBrandsIntro}
                  </p>
                </FadeUp>
              ) : null}
            </div>

            <FadeUp y={20}>
              <div className="mt-12 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
                {recBrands.map((b) => {
                  const backdrop = backdropFor(b.name);
                  return (
                    <div
                      key={b.name}
                      className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden px-6 py-12 text-center md:min-h-[340px]"
                    >
                      {backdrop ? (
                        <Image
                          src={backdrop}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="scale-125 object-cover blur-2xl"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-ink" />
                      )}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/65 to-ink/70"
                      />
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="font-display font-medium text-paper text-[clamp(2rem,4vw,3rem)] leading-[1]">
                          {b.name}
                        </div>
                        <p className="mt-3 max-w-[26ch] font-display text-[16px] italic leading-snug text-inverted-muted">
                          {b.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          </div>
        </section>
      ) : null}

      {/* Booking CTA — ink */}
      <section
        data-nav-mode="on-dark"
        className="bg-ink px-6 py-24 text-inverted-text md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow tone="inverted-muted">When you&rsquo;re ready.</Eyebrow>
              <h2 className="mt-6 font-display font-medium text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] text-inverted-text">
                <WordReveal
                  as="span"
                  segments={[
                    { text: "Book your" },
                    {
                      text: "fitting.",
                      italic: true,
                      className: "text-accent",
                    },
                  ]}
                  className="block"
                />
              </h2>
              <p className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-inverted-muted">
                Every face is different. We&rsquo;ll find the right curve,
                length, and tension in the chair &mdash; and walk through lens
                options for how you actually use them.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button
                href={site.bookingUrl}
                external
                variant="filled-accent"
                size="lg"
                arrow
              >
                Book an exam
              </Button>
            </div>
          </div>
          <div className="mt-16 border-t border-inverted-rule pt-8">
            <Link
              href="/made-for"
              className="font-mono text-[11px] uppercase tracking-eyebrow text-inverted-muted transition-colors duration-200 ease-expo hover:text-accent"
            >
              ← All activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
