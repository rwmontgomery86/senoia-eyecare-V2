export default function Loading() {
  return (
    <section
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center bg-paper px-6 py-32"
    >
      <div className="flex flex-col items-center gap-6">
        <span
          aria-hidden
          className="font-display text-[2rem] leading-none text-accent"
        >
          §
        </span>
        <span className="font-mono text-[10px] uppercase tracking-eyebrow text-muted">
          Loading
        </span>
      </div>
    </section>
  );
}
