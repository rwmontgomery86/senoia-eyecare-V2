import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How often should I have an eye exam?",
    answer:
      "For most adults, once a year — even if your vision feels fine. Annual exams catch quiet changes in eye health (glaucoma, diabetic changes, dry eye) long before they affect how you see, and keep your prescription current.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Your insurance card, a photo ID, your current glasses or contact lenses, and a list of any medications you take. New patient paperwork is emailed ahead so check-in is quick.",
  },
  {
    question: "At what age should kids start having eye exams?",
    answer:
      "Earlier than most parents expect. As an InfantSEE provider, we offer no-cost vision assessments for babies between 6 and 12 months. After that, we recommend an exam before kindergarten and yearly through the school years.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-nav-mode="on-light"
      className="bg-cream px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <Eyebrow>Common questions</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "Good to" },
                { text: "know.", italic: true, className: "text-accent" },
              ]}
              className="block"
            />
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => (
            <FadeUp key={f.question} delay={0.05 * i} y={20}>
              <div className="grid grid-cols-[40px_1fr] gap-x-6 gap-y-3 border-t border-rule py-8 md:grid-cols-[60px_1fr] md:gap-x-8">
                <span className="font-mono text-[12px] tracking-wide2 text-accent">
                  Q&nbsp;{String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[clamp(1.375rem,2.2vw,1.625rem)] font-medium leading-snug">
                    {f.question}
                  </h3>
                  <p className="mt-3 max-w-[620px] text-[15px] leading-[1.65] text-muted">
                    {f.answer}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
          <div className="border-t border-rule" />
        </div>
      </div>
    </section>
  );
}
