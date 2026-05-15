import Image from "next/image";
import { ReactNode } from "react";

type Tone = "light" | "dark";

export default function StripedPlaceholder({
  aspect = "4/5",
  angle = 135,
  tone = "light",
  className = "",
  children,
  caption,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  image,
  imageAlt = "",
  priority = false,
  sizes,
  zoomOnHover = false,
  objectPosition,
}: {
  aspect?: string;
  angle?: number;
  tone?: Tone;
  className?: string;
  children?: ReactNode;
  caption?: string;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  bottomLeft?: ReactNode;
  bottomRight?: ReactNode;
  /**
   * Optional image src (relative to /public). When set, an <Image fill> is rendered
   * over the striped placeholder. If null/missing, the stripes show as a fallback.
   */
  image?: string | null;
  imageAlt?: string;
  priority?: boolean;
  sizes?: string;
  /**
   * When true, the image scales up subtly on hover of the nearest `group` ancestor.
   */
  zoomOnHover?: boolean;
  /**
   * CSS object-position for the image (e.g. "70% center"). Defaults to center.
   */
  objectPosition?: string;
}) {
  const stripeA = tone === "light" ? "#f6f1e8" : "#3a332e";
  const stripeB = tone === "light" ? "#e6dec9" : "#4a423d";
  const captionColor = tone === "light" ? "#7a6f63" : "#cabea7";

  return (
    <div
      className={`relative w-full max-w-full overflow-hidden ${className}`}
      style={{
        aspectRatio: aspect,
        background: `repeating-linear-gradient(${angle}deg, ${stripeA} 0 14px, ${stripeB} 14px 15px)`,
      }}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          style={objectPosition ? { objectPosition } : undefined}
          className={`object-cover ${objectPosition ? "" : "object-center"} transition-transform duration-[1200ms] ease-expo ${zoomOnHover ? "group-hover:scale-[1.04]" : ""}`}
        />
      ) : null}

      {caption && !children && !image ? (
        <div
          className="absolute inset-0 flex items-center justify-center font-mono text-[11px] uppercase"
          style={{ letterSpacing: "0.2em", color: captionColor }}
        >
          {caption}
        </div>
      ) : null}

      {children}

      {topLeft || topRight ? (
        <div
          className="absolute left-6 right-6 top-6 flex items-start justify-between font-mono text-[10px] uppercase"
          style={{ letterSpacing: "0.18em", color: captionColor }}
        >
          <span>{topLeft}</span>
          <span>{topRight}</span>
        </div>
      ) : null}

      {bottomLeft || bottomRight ? (
        <div
          className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase"
          style={{ letterSpacing: "0.18em", color: captionColor }}
        >
          <span>{bottomLeft}</span>
          <span>{bottomRight}</span>
        </div>
      ) : null}
    </div>
  );
}
