import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import GoldRule from "@/components/ui/GoldRule";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { doctors } from "@/data/doctors";
import { staff } from "@/data/staff";

export default function VariantFeature() {
  return (
    <div className="bg-paper">
      {/* Page intro */}
      <section id="top" className="px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-24 lg:px-16 lg:pt-44 lg:pb-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-2">
            <Eyebrow>Our Team</Eyebrow>
          </div>
          <div className="md:col-span-7">
            <h1 className="font-display font-medium leading-[0.98] text-[clamp(3rem,7vw,5.5rem)]">
              <WordReveal
                as="span"
                inView={false}
                segments={[{ text: "The people" }]}
                className="block"
              />
              <WordReveal
                as="span"
                inView={false}
                delay={0.35}
                segments={[
                  { text: "behind the" },
                  { text: "practice.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h1>
          </div>
          <FadeUp className="md:col-span-3 md:pt-4" delay={0.2}>
            <p className="text-[15px] leading-[1.65] text-muted">
              Two optometrists, one office manager, and a small team behind the
              counter. The practice is small on purpose — so the person who
              checks you in is the same person who'll remember your kid's name
              next year.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Doctor features — alternating spread */}
      <section id="doctors" className="border-t border-rule">
        {doctors.map((doc, i) => {
          const photoRight = i % 2 === 1;
          return (
            <article
              key={doc.slug}
              id={`dr-${doc.slug}`}
              className="border-b border-rule px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
            >
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
                {/* Portrait */}
                <FadeUp
                  className={`md:col-span-6 ${photoRight ? "md:order-2" : ""}`}
                  delay={0.05}
                  y={28}
                >
                  <StripedPlaceholder
                    aspect="4/5"
                    angle={photoRight ? 120 : 45}
                    image={doc.photo}
                    imageAlt={`Portrait of Dr. ${doc.name}`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    bottomLeft={`Plate № 0${i + 1}`}
                    bottomRight={doc.credentials}
                  />
                </FadeUp>

                {/* Copy */}
                <div
                  className={`flex flex-col justify-center md:col-span-6 ${photoRight ? "md:order-1" : ""}`}
                >
                  <FadeUp delay={0.1}>
                    <div className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                      № 0{i + 1} · {doc.role}
                    </div>
                  </FadeUp>

                  <h2 className="mt-5 font-display font-medium leading-[0.98] text-[clamp(2.5rem,5.5vw,4.25rem)]">
                    <WordReveal
                      as="span"
                      segments={[
                        { text: "Dr." },
                        { text: doc.name.split(" ")[0] },
                      ]}
                      className="block"
                    />
                    <WordReveal
                      as="span"
                      delay={0.25}
                      segments={[
                        {
                          text: doc.name.split(" ").slice(1).join(" "),
                          italic: true,
                          className: "text-accent",
                        },
                      ]}
                      className="block"
                    />
                  </h2>

                  <FadeUp delay={0.2} className="mt-6">
                    <GoldRule width="6rem" />
                  </FadeUp>

                  {/* Pull quote */}
                  <FadeUp delay={0.25} className="mt-8">
                    <blockquote className="border-l border-accent/60 pl-6 font-display text-[clamp(1.5rem,2.4vw,1.9rem)] italic leading-[1.3] text-ink">
                      &ldquo;{doc.oneLiner}&rdquo;
                    </blockquote>
                  </FadeUp>

                  <FadeUp delay={0.3} className="mt-8 space-y-5">
                    {doc.bio.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="max-w-[560px] text-[16px] leading-[1.7] text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </FadeUp>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Staff module — "Behind the counter" */}
      <section id="staff" className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <Eyebrow>Behind the Counter</Eyebrow>
            <h2 className="mt-5 font-display font-medium leading-[1] text-[clamp(2rem,3.5vw,2.75rem)]">
              <WordReveal
                as="span"
                segments={[
                  { text: "The team" },
                  { text: "you'll meet first.", italic: true, className: "text-accent" },
                ]}
                className="block"
              />
            </h2>
            <FadeUp delay={0.15} className="mt-6">
              <p className="max-w-[420px] text-[15px] leading-[1.65] text-muted">
                Front desk, optical, office. Three people who keep the schedule
                moving.
              </p>
            </FadeUp>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-rule">
              {staff.map((member, i) => (
                <FadeUp key={member.slug} delay={i * 0.08}>
                  <div className="grid grid-cols-1 gap-6 border-b border-rule py-8 md:grid-cols-12 md:gap-8 md:py-10">
                    <div className="md:col-span-3">
                      <StripedPlaceholder
                        aspect="1/1"
                        angle={75}
                        caption={`[ ${member.name.toUpperCase()} ]`}
                        image={member.photo}
                        imageAlt={`Portrait of ${member.name}`}
                        sizes="(min-width: 768px) 25vw, 50vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center md:col-span-9">
                      <div className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                        {member.role}
                      </div>
                      <h3 className="mt-2 font-display font-medium text-[clamp(1.5rem,2.2vw,1.875rem)] leading-[1.1]">
                        {member.name}
                      </h3>
                      <p className="mt-3 max-w-[520px] text-[15px] leading-[1.65] text-muted">
                        {member.oneLiner}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
