import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for has moved or doesn't exist. Head back home or book an exam.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-paper px-6 py-32 md:px-10 md:py-40 lg:px-16">
      <div className="mx-auto max-w-[640px] text-center">
        <Eyebrow>404 — Not Found</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
          We can&apos;t find <em className="text-accent">that page.</em>
        </h1>
        <p className="mt-6 text-[16px] leading-[1.6] text-muted">
          The link may be old or mistyped. From here you can head back to the
          homepage, or{" "}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            book an exam
          </a>{" "}
          directly.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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
          <Link href="/" className="hover:text-accent">
            Senoia Eyecare
          </Link>
          {" · "}
          <a
            href={`tel:${site.phone.tel}`}
            className="hover:text-accent"
          >
            {site.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
