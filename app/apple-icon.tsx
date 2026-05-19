import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2c2724",
          color: "#a8893f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 78,
            lineHeight: 1,
            fontWeight: 500,
            letterSpacing: -1,
          }}
        >
          SEC
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            width: 34,
            height: 2,
            background: "#a8893f",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
