"use client";

import { useEffect } from "react";
import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section data-nav-mode="on-light" className="bg-paper px-6 py-32 md:px-10 md:py-40 lg:px-16">
      <div className="mx-auto max-w-[640px] text-center">
        <Eyebrow>Something went wrong</Eyebrow>
        <h1 className="mt-6 font-display font-medium text-[clamp(3rem,6vw,4.5rem)] leading-[1]">
          A moment of <em className="text-accent">turbulence.</em>
        </h1>
        <p className="mt-6 text-[16px] leading-[1.6] text-muted">
          The page hit an error. Try again, head back home, or reach us by
          phone at{" "}
          <a
            href={`tel:${site.phone.tel}`}
            className="text-ink underline-offset-4 hover:text-accent hover:underline"
          >
            {site.phone.display}
          </a>
          .
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button onClick={reset} variant="outlined-dark">
            Try again
          </Button>
          <Button href="/" variant="filled-ink" arrow>
            Back home
          </Button>
        </div>
        {error.digest ? (
          <p className="mt-12 font-mono text-[10px] uppercase tracking-eyebrow text-muted">
            Ref: {error.digest}
          </p>
        ) : null}
        <p className="mt-6 font-mono text-[10px] uppercase tracking-eyebrow text-muted">
          <Link href="/" className="hover:text-accent">
            Senoia Eyecare
          </Link>
        </p>
      </div>
    </section>
  );
}
