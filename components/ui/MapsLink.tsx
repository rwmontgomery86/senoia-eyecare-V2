"use client";

import { useMemo } from "react";

type Props = {
  address: string;
  className?: string;
  children: React.ReactNode;
};

export default function MapsLink({ address, className, children }: Props) {
  const encoded = encodeURIComponent(address);
  const fallbackHref = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

  const href = useMemo(() => {
    if (typeof navigator === "undefined") return fallbackHref;
    const ua = navigator.userAgent || "";
    const isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return isIOS ? `https://maps.apple.com/?q=${encoded}` : fallbackHref;
  }, [encoded, fallbackHref]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
