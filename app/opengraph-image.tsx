import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "edge";
export const alt = "Senoia Eyecare — Considered Eyewear. Comprehensive Care.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#2c2724";
const PAPER = "#fbf8f2";
const ACCENT = "#a8893f";
const MUTED = "#cabea7";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: INK,
          color: PAPER,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: "0.22em",
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: ACCENT, fontSize: 28 }}>§</span>
          <span>Senoia, Georgia</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              maxWidth: 1000,
            }}
          >
            Senoia Eyecare
          </div>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 2,
              background: ACCENT,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 36,
              lineHeight: 1.3,
              color: MUTED,
              maxWidth: 900,
            }}
          >
            Considered eyewear. Comprehensive care.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span>Boutique Optometry</span>
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
