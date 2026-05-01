import { ReactNode } from "react";

export default function EyebrowLabel({
  children,
  className = "",
  tone = "accent",
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "inverted" | "ink";
}) {
  const color =
    tone === "accent"
      ? "text-accent"
      : tone === "inverted"
        ? "text-inverted-muted"
        : "text-ink/70";
  return (
    <span
      className={`inline-block font-mono text-[11px] uppercase tracking-eyebrow ${color} ${className}`}
    >
      {children}
    </span>
  );
}
