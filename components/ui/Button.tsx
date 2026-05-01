import Link from "next/link";
import { ReactNode } from "react";

type Variant =
  | "filled-accent"
  | "filled-ink"
  | "outlined-light"
  | "outlined-dark";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
};

type ButtonProps =
  | (CommonProps & { href: string; external?: boolean; onClick?: never })
  | (CommonProps & { href?: undefined; onClick?: () => void });

const variantClasses: Record<Variant, string> = {
  "filled-accent":
    "bg-accent text-ink hover:bg-accent-deep border border-accent hover:border-accent-deep",
  "filled-ink":
    "bg-ink text-paper hover:bg-[#1f1b18] border border-ink hover:border-[#1f1b18]",
  "outlined-light":
    "border border-inverted-text text-inverted-text hover:bg-inverted-text hover:text-ink",
  "outlined-dark":
    "border border-ink text-ink hover:bg-ink hover:text-paper",
};

const sizeClasses: Record<Size, string> = {
  md: "px-8 py-[18px] text-[12px]",
  lg: "px-9 py-5 text-[12px]",
};

export default function Button({
  children,
  variant = "filled-ink",
  size = "md",
  className = "",
  arrow = false,
  ...rest
}: ButtonProps) {
  const cls = `group inline-flex items-center gap-3 font-mono uppercase tracking-eyebrow no-underline transition-colors duration-200 ease-expo ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const inner = (
    <>
      {children}
      {arrow ? (
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 ease-expo group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    if (rest.external || /^(https?:|tel:|mailto:)/.test(rest.href)) {
      return (
        <a
          href={rest.href}
          target={rest.external ? "_blank" : undefined}
          rel={rest.external ? "noopener" : undefined}
          className={cls}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={rest.href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={rest.onClick} className={cls}>
      {inner}
    </button>
  );
}
