import Link from "next/link";
import { variants } from "@/components/sections/contacts-hero-variants";

export const metadata = { title: "Contacts hero — Mobile variants" };

const PHONE_WIDTH = 390;
const PHONE_HEIGHT = 720;

export default function ContactsHeroVariantsIndex() {
  return (
    <div className="bg-paper px-6 pb-24 pt-40 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-eyebrow text-accent">
              Sandbox · Contacts — Mobile hero
            </span>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-[1]">
              Mobile hero — <em className="text-accent">three directions.</em>
            </h1>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.55] text-muted">
              Each preview is rendered at a real{" "}
              <span className="font-mono text-[13px]">{PHONE_WIDTH}px</span>{" "}
              mobile width. Desktop layout is unchanged and not shown here.
              Click any preview to open it full-screen with prev / next nav.
            </p>
          </div>
          <Link
            href="/contacts"
            className="font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo hover:text-accent"
          >
            ← Back to /contacts
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {variants.map((v) => {
            const Comp = v.Component;
            return (
              <Link
                key={v.id}
                href={`/contacts-hero-variants/${v.id}`}
                className="group block"
              >
                <div className="mx-auto w-full max-w-[420px]">
                  <div
                    className="relative w-full overflow-hidden border border-rule bg-ink"
                    style={{ height: `${PHONE_HEIGHT}px` }}
                  >
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${PHONE_WIDTH}px`, maxWidth: "100%" }}
                    >
                      <Comp />
                    </div>

                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 ease-expo group-hover:bg-ink/[0.06]"
                    />
                  </div>

                  <div className="mt-5 border-t border-rule pt-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-accent">
                        № 0{v.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
                        {v.tagline}
                      </span>
                    </div>
                    <div className="mt-2 font-display text-[1.5rem] font-medium leading-[1.15]">
                      {v.title}
                    </div>
                    <p className="mt-2 text-[14px] leading-[1.5] text-muted">
                      {v.description}
                    </p>
                    <span className="mt-4 inline-block font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors duration-200 ease-expo group-hover:text-accent">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
