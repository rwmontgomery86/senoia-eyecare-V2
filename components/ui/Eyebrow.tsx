import { ReactNode } from "react";

export default function Eyebrow({
  children,
  symbol = "§",
  className = "",
  tone = "accent",
}: {
  children: ReactNode;
  symbol?: string | null;
  className?: string;
  tone?: "accent" | "muted" | "inverted-muted";
}) {
  const color =
    tone === "accent"
      ? "text-accent"
      : tone === "muted"
        ? "text-muted"
        : "text-inverted-muted";
  return (
    <span
      className={`inline-block font-mono text-[11px] uppercase tracking-eyebrow ${color} ${className}`}
    >
      {symbol ? <span aria-hidden>{symbol}&nbsp;&nbsp;</span> : null}
      {children}
    </span>
  );
}
