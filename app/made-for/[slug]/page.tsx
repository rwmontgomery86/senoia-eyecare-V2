import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import Button from "@/components/ui/Button";
import { activities } from "@/data/activities";
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

  return (
    <>
      {/* Hero — ink */}
      <section
        data-nav-mode="on-dark"
        className="bg-ink px-6 pb-20 pt-40 text-inverted-text md:px-10 md:pb-24 md:pt-48 lg:px-16 lg:pb-28 lg:pt-56"
      >
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow tone="inverted-muted">Made For · No. 01</Eyebrow>
          <h1 className="mt-6 font-display font-medium text-[clamp(3rem,8vw,6rem)] leading-[1] text-inverted-text">
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
          <FadeUp delay={0.2}>
            <p className="mt-10 max-w-[640px] text-[17px] leading-[1.65] text-inverted-muted md:text-[18px]">
              {activity.intro}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Full-width hero photo strip */}
      <section
        data-nav-mode="on-dark"
        className="bg-ink"
      >
        <FadeUp y={20}>
          <StripedPlaceholder
            aspect="21/9"
            angle={45}
            tone="dark"
            caption={`[ ${activity.title.toUpperCase()} — 21:9 ]`}
            image={activity.heroImage}
            imageAlt={`${activity.title}`}
            sizes="100vw"
          />
        </FadeUp>
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

      {/* Frame edit — cream */}
      <section className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1280px]">
          <Eyebrow>Frames for {activity.title.toLowerCase()}.</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2rem,4vw,2.75rem)] leading-[1.1]">
            <WordReveal as="span" text="The edit." className="block" />
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Lead frame — larger */}
            <FadeUp y={20}>
              <StripedPlaceholder
                aspect="4/3"
                angle={45}
                tone="light"
                caption="[ LEAD FRAME ]"
                image={lead.image}
                imageAlt={`${lead.brand} ${lead.model}`}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="mt-4 font-display text-[22px] leading-tight">
                {lead.brand}
                <span className="text-muted"> · </span>
                <em className="italic text-accent">{lead.model}</em>
              </div>
            </FadeUp>

            {/* The rest as a typographic list */}
            <FadeUp delay={0.1} y={20}>
              <div className="flex h-full flex-col justify-end">
                <Eyebrow>Also worth looking at</Eyebrow>
                <ul className="mt-6 border-t border-rule">
                  {rest.map((f) => (
                    <li
                      key={`${f.brand}-${f.model}`}
                      className="border-b border-rule py-6"
                    >
                      <div className="font-display text-[22px] leading-tight">
                        {f.brand}
                      </div>
                      <div className="font-display text-[18px] italic leading-tight text-muted">
                        {f.model}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

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
