import Eyebrow from "@/components/ui/Eyebrow";
import WordReveal from "@/components/ui/WordReveal";
import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { images } from "@/data/images";
import { site } from "@/data/site";

const tools = [
  {
    eyebrow: "Optomap",
    name: "Wide-field retinal imaging",
    body:
      "A high-resolution photo of your retina captures up to 200° of the back of the eye — often without dilation, so your day isn't blurry afterward.",
  },
  {
    eyebrow: "OCT",
    name: "Optical coherence tomography",
    body:
      "Cross-sectional scans reveal the layers of the retina and optic nerve, helping us catch glaucoma and macular changes long before they affect vision.",
  },
  {
    eyebrow: "Phoropter",
    name: "Modern refraction",
    body:
      "Precise, computer-assisted measurement of your prescription — the difference between a number that's close and a number that's right.",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="bg-paper px-6 py-24 md:px-10 md:py-28 lg:px-16 lg:py-32"
    >
      <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Technology</Eyebrow>
          <h2 className="mt-5 font-display font-medium text-[clamp(2.25rem,4.5vw,3rem)] leading-[1.05]">
            <WordReveal
              as="span"
              segments={[
                { text: "Modern tools," },
                { text: "old-fashioned", italic: true, className: "text-accent" },
                { text: " care." },
              ]}
              className="block"
            />
          </h2>
          <FadeUp delay={0.15}>
            <p className="mt-6 max-w-[480px] text-[16px] leading-[1.6] text-muted">
              We invest in the diagnostic equipment that helps us see more — and
              keep the conversation slow enough that you actually understand
              what we&apos;re looking at.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.2} y={20}>
          <StripedPlaceholder
            aspect="4/3"
            angle={75}
            caption="[ EQUIPMENT DETAIL — 4:3 ]"
            bottomLeft="eye-exams-technology.jpg"
            bottomRight="Plate №03"
            image={images.eyeExamsTechnology}
            imageAlt={`Diagnostic equipment at ${site.name}`}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </FadeUp>
      </div>

      <FadeUp y={20}>
        <div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-3">
          {tools.map((t) => (
            <div
              key={t.eyebrow}
              className="flex flex-col bg-paper px-7 py-10 md:px-8 md:py-12"
            >
              <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
                {t.eyebrow}
              </span>
              <h3 className="mt-4 font-display text-[clamp(1.5rem,2.2vw,1.875rem)] italic leading-tight">
                {t.name}
              </h3>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-muted">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
