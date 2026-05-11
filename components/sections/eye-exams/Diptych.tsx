import FadeUp from "@/components/ui/FadeUp";
import StripedPlaceholder from "@/components/ui/StripedPlaceholder";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function Diptych() {
  return (
    <section className="bg-paper px-6 pb-8 pt-4 md:px-10 lg:px-16">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        <FadeUp y={20}>
          <StripedPlaceholder
            aspect="16/10"
            angle={45}
            caption="[ THE EXAM ROOM — 16:10 ]"
            bottomLeft={images.eyeExamsExamRoom ? undefined : "eye-exams/visit-exam-room.jpg"}
            bottomRight="Plate №01"
            image={images.eyeExamsExamRoom}
            imageAlt={`Exam room at ${site.name}`}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
            Plate №01 · The exam room
          </div>
        </FadeUp>
        <FadeUp delay={0.08} y={20}>
          <StripedPlaceholder
            aspect="16/10"
            angle={120}
            caption="[ PRETEST — 16:10 ]"
            bottomLeft={images.eyeExamsPretest ? undefined : "eye-exams/pre-testing.jpg"}
            bottomRight="Plate №02"
            image={images.eyeExamsPretest}
            imageAlt={`Pretest area at ${site.name}`}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="mt-3 font-mono text-[10px] uppercase tracking-wide2 text-muted">
            Plate №02 · Pretest &amp; imaging
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
