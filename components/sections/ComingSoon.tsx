import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section data-nav-mode="on-light" className="bg-paper px-6 py-32 md:px-10 md:py-40 lg:px-16">
      <div className="mx-auto max-w-[640px] text-center">
        <Eyebrow>{title}</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
          Coming <em className="text-accent">soon.</em>
        </h1>
        <p className="mt-6 text-[16px] leading-[1.6] text-muted">
          We&apos;re building this page out. In the meantime, you can{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            book an exam
          </a>{" "}
          or{" "}
          <a
            href={`tel:${site.phone.tel}`}
            className="text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            call us at {site.phone.display}
          </a>
          .
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button href="/" variant="outlined-dark">
            ← Back home
          </Button>
          <Button
            href={site.bookingUrl}
            external
            variant="filled-ink"
            arrow
          >
            Book an Exam
          </Button>
        </div>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-eyebrow text-muted">
          <Link href="/" className="hover:text-accent">Senoia Eyecare</Link>
        </p>
      </div>
    </section>
  );
}
