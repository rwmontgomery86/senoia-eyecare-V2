import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
            fontSize: 340,
            lineHeight: 1,
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          §
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            width: 80,
            height: 6,
            background: "#a8893f",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
